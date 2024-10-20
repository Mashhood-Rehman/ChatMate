import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Detail = ({setToken}) => {
  const navigate = useNavigate(); // Get the navigate function

  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken(null); // Clear the token in the state
    navigate('/'); // Redirect to the login page after logout
    toast.success("Logged out")
  };

  return (
    <div className="flex-1">
      <div className="flex flex-col items-center justify-center border-b-2 mt-6 p-3">
        <img src="./avatar.png" alt="pic" className="rounded-full h-24 w-24" />
        <h1>JOHN</h1>
        <span>Lorem ipsum dolor sit amet.</span>
      </div>
      
      <div className="space-y-4 p-2">
        <div className="flex items-center justify-between space-x-2">
          <p>Chat Settings</p>
          <img src="./arrowUp.png" className="h-4 w-4" alt="" />
        </div>
        <div className="flex items-center justify-between space-x-2">
          <p>Privacy & Help</p>
          <img src="./arrowUp.png" className="h-4 w-4" alt="" />
        </div>
        <div className="flex items-center justify-between space-x-2">
          <p>Shared Photos</p>
          <img src="./arrowDown.png" className="h-4 w-4" alt="" />
        </div>
      </div>

      <div className="block overflow-y-auto h-[calc(30vh-4rem)]">
        {/* Shared Photos */}
        {[...Array(5)].map((_, index) => (
          <div key={index} className="flex justify-between p-2">
            <div className="flex items-center justify-center space-x-2">
              <img src="./avatar.png" className="h-8 w-8 rounded-xl" alt="" />
              <p>photo_2024_2.png</p>
            </div>
            <img src="./download.png" className="h-6 w-6" alt="" />
          </div>
        ))}
      </div>

      <div className="flex justify-between items-center p-2">
        <p>Shared Files</p>
        <img src="./arrowDown.png" className="h-4 w-4" alt="" />
      </div>
      <div className="flex items-center justify-center">
        <button className="bg-white text-black px-10 py-1 rounded-xl hover:bg-red-600 duration-300 ease-in-out hover:text-white">
          Block User
        </button>
      </div>
      <div className="flex items-center mt-4 justify-center">
        <button
          onClick={handleLogout}
          className="bg-blue-600 text-black px-10 py-1 rounded-xl hover:bg-blue-800 duration-300 ease-in-out hover:text-white"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Detail;
