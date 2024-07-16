"use client";
import React, { useEffect, useState } from "react";
import { FiPlusCircle } from "react-icons/fi";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import AdminProfile from "@/app/component/adminProfile";
import NavbarAdminDashboard from "@/app/component/nav-admin";
import { AiOutlinePicture } from "react-icons/ai";

export default function utama() {
  return (
    <>
      <div className="w-screen h-screen flex m-auto lg:p-0 overflow-hidden ">
        <NavbarAdminDashboard />
        <div className="overflow-auto bg-gray-100 w-full p-4 flex flex-col gap-5  min-h-0">
          <AdminProfile />
          <Search />
          <Table />
        </div>
      </div>
    </>
  );
}

function Search() {
    const [isModalOpen, setModalOpen] = useState(false);
  
    const openModal = () => {
      setModalOpen(true);
    };
  
    const closeModal = () => {
      setModalOpen(false);
    };
  
    return (
        <div className="search flex gap-8 items-center w-full p-2">
          <div className="formSearch w-2/5 font-inter ml-0">
            <h1 className="text-base mb-2 font-bold">Shift</h1>
            <p className="text-xs font-inter mt-4">
              Menentukan jadwal shift dari setiap pengguna
            </p>
      
            <div className="flex items-center w-1/2 mt-2">
              <input
                type="text"
                placeholder="Cari Nama"
                className="border rounded-md p-2 w-screen"
                />
            </div>
          </div>
        </div>
      );      
  }
  

