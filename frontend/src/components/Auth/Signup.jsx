import { useState } from "react";
import { Icon } from '@iconify/react';
import axios from 'axios';
import { toast } from 'react-toastify';
const Signup = ({ toggleForm }) => {

 //useStates
  const [showPassword, setShowPassword] = useState(false); 
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
    const [user, setUser] = useState({
      firstname :"",
      lastname:"",
      email : "",
      password : "",
      
    })


// Show Password
const togglePasswordVisibility = () => {
  setShowPassword(!showPassword)
}

const handleFileChange = (e) => {
  const file = e.target.files[0]
  if(file) {
    setImage(file)
    setImagePreview(URL.createObjectURL(file)); 
  }
}


//axios
const handleSubmit = async (e) => {
e.preventDefault()
const formData = new FormData();
// Append user details to formData
formData.append('firstname', user.firstname);
formData.append('lastname', user.lastname);
formData.append('email', user.email);
formData.append('password', user.password);
if (image) {
  formData.append('image', image); // Append the image file
}
try {
    const response = await axios.post('http://localhost:5000/createUser' , formData , {
      headers : {
        "Content-Type" : "multipart/form-data"
      }
    })
  if(response.data.success) {
    toast.success("Account Created Successfully")
  }
  } catch (error) {
    console.error(error);
      toast.error("Error occurred", error.message);
}


}

//handle change function
const handleChange = (e) => {
  const {name , value} = e.target;
  setUser({...user , [name]:value}) 
}







  return (
    <form onSubmit={handleSubmit} className="max-w-lg w-full mx-auto bg-white shadow p-4 rounded-xl">
    <div className="mb-12">
      <h3 className="text-gray-800 text-4xl font-extrabold">Sign up</h3>
      <p className="text-gray-800 text-sm mt-4">
        Already have an account?{" "}
        <span className="text-blue-600 font-semibold hover:underline ml-1 cursor-pointer" onClick={toggleForm}>
          Sign in here
        </span>
      </p>
    </div>

    <div>
      <label className="text-gray-800 text-xs block mb-2">Profile Image</label>
      <input
        name="image"
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        required
        className="w-full text-sm border-b border-gray-300 text-black focus:border-gray-800 px-2 py-3 outline-none"
      />
      {imagePreview && (
        <img src={imagePreview} alt="Image Preview" className="mt-2 h-32 w-32 object-cover" />
      )}
    </div>

    <div>
      <label className="text-gray-800 text-xs block mb-2">First Name</label>
      <input
        name="firstname"
        type="text"
        value={user.firstname}
        onChange={handleChange}
        required
        className="w-full text-sm border-b border-gray-300 text-black focus:border-gray-800 px-2 py-3 outline-none"
        placeholder="Your First Name.."
      />
    </div>

    <div>
      <label className="text-gray-800 text-xs block mb-2">Last Name</label>
      <input
        name="lastname"
        type="text"
        value={user.lastname}
        onChange={handleChange}
        required
        className="w-full text-sm border-b border-gray-300 text-black focus:border-gray-800 px-2 py-3 outline-none"
        placeholder="Your Last Name.."
      />
    </div>

    <div className="mt-2">
      <label className="text-gray-800 text-xs block mb-2">Email</label>
      <div className="flex items-center justify-center">
        <input
          name="email"
          type="email"
          required
          value={user.email}
          onChange={handleChange}
          className="w-full text-sm border-b text-black border-gray-300 focus:border-gray-800 px-2 py-3 outline-none"
          placeholder="Enter email"
        />
        <Icon icon="icon-park:email-down" />
      </div>
    </div>

    <div className="mt-8">
      <label className="text-gray-800 text-xs block mb-2">Password</label>
      <div className="relative flex items-center">
        <input
          name="password"
          type={showPassword ? "text" : "password"}
          required
          value={user.password}
          onChange={handleChange}
          className="w-full text-sm border-b text-black border-gray-300 focus:border-gray-800 px-2 py-3 outline-none"
          placeholder="Enter password"
        />
        <p onClick={togglePasswordVisibility} className="cursor-pointer absolute right-2">
          {showPassword ? (
            <Icon icon="system-uicons:eye-no" style={{ color: 'black' }} className="h-4 w-4 " />
          ) : (
            <Icon icon="ph:eye-thin" style={{ color: 'black' }} className="h-4 w-4" />
          )}
        </p>
      </div>
    </div>

    <div className="mt-12">
      <button
        type="submit"
        className="w-full py-3 px-6 text-sm font-semibold tracking-wider rounded-full text-white bg-gray-800 hover:bg-[#222] focus:outline-none"
      >
        Sign up
      </button>
    </div>
  </form>
  );
};

export default Signup;
