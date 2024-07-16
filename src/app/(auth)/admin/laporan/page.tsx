/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-img-element */
"use client";
import AdminProfile from "@/app/component/adminProfile";
import NavbarAdmin from "@/app/component/nav-admin";
import Halaman from "./halaman";

export default function laporan() {
  return (
    <div className="w-full h-screen flex overflow-hidden">
      <NavbarAdmin />
      <div className="bg-gray-200 w-full p-4 flex flex-col gap-5">
        <AdminProfile />
        <div className="overflow-auto">
          <Halaman />
        </div>
      </div>
    </div>
  );
}
