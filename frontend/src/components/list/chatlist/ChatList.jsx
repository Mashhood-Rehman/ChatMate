import { useState } from "react";
import AddUser from "../../AddUser/AddUser";

const ChatList = () => {
    const [addMode, setAddMode] = useState(false);

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
                        className={`h-6 w-6 ${
                            addMode ? "rotate-180" : "rotate-0"
                        } bg-[rgba(17,25,40,0.5)] p-1 rounded-full transition transform`}
                        alt="plus"
                        height={10}
                        width={10}
                    />
                </div>
            </div>

            <div className="flex items-center space-x-4 border-b-2 border-[#dddddd35]">
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
                    <h1>Ayan</h1>
                    <p>hello</p>
                </div>
            </div>
            <div className="flex items-center space-x-4 border-b-2 border-[#dddddd35]">
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
                    <h1>Ayan</h1>
                    <p>hello</p>
                </div>
            </div>
            <div className="flex items-center space-x-4 border-b-2 border-[#dddddd35]">
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
                    <h1>Ayan</h1>
                    <p>hello</p>
                </div>
            </div>
            <div className="flex items-center space-x-4 border-b-2 border-[#dddddd35]">
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
                    <h1>Ayan</h1>
                    <p>hello</p>
                </div>
            </div>
            <div className="flex items-center space-x-4 border-b-2 border-[#dddddd35]">
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
                    <h1>Ayan</h1>
                    <p>hello</p>
                </div>
            </div>

            {/* Repeat similar chat entries */}

            {/* Conditionally render AddUser and apply styles to center it */}
            {addMode && (
                <div className="absolute top-20 left-96  flex z-50 items-center justify-center bg-[rgba(0,0,0,0.5)]">
                    <AddUser className="bg-white p-4  rounded-xl shadow-xl" />
                </div>
            )}
        </div>
    );
};

export default ChatList;
