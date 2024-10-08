
const Signup = ({ toggleForm , handleLogin }) => {
  return (
    <form onSubmit={handleLogin} className="max-w-lg w-full mx-auto">
      <div className="mb-12">
        <h3 className="text-gray-800 text-4xl font-extrabold">Sign up</h3>
        <p className="text-gray-800 text-sm mt-4">
          Already have an account?{" "}
          <span
            className="text-blue-600 font-semibold hover:underline ml-1 cursor-pointer"
            onClick={toggleForm}
          >
            Sign in here
          </span>
        </p>
      </div>

      <div>
        <label className="text-gray-800 text-xs block mb-2">Name</label>
        <div className="relative flex items-center">
          <input
            name="text"
            type="text"
            required
            className="w-full text-sm border-b border-gray-300 focus:border-gray-800 px-2 py-3 outline-none"
            placeholder="Your Name.."
          />
        </div>
      </div>
      <div className="mt-8">
        <label className="text-gray-800 text-xs block mb-2">Email</label>
        <div className="relative flex items-center">
          <input
            name="email"
            type="text"
            required
            className="w-full text-sm border-b border-gray-300 focus:border-gray-800 px-2 py-3 outline-none"
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
            required
            className="w-full text-sm border-b border-gray-300 focus:border-gray-800 px-2 py-3 outline-none"
            placeholder="Enter password"
          />
          <img src="/password-show.png" alt="password" className="h-4 w-4" />
        </div>
      </div>

      <div className="mt-12">
        <button
          type="button"
          className="w-full py-3 px-6 text-sm font-semibold tracking-wider rounded-full text-white bg-gray-800 hover:bg-[#222] focus:outline-none"
        >
          Sign up
        </button>
      </div>
    </form>
  );
};

export default Signup;
