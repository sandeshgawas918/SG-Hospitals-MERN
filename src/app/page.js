"use client"

import React, { Suspense, useEffect, useState } from 'react'
import HeroSection from './_components/HeroSection'
const CategorySection = React.lazy(() => import('./_components/CategorySection'))
// import CategorySection from './_components/CategorySection'
import DoctorSection from './_components/DoctorSection'
import axios from 'axios'

const page = () => {
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

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div className=' mb-32'>
      <HeroSection />
      <Suspense fallback={<div>Loading...</div>}>
        <CategorySection categories={categories} />
      </Suspense>
      <DoctorSection />
    </div>
  )
}

export default page