"use client";
import React from "react";
import NavbarContributor from "@/app/component/nav-contributor";
import ContributorProfile from "@/app/component/contributorProfile";
import { IoIosArrowBack } from "react-icons/io";

export default function Administrator() {
  return (
    <div className="flex bg-[#EEEEEE]">
      <span className="relative top-0 ">
        {" "}
        <NavbarContributor />
      </span>
      <div className="flex flex-col w-full ">
        <span className="z-20">
          {" "}
          <ContributorProfile />
        </span>
        <div className="flex flex-row mr-2 lg:mx-4 mb-8 lg:mb-16">
          <div className="text-3xl lg:text-5xl">
            <IoIosArrowBack />
          </div>
          <div className="w-full h-[150px] bg-black text-white lg:px-6 lg:py-8">
            <h2 className="text-xl text-center lg:text-start lg:text-4xl">
              Lihat Team &quot;Syalita Widyandini&quot;
            </h2>
            <p className="text-sm text-center lg:text-start">
              MJ/UIUX/POLINES/AGST2023/06
            </p>
          </div>
        </div>
        <div className="lg:grid lg:grid-cols-4 grid gap-2 lg:gap-6 lg:gap-12 lg:mx-16">
          <div className="flex flex-col justify-around gap-4 lg:gap-2 w-content lg:text-[13px] h-content bg-[#E9E9E9] pb-6 lg:pb-2 border-2 border-[#B0B0B0]">
            <div className="mx-2 pt-4">
              <p>Nama</p>
              <div className="w-full h-content border-2 border-[#B0B0B0] p-2 rounded">
                syalita Widyandini
              </div>
            </div>
            <div className="mx-2">
              <p>Asal Sekolah/Kampus</p>
              <div className="w-full h-content border-2 border-[#B0B0B0] p-2 rounded">
                Polines
              </div>
            </div>
            <div className="mx-2">
              <p>Tempat Lahir</p>
              <div className="w-full h-content border-2 border-[#B0B0B0] p-2 rounded">
                Jayapura
              </div>
            </div>
            <div className="mx-2">
              <p>Tanggal Lahir</p>
              <div className="w-full h-content border-2 border-[#B0B0B0] p-2 rounded">
                11/09/2002
              </div>
            </div>
            <div className="mx-2">
              <p>Nomor HP</p>
              <div className="w-full h-content border-2 border-[#B0B0B0] p-2 rounded">
                081234567890
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-around gap-2 w-content lg:text-[13px] h-[450px] bg-[#E9E9E9] pb-6 border-2 border-[#B0B0B0]">
            <div className="mx-2 pt-2">
              <p>Username</p>
              <div className="w-full h-content border-2 border-[#B0B0B0] p-2 rounded">
                syalita123
              </div>
            </div>
            <div className="mx-2">
              <p>Email</p>
              <div className="w-full h-content border-2 border-[#B0B0B0] p-2 rounded break-words">
                syalita123@gmail.com
              </div>
            </div>
            <form action="" className="mx-2">
              <label htmlFor="">Password</label>
              <input
                type="text"
                className="w-full h-content bg-[#D9D9D966] p-2 rounded focus:outline-none border-2 border-[#B0B0B0]"
                placeholder="isi jika ingin diubah"
              />
            </form>
            <form action="" className="mx-2">
              <label htmlFor="">Ulangi Password</label>
              <input
                type="text"
                className="w-full h-content bg-[#D9D9D966] p-2 rounded focus:outline-none border-2 border-[#B0B0B0]"
                placeholder="ulangi password"
              />
            </form>
          </div>
          <div className="flex flex-col justify-around gap-4 w-content lg:text-[13px] h-content bg-[#E9E9E9] pb-6 border-2 border-[#B0B0B0]">
            <div className="mx-2 pt-4">
              <p>Tanggal masuk</p>
              <div className="w-full h-content border-2 border-[#B0B0B0] p-2 rounded">
                15/08/2023
              </div>
            </div>
            <div className="mx-2">
              <p>tanggal Keluar</p>
              <div className="w-full h-content border-2 border-[#B0B0B0] p-2 rounded">
                31/12/2023
              </div>
            </div>
            <div className="mx-2 break-words">
              <p>NIP</p>
              <div className="w-full h-content border-2 border-[#B0B0B0] p-2 rounded">
                MJ/UIUX/POLINES/AGST2023/06
              </div>
            </div>
            <div className="mx-2">
              <p>Divisi</p>
              <div className="w-full h-content border-2 border-[#B0B0B0] p-2 rounded">
                UI/UX Designer
              </div>
            </div>
            <div className="mx-2">
              <p>Project</p>
              <div className="w-full h-content border-2 border-[#B0B0B0] p-2 rounded">
                titipsini.com
              </div>
            </div>
            <div className="mx-2">
              <p>Shift</p>
              <div className="w-full h-content border-2 border-[#B0B0B0] p-2 rounded">
                Fulltime
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-around gap-2 w-content lg:text-[13px] h-content bg-[#E9E9E9] pb-6 border-2 border-[#B0B0B0]">
            <div className="mx-2 pt-2">
              <p>OS</p>
              <div className="w-full h-content border-2 border-[#B0B0B0] p-2 rounded">
                Macintos
              </div>
            </div>
            <div className="mx-2">
              <p>Browser</p>
              <div className="w-full h-content border-2 border-[#B0B0B0] p-2 rounded">
                Chrome
              </div>
            </div>
            <div className="mx-2">
              <p>Status Absensi</p>
              <div className="w-full h-content border-2 border-[#B0B0B0] p-2 rounded">
                Scan QR Code
              </div>
            </div>
            <div className="mx-2">
              <p>Status Akun</p>
              <div className="w-full h-content border-2 border-[#B0B0B0] p-2 rounded">
                Aktif
              </div>
            </div>
            <div className="mx-2">
              <p>Konfirmasi Email</p>
              <div className="w-full h-content border-2 border-[#B0B0B0] p-2 rounded">
                Sudah
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-around gap-2 w-content lg:text-[13px] h-content bg-[#E9E9E9] pb-6 border-2 border-[#B0B0B0]">
            <div className="mx-2 pt-2">
              <p>Minimal Kerja (Jumlah Kerja)</p>
              <div className="w-full h-content border-2 border-[#B0B0B0] p-2 rounded">
                06:45:00
              </div>
            </div>
            <div className="mx-2">
              <p>Jam Default Masuk</p>
              <div className="w-full h-content border-2 border-[#B0B0B0] p-2 rounded">
                06:30:00
              </div>
            </div>
            <div className="mx-2">
              <p>Jam Default Pulang</p>
              <div className="w-full h-content border-2 border-[#B0B0B0] p-2 rounded">
                21:00:00
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
