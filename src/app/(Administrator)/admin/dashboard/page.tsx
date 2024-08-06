"use client";
import AdminProfile from "@/app/component/adminProfile";
import NavbarAdminDashboard from "@/app/component/nav-admin";
import React from "react";
import { FaRegUser } from "react-icons/fa";
import { LuCheckCircle } from "react-icons/lu";
import { RiGraduationCapLine } from "react-icons/ri";
import { IoIosLogIn } from "react-icons/io";
import { LiaWindowCloseSolid } from "react-icons/lia";
import { GoNoEntry } from "react-icons/go";
import Link from "next/link";
import Dashboard from "./Dashboard";
import Aktifitas from "./Aktifitas";

export default function Administrator() {
  return (
    <div className="flex bg-[#EEEEEE]">
      <span className="relative top-0 ">
        {" "}
        <NavbarAdminDashboard />
      </span>
      <div className="flex flex-col w-screen lg:w-screen lg:overflow-hidden ">
        <span className="z-20">
          {" "}
          <AdminProfile />
        </span>
        <div className="flex justify-between pl-20 ">
          <Dashboard />
          <Aktifitas />
        </div>
      </div>
    </div>
  );
}
