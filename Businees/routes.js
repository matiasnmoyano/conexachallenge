const BusinessController = require ("./controllers")
const express = require ("express")


const router = express.Router()

router.post("/users", BusinessController.validarJWT, BusinessController.findAllUsers)

module.exports = router