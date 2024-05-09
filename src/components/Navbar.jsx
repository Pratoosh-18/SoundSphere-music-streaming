import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const Navbar = () => {

  const Navi = useNavigate()

  return (
    <div className="flex flex-col gap-5">
      <div className="flex justify-between">
        <div className=" gap-2 justify-center items-center flex">
          <div className="bg-black w-fit p-2 rounded-full justify-center">
            <div onClick={()=>Navi(-1)} className="w-4 hover:cursor-pointer">
              <img className="w-4" src={assets.arrow_left} alt="" />
            </div>
          </div>
          <div className="bg-black w-fit p-2 rounded-full">
            <div>
              <img onClick={()=>Navi(+1)} className="w-4 hover:cursor-pointer" src={assets.arrow_right} alt="" />
            </div>
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <div className="bg-white w-fit sm:p-1.5 rounded-full flex items-center justify-center">
            <div className="text-[14px] text-black font-bold sm:px-3 hidden sm:block">
              Explore Premium
            </div>
          </div>
          <div className="bg-white sm:bg-black w-fit p-2 rounded-full flex items-center">
            <div className=" font-bold px-2.5 text-[14px] sm:text-white text-black">Install app</div>
          </div>
          <div className="bg-black w-fit p-2 rounded-full">
            <div>
              <img className="w-4" src={assets.bell_icon} alt="" />
            </div>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default Navbar;
