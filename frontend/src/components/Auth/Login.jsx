import { useState } from "react";

const Login = ({ toggleForm }) => {
  const handleRegister = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const { email, password } = Object.fromEntries(formData);
    console.log(email, password);
  };

  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState); // Toggles the state between true/false
  };


  return (
    <div>
      <form onSubmit={handleRegister}>
        <div
          className="flex justify-center items-center font-[sans-serif] rounded-xl   p-4"
          // style={{
          //   backgroundImage: "url(https://readymadeui.com/background-image.webp)",
          //   backgroundRepeat: "no-repeat",
          //   backgroundSize: "cover",
          // }}
        >
          <div className="max-w-md w-full mx-auto">
            <div className="bg-opacity-70 bg-white rounded-2xl p-6 shadow-[0_2px_16px_-3px_rgba(6,81,237,0.3)]">
              <div className="mb-12">
                <h3 className="text-gray-800 text-3xl font-extrabold">Sign in</h3>
              </div>

              <div>
                <input
                  name="email"
                  type="text"
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
          type={showPassword ? "text" : "password"} // Dynamically set type
          required
          className="w-full text-black text-sm border-b border-gray-300 focus:border-gray-800 px-2 py-3 outline-none"
          placeholder="Enter password"
        />
        <img
          src={showPassword ? "/password-hide.png" : "/password-show.png"} // Change icon based on visibility state
          alt="toggle password visibility"
          className="h-4 w-4 cursor-pointer absolute right-2" // Make icon clickable
          onClick={togglePasswordVisibility} // Toggle password visibility on click
        />
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
                  Don't have an account?
                  <a
                    href="#"
                    onClick={toggleForm} // Call the toggleForm function
                    className="text-blue-600 font-semibold hover:underline ml-1 whitespace-nowrap"
                  >
                    Register here
                  </a>
                </p>
              </div>

              <hr className="my-6 border-gray-400" />

              <div className="space-x-8 flex justify-center">
                {/* Social Media buttons */}
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
