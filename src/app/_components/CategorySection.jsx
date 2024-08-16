"use client";

import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";

const CategorySection = ({ categories }) => {
  // const [categories, setcategories] = useState(categories);

  return (
    <div>
      <div className=" mt-10 text-center flex flex-col items-center justify-center min-w-full gap-4">
        <h1 className="text-4xl text-black font-extrabold">
          Search Doctor by Category
        </h1>
        <h1 className="text-3xl text-black">
          Search Doctor and Book appointment in one click
        </h1>
        <div className=" grid md:grid-cols-4 gap-9 mt-5">
          {categories.length > 0 ? (
            categories.map((item, index) => (
              <Link
                href={`/category/${item.categoryName}`}
                className=" bg-blue-50 flex flex-col items-center 
                justify-center px-6 pb-4 shadow-md rounded-sm 
                hover:scale-110 transition-all ease-in-out"
                key={index}
              >
                <Image
                  src={`http://localhost:7000${item.icon}`}
                  width={100}
                  height={90}
                  alt="img"
                  className="p-5"
                />
                <h1 className=" text-black">{item.categoryName}</h1>
              </Link>
            ))
          ) : [1, 2, 3, 4].map((item, index) => (
            (
              <Skeleton className="w-[150px] h-[150px] rounded-md" />
            )
          ))
          }
        </div>
      </div>
    </div>
  );
};

export default CategorySection;
