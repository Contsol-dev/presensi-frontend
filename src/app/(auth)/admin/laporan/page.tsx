/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-img-element */
"use client";
import AdminProfile from "@/app/component/adminProfile";
import NavbarAdmin from "@/app/component/nav-admin";
import Halaman from "./halaman";
import DetailPresensi from "./DetailProfile";
import { IoIosArrowBack } from "react-icons/io";
import { useState } from "react";

export default function laporan() {
  const [username, setUsername] = useState("");
  const [detailP, setDetailP] = useState(false);
  const [tampil, setTampil] = useState(true);
  const handleDetailP = () => {
    setTampil(!tampil);
    setDetailP(!detailP);
  };
  const handleUsernameClick = (username: string) => {
    setUsername(username);
    handleDetailP();
  };
  return (
    <div className="w-full h-screen flex overflow-hidden">
      <NavbarAdmin />
      <div className="bg-gray-200 w-full p-4 flex flex-col gap-5">
        <AdminProfile />
        {tampil && (
          <div className="overflow-auto">
            <Halaman onUsernameClick={handleUsernameClick} />
          </div>
        )}
        {detailP == true && (
          <div className="flex gap-2 mt-2">
            <p className="text-lg cursor-pointer" onClick={handleDetailP}>
              <IoIosArrowBack />
            </p>
            <DetailPresensi username={username} />
          </div>
        )}
      </div>
    </div>
  );
}
