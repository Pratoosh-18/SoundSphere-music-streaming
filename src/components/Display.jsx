import React from "react";
import Navbar from "./Navbar";
import { Route, Routes } from "react-router-dom";
import Page1 from "./Page1";
import DailyMix from "./DailyMix";

const Display = () => {
  return (
    <>
      <div className="h-[100%] w-[100%] bg-gradient-to-b from-purple-600 to-black via-black md:m-2 rounded-lg p-5 overflow-hidden overflow-y-scroll">
        <Navbar />
        <Routes>
          <Route path="/" element={<Page1/>}/>
          <Route path="/dailymix" element={<DailyMix/>}/>
        </Routes>
      </div>
    </>
  );
};

export default Display;
