'use client'
import Image from 'next/image';
import React, { useState, useRef, ChangeEvent, KeyboardEvent } from 'react';
import time from '@/assets/timeoutline.png';
import Link from 'next/link';

export default function OTP() {
    const [verificationCode, setVerificationCode] = useState(['', '', '', '']);
    const codeInputs = useRef(Array(4).fill(null));

    const handleCodeChange = (index: number, value: string) => {
        const updatedCode = [...verificationCode];
        updatedCode[index] = value;
        setVerificationCode(updatedCode);

        if (index < codeInputs.current.length - 1 && value !== '') {
            codeInputs.current[index + 1]?.focus();
        }
    };


    return (
        <div className='flex   flex-col items-center justify-center h-screen'>
            <div className='flex m-4 adjust flex-col items-center gap-12 md:text-xl'>
                <Image alt='iconTime' src={time} height={128} width={128} />

                <p className='text-center'>
                    Masukkan 4 digit kode OTP yang telah kami kirimkan ke email Anda.
                </p>

                <div className='flex gap-4'>
                    {verificationCode.map((digit, index) => (
                        <input
                            key={index}
                            type='text'
                            maxLength={1}
                            className='w-12 h-12 md:w-32 text-3xl md:h-32 text-center border rounded-lg'
                            value={digit}
                            onChange={(e) => handleCodeChange(index, e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === 'Backspace' && digit === '' && index > 0) {
                                    codeInputs.current[index - 1]?.focus();
                                }
                            }}
                            ref={(el) => (codeInputs.current[index] = el)}
                        />
                    ))}
                </div>

                <Link
                    href='/resetSandi'
                    className='py-4 px-20 bg-grey text-white hover:bg-button transition-all duration-150 rounded-[30px]'
                >
                    Verify Now
                </Link>

                <div className='flex gap-2'>
                    <p>Belum menerima email?</p>
                    <b className='text-h1'> Kirim ulang</b>
                </div>
            </div>
        </div>
    );
}
