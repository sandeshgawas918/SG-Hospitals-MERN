"use client"

import { Skeleton } from '@/components/ui/skeleton'
import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link'
import { useParams, useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const page = () => {
  const param = useParams()
  const category = param.category
  const router=useRouter()

  const [categoryDoctor, setcategoryDoctor] = useState([])

  const fetchCategoryWithDoctor = async () => {

    await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/categoryDoctor/${category}`,{withCredentials:true})
      .then((res) => {
        setcategoryDoctor(res.data[0].result);
      })
      .catch((err) => {
        console.log("FetchCategoryWithDoctor Error (Unauthorized user) : ", err);
        router.push('/register')
      })
  }

  useEffect(() => {
    fetchCategoryWithDoctor()
  }, [])

  return (
    <div>
      <div>
        <div className=' md:mt-5 md:px-10 mt-3'>
          <h1 className='md:text-4xl text-2xl text-black font-semibold text-center'>List of our popular doctor</h1>
          <div className=' grid md:grid-cols-4 md:gap-5 mt-8 md:mx-10  gap-4'>
            {
              categoryDoctor.length >0 ? categoryDoctor.map((item, index) => (
                <div className=' border-2 rounded-2xl flex flex-col p-4' key={index}>
                  <Image src={`${process.env.NEXT_PUBLIC_API_URL}${item.doctorIcon}`} width={300} height={300} alt='img' className=' w-full rounded-md' />
                  <h1 className=' bg-blue-100 rounded-full p-1 px-3 inline-block self-start mt-2 text-purple-600 text-[12px] font-semibold'>{category}</h1>
                  <h1 className='font-bold mt-3'>{item.doctorName}</h1>
                  <h1 className=' text-purple-600 mt-3'>{item.experience} years</h1>
                  <h1 className='font-semibold mt-3'>{item.address}</h1>
                  <Link href={`/doctor/${item._id}`} className=' border-purple-600 rounded-full p-3 border mt-5 text-center'>
                    Book Now
                  </Link>
                </div>
              )) : 
              [1, 2, 3].map((item, index) =>
                (
                    <Skeleton className="md:w-[120px] md:h-[270px] w-full h-[200px] rounded-md" />
                ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default page