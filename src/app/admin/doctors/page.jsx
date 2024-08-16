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
import Link from "next/link";
import { useEffect, useState } from "react";

const page = () => {
  const [doc, setdoc] = useState(null);

  const getAllDocs = async () => {
    await axios
      .get(`http://localhost:7000/api/fetchDoctors`)
      .then((res) => {
        setdoc(res.data);
      })
      .catch((err) => console.log(err));
  };

  const deleteAppt = async (id) => {
    await axios
      .delete(`http://localhost:7000/api/deletedoctor`, {
        data: { id },
      })
      .then((res) => {
        console.log(res.data);
        getAllDocs();
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getAllDocs();
  }, []);

  return (
    <div className="mt-20">
      <div className=" float-end m-5">
        <Link
          href={"/admin/doctors/createdoctor"}
          className=" bg-green-700 text-white px-3 p-2 rounded-md"
        >
          Add Doctor
        </Link>
      </div>

      <div className="mt-10 m-5">
        <Table className="">
          <TableCaption>List of doctors will be displayed here</TableCaption>
          <TableHeader className='bg-zinc-600 text-white'>
            <TableRow>
              <TableHead>DoctorName</TableHead>
              <TableHead>Experience</TableHead>
              <TableHead>Speciality</TableHead>
              <TableHead>Address</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {doc &&
              doc.map((item, index) => (
                <TableRow key={item._id}>
                  <TableCell>{item.doctorName}</TableCell>
                  <TableCell>{item.experience} year(s)</TableCell>
                  <TableCell>
                    {item.category.length > 0
                      ? item.category[0].categoryName
                      : "Not available"}
                  </TableCell>
                  <TableCell>{item.address}</TableCell>
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
  );
};

export default page;
