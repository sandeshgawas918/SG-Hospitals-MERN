"use client";

import { Skeleton } from "@/components/ui/skeleton";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const DoctorSuggestion = () => {
  const [doctors, setdoctors] = useState([]);

  const fetchDocs = async () => {
    await axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/api/fetchDoctors`)
      .then((res) => {
        setdoctors(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchDocs();
  }, []);

  return (
    <div className=" border p-4 m-5 rounded-lg shadow-md">
      <h1 className=" text-center">Doctor Suggestion</h1>
      {doctors.length > 0
        ? doctors.map((item, index) => (
            <Link
              href={`/doctor/${item._id}`}
              className=" grid grid-cols-3 border p-3 rounded-lg mt-5 shadow-sm"
              key={index}
            >
              <div className=" grid col-span-1">
                <Image
                  src={`${process.env.NEXT_PUBLIC_API_URL}/${item.doctorIcon}`}
                  height={100}
                  width={100}
                  alt="img"
                  className=" rounded-full"
                />
              </div>
              <div className=" grid col-span-2 px-4">
                <div>
                  <h1 className="bg-blue-100 rounded-full px-2 p-1 inline-block self-start mt-2 text-purple-600 text-[10px] font-semibold">
                    {item?.category[0]?.categoryName}
                  </h1>
                </div>
                <h1 className="font-bold text-[12px]">{item.doctorName}</h1>
                <h1 className=" text-purple-600 text-[10px]">
                  {item.experience} years
                </h1>
                <h1 className="font-semibold text-[10px]">{item.address}</h1>
              </div>
            </Link>
          ))
        : [1, 2, 3, 4].map((item, index) => (
            <div className=" my-7">
              <Skeleton className="w-[250px] h-[150px] rounded-md" />
            </div>
          ))}
    </div>
  );
};

export default DoctorSuggestion;
