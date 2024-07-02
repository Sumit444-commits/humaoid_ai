
import React from 'react';
import NavBar from '../../components/NavBar';
import AgentsBoxSmall from '../../components/AgentsBoxSmall';
import Link from 'next/link';

const datasetup = () => {
  return (
    <div className="h-full bg-cover bg-center bg-no-repeat flex flex-col gap-14" style={{ backgroundImage: `url(backgrounds/agentsBg.svg)` }}>
    <div className="min-h-screen">
        <NavBar />

        <div className="flex flex-col lg:flex-row mt-10">
          <div className="first mx-4 md:mx-8 lg:mx-[65px] flex flex-col  lg:gap-20 w-full lg:w-1/3 mb-8  lg:mb-0 ">
            <AgentsBoxSmall imgUrl={"Jhon.png"} name={"Jhon."} jobType={"Data Analyst"} />
            <div className='text-white flex flex-col gap-3 lg:gap-7 italic my-5'>
              <Link href={'/playground'} className='text-[#9e9c9cac] text-[15px] md:text-[26px]'>Playground</Link>
              <Link href={'/datasetup'} className='text-[25px] md:text-[45px]'>Data Setup</Link>
              <Link href={'/integrationsetting'} className='text-[#9e9c9cac] text-[15px] md:text-[26px]'>Integration Setting</Link>
            </div>
          </div>

          <div className="second flex flex-col gap-5 md:gap-8  text-white bg-[#8985851c] p-4 md:p-7 rounded-3xl w-full mx-4 md:mx-8 lg:mx-5 lg:mr-[65px]">
            <div className="flex justify-between">
              <h3 className="text-2xl md:text-4xl italic">Data Setup</h3>
            </div>
            <p className='text-lg md:text-2xl'>Upload your logic Business Reports</p>
            <div className='flex flex-col items-center justify-center gap-2 bg-[#413f3f69] w-[99%] rounded-3xl py-5 md:py-8'>
              <img width={"45px"} height={"55px"} src="pdf.svg" alt="pdf" />
              <span className='text-lg md:text-2xl mt-5'>Drag and Drop here</span>
              <div className='w-[80%] md:w-[300px] h-[3px] bg-gray-600 mb-4'></div>
              <button className='cursor-pointer bg-custom-gradient text-lg md:text-xl italic px-5 md:px-7 py-1 md:py-3 rounded-xl my-4'>Browse Files</button>
            </div>

            <div className='flex flex-col md:flex-row gap-4 md:gap-8 items-center'>
              <label htmlFor="role" className='text-lg md:text-2xl'>Role</label>
              <input type="text" name="role" id="role" className='bg-[#413f3f69] w-full md:w-[47%] lg:w-[47%] border rounded-xl py-2 md:py-3 px-4 md:px-6 text-lg md:text-xl' placeholder='Hiring'/>
              <label htmlFor="department" className='text-lg md:text-2xl'>Department</label>
              <input type="text" name="department" id="department" className='bg-[#413f3f69] w-full md:w-[47%] lg:w-[47%] border rounded-xl py-2 md:py-3 px-4 md:px-6 text-lg md:text-xl' placeholder='React Developer'/>
            </div>

            <label htmlFor="initiate" className='text-lg md:text-2xl mt-4'>Initiate prompt for the agent</label>
            <input type="text" name="initiate" id="initiate" className='bg-[#413f3f69] w-full border rounded-2xl py-2 md:py-3 px-4 md:px-6 text-lg md:text-xl' placeholder='Initiate prompt for the agent...'/>

            <div className='flex justify-center md:justify-start items-center gap-4 md:gap-6 mt-4'>
              <button className='cursor-pointer italic px-6 md:px-10 py-2 md:py-3 bg-custom-gradient rounded-xl text-lg md:text-xl'>Train Agent</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default datasetup;

export const metadata = {
  title: "Humanoid AI - Data Setup",
  description: "Start training your AI agent with your business reports. Upload your business reports and train your AI agent to understand your business logic.",
};
