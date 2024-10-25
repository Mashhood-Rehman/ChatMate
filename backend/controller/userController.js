const userModel = require("../Model/user")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const validator = require("validator")


//signup
const createUser = async (req ,res) => {
    const { email, password, firstname, lastname , image } = req.body;
const hashpassword = await bcrypt.hash(password ,12)

try {
           
        const exists =  await userModel.findOne({email})
        if(exists) {
            return res.json({success:false , message : "User already exists"})
        }
        if(!validator.isEmail(email)) {
            return res.json({success:false , message : "Enter valid email"})
        }
        const imagePath = req.file ? `/uploads/${req.file.filename}` : null;
        const userRegister = new userModel({
            firstname,
            lastname,
            email,
            password: hashpassword,
            image:imagePath
        });
        userRegister.save()


            const token = jwt.sign({
                id:userRegister._id , email: userRegister.email
            },
        process.env.JWT_SECRET_KEY ,
    {expiresIn: "1h"})

        res.status(201).json({
          success: true,
          message: "Account created successfully!",
          user:userRegister,
          token:token

        });


}  catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }

  
}



//login 
const login = async (req,res) => {
    const {email , password} = req.body
        try {
           if(!email && !password) {
            return res.status(400).json({success:false , message: " All fields required"})
           }
           const user = await userModel.findOne({email})
           if(!user) {
            return res.status(400).json({success:false , message:"User not Found"})
           } 
           const ispasswordValid =  await bcrypt.compare(password , user.password) 
           if(!ispasswordValid) {
            return res.status(400).json({success:false , message : "Incorrect Password"})
           } 


           const token = jwt.sign(
            { id: user._id, email: user.email }, 
            process.env.JWT_SECRET_KEY, 
            { expiresIn: "1h" }
        );

        res.status(200).json({success:true , message: "Logged In successfully" , token:token ,   user: {
            firstname: user.firstname,
            lastname: user.lastname
        }},
            
        )

       
        } catch (error) {
            return res.status(400).json({success:false  , error: error.message})
        }
           }


           const GetAllUsers = async (req,res) => {
            try {
                    const AllUsers = await userModel.find()
                return    res.status(200).json({success:true , message: "All Users fetched successfully" , AllUsers})
            } catch (error) {
                    return res.status(400).json({success:false , error:error.message})
            }
           }
           

module.exports= {createUser , login , GetAllUsers }