"use client"
import { motion as m } from 'framer-motion';
import Link from 'next/link';
import React, { useState } from 'react'
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai'


export default function ResetSandi() {
    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
    
        setPasswordVisible(!passwordVisible);
    };

    
    return (
        <div className='h-screen flex flex-col justify-center items-center gap-10  '>
            <div className='flex flex-col justify-center items-center gap-10 adjust'>
                <div className='flex flex-col gap-5 text-center '>
                    <b className='text-[44px] text-h1'>Buat Password baru</b>
                    <p className='text-[32px]'>Password baru harus berbeda dari password sebelumnya.</p>
                </div>
                <div className="flex flex-col gap-8 ">

                    <div className="flex items-center space-x-2 border-2 border-black rounded-2xl   py-1 px-2 ">
                        <input
                            type={passwordVisible ? 'text' : 'password'}
                            className="p-2 border-none  w-[444px]  focus:outline-none rounded"
                            placeholder="Password"
                        />
                        <button
                            onClick={togglePasswordVisibility}
                            className="text-gray-500 hover:text-gray-700 focus:outline-none"
                        >
                            {passwordVisible ? (
                                <AiOutlineEye />
                            ) : (
                                <AiOutlineEyeInvisible />
                            )}
                        </button>
                    </div>
                    <div className="flex items-center space-x-2 border-2 border-black rounded-2xl   py-1 px-2 ">
                        <input
                            type={passwordVisible ? 'text' : 'password'}
                            className="p-2 border-none  w-[444px]  focus:outline-none rounded"
                            placeholder="Password"
                        />
                        <button
                            onClick={togglePasswordVisibility}
                            className="text-gray-500 hover:text-gray-700 focus:outline-none"
                        >
                            {passwordVisible ? (
                                <AiOutlineEye />
                            ) : (
                                <AiOutlineEyeInvisible />
                            )}
                        </button>
                    </div>
                    <m.div className='w-[370px] text-white flex justify-center mx-auto ' whileHover={{ scale: 1.05 }}>
                        <Link href='/user/login'
                            className='bg-h1 rounded-3xl p-4 w-[370px] text-white mt-10 font-semibold text-center  '>Reset Password
                        </Link>
                    </m.div>
                </div>
            </div>
        </div>
    )
}
