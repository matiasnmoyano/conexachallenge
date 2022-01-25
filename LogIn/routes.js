const {logIn,addUser,listUsers,deleteUser} = require ("./controllers")
const express = require ("express")


const router = express.Router()

router.post("/chek", logIn)

router.post("/addUser", addUser)

router.post("/listUsers",listUsers)

router.delete("/deleteUser",deleteUser)

module.exports = router