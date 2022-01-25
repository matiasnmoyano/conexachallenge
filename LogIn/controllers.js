const mongoose = require ("mongoose")
const User = require ('../modelUser')
const jwt = require("jsonwebtoken")
const Axios = require ('axios')
require ('dotenv').config()

function generateAccessToken (user) {
    return jwt.sign(user,"shh", {expiresIn: '10m'})
}
const addUser = async (req,res) => {
    const {email,password} = req.body
    const check = await User.findOne({email:email})
    if(!check){
        let user = new User({
            email,
            password
        })
        user.save((err,user) => {
            err && res
            .status(500)
            .send(err.message)
            res
            .status(200)
            .send({message:"Usuario cargado con éxito"})
        })
    }else{
        res
        .status(400)
        .send({message:"El email ya está en uso"})
    }
}

const logIn = async (req,res) => {
    const {email,password} = req.body
    const user = {
        email,
        password
    }
    const result = await User.findOne(user)
    if(result){
        const accesToken = generateAccessToken(user)
        res
        .status(200)
        .header('authorization', accesToken)
        .header('email', email)
        .json({message:"Usuario autenticado",accesToken})
    }
    else{
        res
        .status(400)
        .send({message:"Usuario no encontrado"})
    }
}

const listUsers =  (req,res) => {
        const {authorization,emailcheck} = req.headers
        const {email} = req.body
        if(!authorization || !emailcheck){
            return res.status(401).send("faltan datos")
        }
        else{
            const data = {authorization,email,emailcheck}
            Axios.post("http://localhost:4000/businees/users",data)
            .then((result) => {
                    if(result.status === 200){
                        res
                        .status(200)
                        .send(result.data)
                    }
            })
            .catch(() => {
                res
                .status(401)
                .send({message:"Usuario no autorizado"})
            } )
        }
        
}

const deleteUser = (req,res) => {
    const {email,password} = req.body
    User.findOneAndDelete({email,password},(err,user) => {
        err && res
            .status(500)
            .send(err.message)
        if(user){
            res
            .status(200)
            .send({message:"Usuario eliminado con éxito",user})
        }else{
            res
            .status(400)
            .send({message:"Usuario no encontrado"})
        }

    })
}

module.exports = {addUser,logIn,listUsers,deleteUser}