function Table() {
  const [shift, setShift] = useState([]);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://restaurant-api.dicoding.dev/list"
        );
        const jsonData = await response.json();
        setShift(jsonData.restaurants);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const getRowClassName = (index: any) => {
    return index % 2 === 0
      ? "bg-gray-300  trLaporan border border-gray-200 text-xs font-inter "
      : "bg-white trLaporan border border-gray-200 text-xs font-inter ";
  };

  const handleItemsPerPageChange = (event: any) => {
    const selectedItemsPerPage = parseInt(event.target.value, 10);
    setItemsPerPage(selectedItemsPerPage);
    setCurrentPage(1); // Reset current page when changing items per page
  };

  const handlePageChange = (event: any) => {
    const selectedPage = parseInt(event.target.value, 10);
    setCurrentPage(selectedPage);
  };

  const totalPages = Math.ceil(shift.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const getPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <button
          key={i}
          className={`px-1 py-1 mx-1 font-inter text-xs text-black ${
            i === currentPage ? "border-b text-xs border-black text-black" : ""
          }`}
          onClick={() => setCurrentPage(i)}
        >
          {i}
        </button>
      );
    }
    return pageNumbers;
  };

  return (
    <>
      <div className="flex gap-4">
        {/* Dropdown for page selection */}
        <div className="filter flex gap-1 w-32 h-10 items-center justify-center text-sm bg-gray-200 border border-black rounded-md ">
          <select
            id="page-dropdown"
            name="page"
            className="jenisFilter w-3/4 focus:outline-none text-xs bg-gray-200 cursor-pointer"
            onChange={handlePageChange}
            value={currentPage}
          >
            {Array.from({ length: totalPages }, (_, index) => (
              <option className="sm:text-xs" key={index + 1} value={index + 1}>
                Page {index + 1}
              </option>
            ))}
          </select>
        </div>

        {/* Dropdown for items per page selection */}
        <div className="filter flex gap-1 w-32 h-10 items-center bg-slate-200 justify-center text-sm border border-black rounded-md">
          <select
            id="items-per-page-dropdown"
            name="itemsPerPage"
            className="jenisFilter focus:outline-none text-xs bg-gray-200 cursor-pointer"
            onChange={handleItemsPerPageChange}
            value={itemsPerPage}
          >
            <option className="sm:text-xs" value="5">
              5 item per page
            </option>
            <option className="sm:text-xs" value="10">
              10 item per page
            </option>
            <option className="sm:text-xs" value="15">
              15 item per page
            </option>
          </select>
        </div>
      </div>

      <div className="tableData">
        {/* Displayed items based on selected items per page and current page */}
        <table className="table-auto w-full rounded-lg ">
          <thead className="bg-white border-b-2 border-gray-500 text-xs font-inter ">
          <tr>
              <th className="px-2 py-2 border">No</th>
              <th className="px-2 py-2 border">Nama</th>
              <th className="px-2 py-2 border">Divisi</th>
              <th className="px-2 py-2 border">Kantor</th>
              <th className="px-2 py-2 border">Sistem Shift</th>
              <th className="px-2 py-2 border">Aksi</th>
            </tr>
          </thead>
          <tbody>
            <tr className={getRowClassName(0)}>
                <td className="px-2 py-2 text-center">1</td>
                <td className="td px-2 py-2 text-center">Syalita Wisyandini</td>
                <td className="px-2 py-2 text-center">UI/UX</td>
                <td className="px-2 py-2 text-center">Kantor 1</td>
                <td className="px-2 py-2 text-center">Tetap</td>
                <td className="px-2 py-2 text-center">
                <div className="flex gap-2 justify-center items-center">
                    <button className="py-2 px-4 bg-blue-500 text-white font-inter text-xs rounded-md">
                    Edit
                    </button>
                </div>
                </td>
            </tr>

            <tr className={getRowClassName(1)}>
                <td className="px-2 py-2 text-center">2</td>
                <td className="td px-2 py-2 text-center">Michael Mqueen</td>
                <td className="px-2 py-2 text-center">HR</td>
                <td className="px-2 py-2 text-center">Kantor 1</td>
                <td className="px-2 py-2 text-center">Bergantian</td>
                <td className="px-2 py-2 text-center">
                <div className="flex gap-2 justify-center items-center">
                    <button className="py-2 px-4 bg-blue-500 text-white font-inter text-xs rounded-md">
                    Edit
                    </button>
                </div>
                </td>
            </tr>

            <tr className={getRowClassName(2)}>
                <td className="px-2 py-2 text-center">3</td>
                <td className="td px-2 py-2 text-center">Raihan Ahmad Hafidz</td>
                <td className="px-2 py-2 text-center">UI/UX</td>
                <td className="px-2 py-2 text-center">Kantor 1</td>
                <td className="px-2 py-2 text-center">--</td>
                <td className="px-2 py-2 text-center">
                <div className="flex gap-2 justify-center items-center">
                    <button className="py-2 px-4 bg-blue-500 text-white font-inter text-xs rounded-md">
                    Edit
                    </button>
                </div>
                </td>
            </tr>

            <tr className={getRowClassName(3)}>
                <td className="px-2 py-2 text-center">4</td>
                <td className="td px-2 py-2 text-center">Febrian Adipurnowo</td>
                <td className="px-2 py-2 text-center">Digital Marketing</td>
                <td className="px-2 py-2 text-center">Kantor 2</td>
                <td className="px-2 py-2 text-center">--</td>
                <td className="px-2 py-2 text-center">
                <div className="flex gap-2 justify-center items-center">
                    <button className="py-2 px-4 bg-blue-500 text-white font-inter text-xs rounded-md">
                    Edit
                    </button>
                </div>
                </td>
            </tr>

            <tr className={getRowClassName(4)}>
                <td className="px-2 py-2 text-center">5</td>
                <td className="td px-2 py-2 text-center">Ilham</td>
                <td className="px-2 py-2 text-center">UI/UX</td>
                <td className="px-2 py-2 text-center">Kantor 3</td>
                <td className="px-2 py-2 text-center">--</td>
                <td className="px-2 py-2 text-center">
                <div className="flex gap-2 justify-center items-center">
                    <button className="py-2 px-4 bg-blue-500 text-white font-inter text-xs rounded-md">
                    Edit
                    </button>
                </div>
                </td>
            </tr>
            </tbody>
        </table>
      </div>

      {/* Display page numbers */}
      <div className="flex justify-center mt-4">{getPageNumbers()}</div>
    </>
  );
}
