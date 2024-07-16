import React from 'react'
import { GrPrevious } from 'react-icons/gr'
export default function ResetPass() {
    return (
        <div className=''>
            <div className='flex adjust gap-2 h-10 py-10 items-center absolute px-10 lg:h-20  font-bold '>
                
                <a href="/user/login" className='flex items-center gap-2'> <GrPrevious className="font-bold text-2xl" /> Kembali ke halaman utama</a>
            </div>

            <div className='h-screen pt-10 md:0 flex justify-center items-center'>
                <div className='text-2xl  adjust flex flex-col justify-center items-center gap-20 mx-5 '>
                    <b className='text-[48px] text-h1 text-center'>Reset Password</b>
                    <div className='flex flex-col'>
                        <p className='text-center'>Masukkan email yang ditautkan ke akun Anda.</p>
                        <p className='text-center'>
                            Kami akan mengirimkan email konfirmasi untuk mengubah kata sandi Anda.
                        </p>
                    </div>
                    <input type="text" placeholder='Masukan Email yang telah terdaftar' className='py-3 px-6 rounded-[50px] border-2 border-black max-w-[644px] w-full' />


                    <a href="/otp" className='bg-button py-3 px-20 text-white rounded-xl hover:scale-[1.05] duration-150 transition-all'>Continue</a>
                </div>
            </div>
        </div>
    )
}
