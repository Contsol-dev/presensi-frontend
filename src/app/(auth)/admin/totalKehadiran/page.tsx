'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { AiOutlineMenu , AiOutlineClose} from 'react-icons/ai'
import { FaRegUser } from "react-icons/fa6";
import axios from 'axios';
import { MdOutlineFileDownload } from 'react-icons/md';
import { CgInfo } from 'react-icons/cg';


export default function utama() {

return (

<>
    <div className="container w-screen  flex m-auto lg:p-0  ">

        <Navbar />


        <div className="content overflow-auto bg-gray-200 w-full p-4 flex flex-col gap-5  min-h-0">
            <Profil />
            <Search />
            <Total />
            <Table />


        </div>



    </div>
</>
)
}




function Navbar(){
const [nav, setnav] = useState(true)
const [hide, sethide] = useState(false)


const shownav = () => {
setnav(!nav);
sethide(!hide);
};
return(
<>


    {hide && <button onClick={shownav}
        className='burger flex justify-center items-center left-12 top-4 w-6 h-6 text-white rounded-full shadow-lg bg-button z-40 fixed color'>
        <AiOutlineMenu /></button>}
    {nav &&
    <div
        className='navbar bg-[#DCDCDC] flex flex-col justify-between p-2  h-screen w-[340px] pb-20 sticky z-30 top-0 boxshadow border-r border-[#DCDCDC] '>
        <div onClick={shownav} className='absolute cursor-pointer right-5 top-5 text-xl'>
            <AiOutlineClose />
        </div>
        <div className="logo w-full flex  justify-center items-center">
            <img src="/logo.svg" width="50px" height="50px" alt="logo" />
        </div>



        <div className="menu w-11/12 h-3/6 p-4   ">
            <ul className='gap-4 flex flex-col text-sm font-inter'>
                <li><a href="">Dashboard</a></li>
                <li><a href="">Presensi</a></li>
                <li><a href="">Divisi</a></li>
                <li><a href="" className='font-bold'>Laporan</a></li>
                <li><a href="">Sekolah/Kampus</a></li>
                <li><a href="">Pengaturan</a></li>
            </ul>
        </div>
        <div className="logout w-11/12 flex gap-x-7 px-4 ">
            <h1>Log out</h1>
            <img className='w-5' src="/logout.svg" alt="" />

        </div>



    </div>
    }

</>


)
}

function Profil() {
    return (
    <>
        <div className="profil flex w-full items-center justify-end gap-4">
    
    
            <img className='lonceng w-5' src="/lonceng.svg" alt="lonceng" />
            <div className="name ">
                <h1 className='text-lg font-bold'>Nurfan Rahmat Berlian</h1>
                <p className='text-sm'>Admin</p>
            </div>
            <img className='profilImg' src="/kucing.png" width={50} height={50} alt="profil" />
        </div>
    
    </>
    )
    }

function Search(){
return (
<div className="search flex justify-center gap-8 items-center w-full bg-search p-2">
    <div className='w-10 h-10 bg-red-600 rounded-full flex items-center justify-center'>
        <FaRegUser size={30} style={{color:'white'}} />
    </div>
    <div className="textSearch  text-white">
        <h1 className='text-xs font-inter'>Syalita Widyandini</h1>
        <p className='text-xs font-inter'>NIP: MJ/UIUX/POLINES/AGST2023/06</p>
    </div>
    <div className="formSearch w-2/5 text-white font-inter">
        <p>Cari Mahasiswa</p>
        <div className="search-container ">
            <form action="">
                <div className="search-wrapper ">
                    <div className="search-content flex gap-2 bg-gray-100 rounded-lg p-1 ">
                        <img src="/search.svg" alt="search-icon" className="search-icon " />
                        <input className='bg-transparent text-xs h-7  w-4/5 focus:outline-none text-black ' type="text"
                            placeholder="Pencarian" />
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>
)
}

