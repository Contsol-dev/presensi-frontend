/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect, useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { HiUserGroup } from "react-icons/hi2";
import { MdArrowCircleRight } from "react-icons/md";
import AdminProfile from "@/app/component/adminProfile";
import NavbarAdmin from "@/app/component/nav-admin";

export default function utama() {
  return (
    <>
      <div className="w-full flex m-auto lg:p-0">
        <NavbarAdmin />
        <div className="bg-gray-200 w-full p-4 flex flex-col gap-5 min-h-0">
          <AdminProfile />
          <Search />
          <Card />
        </div>
      </div>
    </>
  );
}

function Search() {
  return (
    <div className="search flex gap-8 items-center w-full  p-2">
      <div className="formSearch w-2/5  font-inter">
        <p className="text-xs mb-2 font-bold">Cari Sekolah/Universitas</p>
        <div className="search-container ">
          <form action="">
            <div className="search-wrapper ">
              <div className="search-content flex gap-2 bg-gray-100 rounded-lg p-1 ">
                <img
                  src="/search.svg"
                  alt="search-icon"
                  className="search-icon "
                />
                <input
                  className="bg-transparent text-xs h-7  w-4/5 focus:outline-none text-black "
                  type="text"
                  placeholder="Cari Sekolah/Kampus"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

function Card() {
  const cardData = [
    { id: 1, university: "Universitas Ahmad Dahlan", memberCount: 20 },
    { id: 2, university: "Universitas Brawijaya", memberCount: 25 },
    { id: 3, university: "Institut Teknologi Bandung", memberCount: 30 },
    { id: 4, university: "Institut Teknologi Bandung", memberCount: 30 },
    { id: 5, university: "Institut Teknologi Bandung", memberCount: 30 },
    { id: 6, university: "Institut Teknologi Bandung", memberCount: 30 },
    { id: 7, university: "Institut Teknologi Bandung", memberCount: 30 },
    { id: 8, university: "Institut Teknologi Bandung", memberCount: 30 },
    { id: 9, university: "Institut Teknologi Bandung", memberCount: 30 },

    // Tambahkan data card lainnya sesuai kebutuhan
  ];

  return (
    <div className="cardContainer grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 p-4">
      {cardData.slice(0, 9).map((card) => (
        <div
          key={card.id}
          className="card w-full  rounded-md p-2 flex flex-col"
        >
          <div className="bg-card w-full h-4/5 rounded-t-md flex flex-col items-center text-sm gap-2 text-white font-inter p-2">
            <h1>{card.university}</h1>
            <div className="flex justify-between w-full items-end ">
              <HiUserGroup size={70} style={{ color: "white" }} />
              <p>{`${card.memberCount} Orang`}</p>
            </div>
          </div>
          <div className="bg-white w-full h-1/5 rounded-b-md flex justify-between p-1">
            <p className="text-xs font-inter font-bold">View Detail</p>
            <MdArrowCircleRight />
          </div>
        </div>
      ))}
    </div>
  );
}
