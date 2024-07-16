"use client";
import AdminProfile from "@/app/component/adminProfile";
import NavbarAdmin from "@/app/component/nav-admin";
import Aktif from "./Aktif";

export default function Team() {
  return (
    <>
      <div className="w-screen h-screen overflow-hidden flex m-auto lg:p-0  md:p-4">
        <NavbarAdmin />
        <div className="overflow-auto bg-gray-200 w-full p-4 flex-col">
          <AdminProfile />
          <div className="flex flex-col w-full h-full bg-neutral-200 py-2 px-10">
            <Aktif />
          </div>
        </div>
      </div>
    </>
  );
}
