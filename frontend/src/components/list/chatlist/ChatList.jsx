import { useEffect, useState } from "react";
import AddUser from "../../AddUser/AddUser";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../../store/userSlice";

const ChatList = () => {
    const [addMode, setAddMode] = useState(false);
    const dispatch = useDispatch();
    const { users, error, loading } = useSelector((state) => state.users);

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    if (loading) return <p>Loading users...</p>;
    if (error) return <p>Error loading users: {error}</p>;

  
    const allUsers = users?.AllUsers || [] 

    return (
        <div>
            <div className="flex justify-between items-center">
                <div className="flex relative bg-[rgba(17,25,40,0.5)] space-x-10 p-1 ml-2 rounded-2xl">
                    <img
                        src="/search.png"
                        alt=""
                        className="absolute bottom-3 left-2 h-6 w-6"
                        height={10}
                        width={10}
                    />
                    <input
                        type="text"
                        placeholder="Search.."
                        className="p-2 rounded-xl bg-transparent border-none focus:outline-none"
                    />
                </div>

                <div className="p-2">
                    <img
                        src={addMode ? "/minus.png" : "/plus.png"}
                        onClick={() => setAddMode(!addMode)}
                        className={`h-6 w-6 ${addMode ? "rotate-180" : "rotate-0"} bg-[rgba(17,25,40,0.5)] p-1 rounded-full transition transform`}
                        alt="plus"
                        height={10}
                        width={10}
                    />
                </div>
            </div>

            <div>
                {allUsers.map((user) => (
                    <div key={user._id} className="flex items-center space-x-4 border-b-2 border-[#dddddd35]">
                        <div>
                            <img
                                src="avatar.png"
                                alt="avatar"
                                className="h-16 w-16 rounded-full p-1"
                                height={10}
                                width={10}
                            />
                        </div>
                        <div>
                            <h1>{user.firstname} {user.lastname}</h1>
                            <p>{user.email}</p>
                        </div>
                    </div>
                ))}
            </div>

            {addMode && (
                <div className="absolute top-20 left-96 flex z-50 items-center justify-center bg-[rgba(0,0,0,0.5)]">
                    <AddUser className="bg-white p-2 rounded-xl shadow-xl" />
                </div>
            )}
        </div>
    );
};

export default ChatList;
