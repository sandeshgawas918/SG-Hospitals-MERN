"use client"

import { Button } from '@/components/ui/button'
import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'

const AddDoctorForm = () => {
    const [doctorName, setdoctorName] = useState('')
    const [address, setaddress] = useState('')
    const [experience, setexperience] = useState('')
    const [speciality, setspeciality] = useState('')
    const [doctorIcon, setdoctorIcon] = useState('')
    const inputFile = useRef()
    const [categories, setcategories] = useState([]);
  
    const fetchCategories = async () => {
      await axios
        .get(`http://localhost:7000/api/fetchCategories`)
        .then((res) => {
          setcategories(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
  
    const createDoc = async (e) => {
      e.preventDefault()
  
      const formData = new FormData()
      formData.append('doctorName', doctorName)
      formData.append('address', address)
      formData.append('experience', experience)
      formData.append('speciality', speciality)
      formData.append('doctorIcon', doctorIcon)
  
      try {
        const createdDoc = await axios.post(`http://localhost:7000/api/createDoctor`, formData, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        })
        setdoctorName('')
        setaddress('')
        setexperience('')
        setspeciality('')
        inputFile.current.value = ''
      } catch (error) {
        console.log('hiii');
        console.log('error while adding a doctor :', error);
      }
    }
  
    useEffect(() => {
      fetchCategories();
    }, []);
  
  return (
    <div>
        <form
        action=""
        className=" border w-[400px] m-auto shadow-md rounded-md"
        encType="multipart/form-data"
      >
        <div className=" bg-green-600 text-white text-center font-semibold text-2xl p-5 rounded-t-sm">
          <h1>Add Doctor</h1>
        </div>
        <div className=" p-5 flex flex-col gap-4">
          <label htmlFor="" className=" font-bold">
            Doctor Name
          </label>
          <input
            value={doctorName}
            onChange={(e) => {
              setdoctorName(e.target.value);
            }}
            type="text"
            placeholder="Enter category name"
            className=" border w-full p-2 rounded-md"
          />
          <label htmlFor="" className=" font-bold">
            Doctor Experience
          </label>
          <input
            value={experience}
            onChange={(e) => {
              setexperience(e.target.value);
            }}
            type="text"
            placeholder="Enter experience of doctor"
            className=" border w-full p-2 rounded-md"
          />
          <label htmlFor="" className=" font-bold">
            Doctor Address
          </label>
          <input
            value={address}
            onChange={(e) => {
              setaddress(e.target.value);
            }}
            type="text"
            placeholder="Enter address of doctor"
            className=" border w-full p-2 rounded-md"
          />
          <label htmlFor="" className=" font-bold mt-3">
            Doctor Profile Pic
          </label>
          <input
            ref={inputFile}
            onChange={(e) => {
              setdoctorIcon(e.target.files[0]);
            }}
            type="file"
            placeholder=" Upload icon"
            className=""
          />
          <label htmlFor="" className=" font-bold mt-3">
            Doctor Speciality
          </label>
          <select
            onChange={(e) => {
              setspeciality(e.target.value);
            }}
            name="mySelect"
            className=" border w-full p-2 rounded-md"
          >
            <option value="">Select Speciality</option>
            {
              categories && categories.map((item, index) => (
                <option value={item._id} key={item._id}>{item.categoryName}</option>
              ))
            }
          </select>
        </div>
        <div className=" text-center mb-5">
          <Button
            onClick={createDoc}
            className="bg-green-600 hover:bg-green-700"
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  )
}

export default AddDoctorForm