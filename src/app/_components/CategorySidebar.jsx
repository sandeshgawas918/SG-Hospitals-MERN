"use client"

import React, { useEffect, useState } from 'react'
import {
    Command,
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
} from "@/components/ui/command"
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';

const CategorySidebar = () => {

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
        <div className=' px-3'>
            <Command>
                <CommandInput placeholder="Type a command or search..." />
                <CommandList>
                    <CommandEmpty>No results found.</CommandEmpty>
                    <CommandGroup heading="Suggestions">
                        {
                            categories && categories.map((item, index) => (
                                <Link href={`/category/${item.categoryName}`} key={index} className=' flex flex-row gap-11 p-1 px-3 w-full'>
                                    <CommandItem className='p-3 w-full flex flex-row gap-4 text-purple-600'>
                                        <Image src={`http://localhost:7000${item.icon}`} width={40} height={40} alt='img' />
                                        {item.categoryName}
                                    </CommandItem>
                                </Link>
                            ))
                        }
                    </CommandGroup>
                </CommandList>
            </Command>

        </div>
    )
}

export default CategorySidebar