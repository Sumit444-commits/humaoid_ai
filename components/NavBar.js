"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const NavBar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { data: session, status } = useSession();
  const router = useRouter();
  const [emailModified, setEmailModified] = useState("");

  useEffect(() => {
    if (status === 'authenticated' && session.user.email) {
      setEmailModified(session.user.email.charAt(0) + "...." + session.user.email.slice(session.user.email.indexOf('@')));
    }
  }, [status, session]);

  const handleLogin = () => {
    router.push("./login");
  };

  const handleLogout = () => {
    signOut();
    
  };

  const getInitial = (name) => {
    return name ? name.charAt(0).toUpperCase() : '';
  };

  return (
    <nav className='flex justify-between items-center h-[8vh] px-4 lg:px-20 py-2 bg-transparent shadow-2xl'>
      <Link href={"/agents"} className='flex items-center gap-3 lg:gap-5 text-white text-lg'>
        <img src="tie.svg" alt="Logo" className='h-6 w-6 lg:h-8 lg:w-8' />
        <span className='font-bold text-xl lg:text-2xl'>HUMAOID AI</span>
      </Link>
      {status !== 'authenticated' ? (
        <button className="bg-transparent text-white hover:underline hover:font-bold" onClick={handleLogin}>
          Sign In / Sign Up
        </button>
      ) : (
        <div className='flex items-center gap-3 lg:gap-5 text-white'>
          <div className='flex flex-col text-xs lg:text-base'>
            <h3 className='italic'>{session.user.name}</h3>
            <p className='text-gray-500'>{emailModified}</p>
          </div>
          {session.user.image ? (
            <img src={session.user.image} alt="Profile" className='h-6 w-6 lg:h-8 lg:w-8 rounded-full' />
          ) : (
            <div className='h-6 w-6 lg:h-8 lg:w-8 rounded-full bg-gray-500 flex items-center justify-center'>
              <span className='text-white text-sm lg:text-lg'>{getInitial(session.user.name)}</span>
            </div>
          )}
          <div className="relative">
            <button onClick={() => setDropdownOpen(!dropdownOpen)} className="h-6 w-6 lg:h-8 lg:w-8">
              <img src="drop.svg" alt="Dropdown" className='h-6 w-6 lg:h-8 lg:w-8' />
            </button>
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-20 bg-white rounded-full shadow-lg z-10">
                <button
                  onClick={handleLogout}
                  className="block w-full text-left px-3 py-1 text-white bg-custom-gradient rounded-full"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;

