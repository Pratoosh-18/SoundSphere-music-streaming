import React, { useContext } from "react";
import { assets, songsData } from "../assets/assets";
import { PlayerContext } from "../context/Playercontext";

const PlayerBar = () => {

  const {seekBar,seekBg,playStatus,play,pause,setTrack,track,time,playnext,playprev,seeksong} = useContext(PlayerContext)


  return (
    <>
      <div className="w-full h-[13%] bg-black flex items-center px-4 justify-between">
        <div className="flex items-center justify-center">
          <div>
            <img className="w-14 mr-3" src={track.image} alt="" />
          </div>
          <div className=" hidden md:block">
            <div className="font-medium">{track.name}</div>
            <div className="text-sm">{track.desc}</div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center">
          <div className="flex gap-5 items-center">
            <div><img className="w-4" src={assets.shuffle_icon} alt="" /></div>
            <div onClick={playprev}><img className="w-4" src={assets.prev_icon} alt="" /></div>
            {playStatus?<div><img onClick={pause} className="w-7" src={assets.pause_icon} alt="" /></div>:<div><img onClick={play} className="w-7" src={assets.play_icon} alt="" /></div>}
            <div onClick={playnext} ><img className="w-4" src={assets.next_icon} alt="" /></div>
            <div><img className="w-4" src={assets.loop_icon} alt="" /></div>
          </div>
          <div className="flex w-full justify-between text-sm items-center mx-3">
            <p>{time.currentTime.minute}:{time.currentTime.second}</p>
            <div onClick={seeksong} ref={seekBg} className="w-[220px] sm:w-[450px] h-1 bg-slate-50 mt-2 rounded-full hover:cursor-pointer">
              <hr ref={seekBar} className="h-1 border-none w-0 bg-green-800 rounded-full" />
            </div>
            <p>{time.totalTime.minute}:{time.totalTime.second}</p>
          </div>
        </div>

        <div className="hidden xl:flex gap-3 items-center">
          <img className="w-4" src={assets.plays_icon} alt="" />
          <img className="w-4" src={assets.queue_icon} alt="" />
          <img className="w-4" src={assets.speaker_icon} alt="" />
          <img className="w-4" src={assets.volume_icon} alt="" />
          <div className="w-20 h-1 bg-slate-50 rounded"></div>
          <img className="w-4" src={assets.mini_player_icon} alt="" />
          <img className="w-4" src={assets.zoom_icon} alt="" />
        </div>
      </div>
    </>
  );
};

export default PlayerBar;
