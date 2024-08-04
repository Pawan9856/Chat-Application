import { useAppStore } from "@/store";
import React from "react";

const Profile = () => {
  const { userInfo } = useAppStore();
  return (
    <div className="">
      <div>Profile</div>
      <div className="">Email:{userInfo.email}</div>
    </div>
  );
};

export default Profile;
