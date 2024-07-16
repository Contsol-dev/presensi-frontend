/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect, useState } from "react";
import Logo from "./logo";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export default function Navbar() {
  const [nav, setnav] = useState(true);
  const [hide, sethide] = useState(false);

  const shownav = () => {
    setnav(!nav);
    sethide(!hide);
  };
  return (
    <>
      {hide && (
        <button onClick={shownav} className="burger p-4 left-12 top-4 text-white rounded-full shadow-lg bg-button z-40 fixed color">
          <AiOutlineMenu />
        </button>
      )}
      {nav && (
        <div className="navbar bg-[#DCDCDC] flex flex-col justify-between p-2 h-screen pb-20 sticky z-30 top-0 boxshadow border-r border-[#DCDCDC] ">
          <div onClick={shownav} className="absolute cursor-pointer right-5 top-5 text-xl">
            <AiOutlineClose />
          </div>
          <div className="logo flex justify-center items-center">
            <img src="/logo.svg" width="50px" height="50px" alt="logo" />
          </div>

          <div className="menu wrap p-4">
            <ul className="gap-4 flex flex-col text-sm font-inter">
              <li>
                <a href="./dashboard">Dashboard</a>
              </li>
              <li>
                <a href="./presensi">Presensi</a>
              </li>
              <li>
                <a href="./team">Divisi</a>
              </li>
              <li>
                <a href=".\admin\laporan">Laporan</a>
              </li>
              <li>
                <a href="\admin\kampus-sekolah">Sekolah/Kampus</a>
              </li>
              <li>
                <a href="\admin\pengaturan\jam&quotes">Pengaturan</a>
              </li>
            </ul>
          </div>

          <div className="logout flex gap-x-7 px-4">
            <h1 className="whitespace-nowrap">Log out</h1>
            <img src="/logout.svg" alt="" />
          </div>
        </div>
      )}
    </>
  );
}
