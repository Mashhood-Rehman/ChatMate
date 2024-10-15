const userModel = require("../Model/user")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const validator = require("validator")


//signup
const createUser = async (req ,res) => {
    const { email, password, firstname, lastname } = req.body;
const hashpassword = bcrypt.hash(password ,12)

try {
           
        const exists =  await userModel.findOne({email})
        if(exists) {
            return res.json({success:false , message : "User already exists"})
        }
        if(!validator.isEmail(email)) {
            return res.json({success:false , message : "Enter valid email"})
        }
        const userRegister = new userModel({
            firstname,
            lastname,
            email,
            password: hashpassword,
        });
        userRegister.save()
        res.json({success:true })
        res.status(201).json({
          success: true,
          message: "Account created successfully!",
          userRegister,
        });


} catch (error) {
    res.status(500).json({ success: false, error: error.message });
} 

}



module.exports= {createUser }