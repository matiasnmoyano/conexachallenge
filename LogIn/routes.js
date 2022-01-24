const userController = require ("./controllers")
const express = require ("express")


const router = express.Router()

router.post("/chek", userController.logIn)

router.post("/addUser", userController.addUser)

router.post("/listUsers",userController.listUsers)

module.exports = router