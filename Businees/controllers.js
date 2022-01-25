const mongoose = require ("mongoose")
const jwt_decode = require("jwt-decode")
const User = require ('../modelUser')
const options = {
    page:1,
    limit:10,
    page: 1, // cambiar página
}
const validarJWT =  async (req, res, next) => {
        const {authorization,emailcheck} = req.body;
        let decoded = {};
        if (authorization) {
            decoded = await jwt_decode(authorization);
        }
        if (decoded.email === emailcheck && emailcheck !== undefined) {
            req.user = decoded;
            next();
        } else {
            return res
            .status(401)
            .send({message:"Usuario no autorizado"});
        }  
};
const findAllUsers = async (req,res) => {
    const {email} = req.body
    if(email){
        User.paginate({email:{'$regex': email, $options: 'i'}},options,(err,users) => {
            if(users.docs.length > 0){
                return res
                .status(200)
                .json(users)
            }else{
                res
                .status(500)
                .send({message:"Usuario no encontrado"})
            }})
    } else{
        User.paginate({},options,(err,users) => {
            err && res
            .status(500)
            .send(err.message)
    
            res
            .status(200)
            .json(users)
        })
    }
    
}

module.exports = {findAllUsers,validarJWT}