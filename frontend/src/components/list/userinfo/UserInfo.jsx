import { useSelector } from "react-redux";

const UserInfo = () => {
  const loggedInUser = useSelector((state) => state.users.loggedInUser); // Access logged-in user
  console.log(loggedInUser);

  const profilePicture = loggedInUser?.image || "default-avatar.png"; // Use 'image' from user data
  const firstname = loggedInUser?.firstname || "Guest"; // Use 'firstname' from user data

  return (
    <div>
      <div className="flex justify-between items-center">
        <div className="flex items-center p-3 space-x-3">
          <img
            src={profilePicture}
            className="rounded-full h-10 w-10"
            alt="User avatar"
            height={10}
            width={10}
          />
          <h1>{firstname}</h1> 
        </div>
        <div className="flex space-x-3 p-2">
          <img
            src="edit.png"
            className="h-6 w-6"
            height={20}
            width={20}
            alt="Edit"
          />
          <img
            src="more.png"
            className="h-6 w-6"
            height={20}
            width={20}
            alt="More"
          />
          <img
            src="video.png"
            className="h-6 w-6"
            height={30}
            width={30}
            alt="Video"
          />
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
