"use client";
import AdminProfile from "@/app/component/adminProfile";
import NavbarAdminDashboard from "@/app/component/nav-admin";
import React, { useEffect, useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { HiUserGroup } from "react-icons/hi2";
import { MdArrowCircleRight } from "react-icons/md";

export default function utama() {
  return (
    <>
      <div className="w-screen  flex m-auto lg:p-0  ">
        <NavbarAdminDashboard />
        <div className="overflow-auto bg-gray-200 w-full p-4 flex flex-col gap-5  min-h-0">
          <AdminProfile />
          <Search />
          <Table />
        </div>
      </div>
    </>
  );
}

function Navbar() {
  const [nav, setnav] = useState(true);
  const [hide, sethide] = useState(false);

  const shownav = () => {
    setnav(!nav);
    sethide(!hide);
  };
  return (
    <>
      {hide && (
        <button
          onClick={shownav}
          className="burger flex justify-center items-center left-12 top-4 w-6 h-6 text-white rounded-full shadow-lg bg-button z-40 fixed color"
        >
          <AiOutlineMenu />
        </button>
      )}
      {nav && (
        <div className="navbar bg-[#DCDCDC] flex flex-col justify-between p-2  h-screen w-[340px] pb-20 sticky z-30 top-0 boxshadow border-r border-[#DCDCDC] ">
          <div
            onClick={shownav}
            className="absolute cursor-pointer right-5 top-5 text-xl"
          >
            <AiOutlineClose />
          </div>
          <div className="logo w-full flex  justify-center items-center">
            <img src="/logo.svg" width="50px" height="50px" alt="logo" />
          </div>

          <div className="menu w-11/12 h-3/6 p-4   ">
            <ul className="gap-4 flex flex-col text-sm font-inter">
              <li>
                <a href="">Dashboard</a>
              </li>
              <li>
                <a href="">Presensi</a>
              </li>
              <li>
                <a href="">Divisi</a>
              </li>
              <li>
                <a href="">Laporan</a>
              </li>
              <li>
                <a href="" className="font-bold">
                  Sekolah/Kampus
                </a>
              </li>
              <li>
                <a href="">Pengaturan</a>
              </li>
            </ul>
          </div>
          <div className="logout w-11/12 flex gap-x-7 px-4 ">
            <h1>Log out</h1>
            <img className="w-5" src="/logout.svg" alt="" />
          </div>
        </div>
      )}
    </>
  );
}

function Profil() {
  return (
    <>
      <div className="profil flex w-full items-center justify-end gap-4">
        <img className="lonceng w-5" src="/lonceng.svg" alt="lonceng" />
        <div className="name ">
          <h1 className="text-lg font-bold">Nurfan Rahmat Berlian</h1>
          <p className="text-sm">Admin</p>
        </div>
        <img
          className="profilImg"
          src="/kucing.png"
          width={50}
          height={50}
          alt="profil"
        />
      </div>
    </>
  );
}

function Search() {
  return (
    <div className="search flex gap-8 items-center w-full  p-2">
      <div className="formSearch w-2/5  font-inter">
        <p className="text-xs mb-2 font-bold">Cari Mahasiswa</p>
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
                  placeholder="Pencarian Kampus/Sekolah"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

function Table() {
  const [kampus, setKampus] = useState([]);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://restaurant-api.dicoding.dev/list"
        );
        const jsonData = await response.json();
        setKampus(jsonData.restaurants);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const getRowClassName = (index: any) => {
    return index % 2 === 0
      ? "bg-white trLaporan border border-gray-200 text-xs font-inter "
      : "bg-gray-300 trLaporan border border-gray-200 text-xs font-inter ";
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

  const totalPages = Math.ceil(kampus.length / itemsPerPage);
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
        <div className="filter flex gap-1 w-32 h-10 items-center justify-center text-sm border border-black rounded-md ">
          <select
            id="page-dropdown"
            name="page"
            className="jenisFilter w-3/4 focus:outline-none text-xs bg-gray-200"
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
        <div className="filter flex gap-1 w-32 h-10 items-center justify-center text-sm border border-black rounded-md">
          <select
            id="items-per-page-dropdown"
            name="itemsPerPage"
            className="jenisFilter focus:outline-none text-xs bg-gray-200"
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
              <th className="px-2 py-2">No</th>
              <th className="px-2 py-2">Nama</th>
              <th className="px-2 py-2">Divisi</th>
              <th className="px-2 py-2">Kantor</th>
              <th className="px-2 py-2">Sistem Shift</th>
              <th className="px-2 py-2">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {kampus
              .slice(startIndex, endIndex)
              .map((dataKampus: any, index) => (
                <tr key={dataKampus.index} className={getRowClassName(index)}>
                  <td className="px-2 py-2 text-center">
                    {startIndex + index + 1}
                  </td>
                  <td className="td px-2 py-2 text-center">
                    <a
                      href=""
                      className=" text-blue-800 underline hover:text-blue-950 "
                    >
                      Nurfan Rahmat Berlian
                    </a>
                  </td>
                  <td className="td px-2 py-2 text-center">
                    {dataKampus.name}
                  </td>
                  <td className="px-2 py-2 text-center">
                    <div className="flex justify-center items-center">
                      <span>30</span>
                      <img src="/info.svg" alt="info" className="w-3 ml-1" />
                    </div>
                  </td>
                  <td className="px-2 py-2 text-center">
                    <div className="flex justify-center items-center">
                      <span className="text-koneng">30</span>
                      <img src="/info.svg" alt="info" className="w-3 ml-1" />
                    </div>
                  </td>
                  <td className="px-2 py-2 text-center">
                    <div className="flex justify-center items-center">
                      <span className="text-error">30</span>
                      <img src="/info.svg" alt="info" className="w-3 ml-1" />
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      {/* Display page numbers */}
      <div className="flex justify-center mt-4">{getPageNumbers()}</div>
    </>
  );
}
