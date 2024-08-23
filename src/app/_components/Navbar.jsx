"use client"

import Image from 'next/image'
import Link from 'next/link'
import React, { useContext, useEffect, useState } from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useRouter } from 'next/navigation'
import { useCookies } from 'react-cookie'
import { myContext } from '../MyContextProvider'
import axios from 'axios'


const Navbar = () => {
  const { isLoggedIn, setisLoggedIn } = useContext(myContext)
  const router = useRouter()

  const handleLogout = async () => {
    await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/logout`, { withCredentials: true })
      .then((res) => {
        localStorage.removeItem('userId')
        setisLoggedIn(false)
        router.push('/')
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <div>
      <ul className=" shadow-md flex items-center ">
        <div className="flex flow-row gap-10 p-5 items-center">
          <Link href={'/'}>
            <Image
              src="/hospital-logo.jpg"
              width={200}
              height={100}
              alt="img"
              className=" md:mx-20 rounded-full"
              priority
            />
          </Link>
          <Link
            href={"/"}
            className=" hover:text-purple-600 hover:scale-110 transition-transform cursor-pointer hidden lg:block"
          >
            Home
          </Link>
          <li className=" hover:text-purple-600 hover:scale-110 transition-transform cursor-pointer hidden lg:block">
            Explore{" "}
          </li>
          <li className=" hover:text-purple-600 hover:scale-110 transition-transform cursor-pointer hidden lg:block">
            Contact Us
          </li>
          <li className=" hover:text-purple-600 hover:scale-110 transition-transform cursor-pointer hidden lg:block">
            Category
          </li>
        </div>
        <div className=" ml-auto mx-9 flex items-center justify-center ">
          <Link href={"/admin"} className='hidden lg:block'>
            <button className={` ${isLoggedIn.userId ? 'hidden' : 'bg-green-600 hover:bg-green-800 mx-5 px-3 p-1 text-white rounded-md'}`} >
              Admin
            </button>
          </Link>
          {isLoggedIn ? (
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Image src='/user.webp' width={50} height={50} alt='img' />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Link href={'/dashboard'}>
                    Dashboard
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={handleLogout}>
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Link href={"/register"} className=" ml-auto">
              <button className=" bg-purple-600 hover:bg-purple-800 px-3 p-1 text-white rounded-md">
                Sign in
              </button>
            </Link>
          )}
        </div>
      </ul>
    </div>
  );
}

export default Navbar