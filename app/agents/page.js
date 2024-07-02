
"use client"
import React from 'react'
import AgentsBox from '../../components/AgentsBox'
import Navbar from '../../components/NavBar'
import AgentsBoxSmall from '../../components/AgentsBoxSmall'
import Link from 'next/link'
import { useState,useEffect } from 'react'
import { useSession } from 'next-auth/react'

const agents = () => {
    const [active, setActive] = useState('Jhon');
    const [linksEnabled, setLinksEnabled] = useState(true);
    const { data: session, status } = useSession();
    
  useEffect(() => {
    if (status === "authenticated") {
      setLinksEnabled(true);
    } else {
      setLinksEnabled(false);
    }
  }, [status]);

    const handleClick = (link) => {
        setActive(link);
    };
    return (
        <>
            <div className="min-h-screen bg-cover bg-center bg-no-repeat flex flex-col gap-2" style={{ backgroundImage: `url(backgrounds/agentsBg.svg)` }}>
                <Navbar />
                {
                    active === "Jhon" ?
                        (<>  <div className='flex  md:flex-row flex-col md:justify-start md:items-start justify-center items-center mr-4 md:gap-[10%] lg:gap-[30%]  '>

                            <div>

                                <div className=' flex flex-col sm:gap-10 xl:gap-10  justify-center items-center md:px-[40px] mt-5 italic'>
                                    <p className='text-white text-[20px]  md:text-[48px] md:mb-4 leading-[135%]  md:w-[440px] mb-3'>Select an agent Suitable for you</p>
                                    <h1 className='text-white md:text-8xl xl:text-[140px] text-4xl italic'>NEED.</h1>
                                </div>

                            </div>

                            {linksEnabled ? (
                                <>

                                    <Link href={"/playground"} >
                                        <AgentsBox imgUrl={"Jhon.png"} name={"Jhon."} jobType={"Data Analyst"} />
                                    </Link>
                                </>
                            ) : (
                                <>
                                    <AgentsBox imgUrl={"Jhon.png"} name={"Jhon."} jobType={"Data Analyst"} />

                                </>
                            )}

                         



                        </div></>) :
                        (<>
                            <div className="flex flex-col lg:flex-row gap-10 lg:gap-[30%]  md:gap-[10%] p-4 lg:p-2 ">

                                <div>

                                    <div className=' flex flex-col sm:gap-4 xl:gap-10 md:px-[40px] mt-1 italic'>
                                        <p className='text-white text-[20px]  md:text-[48px] md:mb-4 leading-[135%]  md:w-[440px] mb-3'>Select an agent Suitable for you</p>
                                        <h1 className='text-white md:text-8xl xl:text-[140px] text-4xl italic'>NEED.</h1>
                                    </div>


                                    <button onClick={() => handleClick('Jhon')}>
                                        <div className='ml-4 lg:ml-[40px]'>
                                            <AgentsBoxSmall imgUrl={"Jhon.png"} name={"Jhon."} jobType={"Data Analyst"} />
                                        </div>
                                    </button>
                                </div>

                                {linksEnabled ? (
                                    <>

                                        <Link href={"/playground"} className=''>
                                            <AgentsBox imgUrl={"Ana.png"} name={"Ana."} jobType={"HR Manager"} />
                                        </Link>
                                    </>
                                ) : (
                                    <>
                                        <AgentsBox imgUrl={"Ana.png"} name={"Ana."} jobType={"HR Manager"} />


                                    </>
                                )}

                            
                            </div>
                        </>)
                }

                <div className="slider self-center flex gap-2">
                    <button className={`transition-all duration-500 md:h-[12px] h-[8px] rounded-full ${active === 'Jhon' ? 'w-[100px] md:w-[200px] bg-gradient-to-r from-purple-500 via-blue-500 to-green-500' : 'w-[50px] bg-transparent border border-white'
                        }`}
                        onClick={() => handleClick('Jhon')}>

                    </button>
                    <button className={`transition-all duration-500 md:h-[12px] h-[8px] rounded-full ${active === 'Ana' ? 'w-[100px] md:w-[200px] bg-gradient-to-r from-purple-500 via-blue-500 to-green-500' : 'w-[50px] bg-transparent border border-white'
                        }`}
                        onClick={() => handleClick('Ana')}>

                    </button>
                    <div
                        className="md:h-[12px] h-[8px] w-[20px] rounded-full bg-transparent border border-gray-200"
                    ></div>
                </div>

            </div>
        </>
    )

}

export default agents


