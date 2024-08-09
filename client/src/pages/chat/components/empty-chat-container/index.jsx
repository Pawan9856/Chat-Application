import { animationDefaultOptions } from "@/lib/utils";
import Lottie from "react-lottie";
const EmptyChatContainer = () => {
  return (
    <div className="hidden flex-1 md:flex md:bg-[#1c1b24] flex-col justify-center items-center transition-all duration-1000">
      <Lottie
        isClickToPauseDisabled={true}
        height={200}
        width={200}
        options={animationDefaultOptions}
      />
      <div className="text-opacity-80 mt-10 gap-5 text-white flex flex-col items-center lg:text-4xl text-3xl transition-all duration-300 text-center">
        <h3 className="poppins-medium">
          Hi <span className="text-purple-500">!</span> Welcome to 
          <span className="text-purple-500"> Syncronus </span>Chat App{" "}
          <span className="text-purple-500">.</span>
        </h3>
      </div>
    </div>
  );
};

export default EmptyChatContainer;
