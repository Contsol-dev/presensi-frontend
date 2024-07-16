/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';

interface DetailProps {
    selectedKey: number;
    selectedDetail: {
        nama: string;
        NIP : string;
        waktu: string;
        kampus : string;
        tempatLahir : string;
        tanggalLahir : Date;
        NoHP : string;
        username : string;
        Email : String;
        Password : String;
        masuk : Date;
        keluar : Date;
        project : string;
    };
}

export default function Sunting({ selectedKey, selectedDetail }: DetailProps){
    // buat fungsi
    const [password, setPassword] = useState<string>(selectedDetail?.Password !== undefined ? String(selectedDetail?.Password) : '')
    const [passwordVisible, setPasswordVisible] = useState(false)
    const [tanggalMasuk, setTanggalMasuk] = useState(selectedDetail?.masuk || '')
    const [tanggalKeluar, setTanggalKeluar] = useState(selectedDetail?.keluar || '')

    // buat fungsi onClick
    const togglePasswordVisibilty = () => setPasswordVisible(!passwordVisible)
    const handlePasswordChange =(e: React.ChangeEvent<HTMLInputElement>) => {
        const newPassword = e.target.value
        setPassword(newPassword)
    }

    return(
        // container
        <div className='detail-container py-4 flex flex-col '> 
        
            {/* header container */}
            <div className='header-container mb-2 md:mb-2'>
                <div 
                    className='relative header border-2 w-full mb-2 p-2 md:p-4 bg-zinc-900'>
                    <p className='text-s md:text-2xl text-white'><b>Sunting Team "{selectedDetail?.nama}"</b></p>
                    <span className='text-xs text-slate-400'>{selectedDetail?.NIP}</span>
                </div>

                <span className='Barcode text-red-600'>
                    <a href="">Lihat barcode</a>
                </span>
            </div>

            {/* container data */}
            <div className='data-container mb-2 md:mb-4'>

                {/* baris 1 */}
                <div className='row-1 flex flex-col md:flex-row md:space-y-4 md:space-x-4'> 

                    {/* form  Biodata */}
                    <form className='Biodata w-full md:w-1/3 h-fit p-4 mt-2 md:mt-4 border-2 border-zinc-400'>
                        <p className='px-1 mt-3'>Nama</p>
                            <span className="border-2 border-zinc-400 text-xs px-2 py-1 w-full h-7 block overflow-hidden whitespace-nowrap">{selectedDetail?.nama}</span>
                        <p className='px-1 mt-3'>Asal Sekolah/Kampus</p>
                            <span className="border-2 border-zinc-400 text-xs px-2 py-1 w-full h-7 block overflow-hidden whitespace-nowrap">{selectedDetail?.kampus}</span>
                        <p className='px-1 mt-3'>Tempat lahir</p>
                            <span className="border-2 border-zinc-400 text-xs px-2 py-1 w-full h-7 block overflow-hidden whitespace-nowrap">{selectedDetail?.tempatLahir}</span>
                        <p className='px-1 mt-3'>Tanggal lahir</p>
                            <span className="border-2 border-zinc-400 text-xs px-2 py-1 w-full h-7 block overflow-hidden whitespace-nowrap">{selectedDetail?.tanggalLahir.toLocaleDateString()}</span>
                        <p className='px-1 mt-3'>Nomor HP</p>
                            <span className="border-2 border-zinc-400 text-xs px-2 py-1 w-full h-7 block overflow-hidden whitespace-nowrap">{selectedDetail?.NoHP}</span>
                    </form>

                    {/* form  Akun */}
                    <form className='Akun w-full md:w-1/3 h-fit p-4 mt-4 border-2 border-zinc-400'>
                        <p className='px-1 mt-3'>Username</p>
                            <span className="border-2 border-zinc-400 text-xs px-2 py-1 w-full h-7 block overflow-hidden whitespace-nowrap">{selectedDetail?.username}</span>
                        <p className='px-1 mt-3'>Email</p>
                            <span className="border-2 border-zinc-400 text-xs px-2 py-1 w-full h-7 block overflow-hidden whitespace-nowrap">{selectedDetail?.Email}</span>
                        <p className='px-1 mt-3'>Password</p>
                            <div className="relative">
                                <input
                                    type={passwordVisible ? 'text' : 'password'}
                                    className="border-2 border-zinc-400 text-xs px-2 py-1 w-full h-7 block overflow-hidden whitespace-nowrap" 
                                    placeholder="Isi jika ingin di ubah" 
                                    value={password}
                                    onChange={handlePasswordChange}
                                />
                                <div
                                    className='absolute inset-y-1 right-0 flex item-center pr-2 cursor-pointer'
                                    onClick={togglePasswordVisibilty}
                                >
                                    {passwordVisible?(
                                        <svg
                                            xmlns='http://www.w3.org/2000/svg'
                                            fill='none'
                                            viewBox='0 0 24 24'
                                            stroke='currentColor'
                                            className='h-5 w-5 text-gray-500'
                                        >
                                            <path
                                                strokeLinecap='round'
                                                strokeLinejoin='round'
                                                strokeWidth='2'
                                                d='M19 91-7 7-7-7'
                                            />
                                        </svg>
                                    ) : (
                                        <svg
                                            xmlns='http://www.w3.org/2000/svg'
                                            fill='none'
                                            viewBox='0 0 24 24'
                                            stroke='currentColor'
                                            className='h-5 w-5 text-gray-500'
                                        >
                                            <path
                                                strokeLinecap='round'
                                                strokeLinejoin='round'
                                                strokeWidth='2'
                                                d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
                                            />
                                            <path
                                                strokeLinecap='round'
                                                strokeLinejoin='round'
                                                strokeWidth='2'
                                                d='M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                                            />
                                        </svg>
                                    )}
                                </div>
                            </div>
                        <p className='px-1 mt-3'>Ulangi Password</p>
                            <input 
                                type={passwordVisible ? 'text' : 'password'}
                                className="border-2 border-zinc-400 text-xs px-2 py-1 w-full h-7 block overflow-hidden whitespace-nowrap" 
                                placeholder='Ulangi Password'
                            />
                    </form>
                    
                    {/* form Kerja */}
                    <form className='Kerja w-full md:w-1/3 h-fit p-4 mt-4 border-2 border-zinc-400'>
                        <p className='px-1 mt-3'>Tanggal Masuk</p>
                            <input 
                                type='date' 
                                className="border-2 border-zinc-400 text-xs px-2 py-1 w-full h-7 block overflow-hidden whitespace-nowrap" 
                                value={tanggalMasuk.toISOString().split('T')[0]}
                                onChange={(e) => setTanggalMasuk(new Date(e.target.value))}
                            />
                        <p className='px-1 mt-3'>Tanggal keluar</p>
                            <input 
                                type='date'
                                className="border-2 border-zinc-400 text-xs px-2 py-1 w-full h-7 block overflow-hidden whitespace-nowrap"
                                value={tanggalKeluar.toISOString().split('T')[0]}
                                onChange={(e) => setTanggalKeluar(new Date(e.target.value))}
                            />
                        <p className='px-1 mt-3'>NIP</p>
                            <span className="border-2 border-zinc-400 text-xs px-2 py-1 w-full h-7 block overflow-hidden whitespace-nowrap">{selectedDetail?.NIP}</span>
                        <p className='px-1 mt-3'>Project</p>
                            <span className="border-2 border-zinc-400 text-xs px-2 py-1 w-full h-7 block overflow-hidden whitespace-nowrap">{selectedDetail?.project}</span>
                        <p className='px-1 mt-3'>Shift</p>
                            <input className="border-2 border-zinc-400 text-xs px-2 py-1 w-full h-7 block overflow-hidden whitespace-nowrap" placeholder='enter' />
                    </form>

                </div>

                {/* baris 2 */}
                <div className='row-2 flex flex-col md:flex-row md:space-y-4 md:space-x-4 mb-4'>

                    {/* form Perangkat */}
                    <form className='Perangkat w-full md:w-1/3 h-fit p-4 mt-4 border-2 border-zinc-400'>
                        <p className='px-1 mt-3'>OS</p>
                            <select className="border-2 border-zinc-400 text-xs px-2 py-1 w-full h-7 block overflow-hidden whitespace-nowrap">
                                <option value="Windows">Windows</option>
                                <option value="Machintosh">Machintosh</option>
                                <option value="Linux">Linux</option>
                            </select>
                        <p className='px-1 mt-3'>Browser</p>
                            <select className="border-2 border-zinc-400 text-xs px-2 py-1 w-full h-7 block overflow-hidden whitespace-nowrap">
                                <option value="Chrome">Chrome</option>
                                <option value="Mozilla Firefox">Mozilla Firefox</option>
                                <option value="Opera">Opera</option>
                            </select>
                        <p className='px-1 mt-3'>Lokasi Kantor</p>
                            <select className="border-2 border-zinc-400 text-xs px-2 py-1 w-full h-7 block overflow-hidden whitespace-nowrap">
                                <option value="Kantor 1">Kantor 1</option>
                                <option value="Kantor 2">Kantor 2</option>
                                <option value="Kantor 4">Kantor 4</option>
                            </select>
                        <p className='px-1 mt-3'>Status Absensi</p>
                            <span className="border-2 border-zinc-400 text-xs px-2 py-1 w-full h-7 block overflow-hidden whitespace-nowrap">11/09/2002</span>
                        <p className='px-1 mt-3'>Status Akun</p>
                            <select className="border-2 border-zinc-400 text-xs px-2 py-1 w-full h-7 block overflow-hidden whitespace-nowrap">
                                <option value="Aktif">Aktif</option>
                                <option value="Belum Aktif">Belum Aktif</option>
                            </select>
                        <p className='px-1 mt-3'>Konfirmasi Email</p>
                            <select className="border-2 border-zinc-400 text-xs px-2 py-1 w-full h-7 block overflow-hidden whitespace-nowrap">
                                <option value="Sudah">Sudah</option>
                                <option value="Belum">Belum</option>
                            </select>
                    </form>

                    {/* form Jam Kerja */}
                    <form className='Jam-kerja w-full md:w-1/3 h-fit p-4 mt-4 border-2 border-zinc-400'>
                        <p className='px-1 mt-3'>Minimal kerja (jumlah kerja)</p>
                            <input className="border-2 border-zinc-400 text-xs px-2 py-1 w-full h-7 block overflow-hidden whitespace-nowrap" placeholder='enter' />
                        <p className='px-1 mt-3'>Jam Default masuk</p>
                            <input className="border-2 border-zinc-400 text-xs px-2 py-1 w-full h-7 block overflow-hidden whitespace-nowrap" placeholder='enter' />
                        <p className='px-1 mt-3'>jam default pulang</p>
                            <input className="border-2 border-zinc-400 text-xs px-2 py-1 w-full h-7 block overflow-hidden whitespace-nowrap" placeholder='enter' />
                    </form>  

                </div>

            </div>

            <div className='flex-col w-1/3'>
                Tag Project
                <span className='flex w-1/2 gap-2 p-2 my-2 border-2 rounded-lg bg-white  '>
                    {selectedDetail?.project}
                    <b>X</b>
                </span>
            </div>

            {/* container hutang jam */}
            <div className='data-hutang-jam mb-4'>

                {/* header hutang jam */}
                <div 
                    className='header border-2 bg-red-200 p-2 md:p-4 mb-4 rounded-lg'
                >
                    <p className='text-s md:text-2xl'><b>Info</b></p>
                    <span className='text-xs'>Form Untuk Hutang Jam</span>
                </div>

                {/* data hutang jam */}
                <div className='hutang-jam w-full md:w-1/3 p-4 mt-4 border-2 border-zinc-400'>
                        <p className='px-1 mt-3'>Hutang Jam</p>
                        <input className="border-2 border-zinc-400 text-xs px-2 py-1 w-full h-7 block overflow-hidden whitespace-nowrap" placeholder='hhh:mm:ss' />
                        <span className='text-red-600 text-xs'>
                            *hhh:maks 999, mm&ss:maks 59
                        </span>

                </div>

            </div>
            
            {/* container G-Drive */}
            <div className='G-Drive mb-4'>

                {/* Header G-Drive */}
                <div 
                    className='header border-2 bg-red-200 wrap p-2 md:p-4 mb-4 rounded-lg'
                >
                    <p className='text-s md:text-2xl'><b>Input Link G-Drive Alumni</b></p>
                    <span className='text-xs'>Form Untuk Upload Link G-Drive Alumni</span>
                </div>

                {/* container link */}
                <div className='Link flex flex-col md:flex-row md:space2y-4 md:space-x-4 mb-4'>

                    {/* Link Sertifikat */}
                    <div className='sertifikat m w-full md:w-1/4 p-4 mt-4 border-2 border-zinc-400'>
                            <p className='border-b-2 border-zinc-400 text-center font-semibold'>Sertifikat</p>
                            <p className='px-1 mt-3'>Link G-Drive</p>
                            <input className="border-2 border-zinc-400 text-xs px-2 py-1 w-full h-7 block overflow-hidden whitespace-nowrap" placeholder='enter' />
                    </div>
                    
                    {/* Link Member Card */}
                    <div className='member-card m w-full md:w-1/4 p-4 mt-4 border-2 border-zinc-400'>
                            <p className='border-b-2 border-zinc-400 text-center font-semibold'>Member Card</p>
                            <p className='px-1 mt-3'>Link G-Drive</p>
                            <input className="border-2 border-zinc-400 text-xs px-2 py-1 w-full h-7 block overflow-hidden whitespace-nowrap" placeholder='enter' />
                    </div>

                    {/* Link Penilaian */}
                    <div className='penilaian-magang m w-full md:w-1/4 p-4 mt-4 border-2 border-zinc-400'>
                            <p className='border-b-2 border-zinc-400 text-center font-semibold'>Penilaian Magang</p>
                            <p className='px-1 mt-3'>Link G-Drive</p>
                            <input className="border-2 border-zinc-400 text-xs px-2 py-1 w-full h-7 block overflow-hidden whitespace-nowrap" placeholder='enter' />
                    </div>

                    {/* Link Grup WA */}
                    <div className='whatsApp-group m w-full md:w-1/4 p-4 mt-4 border-2 border-zinc-400'>
                            <p className='border-b-2 border-zinc-400 text-center font-semibold'>WhatsApp Group</p>
                            <p className='px-1 mt-3'>Link WhatsApp Group</p>
                            <input className="border-2 border-zinc-400 text-xs px-2 py-1 w-full h-7 block overflow-hidden whitespace-nowrap" placeholder='enter' />
                    </div>
                </div>
            </div>

            {/* Button Simpan */}
            <button className='w-48 bg-red-500 text-white text-xs rounded-lg self-center p-1 mt-auto'>Simpan</button>

        </div>


    )
}