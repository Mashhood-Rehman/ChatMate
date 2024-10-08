import  { useState } from 'react';
import Signup from './Signup';
import { motion } from 'framer-motion'; 
import Login from './login';
import { toast } from 'react-toastify';

const AuthPage = () => {
  const [showLogin, setShowLogin] = useState(true);

  const toggleForm = () => {
    setShowLogin(!showLogin);
  };

  const handleLogin = (e) => {
      e.preventDefault()
      toast.success("Logged in successfully")
  }

  return (
    <div className="font-[sans-serif] bg-gray-900 md:h-screen">
      <div className="grid md:grid-cols-2 items-center gap-8 h-full">
        <motion.div
          className="max-md:order-1 p-4"
          initial={{ x: showLogin ? 0 : 800 }}
          animate={{ x: showLogin ? 0 : 800 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src="https://readymadeui.com/signin-image.webp"
            className="lg:max-w-[80%] w-full h-full object-contain block mx-auto"
            alt="auth-image"
          />
        </motion.div>

        <motion.div
          className="flex items-center md:p-8 p-6 rounded-2xl bg-white  h-full"
          initial={{ x: showLogin ? 0 : -800 }}
          animate={{ x: showLogin ? 0 : -800 }}
          transition={{ duration: 0.5 }}
        >
          {showLogin ? <Login handleLogin={handleLogin} toggleForm={toggleForm} /> : <Signup handleLogin={handleLogin} toggleForm={toggleForm} />}
        </motion.div>
      </div>
    </div>
  );
};

export default AuthPage;
