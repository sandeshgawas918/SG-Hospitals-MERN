import { LayoutGrid, LogOut, PlusIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const AdminSidebar = () => {
    return (
        <div>
            <div className="flex h-screen flex-col justify-between border-e bg-[#1C2434] ">
                <div className="px-4 py-6">
                    {/* <Link href='/' className=" flex flex-col items-center justify-center mt-5">
                        <Image src="/logo.svg" width={170} height={100} alt="logo" />
                    </Link> */}
                    <ul className="mt-9 space-y-1 ">
                        <Link
                            href="/admin"
                            className="flex flex-row gap-3 text-xl rounded-lg px-4 py-2 font-medium text-gray-200"
                        >
                            <LayoutGrid />
                            Admin Panel
                        </Link>

                        <li>
                            <details className="group [&_summary::-webkit-details-marker]:hidden">
                                <summary className="flex flex-row cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-200">
                                    <span className="font-medium flex flex-row text-xl gap-3">
                                        {" "}
                                        <PlusIcon /> Add Entries{" "}
                                    </span>

                                    <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </span>
                                </summary>

                                <ul className="mt-2 space-y-1 px-4">
                                    <li>
                                        <Link
                                            href="/admin/categories"
                                            className="block rounded-lg px-4 py-2 text font-medium text-gray-200"
                                        >
                                            Categories
                                        </Link>
                                    </li>

                                    <li>
                                        <Link
                                            href="/admin/doctors"
                                            className="block rounded-lg px-4 py-2 text font-medium text-gray-200"
                                        >
                                            Doctors
                                        </Link>
                                    </li>
                                </ul>
                            </details>
                        </li>

                        {/* <Link
              href="#"
              className="flex flex-row gap-3 text-xl rounded-lg px-4 py-2 font-medium text-gray-200"
            >
              <AreaChart />
              Analytics
            </Link> */}
                    </ul>
                </div>

                <div className="sticky inset-x-0 bottom-0 ">
                    <div href="#" className="flex items-center gap-2 bg-[#24303F] p-4">
                        <Image
                            alt="img"
                            src="https://cdn.iconscout.com/icon/free/png-256/free-administrator-6992387-5728885.png"
                            className="size-10 rounded-full object-cover"
                            width={100}
                            height={100}
                        />
                        <div className=" flex items-center gap-5 justify-between">
                            <div>
                                <p className="text-xs text-white">
                                    <strong className="block font-medium ">SG Hospitals</strong>
                                    <span> sghospitals@admin </span>
                                </p>
                            </div>
                            <div>
                                <Link
                                    href="/"
                                    className=" text-white"
                                >
                                    <LogOut className=" text-white" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminSidebar