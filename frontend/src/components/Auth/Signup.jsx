import { useState, useEffect } from "react";
import axios from 'axios';

const Signup = ({ toggleForm, handleLogin }) => {

  useEffect(() => {
    fetchData();  // Call fetchData when component loads
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/createUser");
      console.log(response.data); 
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const [showPassword, setShowPassword] = useState(false); 
  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(file);
      const reader = new FileReader();
      reader.onloadend = () => setImagePreview(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleImageUpload = async () => {
    if (!image) return;
    const formData = new FormData();
    formData.append('image', image);

    try {
      const response = await axios.post('http://localhost:5000/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      console.log('Image uploaded successfully:', response.data);
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  return (
    <form onSubmit={handleLogin} className="max-w-lg w-full mx-auto bg-white shadow p-4 rounded-xl">
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
        <input
          className="bg-[rgba(17,25,40,0.75)] text-black rounded-2xl"
          type="file"
          accept="image/*"
          onChange={handleImageChange}
        />
        {imagePreview && (
          <div>
            <h3 className="">Image Preview:</h3>
            <img src={imagePreview} alt="Selected" className="h-16 w-16 rounded-full object-contain" />
          </div>
        )}
      </div>

      <div>
        <label className="text-gray-800 text-xs block mb-2">Name</label>
        <input
          name="name"
          type="text"
          required
          className="w-full text-sm border-b border-gray-300 text-black focus:border-gray-800 px-2 py-3 outline-none"
          placeholder="Your Name.."
        />
      </div>

      <div className="mt-8 flex items-center justify-center">
        <label className="text-gray-800 text-xs block mb-2">Email</label>
        <input
          name="email"
          type="email"
          required
          className="w-full text-sm border-b text-black border-gray-300 focus:border-gray-800 px-2 py-3 outline-none"
          placeholder="Enter email"
        />
        <img src="/Email.png" alt="email" className="h-4 w-4" />
      </div>

      <div className="mt-8">
        <label className="text-gray-800 text-xs block mb-2">Password</label>
        <div className="relative flex items-center">
          <input
            name="password"
            type={showPassword ? "text" : "password"}
            required
            className="w-full text-sm border-b text-black border-gray-300 focus:border-gray-800 px-2 py-3 outline-none"
            placeholder="Enter password"
          />
          <img
            src={showPassword ? "/password-hide.png" : "/password-show.png"}
            alt="toggle password visibility"
            className="h-4 w-4 cursor-pointer absolute right-2"
            onClick={togglePasswordVisibility}
          />
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
