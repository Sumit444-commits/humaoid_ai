"use client"
import React from 'react'
import { useState } from 'react'
import Link from 'next/link'
import axios from 'axios'
import { useRouter } from 'next/navigation'

export default function createaccount () {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const router = useRouter()

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('/api/users', {
                name,
                email,
                password
            })
            router.push('/login')
        

        }catch(error){
        if(error.response && error.response.status===400){
            setError("Email already exists")
        }else{
            setError("Something went wrong")
        }
    }
    }

  return (
    <div className="relative h-screen bg-cover bg-center bg-no-repeat flex flex-col md:flex-row" style={{ backgroundImage: `url(backgrounds/Login.png)` }}>
      <img src="banner.svg" alt="" className="md:absolute md:top-0 md:w-1/3" />
      <div className="bg-[#00000046] md:p-8 py-4 px-8 rounded-[33px] shadow-lg w-[30vw] md:max-w-lg w-full md:pb-20 pb-10 md:fixed md:top-[18%] md:right-[10%]">
        <h2 className="text-5xl text-center text-white mb-5 mt-8 md:mb-8 md:mt-16">SignUp</h2>
        <p className="text-center text-gray-50 mb-8 md:mb-16 italic">Humanoid by Lyzer</p>
        <form onSubmit={handleSubmit}>
          <div className="md:mb-6 mb-4">
            <label htmlFor="name" className="block text-gray-50 text-sm italic mb-2">
              Name
            </label>
            <input
              type="name"
              id="name"
              name="name"
              value={name}
              placeholder='example: Jhon'
              onChange={(e) => setName(e.target.value)}
              className="shadow appearance-none bg-transparent border rounded-lg w-full py-4 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="md:mb-6 mb-4">
            <label htmlFor="email" className="block text-gray-50 text-sm italic mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              placeholder="jhondoe@email.com"
              onChange={(e) => setEmail(e.target.value)}
              className="shadow appearance-none bg-transparent border rounded-lg w-full py-4 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-50 text-sm italic mb-2">
              Password
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
           
          </div>
          {error && <p className="text-red-500 text-sm italic mb-4">{error}</p>}
          <button
            type="submit"
            className="w-full py-3 mt-4 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:shadow-outline"
          >
            Sign Up
          </button>
        </form>
        <p className="text-center text-gray-300 mt-6">
          Have an account? <Link href="/login" className="text-white hover:text-gray-200 underline">LogIn</Link>
        </p>
      </div>
    </div>
 )
}

