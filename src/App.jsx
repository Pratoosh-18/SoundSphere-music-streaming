import { useContext, useState } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import PlayerBar from "./components/PlayerBar";
import Display from "./components/Display";
import { PlayerContext } from "./context/Playercontext";

function App() {

  const {audioRef,track} = useContext(PlayerContext)

  return (
    <>
      <div className="flex h-screen w-full flex-col bg-black">
        <div className="flex h-[87%]">
          <Sidebar /> 
          <Display/>
        </div>
        <PlayerBar/>
        <audio ref={audioRef} src={track.file} preload="auto"></audio>
      </div>
    </>
  );
}

export default App;
