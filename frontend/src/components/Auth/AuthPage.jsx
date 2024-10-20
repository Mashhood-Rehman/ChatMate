import { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";
import { useDispatch } from 'react-redux'; 
import {setUser} from '../../store/authSlice'
const AuthPage = ({ setToken }) => {
  const dispatch = useDispatch();
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin((prevIsLogin) => !prevIsLogin); 
  };
  const handleLogin = (userData, token) => {
    dispatch(setUser({ user: userData, token }));
  };

  return (
    <div>
      {isLogin ? (
        <Login toggleForm={toggleForm} handleLogin={handleLogin} setToken={setToken} />
      ) : (
        <Signup toggleForm={toggleForm} setToken={setToken} />
      )}
    </div>
  );
};

export default AuthPage;
