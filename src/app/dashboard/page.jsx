"use client";

import React, { useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import axios from "axios";
import moment from "moment/moment";
import {
    CalendarCheck,
    CircleX,
    Clock,
    FileX,
    LocateIcon,
    MapPinCheckIcon,
    SquareXIcon,
    Trash2,
} from "lucide-react";

const page = () => {
    const [appointments, setappointments] = useState([]);

    const getAppt = async () => {
        await axios
            .get(`${process.env.NEXT_PUBLIC_API_URL}/api/appointments`, { withCredentials: true })
            .then((res) => {
                setappointments(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const cancelAppt=async(id)=>{
        console.log(id)
        await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/api/deletebooking/${id}`)
        .then((res)=>{
            getAppt()
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    useEffect(() => {
        getAppt();
    }, []);

    return (
        <div className=" md:mt-10 md:px-28">
            <h1 className=" md:text-3xl text-xl mt-2 font-bold">My Bookings</h1>
            <Tabs defaultValue="upcoming" className="w-full mt-5">
                <TabsList>
                    <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
                    <TabsTrigger value="expired">Expired</TabsTrigger>
                </TabsList>
                {appointments &&
                    appointments.map((item, index) =>
                        new Date(item.date).toLocaleDateString() >
                            new Date().toLocaleDateString() ? (
                            <TabsContent value="upcoming" key={item._id} className='shadow-lg' >
                                <div
                                    className=" w-full flex md:flex-row flex-col p-4 border rounded-md mt-3  "
                                    key={item._id}
                                >
                                    <Image
                                        src={`${process.env.NEXT_PUBLIC_API_URL}/${item?.doctor?.doctorIcon}`}
                                        width={150}
                                        height={60}
                                        alt="img"
                                        className="md:rounded-full p-3 w-full md:w-auto h-[250px] "
                                    />
                                    <div className=" flex flex-col justify-center gap-3 ml-5    ">
                                        <h1 className=" text-xl font-semibold">
                                            {" "}
                                            {item.doctor.doctorName}
                                        </h1>
                                        <h1 className="text-xl text-zinc-600 flex flex-row gap-3">
                                            <MapPinCheckIcon className=" text-purple-600" />{" "}
                                            {item.doctor.address}
                                        </h1>
                                        <h1 className="md:text-xl font-semibold flex flex-row gap-3">
                                            {" "}
                                            <CalendarCheck className=" text-purple-600" /> Appointment
                                            Date : {moment(item.date).format("DD-MMM-YYYY")}
                                        </h1>
                                        <h1 className="md:text-xl font-semibold flex flex-row gap-3">
                                            {" "}
                                            <Clock className="text-purple-600" /> Appointment Time :{" "}
                                            {moment(item.date).format("h:mm a")}
                                        </h1>
                                    </div>
                                    <div onClick={()=>{cancelAppt(item._id)}} className=" ml-auto">
                                        <button className="px-3 p-1 rounded-lg text-white flex flow-col"><Trash2 className=" text-red-500"/> </button>
                                    </div>
                                </div>
                            </TabsContent>
                        ) : (
                            <TabsContent value="expired" key={item._id} className='shadow-lg'>
                                <div
                                    className=" w-full flex md:flex-row flex-col p-4 border rounded-md mt-3"
                                    key={item._id}
                                >
                                    <Image
                                        src={`${process.env.NEXT_PUBLIC_API_URL}/${item.doctor.doctorIcon}`}
                                        width={150}
                                        height={60}
                                        alt="img"
                                        className="md:rounded-full w-full md:w-auto h-[250px] p-3"
                                    />
                                    <div className=" flex flex-col gap-3 ml-5">
                                        <h1 className=" text-xl font-semibold">
                                            {" "}
                                            {item.doctor.doctorName}
                                        </h1>
                                        <h1 className="text-xl text-zinc-600 flex flex-row gap-3">
                                            <MapPinCheckIcon className=" text-purple-600" />{" "}
                                            {item.doctor.address}
                                        </h1>
                                        <h1 className="md:text-xl font-semibold flex flex-row gap-3">
                                            {" "}
                                            <CalendarCheck className=" text-purple-600" /> Appointment
                                            Date : {moment(item.date).format("DD-MMM-YYYY")}
                                        </h1>
                                        <h1 className="md:text-xl font-semibold flex flex-row gap-3">
                                            {" "}
                                            <Clock className="text-purple-600" /> Appointment Time :{" "}
                                            {moment(item.date).format("h:mm a")}
                                        </h1>
                                    </div>
                                </div>
                            </TabsContent>
                        )
                    )}
            </Tabs>
        </div>
    );
};

export default page;
