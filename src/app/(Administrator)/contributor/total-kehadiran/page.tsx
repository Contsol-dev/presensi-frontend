"use client";
import React, { useEffect, useState } from "react";
import { MdOutlineFileDownload } from "react-icons/md";
import { CgInfo } from "react-icons/cg";
import NavbarContributor from "@/app/component/nav-contributor";
import ContributorProfile from "@/app/component/contributorProfile";
import { CiSearch } from "react-icons/ci";
import { FaUserCircle } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";

export default function utama() {
  return (
    <>
      <div className="lg:flex">
        <div>
          <NavbarContributor />
        </div>
        <div className="content overflow-auto bg-gray-200 w-full flex flex-col gap-5 lg:px-16 min-h-0">
          <ContributorProfile />
          <div className="text-3xl">
            <IoIosArrowBack />
          </div>
          <Search />
          <Total />
          <Table />
        </div>
      </div>
    </>
  );
}

function Search() {
  return (
    <div className="search flex justify-between gap-8 items-center w-content bg-[#404040] p-4">
      <div className="flex flex-row items-center gap-4">
        <FaUserCircle size={90} style={{ fill: "white" }} />
        <div className="textSearch text-white">
          <h1 className="text-sm font-bold">Syalita Widyandini</h1>
          <p className="text-sm font-inter">NIP: MJ/UIUX/POLINES/AGST2023/06</p>
        </div>
      </div>
      <div className="formSearch w-2/5 text-white font-inter">
        <p>Cari Status Kehadiran</p>
        <div className="search-container ">
          <form action="">
            <div className="search-wrapper ">
              <div className="search-content flex justify-center items-center gap-2 bg-gray-100 rounded-lg p-1 ">
                <div className="text-[#00000070] text-lg">
                  <CiSearch />
                </div>
                <input
                  className="bg-transparent text-xs h-7  w-4/5 focus:outline-none text-black "
                  type="text"
                  placeholder="Pencarian"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

function Total() {
  return (
    <>
      <div className="total flex gap-6">
        <div className="masaMagang flex flex-col w-64 h-28 p-2 bg-abu shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
          <div className="masa flex justify-between py-2  border-b border-gray-300">
            <p className="text-xs m-0 font-inter">Masa</p>
            <p className="text-xs m-0 font-inter">2023-08-21 ~ 2023-12-30</p>
          </div>
          <div className="masa flex justify-between py-2 border-b border-gray-300">
            <p className="text-xs m-0 font-inter">Jam default masuk</p>
            <p className="text-xs m-0 font-inter">06:30:00</p>
          </div>
          <div className="masa flex justify-between py-2  border-b border-gray-300">
            <p className="text-xs m-0 font-inter">Jam default pulang</p>
            <p className="text-xs m-0 font-inter">21:00:00</p>
          </div>
        </div>

        <div className="totalJam flex flex-col w-56 h-44  p-2  bg-abu shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
          <div className="masa flex justify-between py-2  border-b border-gray-300">
            <p className="text-xs m-0 font-inter">Total Jam Kerja </p>
            <p className="text-xs m-0 p-1 font-inter bg-[#20DB1C] rounded-3xl text-white">
              06:30:00
            </p>
          </div>
          <div className="masa flex justify-between py-2  border-b border-gray-300">
            <p className="text-xs m-0 font-inter">Total Masuk </p>
            <p className="text-xs m-0 p-1 font-inter bg-black rounded-3xl text-white">
              06:30:00
            </p>
          </div>
          <div className="masa flex justify-between py-2  border-b border-gray-300">
            <p className="text-xs m-0 font-inter">Target</p>
            <p className="text-xs m-0 p-1 font-inter bg-[#20DB1C] rounded-3xl text-white">
              06:30:00
            </p>
          </div>
          <div className="masa flex justify-between py-2  border-b border-gray-300">
            <p className="text-xs m-0 font-inter">Sisa</p>
            <p className="text-xs m-0 p-1 font-inter bg-black rounded-3xl text-white">
              06:30:00
            </p>
          </div>
        </div>

        <div className="totalTerlambat h-45 w-96 p-2 bg-abu shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
          <div className="masa flex justify-between py-3 border-b border-gray-300">
            <p className="text-xs m-0 font-inter">
              Total Terlambat (ditandai){" "}
            </p>
          </div>
          <div className="masa gap-2 flex justify-between py-3  border-b border-gray-300 ">
            <div className="w-1/2 text-xs m-0 font-inter flex gap-4 items-center justify-between">
              Masuk
              <p className="text-xs m-0 px-3 flex items-center font-inter bg-gray-600 rounded-3xl text-white">
                0x
              </p>
            </div>
            <div className="w-1/2 text-xs m-0 font-inter flex gap-4 items-center justify-between">
              Pulang
              <p className="text-xs m-0 px-3 flex items-center font-inter bg-gray-600 rounded-3xl text-white">
                0x
              </p>
            </div>
          </div>
          <div className="masa gap-2 flex justify-between py-3  border-b border-gray-300 ">
            <div className="w-1/2 text-xs m-0 font-inter flex gap-4 items-center justify-between">
              Istirahat Keluar
              <p className="text-xs m-0 px-3 flex items-center font-inter bg-gray-600 rounded-3xl text-white">
                0x
              </p>
            </div>
            <div className="w-1/2 text-xs m-0 font-inter flex gap-4 items-center justify-between">
              Istirahat Kembali
              <p className="text-xs m-0 px-3 flex items-center font-inter bg-gray-600 rounded-3xl text-white">
                0x
              </p>
            </div>
          </div>
          <div className="masa gap-2 flex justify-between py-3  border-b border-gray-300 ">
            <div className="w-1/2 text-xs m-0 font-inter flex gap-4 items-center justify-between">
              Ijin Keluar
              <p className="text-xs m-0 px-3 flex items-center font-inter bg-gray-600 rounded-3xl text-white">
                0x
              </p>
            </div>
            <div className="w-1/2 text-xs m-0 font-inter flex gap-4 items-center justify-between">
              Ijin Kembali
              <p className="text-xs m-0 px-3 flex items-center font-inter bg-gray-600 rounded-3xl text-white">
                0x
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="tabbleButton flex justify-between w-full ">
        <button
          className="bg-black p-2 "
          style={{ color: "white", fontSize: "12px" }}
        >
          &lt;&lt;&lt;&lt;&lt;
        </button>
        <button
          className="bg-black p-2"
          style={{ color: "white", fontSize: "12px" }}
        >
          &gt;&gt;&gt;&gt;&gt;
        </button>
      </div>
    </>
  );
}

function Table() {
  const [presensi, setPresensi] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://restaurant-api.dicoding.dev/list"
        );
        const jsonData = await response.json();
        setPresensi(jsonData.restaurants);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="tableData gap-10 w-full">
      <table className="tableTotal table-auto w-full">
        <thead className="bg-gray-300">
          <tr className="th bg-gray-300 text-xs lg:text-[12px] font-inter h-[75px]">
            <th rowSpan={2}></th>
            <th rowSpan={2}>No</th>
            <th className="w-40" rowSpan={2}>
              Tanggal
            </th>
            <th colSpan={2} className="border-b  border-black">
              Jam Kerja
            </th>
            <th colSpan={2} className="border-b  border-black">
              Jam Istirahat
            </th>
            <th className="w-40 border-b border-black">Total Jam Kerja</th>
            <th className="w-56" rowSpan={2}>
              Log Aktivitas
            </th>
            <th className="w-36" rowSpan={2}>
              Status Kehadiran
            </th>
            <th className="w-36" rowSpan={2}>
              Status Ganti Jam
            </th>
          </tr>
          <tr className="th bg-gray-300 text-xs lg:text-[12px] font-inter ">
            <th className="border-r border-black">Masuk</th>
            <th>Pulang</th>
            <th className="border-r border-black">Mulai</th>
            <th>Selesai</th>
            <th>Total Jam | (+) (-)</th>
          </tr>
        </thead>
        <tbody>
          {presensi.map((dataPresensi: any, index) => (
            <tr
              className="td border-b lg:text-[13px] border-gray-200"
              key={dataPresensi.id}
            >
              <td>
                <input type="checkbox" />
              </td>
              <td>{index + 1}</td>
              <td>{dataPresensi.name}</td>
              <td className="text-center">
                <a href="#">06:25:00</a>
              </td>
              <td className="text-center">
                <a href="#">13:05:14</a>
              </td>
              <td className="text-center">
                <a href="#">12:15:00</a>
              </td>
              <td className="text-center">
                <a href="#">13:00:00</a>
              </td>
              <td className="text-center">-- | --</td>
              <td className="text-center">
                Membuat page contributor total kehadiran
              </td>
              <td className="flex items-center justify-center gap-2 h-10 text-[#FF0606]">
                {" "}
                Tidak Hadir
                <CgInfo style={{ color: "black" }} />
              </td>
              <td className="text-center">Ganti jam</td>
            </tr>
          ))}
        </tbody>
      </table>

      <button className="bg-red-600 flex rounded-md text-xs items-center justify-center mb-4 gap-2 p-1 text-white w-20 font-inter">
        <MdOutlineFileDownload size={25} style={{ color: "white" }} /> PDF
      </button>
    </div>
  );
}
