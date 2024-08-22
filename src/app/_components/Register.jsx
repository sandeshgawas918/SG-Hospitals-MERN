import axios from 'axios';
import Link from 'next/link';
import React, { useState } from 'react'
import { toast } from 'react-toastify';

const Register = () => {
    const [fname, setfname] = useState("");
    const [email, setemail] = useState("");
    const [mobile, setmobile] = useState("");
    const [password, setpassword] = useState("");
    const [lname, setlname] = useState("");

    const registerUser = async (e) => {
        e.preventDefault();
        let user = await axios
            .post(`${process.env.NEXT_PUBLIC_API_URL}/api/register`, { fname, email, mobile, password, lname })
            .then((res) => {
                toast.success('Registration Successfull...')
                setemail("");
                setfname("");
                setmobile("");
                setpassword("");
                setlname("");
            })
            .catch((err) => {
                toast.error('Form not filled properly. Please fill again.')
                console.log("Error on register route (nextapp) : ", err);
            });
    };
    return (
        <div>
            <form
                action=""
                className=" flex flex-col justify-center items-center"
                encType="multipart/form-data"
            >
                <div className=" text-center md:w-[400px] p-7 border rounded-lg flex flex-col gap-5 md:mt-5 shadow-md">
                    <div className="text-3xl text-orange-600 font-bold">
                        Register Here
                    </div>
                    <input
                        value={fname}
                        onChange={(e) => {
                            setfname(e.target.value);
                        }}
                        type="text"
                        placeholder="enter your first name *"
                        className=" p-3 text-black rounded-xl font-semibold border"
                    />
                    <input
                        value={lname}
                        onChange={(e) => {
                            setlname(e.target.value);
                        }}
                        type="text"
                        placeholder="enter your last name"
                        className=" p-3 text-black rounded-xl font-semibold border"
                    />
                    <input
                        value={email}
                        onChange={(e) => {
                            setemail(e.target.value);
                        }}
                        type="text"
                        placeholder="enter your email *"
                        className=" p-3 text-black rounded-xl font-semibold border"
                    />
                    <input
                        value={mobile}
                        onChange={(e) => {
                            setmobile(e.target.value);
                        }}
                        type="text"
                        placeholder="enter your mobile no."
                        className=" p-3 text-black rounded-xl font-semibold border"
                    />
                    <input
                        value={password}
                        onChange={(e) => {
                            setpassword(e.target.value);
                        }}
                        type="password"
                        placeholder="enter desired password *"
                        className=" p-3 text-black rounded-xl font-semibold border"
                    />
                    <button
                        onClick={registerUser}
                        className=" bg-orange-600 px-5 p-2 rounded-md"
                    >
                        Register
                    </button>
                    <Link href="/" className=" bg-yellow-600 px-5 p-2 rounded-md">
                        Home
                    </Link>
                </div>
            </form>
        </div>
    )
}

export default Register