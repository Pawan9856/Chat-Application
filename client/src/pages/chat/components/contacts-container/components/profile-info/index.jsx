import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { getColor } from "@/lib/utils";
import { useAppStore } from "@/store";
import { HOST, LOGOUT_ROUTE } from "@/utils/constants";
import { AvatarImage } from "@radix-ui/react-avatar";
import { Avatar } from "@radix-ui/react-avatar";
import { FiEdit2 } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { IoLogOut } from "react-icons/io5";
import { apiClient } from "@/lib/api-client";

const ProfileInfo = () => {
  const { userInfo, setUserInfo } = useAppStore();
  const navigate = useNavigate();
  const logOut = async () => {
    try {
      const res = await apiClient.post(
        LOGOUT_ROUTE,
        {},
        { withCredentials: true }
      );
      if(res.status===200){
        setUserInfo(null)
        navigate("/auth");
      }
    } catch (error) {}
  };
  return (
    <div className="absolute bottom-0 h-16 flex items-center justify-between px-10 w-full bg-[#2a2b33]">
      <div className="flex justify-center items-center gap-3">
        <div className="w-12 h-12 relative ">
          <Avatar className="w-12 h-12 rounded-full overflow-hidden">
            {userInfo.image ? (
              <AvatarImage
                src={`${HOST}/${userInfo.image}`}
                className="flex justify-center items-center w-12 h-12 rounded-full bg-black object-cover"
                alt="profile image"
              />
            ) : (
              <div
                className={`flex justify-center items-center w-12 h-12 rounded-full uppercase border-[1px] text-lg ${getColor(
                  userInfo.color
                )}`}
              >
                {userInfo.firstName
                  ? userInfo.firstName.split("").shift()
                  : userInfo.email.split("").shift()}
              </div>
            )}
          </Avatar>
        </div>
        <div className="">
          {userInfo.firstName && userInfo.lastName
            ? `${userInfo.firstName} ${userInfo.lastName}`
            : ``}
        </div>
      </div>
      <div className="flex gap-5">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger onClick={() => navigate("/profile")}>
              <FiEdit2 className="text-purple-500 text-xl font-medium" />
            </TooltipTrigger>
            <TooltipContent className="text-white bg-[#1c1d1e] border-none">
              <p>Add to library</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger onClick={logOut}>
              <IoLogOut className="text-red-500 text-xl font-medium" />
            </TooltipTrigger>
            <TooltipContent className="text-white bg-[#1c1d1e] border-none">
              <p>Logout</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </div>
  );
};

export default ProfileInfo;
