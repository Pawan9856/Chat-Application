import { RiCloseFill } from "react-icons/ri";
const ChatHeader = () => {
  return (
    <div className="h-[10vh] border-[#2f303b] border-b-2 flex items-center justify-between px-20">
      <div className="flex gap-5 items-center">
        <div className="flex gap-3 items-center justify-center"></div>
        <div className="flex gap-5 items-center justify-center">
          <button className="text-neutral-500 focus:border-none focus:outline-none focus:text-white transition-all duration-300">
            <RiCloseFill className="text-3xl"/>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatHeader;
