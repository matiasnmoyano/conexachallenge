const {logIn,addUser,listUsers,deleteUser,validarJWT,isAdmin} = require ("./controllers")
const express = require ("express")


const router = express.Router()

router.post("/chek", logIn)

router.post("/addUser", addUser)

router.post("/listUsers",listUsers)

router.delete("/deleteUser",validarJWT,isAdmin,deleteUser)

module.exports = router