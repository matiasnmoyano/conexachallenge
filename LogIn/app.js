const express = require("express");
const bodyParser = require ("body-parser");
const mongoose = require ("mongoose")
const app = express()
const Users = require("./routes")

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use("/logIn", Users)

mongoose.connect('mongodb://localhost:27017/test')
.then(() => {
    app.listen(3000, () => {
        console.log("corriendo 3000")
})
})
.catch(err => console.log(err.message));