import React, { useEffect, useState } from 'react'

const TimePicker = () => {
    const [timeSlot, settimeSlot] = useState([])
    const [selectedTime, setselectedTime] = useState('')

    const getTime = () => {
        const timeList = [];

        // First loop for 10 AM to 12 PM
        for (let i = 9; i <= 11; i++) {
            timeList.push({
                time: i + ":00 AM",
            });
            timeList.push({
                time: i + ":30 AM",
            });
        }

        // Second loop for 1 PM to 6:30 PM
        for (let i = 1; i <= 6; i++) {
            timeList.push({
                time: i + ":00 PM",
            });
            if (i < 6) {
                timeList.push({
                    time: i + ":30 PM",
                });
            }
        }

        settimeSlot(timeList);
    };

    useEffect(() => {
        getTime()
    }, [])

    return (
        <div>
            <pre>{JSON.stringify(selectedTime)}</pre>
            <div className=' grid grid-cols-3 gap-5 m-2'>
                {
                    timeSlot && timeSlot.map((item, index) => (
                        <div onClick={(e)=>setselectedTime(e.target.innerText)} className=' text-purple-600 bg-slate-100 rounded-lg text-center p-2 px-0 hover:bg-slate-200 cursor-pointer'>
                            {item.time}
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default TimePicker