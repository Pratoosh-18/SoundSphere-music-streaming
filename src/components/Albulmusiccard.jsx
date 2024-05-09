import React, { useContext } from "react";
import { PlayerContext } from "../context/Playercontext";

const Albulmusiccard = ({ id, img, album, name, duration }) => {
  const { playwithid } = useContext(PlayerContext);

  return (
    <div
      onClick={() => playwithid(id)}
      className="flex justify-between px-2 md:px-4 py-2 hover:bg-slate-700 items-center rounded-lg"
    >
      <div className="flex items-center gap-4">
        <div>{id + 1}</div>
        <img className="w-10" src={img} alt="" />
        <div>{name}</div>
      </div>
      <div className="flex gap-10 sm:gap-36">
        <div className="hidden sm:block">{album}</div>
        <div className="hidden md:block">9-5-2024</div>
        <div>{duration}</div>
      </div>
    </div>
  );
};

export default Albulmusiccard;
