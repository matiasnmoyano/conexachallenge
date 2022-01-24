const express = require("express");
const bodyParser = require ("body-parser");
const mongoose = require ("mongoose")
const app = express()
const Users = require("./routes")

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use("/businees", Users)

mongoose.connect('mongodb://localhost:27017/test')
.then(() => {
    app.listen(4000, () => {
        console.log("corriendo 4000")
})
})
.catch(error => console.log(error));
   