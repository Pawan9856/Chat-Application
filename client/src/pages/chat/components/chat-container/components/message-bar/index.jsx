import EmojiPicker from "emoji-picker-react";
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { GrAttachment } from "react-icons/gr";
import { IoSend } from "react-icons/io5";
import { RiEmojiStickerLine } from "react-icons/ri";

const MessageBar = () => {
  const emojiRef = useRef();
  const [emojiPickerOpen, setEmojiPickerOpen] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    function handleClickOutside(event) {
      if (emojiRef.current && !emojiRef.current.contains(event.target)) {
        setEmojiPickerOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [emojiRef]);

  const handleSendMessage = async () => {
    console.log("Received message");
  };
  const handleAddEmoji = async (emoji) => {
    setMessage((message) => message + emoji.emoji);
  };
  return (
    <div className="h-[10vh] flex justify-center items-center px-8 bg-[#1c1b25] mb-6 gap-6">
      <div className="flex-1 flex items-center bg-[#2a2b33] pr-5 gap-5 rounded-md">
        <input
          type="text"
          className="p-5 rounded-md bg-transparent flex-1 focus:outline-none focus:border-none"
          placeholder="Enter Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button className="text-neutral-500 focus:border-none focus:outline-none focus:text-white transition-all duration-300">
          <GrAttachment className="text-2xl" />
        </button>

        <div className="relative">
          <button
            className="text-neutral-500 focus:border-none focus:outline-none focus:text-white transition-all duration-300"
            onClick={() => setEmojiPickerOpen(true)}
          >
            <RiEmojiStickerLine className="text-2xl" />
          </button>
          <div className="absolute bottom-16 right-0" ref={emojiRef}>
            <EmojiPicker
              theme="dark"
              open={emojiPickerOpen}
              onEmojiClick={handleAddEmoji}
              autoFocusSearch={false}
            />
          </div>
        </div>
      </div>
      <button
        className="bg-[#8417ff] hover:bg-[#741bda] focus:bg-[#741bda] flex justify-center items-center p-5 rounded-md focus:border-none focus:outline-none focus:text-white transition-all duration-300"
        onClick={handleSendMessage}
      >
        <IoSend className="text-2xl" />
      </button>
    </div>
  );
};

export default MessageBar;
