"use client";
import React, { useEffect, useState } from "react";
import AdminProfile from "@/app/component/adminProfile";
import NavbarAdminDashboard from "@/app/component/nav-admin";
import { useParams } from "next/navigation";
import axios from "axios";

interface Pemagang {
  username: string;
  nama: string;
  nama_divisi: string | null;
  nama_shift: string | null;
}

export default function Utama() {
  const [searchName, setSearchName] = useState("");
  const { kampus } = useParams();
  const keyword = kampus;

  return (
    <>
      <div className="w-screen h-screen flex m-auto lg:p-0 overflow-hidden">
        <NavbarAdminDashboard />
        <div className="overflow-auto bg-gray-100 w-full p-4 flex flex-col gap-5 min-h-0">
          <AdminProfile />
          <Search setSearchName={setSearchName} />
          <Table keyword={keyword} searchName={searchName} />
        </div>
      </div>
    </>
  );
}

function Search({ setSearchName }: any) {
  const handleSearchNama = (e: any) => {
    setSearchName(e.target.value);
  };

  return (
    <div className="search flex gap-8 items-center w-full p-2">
      <div className="formSearch w-2/5 font-inter ml-0">
        <h1 className="text-base mb-2 font-bold">Shift & Divisi</h1>
        <p className="text-xs font-inter mt-4">
          Shift dan Divisi setiap pengguna
        </p>
        <div className="flex items-center w-1/2 mt-2">
          <input
            type="text"
            name="name"
            placeholder="Cari Nama"
            className="border rounded-md p-2 w-screen"
            onChange={handleSearchNama}
          />
        </div>
      </div>
    </div>
  );
}

function Table({ keyword, searchName }: any) {
  const [pemagang, setPemagang] = useState<Pemagang[]>([]);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_SERVER}/admin/sekolah/pemagang/${keyword}/${searchName}`
        );
        setPemagang(response.data);
      } catch (error) {
        console.error("Error searching data:", error);
      }
    };

    fetchData();
  }, [keyword, searchName]);

  useEffect(() => {
    console.log(pemagang); // This will log updated pemagang
  }, [pemagang]);

  const getRowClassName = (index: any) => {
    return index % 2 === 0
      ? "bg-gray-300 trLaporan border border-gray-200 text-xs font-inter"
      : "bg-white trLaporan border border-gray-200 text-xs font-inter";
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

  const totalPages = Math.ceil(pemagang.length / itemsPerPage);
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
        <div className="filter flex gap-1 w-32 h-10 items-center justify-center text-sm bg-gray-200 border border-black rounded-md">
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
        <table className="table-auto w-full rounded-lg">
          <thead className="bg-white border-b-2 border-gray-500 text-xs font-inter">
            <tr>
              <th className="px-2 py-2 border">No</th>
              <th className="px-2 py-2 border">Nama</th>
              <th className="px-2 py-2 border">Divisi</th>
              <th className="px-2 py-2 border">Shift</th>
            </tr>
          </thead>
          <tbody>
            {pemagang.slice(startIndex, endIndex).map((data, index) => (
              <tr className={getRowClassName(index)} key={index}>
                <td className="px-2 py-2 text-center">{index + 1}</td>
                <td className="td px-2 py-2 text-center font-bold">
                  {data.nama}
                </td>
                <td className="px-2 py-2 text-center">{data.nama_divisi}</td>
                <td className="px-2 py-2 text-center">{data.nama_shift}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-center mt-4">{getPageNumbers()}</div>
    </>
  );
}
