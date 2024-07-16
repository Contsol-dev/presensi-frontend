"use client";
import React from "react";
import NavbarContributor from "@/app/component/nav-contributor";
import ContributorProfile from "@/app/component/contributorProfile";
import { CiSearch } from "react-icons/ci";
import { CiFilter } from "react-icons/ci";
import { IoIosInformationCircle } from "react-icons/io";

export default function laporan() {
  return (
    <>
      <div className="flex">
        <div>
          <NavbarContributor />
        </div>
        <div className="content lg:overflow-auto bg-gray-200 w-screen lg:w-full lg:p-4 flex flex-col gap-5">
          <ContributorProfile />
          <Search />
          <Date />
          <Table />
        </div>
      </div>
    </>
  );
}

function Search() {
  return (
    <div className="search flex w-full bg-[#404040] p-6">
      <div className="textSearch w-3/5 text-white">
        <h1 className="text-xl lg:text-3xl font-inter font-bold">
          Laporan Data Presensi
        </h1>
        <p className="text-md lg:text-[20px] font-inter">
          Data per tanggal 2023-09-01 s/d 2023-09-30
        </p>
      </div>
      <div className="formSearch w-2/5 text-white font-inter">
        <p className="hidden lg:block">Cari Mahasiswa</p>
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

function Date() {
  return (
    <div className="date grid grid-cols-2 mx-2 lg:flex lg:flex-nowrap lg:justify-end gap-2">
      <div className="before w-36 h-10 flex items-center justify-center text-sm border border-black">
        <input className="focus:outline-none bg-gray-200" type="date" />
      </div>
      <div className="before w-36 h-10 flex items-center justify-center text-sm border border-black">
        <input className="focus:outline-none  bg-gray-200" type="date" />
      </div>
      <div className="filter flex gap-1 w-32 h-10 items-center justify-center text-sm border border-black">
        <div className="text-lg">
          <CiFilter />
        </div>
        <select
          id="jenis-dropdown"
          name="jenis"
          className="jenisFilter focus:outline-none text-xs  bg-gray-200"
        >
          <option value="" disabled selected>
            Select Filter
          </option>
          <option value="Engkel Box">Engkel Box</option>
          <option value="Ford Ranger">Ford Ranger</option>
        </select>
      </div>
      <div className="filterRun w-10 h-10 flex items-center justify-center text-sm border border-black ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          fill="currentColor"
          className="bi bi-search"
          viewBox="0 0 16 16"
        >
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
        </svg>
      </div>
    </div>
  );
}

function Table() {
  return (
    <div className="tableData h-screen">
      <table className="table-auto w-full">
        <thead>
          <tr className="bg-gray-300 text-xs font-inter">
            <th className="px-2 py-2"></th>
            <th className="px-2 py-2">No</th>
            <th className="px-2 py-2 ">Nama</th>
            <th className="px-2 py-2">NIP</th>
            <th className="px-2 py-2">Total Kehadiran</th>
            <th className="px-2 py-2">Total Izin</th>
            <th className="px-2 py-2">Total Ketidakhadiran</th>
          </tr>
        </thead>
        <tbody>
          <tr className="trLaporan border border-gray-200 text-xs bg-white font-inter">
            <td className="p-2 text-center">
              <input type="checkbox" />
            </td>
            <td className="p-2 text-center">1</td>
            <td className="td p-2 text-center">
              <a
                href=""
                className=" text-blue-800 underline hover:text-blue-950 "
              >
                Nurfan Rahmat Berlian
              </a>
            </td>
            <td className="td px-2 py-2 text-center">
              MJ/PROG/UAD/SEPT2023/01
            </td>
            <td className="p-2 text-center">
              <div className="flex justify-center items-center gap-2">
                <span className="font-bold text-center">30</span>
                <IoIosInformationCircle />
              </div>
            </td>
            <td className="p-2 text-center">
              <div className="flex justify-center items-center gap-2">
                <span className="text-[#E2BE00] font-bold text-center">30</span>
                <IoIosInformationCircle />
              </div>
            </td>
            <td className="p-2 text-center">
              <div className="flex justify-center items-center gap-2">
                <span className="text-[#FF0606] font-bold text-center">30</span>
                <div>
                  <IoIosInformationCircle />
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
