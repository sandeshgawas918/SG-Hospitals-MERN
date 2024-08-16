import DoctorSuggestion from '@/app/_components/DoctorSuggestion'
import React from 'react'

const layout = ({ children }) => {
    return (
        <div>
            <div className=' grid grid-cols-4'>
                <div className=' grid col-span-3'>
                    {children}
                </div>
                <div className=' grid col-span-1'>
                    <DoctorSuggestion />
                </div>
            </div>
        </div>
    )
}

export default layout