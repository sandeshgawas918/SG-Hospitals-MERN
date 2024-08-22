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


const Navbar = () => {
  const {isLoggedIn, setisLoggedIn}=useContext(myContext)
  const router = useRouter()

  const handleLogout = () => {
    localStorage.removeItem('userId')
    setisLoggedIn(false)
    router.push('/')
  }
  
  return (
    <div>
      <ul className=" shadow-md flex items-center ">
        <div className="flex flow-row gap-10 p-5 items-center">
          <Image
            src="/logo.svg"
            width={200}
            height={100}
            alt="img"
            className=" mx-20"
            priority
          />
          <Link
            href={"/"}
            className=" hover:text-purple-600 hover:scale-110 transition-transform cursor-pointer"
          >
            Home
          </Link>
          <li className=" hover:text-purple-600 hover:scale-110 transition-transform cursor-pointer">
            Explore{" "}
          </li>
          <li className=" hover:text-purple-600 hover:scale-110 transition-transform cursor-pointer">
            Contact Us
          </li>
          <li className=" hover:text-purple-600 hover:scale-110 transition-transform cursor-pointer">
            Category
          </li>
        </div>
        <div className=" ml-auto mx-9 flex items-center justify-center">
          <Link href={"/admin"}>
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
                <DropdownMenuItem onClick={handleLogout}>LogOut</DropdownMenuItem>
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