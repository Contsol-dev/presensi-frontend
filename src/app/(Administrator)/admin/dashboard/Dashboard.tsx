"use client";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { LuCheckCircle } from "react-icons/lu";
import { RiGraduationCapLine } from "react-icons/ri";
import { IoIosLogIn } from "react-icons/io";
import { LiaWindowCloseSolid } from "react-icons/lia";
import { GoNoEntry } from "react-icons/go";
import Link from "next/link";
export default function Dashboard() {
  const [pemagang, setPemagang] = useState(0);
  const [alumni, setAlumni] = useState(0);
  const [masuk, setMasuk] = useState(0);
  const [tidakMasuk, setTidakMasuk] = useState(0);
  const [izin, setIzin] = useState(0);

  const fetchDashboard = async () => {
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_SERVER}/admin/dashboard`);
      setPemagang(response.data.pemagang);
      setAlumni(response.data.alumni);
      setMasuk(response.data.hadir);
      setTidakMasuk(response.data.tidak_hadir);
      setIzin(response.data.izin);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchDashboard();
  }, []);

  return (
    <div className="flex flex-col gap-5">
      <div className="lg:flex gap-5 grid grid-cols-1">
        <div className="bg-blue-600 rounded-xl flex-col lg:h-[200px] w-[200px] flex p-5 text-white">
          <b>Jumlah Pemagang</b>
          <b className="lg:text-xl pt-2">{pemagang}</b>
          <div className="text-[#0850BC] text-[70px] pl-20">
            <LuCheckCircle />
          </div>
        </div>
        <div className="bg-[#626332] rounded-xl flex-col h-[200px] w-[200px] flex p-5 text-white">
          <b>Alumni</b>
          <b className="lg:text-xl pt-8">{alumni}</b>
          <div className="text-[#4C4C1FAB] text-[75px] pl-20">
            <RiGraduationCapLine />
          </div>
        </div>
      </div>
      <div className="lg:flex gap-5 grid grid-cols-1">
        <Link href="/presensi">
          <div className="bg-[#169423] rounded-xl flex-col h-[200px] w-[200px] flex p-5 text-white">
            <b>Masuk</b>
            <b className="lg:text-xl pt-6">{masuk}</b>
            <div className="text-[#176420A6] text-[70px] pt-4 pl-20">
              <IoIosLogIn />
            </div>
          </div>
        </Link>
        <Link href="/presensi">
          <div className="bg-[#CA3636] rounded-xl flex-col h-[200px] w-[200px] flex p-5 text-white">
            <b>Tidak Masuk</b>
            <b className="lg:text-xl pt-6">{tidakMasuk}</b>
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
            <b className="lg:text-xl pt-6">{izin}</b>
            <div className="text-[#CC6502A6] text-[70px] pt-2 pl-20">
              <GoNoEntry />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
