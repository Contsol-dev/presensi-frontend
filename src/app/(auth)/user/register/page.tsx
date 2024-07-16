"use client"
import { useState } from "react"

export default function Registrasi() {
    const [name,setName]  = useState("")
    return (
        <>
            <div className='bg-bg w-full h-full py-12 flex items-center justify-center'>

                <div className='max-w-[478px]  text-[16px]  w-[478px] bg-white rounded-2xl flex flex-col items-center gap-3 py-10'>

                    <b>Sign Up</b>
                    <span className='flex flex-col gap-1 w-full px-20'>
                        <span className='flex'>
                            <b>Nama Lengkap</b>
                            <b className='text-red-600'>*</b>
                        </span>
                        <input type="text" onChange={(e) =>setName(e.target.value)} placeholder='Masukan nama lengkap' className='h-36px p-1 border-2 border-black/50 w-full' />
                    </span>
                    <span className='flex flex-col gap-1 w-full px-20'>
                        <span className='flex'>
                            <b>Email</b>
                            <b className='text-red-600'>*</b>
                        </span>
                        <input type="email" placeholder='Masukkan email' className='h-36px p-1 border-2 border-black/50 w-full' />
                    </span>
                    <span className='flex flex-col gap-1 w-full px-20'>
                        <span className='flex'>
                            <b>Username</b>
                            <b className='text-red-600'>*</b>
                        </span>
                        <input type="text" placeholder='Masukkan username' className='h-36px p-1 border-2 border-black/50 w-full' />
                    </span>
                    <span className='flex flex-col gap-1 w-full px-20'>
                        <span className='flex'>
                            <b>no Telp</b>
                            <b className='text-red-600'>*</b>
                        </span>
                        <input type="number" placeholder='Cth: 08123-456-7890' className='h-36px p-1 border-2 border-black/50 w-full'  />
                    </span>
                    <span className='flex flex-col gap-1 w-full px-20'>
                        <span className='flex'>
                            <b>Tempat, tanggal lahir</b>
                            <b className='text-red-600'>*</b>
                        </span>
                        <input type="text" placeholder='Cth: Semarang, 10 September 2021' className='h-36px p-1 border-2 border-black/50 w-full' />
                    </span>
                    <span className='flex flex-col gap-1 w-full px-20'>
                        <span className='flex'>
                            <b>Asal sekolah/kampus</b>
                            <b className='text-red-600'>*</b>
                        </span>
                        <input type="text" placeholder='Masukkan asal sekolah/kampus' className='h-36px p-1 border-2 border-black/50 w-full' />
                    </span>
                    <span className='flex flex-col gap-1 w-full px-20'>
                        <span className='flex'>
                            <b>Password</b>
                            <b className='text-red-600'>*</b>
                        </span>
                        <input type="password" placeholder='Masukkan password' className='h-36px p-1 border-2 border-black/50 w-full' />
                    </span>
                    <span className='flex flex-col gap-1 w-full px-20'>
                        <span className='flex'>
                            <b>Konfirmasi password</b>
                            <b className='text-red-600'>*</b>
                        </span>
                        <input type="password" placeholder='Konfirmasi password' className='h-36px p-1 border-2 border-black/50 w-full' />
                    </span>
                    <a href="/user/barcode" className="bg-grey mt-3 hover:bg-button transition-all duration-150 text-white py-2 px-8 rounded-lg ">Daftar</a>



                </div>


            </div>

        </>

    )
}
