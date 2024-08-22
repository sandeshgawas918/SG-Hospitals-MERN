"use client"

import { Skeleton } from '@/components/ui/skeleton'
import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const DoctorSection = () => {
    const [doctors, setdoctors] = useState([])

    const fetchDocs = async () => {
        await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/fetchDoctors`)
            .then((res) => {
                // console.log(res?.data);
                // console.log(res?.data[0]?.category[0]?.categoryName);
                setdoctors(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    useEffect(() => {
        fetchDocs()
    }, [])

    return (
        <div>
            <div className=' mt-20 mx-[20px] px-20'>
                <h1 className='text-4xl text-black font-semibold text-center'>List of our popular doctor</h1>
                <div className=' grid lg:grid-cols-4 gap-9 mt-8 mx-20'>
                    {
                        doctors.length > 0 ? doctors.map((item, index) => (
                            index < 4 &&
                            <div className=' border-2 rounded-2xl flex flex-col p-4' key={index}>
                                <Image src={`${process.env.NEXT_PUBLIC_API_URL}${item.doctorIcon}`} width={300} height={300} alt='img' className=' w-full rounded-md' />
                                <h1 className=' bg-blue-100 rounded-full p-1 px-3 inline-block self-start mt-2 text-purple-600 text-[12px] font-semibold'>{item?.category[0]?.categoryName}</h1>
                                <h1 className='font-bold mt-3'>{item.doctorName}</h1>
                                <h1 className=' text-purple-600 mt-3'>{item.experience} years</h1>
                                <h1 className='font-semibold mt-3'>{item.address}</h1>
                                <Link href={`/doctor/${item._id}`} className=' border-purple-600 rounded-full p-3 border mt-5 text-center'>
                                    Book Now
                                </Link>
                            </div>
                        )) :
                            [1, 2, 3, 4].map((item, index) =>
                            (
                                <div key={index}>
                                    <Skeleton className="w-[190px] h-[300px] rounded-md" />
                                </div>
                            ))

                    }
                </div>
            </div>
        </div>
    )
}

export default DoctorSection