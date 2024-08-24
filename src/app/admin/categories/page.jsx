"use client";

import AddDoctorForm from "@/app/_components/AddDoctorForm";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const page = () => {
  const [categ, setcateg] = useState("");

  const getAllCateg = async () => {
    await axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/api/fetchCategories`)
      .then((res) => {
        setcateg(res.data);
      })
      .catch((err) => console.log(err));
  };

  const deleteAppt = async (id) => {
    await axios
      .delete(`${process.env.NEXT_PUBLIC_API_URL}/api/deletecategory`, {
        data: { id },
      })
      .then((res) => {
        getAllCateg();
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getAllCateg();
  }, []);

  return (
    <div className="">
      <div className="mt-10">

        <div className=" float-end m-5">
          <Link
            href={"/admin/categories/createcategory"}
            className=" bg-green-700 text-white px-3 p-2 rounded-md"
          >
            Add Category
          </Link>
        </div>

        <div className=" mt-10 m-5">
          <Table className="">
            <TableCaption>List of categories will be displayed here</TableCaption>
            <TableHeader className='bg-zinc-600 text-white'>
              <TableRow>
                <TableHead>Category Name</TableHead>
                <TableHead>Icon</TableHead>
                <TableHead>Available Doctor</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {categ &&
                categ.map((item, index) => (
                  <TableRow key={item._id}>
                    <TableCell>{item.categoryName}</TableCell>
                    <TableCell className='flex items-center justify-center'>
                      <Image
                        src={`${process.env.NEXT_PUBLIC_API_URL}/${item.icon}`}
                        width={50}
                        height={50}
                        alt="img"
                      />
                    </TableCell>
                    <TableCell >
                      {item.categoryDoctor.length > 0
                        ? item.categoryDoctor.map((doc, ind) => (
                          <ul className='flex flex-col'>
                            <li key={ind} className=''>{doc.doctorName}</li>
                          </ul>
                        ))
                        : "Not Available"}
                    </TableCell>
                    <TableCell>
                      <button
                        onClick={() => {
                          deleteAppt(item._id);
                        }}
                        className=" bg-red-600 px-3 p-1 rounded-md text-white"
                      >
                        delete
                      </button>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default page;
