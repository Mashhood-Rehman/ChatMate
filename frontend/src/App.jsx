import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Chat from "./components/chat/chat";
import Detail from "./components/detail/Detail";
import List from "./components/list/list";
import AuthPage from "./components/Auth/AuthPage";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
// import jwtDecode from 'jwt-decode'
const App = () => {
  const [token, setToken] = useState(localStorage.getItem('token'));

  useEffect(() => {
    // Check for token changes in localStorage and update the state
    const handleTokenChange = () => {
      setToken(localStorage.getItem('token'));
    };

    window.addEventListener('storage', handleTokenChange);

    return () => {
      window.removeEventListener('storage', handleTokenChange);
    };
  }, []);

  return (
    <Router>
      <div>
        <Routes>
          {/* If token exists, navigate to the chat section, otherwise show the login page */}
          <Route 
            path="/" 
            element={token ? <Navigate to="/chat" /> : <AuthPage setToken={setToken} />} 
          />

          {/* Chat page is shown only when a valid token exists */}
          <Route 
            path="/chat" 
            element={
              token ? (
                <div className='h-[90vh] flex w-[90vw] bg-[rgba(17,25,40,0.75)] backdrop-blur-lg rounded-xl'>
                  <List />
                  <Chat />
                  <Detail setToken={setToken} /> {/* Pass down the setToken function */}
                </div>
              ) : (
                <Navigate to="/" />
              )
            } 
          />
        </Routes>
        <ToastContainer />
      </div>
    </Router>
  );
};

export default App;
