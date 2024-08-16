"use client"

import { Button } from '@/components/ui/button'
import axios from 'axios'
import React, { useRef, useState } from 'react'

const AddCategoryForm = () => {
    const [categoryName, setcategoryName] = useState('')
    const [categoryicon, setcategoryicon] = useState('')
    const inputFile=useRef()

    const createCategory = async (e) => {
        e.preventDefault()

        const formData = new FormData()
        formData.append('categoryName', categoryName)
        formData.append('categoryicon', categoryicon)

        try {
            const createdCategory = await axios.post(`http://localhost:7000/api/createCategory`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            })
            setcategoryName('')
            inputFile.current.value=''
        } catch (error) {
            console.log('error while adding a category :',error);
        }
    }
  return (
    <div>
        <form
          action=""
          className=" border w-[400px] m-auto shadow-md rounded-md"
          encType="multipart/form-data"
        >
          <div className=" bg-green-600 text-white text-center font-semibold text-2xl p-5 rounded-t-sm">
            <h1>Add Category</h1>
          </div>
          <div className=" p-5 flex flex-col gap-4">
            <label htmlFor="" className=" font-bold">
              Category Name
            </label>
            <input
              value={categoryName}
              onChange={(e) => {
                setcategoryName(e.target.value);
              }}
              type="text"
              placeholder="Enter category name"
              className=" border w-full p-2 rounded-md"
            />
            <label htmlFor="" className=" font-bold mt-3">
              Category Icon
            </label>
            <input
            ref={inputFile}
              onChange={(e) => {
                setcategoryicon(e.target.files[0]);
              }}
              type="file"
              placeholder=" Upload icon"
              className=""
            />
          </div>
          <div className=" text-center mb-5">
            <Button
              onClick={createCategory}
              className="bg-green-600 hover:bg-green-700"
            >
              Submit
            </Button>
          </div>
        </form>
    </div>
  )
}

export default AddCategoryForm