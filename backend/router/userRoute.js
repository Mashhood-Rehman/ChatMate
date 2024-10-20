const express = require("express")
const router = express.Router()
const {createUser , login , GetAllUsers} = require("../controller/userController")
const upload = require("../multer/MulterConfig")
router.post("/createUser" ,upload.single("image"), createUser)
router.post("/login" , login)
router.get("/GetAllUsers" , GetAllUsers)
module.exports = router