import CategorySidebar from '@/app/_components/CategorySidebar'
import React from 'react'

const layout = ({children}) => {
  return (
    <div>
        <div className='grid md:grid-cols-5'>
            <div className='grid md:col-span-1 mt-5'>
                <CategorySidebar/>
            </div>
            <div className='grid md:col-span-4'>
                {children }
            </div>
        </div>
    </div>
  )
}

export default layout