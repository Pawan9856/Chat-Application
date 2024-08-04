import { useAppStore } from '@/store'
import React from 'react'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { toast } from 'sonner';

const Chat = () => {
  const {userInfo}= useAppStore();
  const navigate= useNavigate();
  useEffect(()=>{
    if(!userInfo.profileSetup){
      toast("Plese Setup Profile To Continue.");
      navigate("/profile");
    }
  },[userInfo,navigate]);
  return (
    <div>Chat</div>
  )
}

export default Chat