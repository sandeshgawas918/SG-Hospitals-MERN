"use client"

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import axios from "axios"
import { useEffect, useState } from "react"
import moment from "moment/moment"

const AppointmentList = () => {
    const [bookings, setbookings] = useState(null)

    const getAllBookings = async () => {
        await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/getbookings`)
            .then((res) => {
                setbookings(res.data)
            })
            .catch((err) => console.log(err))
    }

    const deleteAppt = async (id) => {
        await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/api/deletebooking`, { data: { id } })
            .then((res) => {
                console.log(res);
                getAllBookings()
            })
            .catch((err) => {
                console.log(err);
            })
    }

    useEffect(() => {
        getAllBookings()
    }, [])
  return (
    <div>
        <div className=" m-5 mt-11">
                {/* <h1 className=" text-xl font-semibold">Appointment List</h1> */}
                <Table className='mt-2 text-center border shadow-lg'>
                    <TableHeader className='bg-zinc-600 text-white text-center'>
                        <TableRow className='text-center'>
                            <TableHead className='text-center'>Name</TableHead>
                            <TableHead className='text-center'>Email</TableHead>
                            <TableHead className='text-center'>Appt Schedule</TableHead>
                            <TableHead className='text-center'>Notes</TableHead>
                            <TableHead className='text-center'>Operation</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {
                            bookings && bookings.map((item, index) => (
                                <TableRow key={item._id}>
                                    <TableCell className="font-medium">{item.user.fname}</TableCell>
                                    <TableCell className="font-medium">{item.user.email}</TableCell>
                                    <TableCell className="font-medium">{moment(item.date).format('DD-MMM-YY')} || {item.time} </TableCell>
                                    <TableCell className="font-medium">{item.notes}</TableCell>
                                    <TableCell><button onClick={() => { deleteAppt(item._id) }} className=" bg-red-600 px-3 p-1 rounded-md text-white">delete</button></TableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>
            </div>
    </div>
  )
}

export default AppointmentList