"use client"

import React, { useEffect, useState } from 'react'
import { BriefcaseMedical, CalendarCheck, CalendarCheck2Icon, CalendarX2, HospitalIcon } from 'lucide-react'
import axios from 'axios'

const CountsDisplay = () => {
    const [count, setcount] = useState({})
    const getCount=async()=>{
        axios.get(`http://localhost:7000/api/count`)
        .then((res)=>{
            setcount(res.data)
        })
        .catch((err)=>console.log(err))
    }

    useEffect(()=>{
        getCount()
    },[])
  return (
    <div>
        <div className=' grid grid-cols-4 m-7 gap-10'>
            <div className=' border shadow-md flex items-center justify-center flex-col p-5 gap-3'>
                <span><CalendarCheck/> </span>
                <h2 className=' text-xl'>Upcoming</h2>
                <h2 className=' text-xl'>Appointments</h2>
                <h1 className='text-5xl'>{count.upcomingCount}</h1>
            </div>
            <div className=' border shadow-md flex items-center justify-center flex-col p-5 gap-3'>
                <span><CalendarX2/></span>
                <h2 className=' text-xl'>Expired Appointments</h2>
                <h1 className='text-5xl'>{count.expiredCount}</h1>
            </div>
            <div className=' border shadow-md flex items-center justify-center flex-col p-5 gap-3'>
                <span><BriefcaseMedical/></span>
                <h2 className=' text-xl'>Total Doctors</h2>
                <h1 className='text-5xl'>{count.doctorCount}</h1>
            </div>
            <div className=' border shadow-md flex items-center justify-center flex-col p-5 gap-3'>
                <span><HospitalIcon/></span>
                <h2 className=' text-xl'>Total Categories</h2>
                <h1 className='text-5xl'>{count.categoryCount}</h1>
            </div>
        </div>
    </div>
  )
}

export default CountsDisplay