"use client";

import axios from "axios";
import { ArrowBigLeftDash } from "lucide-react";
import Link from "next/link";
import React, { useRef, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Register from "../_components/Register";
import Login from "../_components/Login";

const page = () => {
  return (
    <div className=" mt-8">
      <ToastContainer />
      <Tabs defaultValue="Register" className="w-[400px] m-auto">
        <TabsList className="w-full">
          <TabsTrigger value="Register" className="w-full">Register</TabsTrigger>
          <TabsTrigger value="Login" className="w-full">Login</TabsTrigger>
        </TabsList>
        <TabsContent value="Register">
          <Register />
        </TabsContent>
        <TabsContent value="Login">
          <Login />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default page;
