
        //env configured
    require("dotenv").config()
    const express = require('express')
    const app = express()
    const path = require("path");

    //port
    const port = process.env.PORT


    //cors and epress
    const cors = require("cors")
    app.use(cors())
    app.use(express.json())


    //importing modules
    const DB = require("./db/db")
    DB()



    //routes
    const userroutes = require("./router/userRoute")
    app.use("/" , userroutes)
    app.use("/uploads", express.static(path.join(__dirname, "uploads")));

    //port checked
    app.listen(port, ()=> {
        console.log("the process is running on port" , port)
    })