"use client";
import React, { useState } from "react";
import { BiBell } from "react-icons/bi";

export default function ContributorProfile() {
  const [dotNotif, setDotNotif] = useState(true);
  const [modalNotif, setModalNotif] = useState(false);
  const handleClickNotif = () => {
    setDotNotif(false);
    setModalNotif(!modalNotif);
  };

  return (
    <>
      <div className="flex lg:gap-8 gap-4 w-full h-[150px] lg:h-[100px] lg:px-20 px-4 justify-end items-center">
        {dotNotif ? (
          <span
            onClick={handleClickNotif}
            className="text-[38px] lg:text-[25px] cursor-pointer relative"
          >
            <span className="absolute blok rounded-full h-4 w-4 lg:h-3 lg:w-3 text-white text-[13px] lg:text-[8px] right-0 flex justify-center items-center bg-red-700">
              2
            </span>
            <BiBell />
          </span>
        ) : (
          <span
            onClick={handleClickNotif}
            className="text-[38px] lg:text-[25px] cursor-pointer"
          >
            <BiBell />
          </span>
        )}

        <div className="text-end hidden lg:flex flex-col">
          <b className="lg:text-[15px]">Gol D. Rambe</b>
          <p className="text-[#0E2E9D] font-semibold lg:text-[15px]">Guru</p>
        </div>
        <img
          src="/avatar.svg"
          alt="Image"
          className="h-[69px] lg:h-[60px] w-[69px] lg:h-[60px] rounded-full"
        />
      </div>
      {modalNotif && (
        <div className="w-screen lg:w-[544px] z-40 bg-[#E9E9E9] h-[654px]  py-10  px-5 flex flex-col shadow-2xl border text-sm right-0 top-[150px] notife absolute">
          <span className="flex gap-2 items-center px-4">
            <p className="font-semibold">Gol D. Rambe</p>
            <p>11 menit yang lalu</p>
          </span>
          <span className="flex gap-2 items-center px-4">
            <p className="font-semibold">Chester</p>
            <p>21 menit yang lalu</p>
          </span>
        </div>
      )}
    </>
  );
}
