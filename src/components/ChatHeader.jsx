import React from "react";
import { BsPower } from "react-icons/bs";

const ChatHeader = () => {
  return (
    <div className="flex justify-between items-center mb-2">
      <h1 className="flex cursor-pointer items-center gap-x-4 font-semibold text-xl text-white rounded-md">
        <img
          src="https://avatars.githubusercontent.com/u/119802653?v=4"
          alt=""
          className="w-12 h-12 rounded-full"
        />
        <span>Showkat</span>
      </h1>
      <span className="btn btn-accent btn-square text-lg">
        <BsPower className="text-white" />
      </span>
    </div>
  );
};

export default ChatHeader;
