import EmojiPicker from "emoji-picker-react";
import { useState, useRef, useEffect } from "react";
import ChatSection from "./ChatSection";

const Chat = () => {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState('');
  const changehandler = (e) => {
    setText(e.target.value  )
  }
 

  const onEmojiClick = (e) => {
    setText((prev) => prev + e.emoji);
  };
  const emojiPickerRef = useRef(null); 

  const handleClickOutside = (event) => {
    if (
      emojiPickerRef.current &&
      !emojiPickerRef.current.contains(event.target) &&
      !event.target.closest('.emoji-icon') 
    ) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex-[2] border-l-2 border-[#dddddd35] border-r-2 relative">
      {/* Top section */}
      <div className="flex justify-between relative items-center border-b-2 border-[#dddddd35] p-2">
        <div className="flex space-x-3">
          <img
            src="/avatar.png"
            alt="avatar"
            className="h-12 w-12 rounded-full"
          />
          <div>
            <h1>Aryan</h1>
            <p className="text-sm">Lorem ipsum dolor, </p>
          </div>
        </div>

        <div className="flex space-x-4 p-2">
          <img
            src="/phone.png"
            alt="phone"
            className="h-6 w-6"
          />
          <img
            src="/video.png"
            alt="video"
            className="h-6 w-6"
          />
          <img
            src="/info.png"
            alt="info"
            className="h-6 w-6"
          />
        </div>
      </div>
      <div className="flex-[2]   h-[calc(80vh-4rem)]  overflow-y-auto ">

<ChatSection/>
      </div>
      {/* Bottom section */}
      <div className="flex  justify-center items-center space-x-4 absolute bottom-0 border-t-2 border-[#dddddd35] p-1  w-full">
        <div className="flex space-x-6 pl-3">
          <img src="/img.png" alt="" className="h-6 w-6" />
          <img src="/camera.png" alt="" className="h-6 w-6" />
          <img src="/mic.png" alt="" className="h-6 w-6" />
        </div>
        <div className="flex space-x-1 items-center relative">
          <input
            type="text"
            name="text"
            value={text} 
            onChange={changehandler} 
            placeholder="Type a message.."
            className="text-black focus:outline-none w-80 rounded-2xl p-2"
          />
          <img
            src="/emoji.png"
            alt="emoji"
            className="h-6 w-6 cursor-pointer emoji-icon"
            onClick={() => setOpen(!open)}
          />
          {open && (
            <div className="absolute bottom-12 left-0 z-10" ref={emojiPickerRef}>
              <EmojiPicker onEmojiClick={onEmojiClick} />
            </div>
          )}
        </div>
        <div className="border-[#dddddd35] bg-purple-600 border py-2 px-8 mb-1 rounded-2xl">
          <button>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
