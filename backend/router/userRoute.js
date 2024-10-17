const express = require("express")
const router = express.Router()
const {createUser , login , GetAllUsers} = require("../controller/userController")
router.post("/createUser" , createUser)
router.post("/login" , login)
router.get("/GetAllUsers" , GetAllUsers)
module.exports = router