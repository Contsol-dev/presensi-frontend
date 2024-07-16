"use client";
import AdminProfile from "@/app/component/adminProfile";
import NavbarAdminDashboard from "@/app/component/nav-admin";
import React, { useEffect, useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

export default function utama() {
  return (
    <>
      <div className="w-full h-screen flex m-auto lg:p-0 overflow-hidden">
        <NavbarAdminDashboard />
        <Pengaturan />
        <div className="overflow-auto bg-gray-100 w-full p-4 flex flex-col gap-5  min-h-0">
          <AdminProfile />
          <Search />
          <Content />
        </div>
      </div>
    </>
  );
}

function Pengaturan() {
  const [showManageDivisi, setShowManageDivisi] = useState(false);

  const toggleManageDivisi = () => {
    setShowManageDivisi(!showManageDivisi);
  };
  return (
    <div className="w-72 h-full bg-white py-4 flex flex-col items-center">
      <h1 className="font-bold text-lg font-inter mb-24">Pengaturan</h1>
      <p className="text-sm text-gray-600">PENGATURAN UTAMA</p>
      <ul className="list-disc list-inside text-gray-400 text-sm border-b border-black pb-7 ">
        <li className="hover:text-black hover:bg-red-200 rounded-lg px-2 py-1 my-1">
          <a href="/admin/pengaturan/jam&qotes">Quotes</a>
        </li>
        <li className="hover:text-black hover:bg-red-200 rounded-lg px-2 py-1 my-1">
          <a href="/admin/pengaturan/manage-shift">Manage Shift</a>
        </li>
        <li className="hover:text-black hover:bg-red-200 rounded-lg px-2 py-1 my-1">
          <a href="/admin/pengaturan/manage-divisi">Manage Divisi</a>
        </li>
        <li
          className="project hover:text-black list-none hover:bg-red-200 rounded-lg px-2 py-1 my-1 cursor-pointer"
          onClick={toggleManageDivisi}
        >
          <div className="flex gap-4">
            <span>Manage Project</span>{" "}
            {showManageDivisi ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </div>

          {showManageDivisi && (
            <ul className="childrenn list-disc list-inside text-gray-400 text-sm ml-4 ">
              <li className="hover:text-black hover:border hover:border-black rounded-lg px-2 py-1 my-1">
                <a href="/admin/pengaturan/project-category">
                  Project’s Category
                </a>
              </li>
              <li className="hover:text-black hover:border hover:border-black rounded-lg px-2 py-1 my-1">
                <a href="/admin/pengaturan/project-tags">Project’s Tags</a>
              </li>
              {/* Tambahkan lebih banyak subitem sesuai kebutuhan */}
            </ul>
          )}
        </li>
        <li className="text-black bg-red-200 rounded-lg px-2 py-1 my-1">
          <a href="/admin/pengaturan/manage-alumni">Manage Alumni</a>
        </li>

        <li className="hover:text-black hover:bg-red-200 rounded-lg px-2 py-1 my-1">
          <a href="/admin/pengaturan/lokasi-kantor">Manage Kantor</a>
        </li>
      </ul>
      <p className="text-sm text-gray-600 pt-7">PANEL ADMINISTRATOR</p>
      <ul className="list-disc list-inside text-gray-400 text-sm ">
        <li className="hover:text-black hover:bg-red-200 rounded-lg px-2 py-1 my-1">
          <a href="/admin/pengaturan/user&organization">User & Organizations</a>
        </li>
      </ul>
    </div>
  );
}

function Search() {
  return (
    <div className="search flex gap-8 items-center w-full p-2">
      <div className="formSearch w-2/5 font-inter">
        <h1 className="text-base mb-2 font-bold">Manage Alumni</h1>
        <p className="text-[11px] font-inter">
          Menentukan pengaturan halaman alumni
        </p>
        <div className="search-container "></div>
      </div>
    </div>
  );
}
function Content() {
  const [showPengaturanSertifikat, setShowPengaturanSertifikat] =
    useState(false);
  const [showPengaturanMemberCard, setShowPengaturanMemberCard] =
    useState(false);
  const [showPengaturanNilai, setShowPengaturanNilai] = useState(false);
  const [showPengaturanLinkWAGroup, setShowPengaturanLinkWAGroup] =
    useState(false);

  const togglePengaturan = (category: any) => {
    switch (category) {
      case "sertifikat":
        setShowPengaturanSertifikat(!showPengaturanSertifikat);
        break;
      case "memberCard":
        setShowPengaturanMemberCard(!showPengaturanMemberCard);
        break;
      case "nilai":
        setShowPengaturanNilai(!showPengaturanNilai);
        break;
      case "linkWAGroup":
        setShowPengaturanLinkWAGroup(!showPengaturanLinkWAGroup);
        break;
      default:
        break;
    }
  };

  return (
    <div className="w-full h-full bg-white rounded-md p-4">
      <div className="items-center gap-2 cursor-pointer ">
        <div
          className="flex gap-2"
          onClick={() => togglePengaturan("sertifikat")}
        >
          {showPengaturanSertifikat ? (
            <IoIosArrowDown />
          ) : (
            <IoIosArrowForward />
          )}
          <h1 className="text-sm font-inter font-bold">
            Pengaturan Sertifikat
          </h1>
        </div>

        {showPengaturanSertifikat && (
          <div className="sertifikat w-full my-2 border border-gray-600 bg-gray-200 p-3 flex flex-col gap-4">
            <h1 className="bg-card w-full text-center text-white text-sm font-inter p-2">
              Sertifikat
            </h1>
            <p className="text-xs font-inter">Deskripsi</p>
            <textarea
              className="rounded-sm w-full h-20 focus:outline-none p-2 text-xs"
              placeholder="Masukkan Deskripsi"
            ></textarea>
          </div>
        )}
      </div>

      <div className="sertifikat items-center gap-2 cursor-pointer ">
        <div
          className="flex gap-2"
          onClick={() => togglePengaturan("memberCard")}
        >
          {showPengaturanMemberCard ? (
            <IoIosArrowDown />
          ) : (
            <IoIosArrowForward />
          )}
          <h1 className="text-sm font-inter font-bold">
            Pengaturan Member Card
          </h1>
        </div>

        {showPengaturanMemberCard && (
          <div className="sertifikat w-full my-2 border border-gray-600 bg-gray-200 p-3 flex flex-col gap-4">
            <h1 className="bg-card w-full text-center text-white text-sm font-inter p-2">
              Member Card
            </h1>
            <p className="text-xs font-inter">Deskripsi</p>
            <textarea
              className="rounded-sm w-full h-20 focus:outline-none p-2 text-xs"
              placeholder="Masukkan Deskripsi"
            ></textarea>
          </div>
        )}
      </div>

      <div className="sertifikat items-center gap-2 cursor-pointer ">
        <div className="flex gap-2" onClick={() => togglePengaturan("nilai")}>
          {showPengaturanNilai ? <IoIosArrowDown /> : <IoIosArrowForward />}
          <h1 className="text-sm font-inter font-bold">Pengaturan Nilai</h1>
        </div>

        {showPengaturanNilai && (
          <div className="sertifikat w-full my-2 border border-gray-600 bg-gray-200 p-3 flex flex-col gap-4">
            <h1 className="bg-card w-full text-center text-white text-sm font-inter p-2">
              Nilai
            </h1>
            <p className="text-xs font-inter">Deskripsi</p>
            <textarea
              className="rounded-sm w-full h-20 focus:outline-none p-2 text-xs"
              placeholder="Masukkan Deskripsi"
            ></textarea>
          </div>
        )}
      </div>

      <div className="sertifikat items-center gap-2 cursor-pointer ">
        <div
          className="flex gap-2"
          onClick={() => togglePengaturan("linkWAGroup")}
        >
          {showPengaturanLinkWAGroup ? (
            <IoIosArrowDown />
          ) : (
            <IoIosArrowForward />
          )}
          <h1 className="text-sm font-inter font-bold">
            Pengaturan Link WA Group
          </h1>
        </div>

        {showPengaturanLinkWAGroup && (
          <div className="sertifikat w-full my-2 border border-gray-600 bg-gray-200 p-3 flex flex-col gap-4">
            <h1 className="bg-card w-full text-center text-white text-sm font-inter p-2">
              Link WA Group
            </h1>
            <p className="text-xs font-inter">Deskripsi</p>
            <textarea
              className="rounded-sm w-full h-20 focus:outline-none p-2 text-xs"
              placeholder="Masukkan Deskripsi"
            ></textarea>
          </div>
        )}
      </div>
    </div>
  );
}
