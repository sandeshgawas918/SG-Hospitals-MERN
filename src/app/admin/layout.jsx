import React from 'react'
import AdminSidebar from '../_components/AdminSidebar'

const layout = ({children}) => {
    return (
        <div className=' grid grid-cols-5 mt-1'>
            <div className='grid col-span-1'>
                <AdminSidebar/>
            </div>
            <div className='grid col-span-4 '>
                {children}
            </div>
        </div>
    )
}

export default layout