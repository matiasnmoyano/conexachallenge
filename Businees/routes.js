const {validarJWT,findAllUsers} = require ("./controllers")
const express = require ("express")


const router = express.Router()

router.post("/users", validarJWT, findAllUsers)

module.exports = router