import { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";

const AuthPage = () => {
  // State to track which form is visible, initially showing the login form
  const [isLogin, setIsLogin] = useState(true);

  // Function to toggle between the forms
  const toggleForm = () => {
    setIsLogin((prevIsLogin) => !prevIsLogin); // Toggles the boolean value
  };

  return (
    <div>
      {isLogin ? (
        <Login toggleForm={toggleForm} />
      ) : (
        <Signup toggleForm={toggleForm} />
      )}
    </div>
  );
};

export default AuthPage;
