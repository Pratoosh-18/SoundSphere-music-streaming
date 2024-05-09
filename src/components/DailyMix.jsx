import React, { useContext } from "react";
import { assets, songsData } from "../assets/assets";
import Albulmusiccard from "./Albulmusiccard";
import { PlayerContext } from "../context/Playercontext";

const DailyMix = () => {

  const {playalbum} = useContext(PlayerContext)

  return (
    <div className="w-full  flex-col">
      <div className="w-full flex gap-5 mt-12 mb-5">
        <div className="w-20 h-20 sm:w-40 sm:h-40">
          <img src={assets.img8} alt="" />
        </div>
        <div className="flex flex-col justify-between">
          <div className="text-4xl sm:text-6xl md:text-7xl font-bold">
            Top songs India
          </div>
          <div>
            <div className="text-sm sm:text-base">Diljit, Yo Yo Honey Singh, Talwinder and more</div>
            <div className="text-sm sm:text-base">45,169 likes, 10 songs, 1 hr 15 min</div>
          </div>
        </div>
      </div>

      <div className="mt-5 flex justify-between items-center">
        <div className="flex gap-5 items-center">
          <div onClick={playalbum} className="p-3 bg-[#169c46] w-fit rounded-full">
            <img className="w-5" src={assets.play_icon} alt="" />
          </div>
          <div className="p-2 bg-black w-fit rounded-full">
            <img className="w-4" src={assets.plus_icon} alt="" />
          </div>
          <div className="p-2 bg-black w-fit rounded-full">
            <img className="w-4" src={assets.shuffle_icon} alt="" />
          </div>
        </div>
        <div className="flex gap-3 mb-12">
          <div>List</div>
          <img className="w-5" src={assets.stack_icon} alt="" />
        </div>
      </div>
      <div className="flex justify-between px-4 py-2 hover:bg-slate-700 items-center rounded-lg">
      <div className="flex items-center gap-4">
        <div>#</div>
        <div>Title</div>
      </div>
      <div className="flex gap-10 sm:gap-36">
        <div className="hidden sm:block">Singer</div>
        <div className="hidden md:block">Date added</div>
        <div>Duration</div>
      </div>
    </div>

      <div className="w-full">
       {songsData.map((item)=><Albulmusiccard id={item.id} album={item.album} img={item.image} name={item.name} duration={item.duration}/>)} 

      </div>


    </div>
  );
};

export default DailyMix;
