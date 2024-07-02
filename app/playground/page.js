
"use client";
import React from "react";
import NavBar from "../../components/NavBar";
import AgentsBoxSmall from "../../components/AgentsBoxSmall";
import Link from "next/link";
import { useState } from "react";

const playground = () => {
  const [text, setText] = useState("Write a tagline on ice cream shop...");

  // Handle the change in the text area
  const handleChange = (e) => {
    setText(e.target.value);
  };

  // Reset the text area
  const handleReset = () => {
    setText("");
  };

  return (
    <div className="min-h-screen bg-cover bg-center bg-repeat-y md:bg-no-repeat flex flex-col gap-14" style={{ backgroundImage: `url(backgrounds/agentsBg.svg)` }}>
      <NavBar />
      <div className="flex flex-col lg:flex-row mt-10 px-4 lg:px-0">
        <div className="first lg:mx-[65px] flex flex-col lg:gap-20 lg:w-1/3 mb-3">
          <AgentsBoxSmall imgUrl={"Jhon.png"} name={"Jhon."} jobType={"Data Analyst"} />
          <div className="text-white flex flex-col gap-3 md:gap-7 italic my-5">
            <Link href={'/playground'} className='text-[25px] md:text-[45px]'>Playground</Link>
            <div className='flex flex-col gap-3 mx-3'>
              <Link href={'/datasetup'} className='text-[#9e9c9cac] text-[15px] md:text-[26px]'>Data Setup</Link>
              <Link href={'/integrationsetting'} className='text-[#9e9c9cac] text-[15px] md:text-[26px]'>Integration Setting</Link>
            </div>
          </div>
        </div>
        <div className="second flex flex-col gap-12 text-white bg-[#8985851c] p-4 md:p-7 rounded-3xl w-full mx-3 lg:mr-[65px]">
          <div className="flex flex-col lg:flex-row gap-3 lg:gap-0 lg:justify-between">
            <h3 className="text-3xl lg:text-4xl italic">Playground</h3>
            <div className="buttons flex flex-wrap gap-3">
              <select id="model" className="bg-transparent w-full md:w-[220px] border rounded-lg px-2 py-1">
                <option value="gpt3.5" className="bg-transparent p-1 text-black">Load Preset</option>
              </select>
              <button className="cursor-pointer border p-2 rounded-[10px]">Save</button>
              <button className="cursor-pointer border p-2 rounded-[10px]">View Code</button>
              <button className="cursor-pointer border p-2 rounded-[10px]">Share</button>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-12">
            <textarea name="text" value={text} id="play" className="bg-[#413f3f69] w-full h-[200px] lg:h-[500px] px-4 lg:px-10 py-4 lg:py-8 text-[16px] lg:text-[18px] rounded-3xl" onChange={handleChange} placeholder="Try something to play" />
            <div className="flex flex-col gap-6 lg:mx-9">
              <label htmlFor="model" className="text-2xl lg:text-3xl">Model</label>
              <select name="model" id="model" className="bg-transparent w-full md:w-[220px] border rounded-xl p-2">
                <option value="gpt3.5" className="bg-transparent p-1 text-black">gpt 3.5</option>
                <option value="gpt4.0" className="bg-transparent p-1 text-black">gpt 4.0</option>
              </select>
              <label htmlFor="temperature" className="text-2xl lg:text-3xl">Temperature</label>
              <input type="range" name="temperature" id="temperature" className="bg-transparent w-full lg:w-[300px]" />
              <label htmlFor="maxlength" className="text-2xl lg:text-3xl">Maximum Length</label>
              <input type="range" name="maxlength" id="maxlength" className="bg-transparent w-full lg:w-[300px]" />
              <label htmlFor="top" className="text-2xl lg:text-3xl">Top p</label>
              <input type="range" name="top" id="top" className="bg-transparent w-full lg:w-[300px]" />
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center gap-6">
            <button className="cursor-pointer italic px-6 lg:px-10 py-2 lg:py-4 bg-custom-gradient rounded-xl text-lg lg:text-xl">Submit</button>
            <button className="cursor-pointer italic p-2 lg:p-4 bg-[#413f3f69] rounded-xl" onClick={handleReset}>
              <img src="reload.svg" alt="reload" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default playground;

