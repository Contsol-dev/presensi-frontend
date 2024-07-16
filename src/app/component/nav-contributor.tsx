"use client";
import React, { useEffect, useState } from "react";
import Logo from "./logo";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
export default function NavbarContributor() {
  const [nav, setnav] = useState(true);
  const [hide, sethide] = useState(false);

  const shownav = () => {
    setnav(!nav);
    sethide(!hide);
  };

  return (
    <>
      {hide && (
        <button
          onClick={shownav}
          className="p-4 lg:p-3 left-8 top-10 text-white rounded-full shadow-lg bg-button lg:z-40 fixed color"
        >
          <AiOutlineMenu />
        </button>
      )}
      {nav && (
        <div className="bg-[#DCDCDC] fixed z-40 h:full max-h-50 lg:h-screen w-screen lg:w-[300px] pb-20 lg:sticky lg:z-30 top-0 boxshadow border-r border-[#DCDCDC] ">
          <div
            onClick={shownav}
            className="absolute cursor-pointer right-5 top-5 text-xl"
          >
            <AiOutlineClose />
          </div>
          <span className="h-[200px] lg:h-[130px] mb-10 lg:mb-5 flex justify-center items-center">
            <Logo />
          </span>

          <div className="nav-link lg:flex lg:flex-col h-full lg:h-screen gap-4 lg:gap-[40px] w-full px-11 lg:text-sm grid grid-cols-2 ">
            <Link href="/contributor/dashboard">Dashboard</Link>
            <Link href="/contributor/data-siswa">Data Siswa</Link>
            <Link href="/contributor/presensi">Presensi</Link>
            <Link href="/contributor/laporan-data-presensi">Laporan</Link>
            <Link href="/contributor/penilaian-mahasiswa">Penilaian</Link>
            <Link
              href="/contributor/login"
              className="flex gap-4 max-h-20 lg:absolute lg:py-14 lg:bottom-0 h-max "
            >
              LogOut
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="26"
                viewBox="0 0 30 26"
                fill="none"
                className="opacity-50"
              >
                <path
                  d="M18.494 6.8894V3.97644C18.494 3.20387 18.1868 2.46295 17.64 1.91666C17.0932 1.37038 16.3516 1.06348 15.5783 1.06348H3.91566C3.14238 1.06348 2.40077 1.37038 1.85398 1.91666C1.30719 2.46295 1 3.20387 1 3.97644V21.4542C1 22.2268 1.30719 22.9677 1.85398 23.514C2.40077 24.0603 3.14238 24.3672 3.91566 24.3672H14.9952C16.6054 24.3672 18.494 23.0629 18.494 21.4542V18.5413"
                  stroke="black"
                  strokeOpacity="1"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M23.1562 6.88916L28.9876 12.7151L23.1562 18.541"
                  stroke="black"
                  strokeOpacity="1"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9.16406 12.7148H27.8243"
                  stroke="black"
                  strokeOpacity="1"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
