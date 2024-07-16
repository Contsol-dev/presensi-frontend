"use client";
import AdminProfile from "@/app/component/adminProfile";
import NavbarAdminDashboard from "@/app/component/nav-admin";
import React from "react";
import { FaRegUser } from "react-icons/fa";
import { LuCheckCircle } from "react-icons/lu";
import { RiGraduationCapLine } from "react-icons/ri";
import { IoIosLogIn } from "react-icons/io";
import { LiaWindowCloseSolid } from "react-icons/lia";
import { GoNoEntry } from "react-icons/go";
import Link from "next/link";

export default function Administrator() {
  return (
    <div className="flex bg-[#EEEEEE]">
      <span className="relative top-0 ">
        {" "}
        <NavbarAdminDashboard />
      </span>
      <div className="flex flex-col w-screen lg:w-screen lg:overflow-hidden ">
        <span className="z-20">
          {" "}
          <AdminProfile />
        </span>
        <div className="flex justify-between pl-20 ">
          <div className="flex flex-col gap-5">
            <div className="lg:flex gap-5 grid grid-cols-1">
              <div className="bg-blue-600 rounded-xl flex-col lg:h-[200px] w-[200px] flex p-5 text-white">
                <b>Jumlah Pemagang</b>
                <b className="lg:text-xl pt-2">325</b>
                <div className="text-[#0850BC] text-[70px] pl-20">
                  <LuCheckCircle />
                </div>
              </div>
              <div className="bg-[#626332] rounded-xl flex-col h-[200px] w-[200px] flex p-5 text-white">
                <b>Alumni</b>
                <b className="lg:text-xl pt-8">800</b>
                <div className="text-[#4C4C1FAB] text-[75px] pl-20">
                  <RiGraduationCapLine />
                </div>
              </div>
            </div>
            <div className="lg:flex gap-5 grid grid-cols-1">
              <Link href="/presensi">
                <div className="bg-[#169423] rounded-xl flex-col h-[200px] w-[200px] flex p-5 text-white">
                  <b>Masuk</b>
                  <b className="lg:text-xl pt-6">200</b>
                  <div className="text-[#176420A6] text-[70px] pt-4 pl-20">
                    <IoIosLogIn />
                  </div>
                </div>
              </Link>
              <Link href="/presensi">
                <div className="bg-[#CA3636] rounded-xl flex-col h-[200px] w-[200px] flex p-5 text-white">
                  <b>Tidak Masuk</b>
                  <b className="lg:text-xl pt-6">100</b>
                  <div className="text-[#AA2B2B] text-[75px] pt-3 pl-20">
                    <LiaWindowCloseSolid />
                  </div>
                </div>
              </Link>
            </div>
            <Link href="/presensi">
              <div className="flex gap-5 lg:mb-4">
                <div className="bg-[#FF8A00] rounded-xl flex-col h-[200px] w-[200px] flex p-5 text-white">
                  <b>Izin</b>
                  <b className="lg:text-xl pt-6">25</b>
                  <div className="text-[#CC6502A6] text-[70px] pt-2 pl-20">
                    <GoNoEntry />
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className="lg:w-[500px] hidden lg:block lg:h-full gap-10 p-10 flex flex-col shadow-[-9px_-3px_14px_0px_#00000030] border right-0 top-[150px] bg-[#E9E9E9] ">
            <b className="lg:text-sm">Aktifitas Terbaru</b>
            <div className="flex flex-col notife">
              <span className=" flex gap-5 py-4 items-center">
                <div className="bg-h1 w-fit h-fit p-2 rounded-full">
                  <div className="text-white lg:text-sm">
                    <FaRegUser />
                  </div>
                </div>
                <div className="flex gap-5 items-center lg:text-[12px]">
                  <p className="font-semibold">
                    Alpin Yuda Warija Rambe <span>log in</span>
                  </p>
                  <p>14 menit yang lalu</p>
                </div>
              </span>
              <span className=" flex gap-5 py-4  items-center">
                <div className="bg-h1 w-fit h-fit p-2 rounded-full">
                  <div className=" text-white lg:text-sm">
                    <FaRegUser />
                  </div>
                </div>
                <div className="flex gap-5 items-center lg:text-[12px]">
                  <p className="font-semibold">
                    {" "}
                    Nikola Tesla mendaftarkan diri
                  </p>
                  <p>24 menit yang lalu</p>
                </div>
              </span>
              <span className=" flex gap-5 py-4 items-center">
                <div className="bg-h1 w-fit h-fit p-2 rounded-full">
                  <div className=" text-white lg:text-sm">
                    <FaRegUser />
                  </div>
                </div>
                <div className="flex gap-5 items-center lg:text-[12px]">
                  <p className="font-semibold">
                    {" "}
                    Alexander Graham Bell log out
                  </p>
                  <p>30 menit yang lalu</p>
                </div>
              </span>
              <span className=" flex gap-5 py-4 items-center">
                <div className="bg-h1 w-fit h-fit p-2 rounded-full">
                  <div className=" text-white lg:text-sm">
                    <FaRegUser />
                  </div>
                </div>
                <div className="flex gap-5 items-center lg:text-[12px]">
                  <p className="font-semibold"> Oppenheimer log out</p>
                  <p>37 menit yang lalu</p>
                </div>
              </span>
              <span className=" flex gap-5 py-4  items-center">
                <div className="bg-h1 w-fit h-fit p-2 rounded-full">
                  <div className=" text-white lg:text-sm">
                    <FaRegUser />
                  </div>
                </div>
                <div className="flex gap-5 items-center lg:text-[12px]">
                  <p className="font-semibold"> Christopher Columbus log out</p>
                  <p>44 menit yang lalu</p>
                </div>
              </span>
              <span className=" flex gap-5 py-4  items-center">
                <div className="bg-h1 w-fit h-fit p-2 rounded-full">
                  <div className=" text-white lg:text-sm">
                    <FaRegUser />
                  </div>
                </div>
                <div className="flex gap-5 items-center lg:text-[12px]">
                  <p className="font-semibold"> Charles Babbage log in</p>
                  <p>47 menit yang lalu</p>
                </div>
              </span>
              <span className=" flex gap-5 py-4  items-center">
                <div className="bg-h1 w-fit h-fit p-2 rounded-full">
                  <div className=" text-white lg:text-sm">
                    <FaRegUser />
                  </div>
                </div>
                <div className="flex gap-5 items-center lg:text-[12px]">
                  <p className="font-semibold"> Thales mendaftarkan diri</p>
                  <p>50 menit yang lalu</p>
                </div>
              </span>
              <span className=" flex gap-5 py-4 items-center">
                <div className="bg-h1 w-fit h-fit p-2 rounded-full">
                  <div className=" text-white lg:text-sm">
                    <FaRegUser />
                  </div>
                </div>
                <div className="flex gap-5 items-center lg:text-[12px]">
                  <p className="font-semibold"> Thomas Alva Edison log in</p>
                  <p>1 jam yang lalu</p>
                </div>
              </span>
              <div className=" flex gap-5 px-4 py-8  items-center">
                <div className="flex gap-5 items-center">
                  <a
                    href="#"
                    className="font-normal text-red-600 cursor-pointer lg:text-sm"
                  >
                    Lihat lebih lanjut{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
