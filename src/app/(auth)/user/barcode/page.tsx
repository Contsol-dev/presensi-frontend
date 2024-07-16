import React from 'react'
import Image from 'next/image';
import BarCode from '@/assets/Barcode.png'
import {HiOutlineDownload} from 'react-icons/hi'
export default function Barcode() {
    return (
        <div className='h-screen bg-bg flex justify-center items-center'>

            <div className=' adjust  flex flex-col justify-center w-full items-center'>
                <div className=' flex flex-col bg-white max-w-[600px] w-[100%] h-[600px] justify-center items-center text-2xl rounded-3xl m-5 gap-5'>
                    <b>Username QR CODE</b>
                    <Image
                        src={BarCode}
                        alt="Logo"
                        width={365}
                        height={365}
                    />
                </div>
                <a href="/user/login" className='text-white text-xl flex gap-2 items-center hover:scale-[1.1] duration-150 transition-all'><HiOutlineDownload/>Simpan</a>
            </div>

        </div>
    )
}
