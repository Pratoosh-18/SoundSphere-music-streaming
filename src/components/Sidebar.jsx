import React from "react";
import { assets } from "../assets/assets";

const Sidebar = () => {
  return (
    <div className="hidden lg:flex h-full w-[28%] bg-black flex-col gap-4 py-6 px-3">
      <div className="flex items-center px-3">
        <img className="w-7 mr-4" src={assets.home_icon} alt="" />
        <p>Home</p>
      </div>
      <div className="flex items-center px-3">
        <img className="w-7 mr-4" src={assets.search_icon} alt="" />
        <p>Search</p>
      </div>
      <div className="flex items-center justify-between mt-5 px-2">
        <div className="flex items-center">
          <img className="w-7 mr-4" src={assets.stack_icon} alt="" />
          <p>Your library</p>
        </div>
        <div className="flex">
          <img className="w-4 mr-5" src={assets.plus_icon} alt="" />
          <img className="w-4" src={assets.arrow_icon} alt="" />
        </div>
      </div>

      <div className="h-auto w-full bg-[#242424] rounded-sm px-4 py-2">
        <div className="text-base font-semibold pb-1">Create your first playlist</div>
        <div className="text-sm">it's easy we will help you</div>
        <div className="w-fit rounded-full px-3 py-2 text-sm mt-4 mb-1 bg-white text-black">Create Playlist</div>
      </div>

      <div className="h-auto w-full bg-[#242424] rounded-sm px-4 py-2">
        <div className="text-base font-semibold pb-1">Lets find some podcasts</div>
        <div className="text-sm">we will keep you updated</div>
        <div className="w-fit rounded-full px-3 py-2 text-sm mt-4 mb-1 bg-white text-black">Browse podcacts</div>
      </div>

    </div>
  );
};

export default Sidebar;
