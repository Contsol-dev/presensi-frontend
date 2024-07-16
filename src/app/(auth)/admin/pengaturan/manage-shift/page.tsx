"use client";
import React, { useEffect, useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { VscClose } from "react-icons/vsc";
import { RiEdit2Line } from "react-icons/ri";
import { FiPlusCircle } from "react-icons/fi";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import AdminProfile from "@/app/component/adminProfile";
import NavbarAdminDashboard from "@/app/component/nav-admin";

export default function utama() {
  return (
    <>
      <div className="w-full h-screen flex m-auto lg:p-0 overflow-hidden">
        <NavbarAdminDashboard />
        <Pengaturan />
        <div className="overflow-auto bg-gray-100 w-full p-4 flex flex-col gap-5  min-h-0">
          <AdminProfile />
          <Search />
          <Table />
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
          <a href="/admin/pengaturan/jam&quotes">Quotes</a>
        </li>
        <li className=" text-black bg-red-200 rounded-lg px-2 py-1 my-1">
          <a href="/admin/pengaturan/manage-shift">Manage Shift</a>
        </li>
        <li className="hover:text-black hover:bg-red-200 rounded-lg px-2 py-1 my-1">
          <a href="/admin/pengaturan/manage-divisi">Manage Divisi</a>
        </li>
        <li
          className="hover:text-black list-none hover:bg-red-200 rounded-lg px-2 py-1 my-1 cursor-pointer"
          onClick={toggleManageDivisi}
        >
          <div className="flex gap-4">
            <span>Manage Project</span>{" "}
            {showManageDivisi ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </div>

          {showManageDivisi && (
            <ul className="list-disc list-inside text-gray-400 text-sm ml-4">
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
        <li className="hover:text-black hover:bg-red-200 rounded-lg px-2 py-1 my-1">
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
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="search flex gap-8 items-center w-full p-2">
      <div className="formSearch w-2/5 font-inter">
        <h1 className="text-base mb-2 font-bold">Shift</h1>
        <p className="text-xs font-inter">Menentukan pengaturan shift</p>
        <div className="search-container overflow-hidden">
          <button
            id="btnModal"
            className="text-xs bg-white p-2 rounded-lg flex gap-2 mt-4 justify-center items-center"
            onClick={openModal}
          >
            <FiPlusCircle width={30} /> Tambah Shift
          </button>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="bg-white w-1/3   rounded-xl p-4">
            <div className="modal-content">
              <h1 className="text-lg font-inter font-bold mb-5 ">
                Tambah Shift
              </h1>

              <div className="my-4">
                <p className="text-xs font-inter">Nama Shift</p>
                <input
                  type="text"
                  className="bg-gray-100 rounded-md w-full border-b text-xs border-gray-600 p-2 focus:outline-none "
                  placeholder="input Shift"
                />
              </div>
              <div className="my-4">
                <p className="text-xs font-inter">Jam Mulai</p>
                <input
                  type="text"
                  className="bg-gray-100 rounded-md w-full border-b text-xs border-gray-600 p-2 focus:outline-none "
                  placeholder="input Shift"
                />
              </div>
              <div className="my-4">
                <p className="text-xs font-inter">Jam Berakhir</p>
                <input
                  type="text"
                  className="bg-gray-100 rounded-md w-full border-b text-xs border-gray-600 p-2 focus:outline-none "
                  placeholder="input Shift"
                />
              </div>

              <div>
                <div className="flex justify-end gap-2 mt-2">
                  <button
                    onClick={closeModal}
                    className="border border-gray-600 flex rounded-lg    text-xs items-center justify-center gap-2 py-2 px-3 text-black w-24 font-inter"
                  >
                    Batal
                  </button>
                  <button className="bg-red-700 flex rounded-lg hover:bg-red-900   text-xs items-center justify-center gap-2 py-2 px-3 text-white w-24 font-inter">
                    Tambahkan
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
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

  const [isModalOpen, setModalOpen] = useState(false);

  const openModalEdit = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <div className="tableData">
        <table className="table-auto w-full rounded-lg ">
          <thead className="bg-white border-b-2 border-gray-500 text-xs font-inter ">
            <tr>
              <th className="px-2 py-2">No</th>
              <th className="px-2 py-2">Nama Shift</th>
              <th className="px-2 py-2">Jam Mulai</th>
              <th className="px-2 py-2">Jam Berakhir</th>
              <th className="px-2 py-2">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {kampus
              .slice(startIndex, endIndex)
              .map((dataKampus: any, index) => (
                <tr key={index} className={getRowClassName(index)}>
                  <td className="px-2 py-2 text-center">
                    {startIndex + index + 1}
                  </td>
                  <td className="td px-2 py-2 text-center">
                    <span className=" text-blue-800 underline hover:text-blue-950 ">
                      Nurfan Rahmat Berlian
                    </span>
                  </td>
                  <td className="td px-2 py-2 text-center">
                    {dataKampus.name}
                  </td>
                  <td className="px-2 py-2 text-center">
                    <div className="flex justify-center items-center">
                      <span>17.00</span>
                    </div>
                  </td>
                  <td className="px-2 py-2 text-center">
                    <div className="flex gap-2 justify-center">
                      <button
                        id="btnModalEdit"
                        className="py-2 px-4 bg-blue-500 text-white font-inter text-xs rounded-md"
                        onClick={openModalEdit}
                      >
                        Edit
                      </button>
                      <button className="py-2 px-4 bg-red-500 text-white font-inter text-xs rounded-md">
                        Hapus
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        {isModalOpen && (
          <div className="modal-overlay">
            <div className="bg-white w-1/3 rounded-xl p-4">
              <div className="modal-content">
                <h1 className="text-lg font-inter font-bold mb-5 ">
                  Edit Shift
                </h1>
                <div className="my-4">
                  <p className="text-xs font-inter">Nama Shift</p>
                  <input
                    type="text"
                    className="bg-gray-100 rounded-md w-full border-b text-xs border-gray-600 p-2 focus:outline-none "
                    placeholder="input Shift"
                  />
                </div>
                <div className="my-4">
                  <p className="text-xs font-inter">Jam Mulai</p>
                  <input
                    type="text"
                    className="bg-gray-100 rounded-md w-full border-b text-xs border-gray-600 p-2 focus:outline-none "
                    placeholder="input Shift"
                  />
                </div>
                <div className="my-4">
                  <p className="text-xs font-inter">Jam Berakhir</p>
                  <input
                    type="text"
                    className="bg-gray-100 rounded-md w-full border-b text-xs border-gray-600 p-2 focus:outline-none "
                    placeholder="input Shift"
                  />
                </div>
                <div>
                  <div className="flex justify-end gap-2 mt-2">
                    <button
                      onClick={closeModal}
                      className="border border-gray-600 flex rounded-lg    text-xs items-center justify-center gap-2 py-2 px-3 text-black w-24 font-inter"
                    >
                      Batal
                    </button>
                    <button className="bg-red-700 flex rounded-lg hover:bg-red-900   text-xs items-center justify-center gap-2 py-2 px-3 text-white w-24 font-inter">
                      Tambahkan
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Display page numbers */}
      <div className="flex justify-center mt-4">{getPageNumbers()}</div>
    </>
  );
}
