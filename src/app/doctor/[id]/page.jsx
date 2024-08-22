"use client"

import BookAppointment from '@/app/_components/BookAppointment'
import { Button } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton'
import axios from 'axios'
import { FacebookIcon, GraduationCap, Linkedin, MapPinCheckInsideIcon, X, Youtube } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useParams, useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const page = () => {
  const [doctor, setdoctor] = useState('')
  const params = useParams()
  const router=useRouter()
  const id = params.id


  const getDoc = async () => {
    await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/fetchSingleDoctor/${id}`,{withCredentials:true})
      .then((res) => {
        setdoctor(res.data)
      })
      .catch((err) => {
        console.log(err);
        router.push('/register')
      })
  }

  useEffect(() => {
    getDoc()
  }, [])

  const socialMediaList = [
    {
      id: 1,
      icon: <Linkedin />,
      url: "/",
    },
    {
      id: 2,
      icon: <X />,
      url: "/",
    },
    {
      id: 3,
      icon: <FacebookIcon />,
      url: "/",
    },
    {
      id: 4,
      icon: <Youtube />,
      url: "/",
    },
  ];


  return (
    <div className="m-5">
      <h1 className=" text-2xl text-black font-semibold">Doctor Details</h1>
      <div className="flex flex-row p-10 border shadow-sm rounded-sm mt-3">
        <div className="">
          {
            doctor.doctorIcon ? <Image
            src={`${process.env.NEXT_PUBLIC_API_URL}/${doctor.doctorIcon}`}
            width={300}
            height={200}
            alt="img"
            className="rounded-sm"
          /> :
          <Skeleton className="w-[300px] h-[300px] rounded-md" />
          }
        </div>
        <div className=" m-3 ms-6">
          <div className=" flex flex-col">
            <h1 className="font-bold mt-3 text-2xl"> {doctor.doctorName}</h1>
            <h1 className=" flex flex-row gap-3 mt-3 text-xl">
              {" "}
              <GraduationCap /> {doctor.experience} years
            </h1>
            <h1 className="font-semibold mt-3 flex flex-row gap-3 text-xl">
              {" "}
              <MapPinCheckInsideIcon /> {doctor.address}
            </h1>
            <div className=" mt-3 self-start inline-block rounded-full">
              <h1 className=" bg-blue-100 p-1 px-4 text-purple-600 rounded-full">
                {doctor?.speciality?.categoryName}
              </h1>
            </div>
            <div className=" flex flex-row gap-8 mt-3">
              {socialMediaList &&
                socialMediaList.map((item, index) => (
                  <Link
                    href={"/"}
                    key={index}
                    className=" bg-slate-200 p-3 rounded-full"
                  >
                    {item.icon}
                  </Link>
                ))}
            </div>
          </div>
          <div className=" bg-purple-600 text-white p-2 rounded-md mt-4 inline-block">
            <BookAppointment />
          </div>
        </div>
      </div>

      <h1 className=" text-2xl text-black font-semibold mt-7">About Doctor</h1>
      <div className=' border shadow-sm p-3 rounded-sm mt-3'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa
        asperiores ad et, quae commodi totam maiores nemo quam quod corporis
        voluptatem repudiandae reprehenderit aspernatur cupiditate in laborum
        perspiciatis molestias veritatis debitis? Alias dignissimos repellat
        odio! Eveniet reiciendis sit quas molestias eum eligendi, quo, mollitia,
        temporibus minima magni nemo quasi a dolorem vitae perferendis! Quam,
        architecto a! Recusandae architecto ipsam numquam iusto! Laboriosam
        molestiae ea voluptatum officia ipsam quibusdam rerum, ratione iure!
        Provident dolore ex, facilis veniam itaque vero repellendus libero?
      </div>
    </div>
  );
}

export default page