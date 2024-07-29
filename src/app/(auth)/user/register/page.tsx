"use client"
import { useState } from "react"
import { useRouter } from 'next/navigation';

export default function Registrasi() {
    const router = useRouter();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [phone, setPhone] = useState("");
    const [birthPlace, setBirthPlace] = useState("");
    const [birthDate, setBirthDate] = useState("");
    const [school, setSchool] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleRegister = async () => {
        const data = {
            username: username,
            email: email,
            password: password,
            konfirm_password: confirmPassword,
            nama: name,
            nomor_hp: phone,
            tempat_lahir: birthPlace,
            tanggal_lahir: birthDate,
            asal_sekolah: school
        };

        try {
            console.log(JSON.stringify(data));
            const response = await fetch('http://127.0.0.1:8000/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (!response.ok) {
                const errorDetails = await response.json();
                console.error('Server responded with an error:', errorDetails);
                throw new Error('Network response was not ok');
            }

            const result = await response.json();

            if (response.ok && result.success) {
                console.log('Success:', result.message);
                router.push('/user/login');
            } else {
                throw new Error(result.message || 'Registration failed');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <>
            <div className='bg-bg w-full h-full py-12 flex items-center justify-center'>

                <form className='max-w-[478px]  text-[16px]  w-[478px] bg-white rounded-2xl flex flex-col items-center gap-3 py-10'>

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
                        <input type="email" onChange={(e) =>setEmail(e.target.value)} placeholder='Masukkan email' className='h-36px p-1 border-2 border-black/50 w-full' />
                    </span>
                    <span className='flex flex-col gap-1 w-full px-20'>
                        <span className='flex'>
                            <b>Username</b>
                            <b className='text-red-600'>*</b>
                        </span>
                        <input type="text" onChange={(e) =>setUsername(e.target.value)} placeholder='Masukkan username' className='h-36px p-1 border-2 border-black/50 w-full' />
                    </span>
                    <span className='flex flex-col gap-1 w-full px-20'>
                        <span className='flex'>
                            <b>no Telp</b>
                            <b className='text-red-600'>*</b>
                        </span>
                        <input type="number" onChange={(e) =>setPhone(e.target.value)} placeholder='Cth: 08123-456-7890' className='h-36px p-1 border-2 border-black/50 w-full'  />
                    </span>
                    <span className='flex flex-col gap-1 w-full px-20'>
                        <span className='flex'>
                            <b>Tempat lahir</b>
                            <b className='text-red-600'>*</b>
                        </span>
                        <input type="text" onChange={(e) =>setBirthPlace(e.target.value)} placeholder='Cth: Semarang' className='h-36px p-1 border-2 border-black/50 w-full' />
                    </span>
                    <span className='flex flex-col gap-1 w-full px-20'>
                        <span className='flex'>
                            <b>Tanggal lahir</b>
                            <b className='text-red-600'>*</b>
                        </span>
                        <input type="date" onChange={(e) =>setBirthDate(e.target.value)} className='h-36px p-1 border-2 border-black/50 w-full' />
                    </span>
                    <span className='flex flex-col gap-1 w-full px-20'>
                        <span className='flex'>
                            <b>Asal sekolah/kampus</b>
                            <b className='text-red-600'>*</b>
                        </span>
                        <input type="text" onChange={(e) =>setSchool(e.target.value)} placeholder='Masukkan asal sekolah/kampus' className='h-36px p-1 border-2 border-black/50 w-full' />
                    </span>
                    <span className='flex flex-col gap-1 w-full px-20'>
                        <span className='flex'>
                            <b>Password</b>
                            <b className='text-red-600'>*</b>
                        </span>
                        <input type="password" onChange={(e) =>setPassword(e.target.value)} placeholder='Masukkan password' className='h-36px p-1 border-2 border-black/50 w-full' />
                    </span>
                    <span className='flex flex-col gap-1 w-full px-20'>
                        <span className='flex'>
                            <b>Konfirmasi password</b>
                            <b className='text-red-600'>*</b>
                        </span>
                        <input type="password" onChange={(e) =>setConfirmPassword(e.target.value)} placeholder='Konfirmasi password' className='h-36px p-1 border-2 border-black/50 w-full' />
                    </span>
                    <button type="button" onClick={handleRegister} className="bg-grey mt-3 hover:bg-button transition-all duration-150 text-white py-2 px-8 rounded-lg ">Daftar</button>
                </form>
            </div>
        </>
    )
}
