import { useState } from "react";
import { Icon } from '@iconify/react'; 
import { toast } from 'react-toastify';  
import { useDispatch } from "react-redux";
import { loginUser} from "../../store/userSlice";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
const Login = ({ toggleForm, setToken }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false); 
  const [user, setUserState] = useState({
    email: "",
    password: ""
  });

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/login', user);
      if (response.data.success) {
        const { firstname, lastname, image } = response.data.user;
  
        localStorage.setItem("token", response.data.token);
        setToken(response.data.token);
        
        // Prepare user data
        let userData = { firstname, lastname, image };
        dispatch(loginUser(userData)); // This dispatches the login action
  
        toast.success(`Welcome ${firstname} ${lastname}`);
        navigate('/chat');
      }


      // let userCredentials = {
      //   email : user.email ,
      //   password : user.password
      // }
      // dispatch(loginUser(userCredentials))
    } catch (error) {
      console.error(error);
      toast.error("Error occurred: " + error.message);
    }
  };
  
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserState({ ...user, [name]: value });
  };
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="flex justify-center items-center font-[sans-serif] rounded-xl p-4">
          <div className="max-w-md w-full mx-auto">
            <div className="bg-opacity-70 bg-white rounded-2xl p-6 shadow-[0_2px_16px_-3px_rgba(6,81,237,0.3)]">
              <div className="mb-12">
                <h3 className="text-gray-800 text-3xl font-extrabold">Sign in</h3>
              </div>

              <div>
                <input
                  name="email"
                  type="email"
                  value={user.email}
                  onChange={handleChange}
                  required
                  className="bg-transparent w-full text-sm text-gray-800 border-b border-gray-400 focus:border-gray-800 px-2 py-3 outline-none placeholder:text-gray-800"
                  placeholder="Enter email"
                />
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
                      <Icon icon="system-uicons:eye-no" style={{ color: 'black' }} className="h-4 w-4" />
                    ) : (
                      <Icon icon="ph:eye-thin" style={{ color: 'black' }} className="h-4 w-4" />
                    )}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 mt-6">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 shrink-0 border-gray-300 rounded"
                  />
                  <label className="ml-3 block text-sm text-gray-800">Remember me</label>
                </div>
                <div>
                  <a href="#" className="text-blue-600 text-sm font-semibold hover:underline">
                    Forgot Password?
                  </a>
                </div>
              </div>

              <div className="mt-12">
                <button
                  type="submit"
                  className="w-full py-2.5 px-4 text-sm font-semibold tracking-wider rounded-full text-white bg-gray-800 hover:bg-[#222] focus:outline-none"
                >
                  Sign in
                </button>
                <p className="text-gray-800 text-sm text-center mt-6">
                 Don&apos;t have an account?
                  <a
                    href="#"
                    onClick={toggleForm} 
                    className="text-blue-600 font-semibold hover:underline ml-1 whitespace-nowrap"
                  >
                    Register here
                  </a>
                </p>
              </div>

              <hr className="my-6 border-gray-400" />

              <div className="space-x-8 flex justify-center"></div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
