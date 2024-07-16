"use client";
import Link from "next/link";
import React, { useState } from "react";
import { BiBell } from "react-icons/bi";
export default function AdminProfile() {
  const [dotNotif, setDotNotif] = useState(true);
  const [modalNotif, setModalNotif] = useState(false);
  const handleClickNotif = () => {
    setDotNotif(false);
    setModalNotif(!modalNotif);
  };

  return (
    <>
      <div className="flex gap-8 w-full h-[100px] px-5 justify-end items-center">
        {dotNotif ? (
          <span
            onClick={handleClickNotif}
            className="text-[38px] cursor-pointer relative"
          >
            <span className="absolute blok rounded-full h-4 w-4 text-white text-[13px] right-0 flex justify-center items-center bg-red-700">
              2
            </span>
            <BiBell />
          </span>
        ) : (
          <span
            onClick={handleClickNotif}
            className="text-[38px] cursor-pointer"
          >
            <BiBell />
          </span>
        )}
        <div className="text-end ">
          <b>Alpin Yuda</b>
          <p>Admin</p>
        </div>
        <Link href="/admin/edit-profile">
          <img
            src="/profil.png"
            alt=""
            className="h-[69px] w-[69px] rounded-full"
          />
        </Link>
      </div>
      {modalNotif && (
        <div className="w-[544px] z-40 bg-[#E9E9E9] h-[450px]  py-10  px-5 flex flex-col shadow-2xl border text-sm right-0 bottom-0 top-[150px] notife absolute">
          <span className="flex gap-2 items-center px-4">
            <p className="font-semibold">Alpin Yuda</p>
            <p>11 menit yang lalu</p>
          </span>
          <span className="flex gap-2 items-center px-4">
            <p className="font-semibold">Chester </p>
            <p>21 menit yang lalu</p>
          </span>
          <span className="flex gap-2 items-center px-4">
            <p className="font-semibold">Oliver bin Khalid</p>
            <p>21 menit yang lalu</p>
          </span>
        </div>
      )}
    </>
  );
}