function Total(){
return (
<>
    <div className="total flex gap-2 ">
        <div className="masaMagang flex flex-col w-64 h-28 p-2  bg-abu shadow-total">
            <div className="masa flex justify-between py-2  border-b border-gray-300">
                <p className='text-xs m-0 font-inter'>Masa</p>
                <p className='text-xs m-0 font-inter'>2023-08-21 ~ 2023-12-30</p>
            </div>
            <div className="masa flex justify-between py-2  border-b border-gray-300">
                <p className='text-xs m-0 font-inter'>Jam default masuk</p>
                <p className='text-xs m-0 font-inter'>06:30:00</p>
            </div>
            <div className="masa flex justify-between py-2  border-b border-gray-300">
                <p className='text-xs m-0 font-inter'>Jam default pulang</p>
                <p className='text-xs m-0 font-inter'>21:00:00</p>
            </div>
        </div>

        <div className="totalJam flex flex-col w-56 h-44  p-2  bg-abu shadow-total">
            <div className="masa flex justify-between py-2  border-b border-gray-300">
                <p className='text-xs m-0 font-inter'>Total Jam Kerja </p>
                <p className='text-xs m-0 p-1 font-inter bg-hijau rounded-3xl text-white'>
                    06:30:00
                </p>
            </div>
            <div className="masa flex justify-between py-2  border-b border-gray-300">
                <p className='text-xs m-0 font-inter'>Total Masuk </p>
                <p className='text-xs m-0 p-1 font-inter bg-black rounded-3xl text-white'>
                    06:30:00
                </p>
            </div>
            <div className="masa flex justify-between py-2  border-b border-gray-300">
                <p className='text-xs m-0 font-inter'>Target</p>
                <p className='text-xs m-0 p-1 font-inter bg-hijau rounded-3xl text-white'>
                    06:30:00
                </p>
            </div>
            <div className="masa flex justify-between py-2  border-b border-gray-300">
                <p className='text-xs m-0 font-inter'>Sisa</p>
                <p className='text-xs m-0 p-1 font-inter bg-black rounded-3xl text-white'>
                    06:30:00
                </p>
            </div>
        </div>

        <div className="totalTerlambat
          w-96   p-2  bg-abu shadow-total">
            <div className="masa flex justify-between py-2  border-b border-gray-300">
                <p className='text-xs m-0 font-inter'>Total Terlambat (ditandai) </p>

            </div>
            <div className="masa gap-2 flex justify-between py-2  border-b border-gray-300 ">
                <div className='w-1/2 text-xs m-0 font-inter flex gap-4 items-center justify-between'>Masuk
                    <p className='text-xs m-0 px-3 flex items-center font-inter bg-gray-600 rounded-3xl text-white'>
                        0x
                    </p>
                </div>
                <div className='w-1/2 text-xs m-0 font-inter flex gap-4 items-center justify-between'>Masuk
                    <p className='text-xs m-0 px-3 flex items-center font-inter bg-gray-600 rounded-3xl text-white'>
                        0x
                    </p>
                </div>
            </div>
            <div className="masa gap-2 flex justify-between py-2  border-b border-gray-300 ">
                <div className='w-1/2 text-xs m-0 font-inter flex gap-4 items-center justify-between'>Masuk
                    <p className='text-xs m-0 px-3 flex items-center font-inter bg-gray-600 rounded-3xl text-white'>
                        0x
                    </p>
                </div>
                <div className='w-1/2 text-xs m-0 font-inter flex gap-4 items-center justify-between'>Pulang
                    <p className='text-xs m-0 px-3 flex items-center font-inter bg-gray-600 rounded-3xl text-white'>
                        0x
                    </p>
                </div>
            </div>
            <div className="masa gap-2 flex justify-between py-2  border-b border-gray-300 ">
                <div className='w-1/2 text-xs m-0 font-inter flex gap-4 items-center justify-between'>Istirahat Keluar
                    <p className='text-xs m-0 px-3 flex items-center font-inter bg-gray-600 rounded-3xl text-white'>
                        0x
                    </p>
                </div>
                <div className='w-1/2 text-xs m-0 font-inter flex gap-4 items-center justify-between'>Istirahat Kembali
                    <p className='text-xs m-0 px-3 flex items-center font-inter bg-gray-600 rounded-3xl text-white'>
                        0x
                    </p>
                </div>
            </div>
            <div className="masa gap-2 flex justify-between py-2  border-b border-gray-300 ">
                <div className='w-1/2 text-xs m-0 font-inter flex gap-4 items-center justify-between'>Ijin Keluar
                    <p className='text-xs m-0 px-3 flex items-center font-inter bg-gray-600 rounded-3xl text-white'>
                        0x
                    </p>
                </div>
                <div className='w-1/2 text-xs m-0 font-inter flex gap-4 items-center justify-between'>Ijin Kembali
                    <p className='text-xs m-0 px-3 flex items-center font-inter bg-gray-600 rounded-3xl text-white'>
                        0x
                    </p>
                </div>
            </div>
        </div>

    </div>
    <div className="tabbleButton flex justify-between w-full ">
        <button className='bg-search p-2 ' style={{color:'white', fontSize: '12px'}}>&lt;&lt;&lt;&lt;&lt;</button>
        <button className='bg-search p-2' style={{ color: 'white', fontSize: '12px' }}>&gt;&gt;&gt;&gt;&gt;</button>
    </div>
</>
)
}


function Table() {
  const [presensi, setPresensi] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://restaurant-api.dicoding.dev/list');
        const jsonData = await response.json();
        setPresensi(jsonData.restaurants);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="tableData gap-10 w-full">
      <table className="tableTotal table-auto w-full">
        <thead className='bg-gray-300'>
          <tr className='th bg-gray-300 text-xs font-inter '>
            <th rowSpan={2}></th>
            <th rowSpan={2}>No</th>
            <th className='w-40' rowSpan={2}>Tanggal</th>
            <th colSpan={2} className='border-b  border-black'>Jam Kerja</th>
            <th colSpan={2} className='border-b  border-black'>Jam Istirahat</th>
            <th className='w-40 border-b border-black'>Total Jam Kerja</th>
            <th className='w-56' rowSpan={2}>Status Kehadiran</th>
            <th className='w-36' rowSpan={2}>Status Ganti Jam</th>
          </tr>
          <tr className='th bg-gray-300 text-xs font-inter '>
            <th className='border-r border-black'>Masuk</th>
            <th>Pulang</th>
            <th className='border-r border-black'>Mulai</th>
            <th>Selesai</th>
            <th>Total Jam | (+)(-)</th>
          </tr>
        </thead>
        <tbody>
          {presensi.map((dataPresensi, index) => (
            <tr className='td border-b border-gray-200' key={dataPresensi.id}>
              <td><input type="checkbox" /></td>
              <td>{index + 1}</td>
              <td>{dataPresensi.name}</td>
              <td><a href="#">06:25:00</a></td>
              <td><a href="#">13:05:14</a></td>
              <td><a href="#">12:15:00</a></td>
              <td><a href="#">13:00:00</a></td>
              <td>
                07:00:53
                |
                +00:30:53
              </td>
              <td className="flex items-center justify-center gap-2 h-10 "> izin
                <CgInfo style={{ color: 'black' }} />
              </td>
              <td>Merapikan parkiran motor</td>
            </tr>
          ))}
        </tbody>
      </table>

      <button
        className='bg-red-600 flex rounded-md text-xs items-center justify-center gap-2 p-1 text-white w-20 font-inter'>
        <MdOutlineFileDownload size={25} style={{ color: 'white' }} /> PDF
      </button>
    </div>
  );
}
