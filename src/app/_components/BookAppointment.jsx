import React, { useEffect, useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Calendar } from '@/components/ui/calendar'
import TimePicker from './TimePicker'
import { Button } from '@/components/ui/button'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useParams } from 'next/navigation'
import moment from 'moment'


const BookAppointment = () => {
    const [date, setDate] = useState(new Date())
    const [notes, setnotes] = useState('')
    const params = useParams()

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

    const bookAppt = async () => {
        if (!date || !selectedTime) {
            toast.error('Something went wrong!')
        }
        await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/booking`,
            { date, notes, selectedTime, doctorId: params.id }, { withCredentials: true }
        )
            .then((res) => {
                setnotes('')
                setselectedTime('')
                setDate('')
                toast.success('Congrats! Booking done.')
            })
            .catch((err) => {
                toast.error('SOmething went wrong!')
                console.log('Error while booking :', err);
            })
    }

    return (
        <div>
            <ToastContainer />
            <Dialog className=''>
                <DialogTrigger>Book Appointment</DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Book Appointment</DialogTitle>
                        <DialogDescription>
                            <div className=' grid md:grid-cols-2 md:m-4 gap-4 '>
                                <div className='flex flow-row items-center justify-center border md:w-full rounded-sm'>
                                    <Calendar mode="single"
                                        selected={date}
                                        onSelect={setDate}
                                        className="rounded-md md:p-3"
                                    />
                                </div>
                                <div className=' border'>
                                    <div className=' grid md:grid-cols-3 grid-cols-4 gap-2 md:gap-5 p-2 md:w-full'>
                                        {
                                            timeSlot && timeSlot.map((item, index) => (
                                                <div onClick={(e) => setselectedTime(item.time)}
                                                    className={` ${item.time == selectedTime ? 'bg-purple-600 text-white' : 'bg-slate-100'} 
                                                 text-purple-600 rounded-lg text-center p-2 px-0 hover:bg-slate-200 hover:text-black cursor-pointer`}
                                                    key={index} >
                                                    {item.time}
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className='mt-2'>
                                <textarea name=""
                                    value={notes}
                                    onChange={(e) => { setnotes(e.target.value) }}
                                    placeholder='Enter Yuor Notes here..' id=""
                                    rows={3}
                                    className=' border rounded-sm p-3 w-[350px] md:w-[550px] *:'
                                >
                                </textarea>
                            </div>
                        </DialogDescription>
                    </DialogHeader>
                    <DialogFooter>
                        <Button type="submit" onClick={bookAppt}>Confirm</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>

        </div >
    )
}

export default BookAppointment