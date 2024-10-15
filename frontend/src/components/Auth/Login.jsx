
const Login = ({ toggleForm  , handleLogin}) => {

  const handleRegister= () => {
    const formData = new FormData(e.target)
     const {  email , password} = Object.fromEntries(formData)
    console.log(email)
    console.log(password)


    handleLogin()
  }
  return (
    <form onSubmit={handleRegister} className="max-w-lg w-full mx-auto">
      <div className="mb-12">
        <h3 className="text-gray-800 text-4xl font-extrabold">Sign in</h3>
        <p className="text-gray-800 text-sm mt-4">
          Don't have an account?{" "}
          <span
            className="text-blue-600 font-semibold hover:underline ml-1 cursor-pointer"
            onClick={toggleForm}
          >
            Register here
          </span>
        </p>
      </div>

      <div>
        <label className="text-gray-800 text-xs block mb-2">Email</label>
        <div className="relative flex items-center">
          <input
            name="email"
            type="email"
            className="w-full text-sm border-b text-black  border-gray-300 focus:border-gray-800 px-2 py-3 outline-none "
            placeholder="Enter email"
          />
          <img src="/Email.png" alt="email" className="h-4 w-4" />
        </div>
      </div>

      <div className="mt-8">
        <label className="text-gray-800 text-xs block mb-2">Password</label>
        <div className="relative flex items-center">
        <input 
  name="password" 
  type="password" 
  className="w-full text-sm border-b text-black border-gray-300 focus:border-gray-800 px-2 py-3 outline-none" 
  placeholder="Enter password" 
  autoComplete="current-password"
/>

          <img src="/password-show.png" alt="password" className="h-4 w-4" />
        </div>
      </div>

      <div className="mt-12">
        <button
          type="submit"
          className="w-full py-3 px-6 text-sm font-semibold tracking-wider rounded-full text-white bg-gray-800 hover:bg-[#222] focus:outline-none"
        >
          Sign in
        </button>
      </div>

`  <div className="my-6 flex items-center gap-4">
               <hr className="w-full border-gray-300" />
               <p className="text-sm text-gray-800 text-center">or</p>
               <hr className="w-full border-gray-300" />
             </div>`

      <div className="">

      <button type="button" className="w-full flex items-center justify-center gap-4 py-3 px-6 text-sm font-semibold tracking-wider text-gray-800 border border-gray-300 rounded-full bg-gray-50 hover:bg-gray-100 focus:outline-none">
             <img src="/google.png" alt="google-icon" className="h-8 w-8" />
               Continue with google
             </button>
      </div>
    </form>
  );
};

export default Login;
