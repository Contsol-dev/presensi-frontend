"use client";
import React from "react";
import NavbarContributor from "@/app/component/nav-contributor";
import ContributorProfile from "@/app/component/contributorProfile";
import { MdGroups2 } from "react-icons/md";
import { BiSolidSkipNextCircle } from "react-icons/bi";
import Link from "next/link";

export default function Administrator() {
  return (
    <div className="flex bg-[#EEEEEE]">
      <span className="relative top-0 ">
        {" "}
        <NavbarContributor />
      </span>
      <div className="flex flex-col w-screen lg:w-screen lg:overflow-hidden ">
        <span className="z-20">
          {" "}
          <ContributorProfile />
        </span>
        <div className="flex flex-col mx:8 lg:mx-24 lg:my-20 w-full max-w-4xl h-screen gap-8">
          <div className="">
            <div className="text-xl lg:text-3xl text-center lg:text-start font-bold text-[#26577C] lg:leading-[50px]">
              <h1>
                SELAMAT DATANG <br />
                DI PANEL CONTRIBUTOR
              </h1>
            </div>
            <div className="text-xl text-center lg:text-start lg:text-xl text-[#00000080]">
              <p>Pantau Mahasiswa/Siswa/i Anda Disini</p>
            </div>
          </div>
          <div className="flex flex-col items-center lg:flex-row gap-4">
            <div className="w-[350px] lg:w-[300px] h-[200px] lg:h-[150px] bg-[#EEEEEE] shadow-2xl rounded-xl">
              <div className="flex flex-row text-[#26577C] text-[120px] lg:text-[100px] mx-4 my-2">
                <div className="mx-2">
                  <MdGroups2 />
                </div>
                <div className="flex flex-col">
                  <div className="text-sm lg:text-[13px] font-semibold">
                    <p>Jumlah Mahasiswa</p>
                  </div>
                  <div className="text-right text-[45px] lg:text-[30px] font-bold">
                    <p>50</p>
                  </div>
                </div>
              </div>
              <Link href="/contributor/data-siswa">
                <div className="flex flex-row justify-between items-center px-4 bg-white w-full h-[60px] lg:h-[50px] rounded-b-xl cursor-pointer">
                  <div className="font-semibold text-[#26577C] lg:text-[15px]">
                    <p>View Detail</p>
                  </div>
                  <div className="text-[#26577C]">
                    <BiSolidSkipNextCircle />
                  </div>
                </div>
              </Link>
            </div>
            <div className="w-[350px] lg:w-[300px]  h-[200px] lg:h-[150px] bg-[#EEEEEE] shadow-2xl rounded-xl">
              <div className="flex flex-row justify-between text-[#26577C] mx-4 my-2">
                <div className="flex flex-col text-xl font-bold gap-2">
                  <div className="lg:text-[20px]">
                    <p>Masuk</p>
                  </div>
                  <div className="text-[#0F9F03] text-[45px] lg:text-[35px]">
                    <p>35</p>
                  </div>
                </div>
                <div className="flex flex-col text-xl font-bold gap-2">
                  <div className="lg:text-[20px]">
                    <p>Izin</p>
                  </div>
                  <div className="text-[#FF1E1E] text-[45px] lg:text-[35px]">
                    <p>15</p>
                  </div>
                </div>
              </div>
              <Link href="/contributor/presensi">
                <div className="flex flex-row justify-between items-center px-4 bg-white w-full h-[60px] lg:h-[50px] rounded-b-xl cursor-pointer mt-10 lg:mt-6">
                  <div className="font-semibold text-[#26577C] lg:text-[15px]">
                    <p>View Detail</p>
                  </div>
                  <div className="text-[#26577C]">
                    <BiSolidSkipNextCircle />
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
