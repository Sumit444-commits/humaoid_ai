"use client";
import React, { useState } from "react";
import Link from "next/link";
import { signIn, useSession } from "next-auth/react";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { useRouter } from "next/navigation";

const login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const { status } = useSession();

  if (status === "authenticated") {
    router.push("/");
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    signIn("credentials", { email, password, redirect: false }).then((response) => {
      if (response.error) {
        setError("Invalid email/password");
      } else {
        router.push("/");
      }
    });
  };

  return (
    <div className="relative h-screen bg-cover bg-center bg-no-repeat flex flex-col md:flex-row" style={{ backgroundImage: `url(backgrounds/Login.png)` }}>
      <img src="banner.svg" alt="" className="md:absolute md:top-0 md:w-1/3" />
      <div className="bg-[#00000046] md:p-8 py-4 px-8 rounded-[33px] shadow-lg w-[30vw] md:max-w-lg w-full md:pb-20 pb-10 md:fixed md:top-[18%] md:right-[10%]">
        <h2 className="text-5xl text-center text-white mb-5 mt-8 md:mb-8 md:mt-16">Login</h2>
        <p className="text-center text-gray-50 mb-8 md:mb-16 italic">Humanoid by Lyzer</p>
        <form onSubmit={handleSubmit}>
          <div className="md:mb-6 mb-4">
            <label htmlFor="email" className="block text-gray-50 text-sm italic mb-2">
              Enter your email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              placeholder="johndoe@email.com"
              onChange={(e) => setEmail(e.target.value)}
              className="shadow appearance-none bg-transparent border rounded-lg w-full py-4 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-50 text-sm italic mb-2">
              Enter your Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              name="password"
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
              className="shadow appearance-none bg-transparent border rounded-lg w-full py-4 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
              required
            />
            <Link href="#" className="flex justify-end text-[12px] text-gray-50 hover:text-gray-400 underline">
              Forgot Password?
            </Link>
          </div>
          {error && <p className="text-red-500 text-sm italic mb-4">{error}</p>}
          <button
            type="submit"
            className="w-full py-3 mt-4 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:shadow-outline"
          >
            Log In
          </button>
        </form>
        <div className="flex justify-between items-center my-4 mx-7 text-center text-gray-400 gap-3">
          <div className="h-[1px] bg-white w-full"></div>
          <span className="text-[12px]">or</span>
          <div className="h-[1px] bg-white w-full"></div>
        </div>
        <div className="flex flex-col space-y-4">
          <button
            className="flex items-center justify-center bg-transparent text-gray-50 py-2 px-4 rounded-lg border-[2px] border-white focus:outline-none focus:shadow-outline"
            onClick={() => signIn("google")}
          >
            <FaGoogle className="mr-2" />
            Sign in with Google
          </button>
          <button
            className="flex items-center justify-center bg-transparent text-gray-50 py-2 px-4 rounded-lg border-[2px] border-white focus:outline-none focus:shadow-outline"
            onClick={() => signIn("github")}
          >
            <FaGithub className="mr-2" />
            Sign in with GitHub
          </button>
        </div>
        <p className="text-center text-gray-300 mt-6">
          Don't have an account? <Link href="/createaccount" className="text-white hover:text-gray-200 underline">Signup</Link>
        </p>
      </div>
    </div>
  );
};

export default login;

