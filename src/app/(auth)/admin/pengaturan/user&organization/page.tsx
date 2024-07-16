"use client";
import AdminProfile from "@/app/component/adminProfile";
import NavbarAdminDashboard from "@/app/component/nav-admin";
import React, { useEffect, useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { IoClose } from "react-icons/io5";

export default function utama() {
  return (
    <>
      <div className="w-full h-screen flex m-auto lg:p-0 overflow-hidden">
        <NavbarAdminDashboard />
        <Pengaturan />
        <div className="overflow-auto bg-gray-100 w-full p-4 flex flex-col gap-5  min-h-0">
          <AdminProfile />
          <Search />
          <Project />
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
        <li className="hover:text-black hover:bg-red-200 rounded-lg px-2 py-1 my-1">
          <a href="/admin/pengaturan/manage-alumni">Manage Alumni</a>
        </li>
        <li className="hover:text-black hover:bg-red-200 rounded-lg px-2 py-1 my-1">
          <a href="/admin/pengaturan/lokasi-kantor">Manage Kantor</a>
        </li>
      </ul>
      <p className="text-sm text-gray-600 pt-7">PANEL ADMINISTRATOR</p>
      <ul className="list-disc list-inside text-gray-400 text-sm ">
        <li className="text-black bg-red-200 rounded-lg px-2 py-1 my-1">
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

  const [showManageDivisi, setShowManageDivisi] = useState(false);

  const toggleManageDivisi = () => {
    setShowManageDivisi(!showManageDivisi);
  };

  return (
    <div className="search flex gap-8 items-center w-full p-2">
      <div className="formSearch w-2/5 font-inter">
        <h1 className="text-base mb-2 font-bold">User & Organization</h1>
        <p className="text-xs font-inter">Informasi tentang dosen</p>
        <button
          onClick={openModal}
          className="bg-red-700 flex rounded-lg hover:bg-red-900   text-xs items-center justify-center gap-2 py-2 px-3 text-white mt-6 font-inter"
        >
          Add User
        </button>
        <div className="search-container "></div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-pengaturan bg-white w-1/3 max-h-90%  rounded-xl p-4 flex flex-col gap-2 overflow-auto">
            <div className="relative cursor-pointer  " onClick={closeModal}>
              <IoClose className="absolute top-0 right-0" />
            </div>
            <div className="modal-content ">
              <div className="flex border border-gray-500 p-2 ">
                <div className="profilUser w-1/2 border-r border-gray-500 p-2 flex justify-between">
                  <div>
                    <h1 className="text-sm font-inter font-bold">
                      Profile Photo
                    </h1>
                    <img
                      className="rounded-full"
                      src="/kucing.png"
                      alt=""
                      width={70}
                      height={70}
                    />
                  </div>
                  <div className="flex flex-col gap-3 justify-center items-center ">
                    <button className="border-2 border-red-700 p-2 font-inter text-xs hover:bg-red-700 hover:border hover:border-white hover:text-white">
                      Add Photo
                    </button>
                    <button className="text-red-700 text-xs">remove</button>
                  </div>
                </div>
                <div className="w-1/2 flex justify-center items-center text-start p-3">
                  <div className="flex flex-col ">
                    <h1 className="font-inter text-sm">Image requirement</h1>
                    <p className="font-inter text-xs">1. Min. 400px * 400px</p>
                    <p className="font-inter text-xs">2. Max 2 MB</p>
                    <p className="font-inter text-xs">3. Your face</p>
                  </div>
                </div>
              </div>
            </div>

            <h1 className="text-sm font-inter font-bold">User Details</h1>
            <div className="flex gap-2 w-full justify-center ">
              <div className="flex flex-col gap-1 w-1/2">
                <p className="text-xs ">First Name</p>
                <input
                  type="text"
                  className="w-full bg-gray-100  border border-black focus:outline-none p-2 text-xs rounded-md"
                  placeholder="Guru"
                />
              </div>

              <div className="flex flex-col gap-1 w-1/2">
                <p className="text-xs ">Last Name</p>
                <input
                  type="text"
                  className="w-full bg-gray-100  border border-black focus:outline-none p-2 text-xs rounded-md"
                  placeholder="1"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1 ">
              <p className="text-xs ">Username</p>
              <input
                type="text"
                className="w-full bg-gray-100  border border-black focus:outline-none p-2 text-xs rounded-md"
                placeholder="Guru@gmail.com"
              />
            </div>
            <div className="flex flex-col gap-1 ">
              <p className="text-xs ">Email</p>
              <input
                type="text"
                className="w-full bg-gray-100  border border-black focus:outline-none p-2 text-xs rounded-md"
                placeholder="Guru@gmail.com"
              />
            </div>

            <div className="flex gap-2 w-full justify-center  ">
              <div className="flex flex-col gap-1 w-1/2">
                <p className="text-xs ">Password</p>
                <input
                  type="text"
                  className="w-full bg-gray-100  border border-black focus:outline-none p-2 text-xs rounded-md"
                  placeholder="Masukan Password"
                />
              </div>

              <div className="flex flex-col gap-1 w-1/2">
                <p className="text-xs ">Ulangi Password</p>
                <input
                  type="text"
                  className="w-full bg-gray-100  border border-black focus:outline-none p-2 text-xs rounded-md"
                  placeholder="Ulangi Password"
                />
              </div>
            </div>

            <div className="project  rounded-lg  cursor-pointer">
              <div
                className="flex gap-4 w-full bg-gray-100  border border-black focus:outline-none p-2 text-xs rounded-md justify-between"
                onClick={toggleManageDivisi}
              >
                <span>Manage Project</span>{" "}
                {showManageDivisi ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </div>

              {showManageDivisi && (
                <div className="flex flex-col gap-3">
                  <h1 className="text-lg font-inter font-bold mb-5 ">
                    Available User
                  </h1>
                  <input
                    type="text"
                    className="w-full bg-transparent border border-black focus:outline-none p-2 text-xs rounded-md"
                    placeholder="Cari Mahasiswa"
                  />

                  <table className="table-auto w-full border-collapse border-2 border-gray-500 rounded-md">
                    <thead>
                      <tr>
                        <th className="border-2 border-gray-500 px-4 py-2 "></th>
                        <th className="border-2 border-gray-500 px-4 py-2">
                          Nama
                        </th>
                        <th className="border-2 border-gray-500 px-4 py-2">
                          Asal Kampus
                        </th>
                        {/* Tambahkan lebih banyak <th> untuk kolom tambahan */}
                      </tr>
                    </thead>
                    <tbody>
                      <tr className=" hover:bg-red-200 cursor-pointer text-center">
                        <td className="border-2 border-gray-500 px-4 py-2">
                          <input
                            type="checkbox"
                            className="w-4 h-4 text-red-700 border-red-700"
                          />
                        </td>
                        <td className="border-2 border-gray-500 px-4 py-2">
                          Nurfan Rahmat Berlian
                        </td>
                        <td className="border-2 border-gray-500 px-4 py-2">
                          Universitas Ahmad Dahlan
                        </td>
                        {/* Tambahkan lebih banyak <td> untuk data kolom tambahan */}
                      </tr>
                      <tr className=" hover:bg-red-200 cursor-pointer text-center">
                        <td className="border-2 border-gray-500 px-4 py-2">
                          <input
                            type="checkbox"
                            className="w-4 h-4 text-red-700 border-red-700"
                          />
                        </td>
                        <td className="border-2 border-gray-500 px-4 py-2">
                          Nurfan Rahmat Berlian
                        </td>
                        <td className="border-2 border-gray-500 px-4 py-2">
                          Universitas Ahmad Dahlan
                        </td>
                        {/* Tambahkan lebih banyak <td> untuk data kolom tambahan */}
                      </tr>
                      <tr className=" hover:bg-red-200 cursor-pointer text-center">
                        <td className="border-2 border-gray-500 px-4 py-2">
                          <input
                            type="checkbox"
                            className="w-4 h-4 text-red-700 border-red-700"
                          />
                        </td>
                        <td className="border-2 border-gray-500 px-4 py-2">
                          Nurfan Rahmat Berlian
                        </td>
                        <td className="border-2 border-gray-500 px-4 py-2">
                          Universitas Ahmad Dahlan
                        </td>
                        {/* Tambahkan lebih banyak <td> untuk data kolom tambahan */}
                      </tr>
                    </tbody>
                  </table>

                  <div>
                    <h1 className="text-lg font-inter font-bold mb-5 ">
                      Selected User
                    </h1>

                    <table className="table-auto w-full border-collapse border-2 border-gray-500 rounded-md">
                      <thead>
                        <tr>
                          <th className="border-2 border-gray-500 px-4 py-2 "></th>
                          <th className="border-2 border-gray-500 px-4 py-2">
                            Nama
                          </th>
                          <th className="border-2 border-gray-500 px-4 py-2">
                            Asal Kampus
                          </th>
                          {/* Tambahkan lebih banyak <th> untuk kolom tambahan */}
                        </tr>
                      </thead>
                      <tbody>
                        <tr className=" hover:bg-red-200 cursor-pointer text-center">
                          <td className="border-2 border-gray-500 px-4 py-2">
                            <input
                              type="checkbox"
                              className="w-4 h-4 text-red-700 border-red-700"
                            />
                          </td>
                          <td className="border-2 border-gray-500 px-4 py-2">
                            Nurfan Rahmat Berlian
                          </td>
                          <td className="border-2 border-gray-500 px-4 py-2">
                            Universitas Ahmad Dahlan
                          </td>
                          {/* Tambahkan lebih banyak <td> untuk data kolom tambahan */}
                        </tr>
                        <tr className=" hover:bg-red-200 cursor-pointer text-center">
                          <td className="border-2 border-gray-500 px-4 py-2">
                            <input
                              type="checkbox"
                              className="w-4 h-4 text-red-700 border-red-700"
                            />
                          </td>
                          <td className="border-2 border-gray-500 px-4 py-2">
                            Nurfan Rahmat Berlian
                          </td>
                          <td className="border-2 border-gray-500 px-4 py-2">
                            Universitas Ahmad Dahlan
                          </td>
                          {/* Tambahkan lebih banyak <td> untuk data kolom tambahan */}
                        </tr>
                        <tr className=" hover:bg-red-200 cursor-pointer text-center">
                          <td className="border-2 border-gray-500 px-4 py-2">
                            <input
                              type="checkbox"
                              className="w-4 h-4 text-red-700 border-red-700"
                            />
                          </td>
                          <td className="border-2 border-gray-500 px-4 py-2">
                            Nurfan Rahmat Berlian
                          </td>
                          <td className="border-2 border-gray-500 px-4 py-2">
                            Universitas Ahmad Dahlan
                          </td>
                          {/* Tambahkan lebih banyak <td> untuk data kolom tambahan */}
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>
            <button className="bg-red-700 rounded-md text-sm text-white p-2 w-24 " onClick={closeModal}>
              Submit
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function Project() {
  const [kampus, setKampus] = useState([]);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [currentPage, setCurrentPage] = useState(1);
  const [deleteIndex, setDeleteIndex] = useState(null);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [showEditPopup, setShowEditPopup] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setShowEditPopup(false);
  };

  const handleSubmit = () => {
    // Lakukan tindakan saat form disubmit
    // Misalnya, validasi input, kirim data ke server, dll.
    // Setelah itu, Anda bisa menutup popup dengan memanggil closeModal
    closeModal();
  };

  const [showManageDivisi, setShowManageDivisi] = useState(false);

  const toggleManageDivisi = () => {
    setShowManageDivisi(!showManageDivisi);
  };
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

  const totalPages = Math.ceil(kampus.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const handleEdit = (index: any) => {
    setEditIndex(index);
    setShowEditPopup(true);
  };
  
  const handleDelete = (index: any) => {
    setDeleteIndex(index);
    setShowDeleteConfirmation(true); 
  };

  const confirmDelete = () => {
    if (deleteIndex !== null) {
      const updatedKampus = [...kampus];
      updatedKampus.splice(deleteIndex, 1);
      setKampus(updatedKampus);
      setShowDeleteConfirmation(false);
    }
  };    

const cancelDelete = () => {
  setShowDeleteConfirmation(false);
};

  const getPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <button
          key={i}
          className={`px-1 py-1 mx-1 font-inter text-xs
    text-black ${
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
    {showDeleteConfirmation && (
      <div className="modal-overlay">
        <div className="modal-delete bg-white rounded-lg p-6 max-w-md">
          <div className="modal-content text-center">
            <h1 className="text-lg font-bold mb-3 text-sm">Delete</h1>
            <p className="text-xs mb-3">Apakah Anda yakin ingin menghapus data?</p>
            <div className="flex justify-center mt-2">
              <button className="bg-gray-300 text-black px-4 py-2 mr-20 rounded-md text-xs" onClick={cancelDelete}>Tidak</button>
              <button className="bg-red-500 text-white px-4 py-2 ml-20 rounded-md text-xs" onClick={confirmDelete}>Ya</button>
            </div>
          </div>
        </div>
      </div>
    )}
    {showEditPopup && (
      <div className="modal-overlay">
          <div className="modal-pengaturan bg-white w-1/3 max-h-90%  rounded-xl p-4 flex flex-col gap-2 overflow-auto">
            <div className="relative cursor-pointer  " onClick={closeModal}>
              <IoClose className="absolute top-0 right-0" />
            </div>
            <div className="modal-content ">
              <div className="flex border border-gray-500 p-2 ">
                <div className="profilUser w-1/2 border-r border-gray-500 p-2 flex justify-between">
                  <div>
                    <h1 className="text-sm font-inter font-bold">
                      Profile Photo
                    </h1>
                    <img
                      className="rounded-full"
                      src="/kucing.png"
                      alt=""
                      width={70}
                      height={70}
                    />
                  </div>
                  <div className="flex flex-col gap-3 justify-center items-center ">
                    <button className="border-2 border-red-700 p-2 font-inter text-xs hover:bg-red-700 hover:border hover:border-white hover:text-white">
                      Add Photo
                    </button>
                    <button className="text-red-700 text-xs">remove</button>
                  </div>
                </div>
                <div className="w-1/2 flex justify-center items-center text-start p-3">
                  <div className="flex flex-col ">
                    <h1 className="font-inter text-sm">Image requirement</h1>
                    <p className="font-inter text-xs">1. Min. 400px * 400px</p>
                    <p className="font-inter text-xs">2. Max 2 MB</p>
                    <p className="font-inter text-xs">3. Your face</p>
                  </div>
                </div>
              </div>
            </div>

            <h1 className="text-sm font-inter font-bold">User Details</h1>
            <div className="flex gap-2 w-full justify-center ">
              <div className="flex flex-col gap-1 w-1/2">
                <p className="text-xs ">First Name</p>
                <input
                  type="text"
                  className="w-full bg-gray-100  border border-black focus:outline-none p-2 text-xs rounded-md"
                  placeholder="Guru"
                />
              </div>

              <div className="flex flex-col gap-1 w-1/2">
                <p className="text-xs ">Last Name</p>
                <input
                  type="text"
                  className="w-full bg-gray-100  border border-black focus:outline-none p-2 text-xs rounded-md"
                  placeholder="1"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1 ">
              <p className="text-xs ">Username</p>
              <input
                type="text"
                className="w-full bg-gray-100  border border-black focus:outline-none p-2 text-xs rounded-md"
                placeholder="Guru@gmail.com"
              />
            </div>
            <div className="flex flex-col gap-1 ">
              <p className="text-xs ">Email</p>
              <input
                type="text"
                className="w-full bg-gray-100  border border-black focus:outline-none p-2 text-xs rounded-md"
                placeholder="Guru@gmail.com"
              />
            </div>

            <div className="flex gap-2 w-full justify-center  ">
              <div className="flex flex-col gap-1 w-1/2">
                <p className="text-xs ">Password</p>
                <input
                  type="text"
                  className="w-full bg-gray-100  border border-black focus:outline-none p-2 text-xs rounded-md"
                  placeholder="Masukan Password"
                />
              </div>

              <div className="flex flex-col gap-1 w-1/2">
                <p className="text-xs ">Ulangi Password</p>
                <input
                  type="text"
                  className="w-full bg-gray-100  border border-black focus:outline-none p-2 text-xs rounded-md"
                  placeholder="Ulangi Password"
                />
              </div>
            </div>

            <div className="project  rounded-lg  cursor-pointer">
              <div
                className="flex gap-4 w-full bg-gray-100  border border-black focus:outline-none p-2 text-xs rounded-md justify-between"
                onClick={toggleManageDivisi}
              >
                <span>Manage Project</span>{" "}
                {showManageDivisi ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </div>

              {showManageDivisi && (
                <div className="flex flex-col gap-3">
                  <h1 className="text-lg font-inter font-bold mb-5 ">
                    Available User
                  </h1>
                  <input
                    type="text"
                    className="w-full bg-transparent border border-black focus:outline-none p-2 text-xs rounded-md"
                    placeholder="Cari Mahasiswa"
                  />

                  <table className="table-auto w-full border-collapse border-2 border-gray-500 rounded-md">
                    <thead>
                      <tr>
                        <th className="border-2 border-gray-500 px-4 py-2 "></th>
                        <th className="border-2 border-gray-500 px-4 py-2">
                          Nama
                        </th>
                        <th className="border-2 border-gray-500 px-4 py-2">
                          Asal Kampus
                        </th>
                        {/* Tambahkan lebih banyak <th> untuk kolom tambahan */}
                      </tr>
                    </thead>
                    <tbody>
                      <tr className=" hover:bg-red-200 cursor-pointer text-center">
                        <td className="border-2 border-gray-500 px-4 py-2">
                          <input
                            type="checkbox"
                            className="w-4 h-4 text-red-700 border-red-700"
                          />
                        </td>
                        <td className="border-2 border-gray-500 px-4 py-2">
                          Nurfan Rahmat Berlian
                        </td>
                        <td className="border-2 border-gray-500 px-4 py-2">
                          Universitas Ahmad Dahlan
                        </td>
                        {/* Tambahkan lebih banyak <td> untuk data kolom tambahan */}
                      </tr>
                      <tr className=" hover:bg-red-200 cursor-pointer text-center">
                        <td className="border-2 border-gray-500 px-4 py-2">
                          <input
                            type="checkbox"
                            className="w-4 h-4 text-red-700 border-red-700"
                          />
                        </td>
                        <td className="border-2 border-gray-500 px-4 py-2">
                          Nurfan Rahmat Berlian
                        </td>
                        <td className="border-2 border-gray-500 px-4 py-2">
                          Universitas Ahmad Dahlan
                        </td>
                        {/* Tambahkan lebih banyak <td> untuk data kolom tambahan */}
                      </tr>
                      <tr className=" hover:bg-red-200 cursor-pointer text-center">
                        <td className="border-2 border-gray-500 px-4 py-2">
                          <input
                            type="checkbox"
                            className="w-4 h-4 text-red-700 border-red-700"
                          />
                        </td>
                        <td className="border-2 border-gray-500 px-4 py-2">
                          Nurfan Rahmat Berlian
                        </td>
                        <td className="border-2 border-gray-500 px-4 py-2">
                          Universitas Ahmad Dahlan
                        </td>
                        {/* Tambahkan lebih banyak <td> untuk data kolom tambahan */}
                      </tr>
                    </tbody>
                  </table>

                  <div>
                    <h1 className="text-lg font-inter font-bold mb-5 ">
                      Selected User
                    </h1>

                    <table className="table-auto w-full border-collapse border-2 border-gray-500 rounded-md">
                      <thead>
                        <tr>
                          <th className="border-2 border-gray-500 px-4 py-2 "></th>
                          <th className="border-2 border-gray-500 px-4 py-2">
                            Nama
                          </th>
                          <th className="border-2 border-gray-500 px-4 py-2">
                            Asal Kampus
                          </th>
                          {/* Tambahkan lebih banyak <th> untuk kolom tambahan */}
                        </tr>
                      </thead>
                      <tbody>
                        <tr className=" hover:bg-red-200 cursor-pointer text-center">
                          <td className="border-2 border-gray-500 px-4 py-2">
                            <input
                              type="checkbox"
                              className="w-4 h-4 text-red-700 border-red-700"
                            />
                          </td>
                          <td className="border-2 border-gray-500 px-4 py-2">
                            Nurfan Rahmat Berlian
                          </td>
                          <td className="border-2 border-gray-500 px-4 py-2">
                            Universitas Ahmad Dahlan
                          </td>
                          {/* Tambahkan lebih banyak <td> untuk data kolom tambahan */}
                        </tr>
                        <tr className=" hover:bg-red-200 cursor-pointer text-center">
                          <td className="border-2 border-gray-500 px-4 py-2">
                            <input
                              type="checkbox"
                              className="w-4 h-4 text-red-700 border-red-700"
                            />
                          </td>
                          <td className="border-2 border-gray-500 px-4 py-2">
                            Nurfan Rahmat Berlian
                          </td>
                          <td className="border-2 border-gray-500 px-4 py-2">
                            Universitas Ahmad Dahlan
                          </td>
                          {/* Tambahkan lebih banyak <td> untuk data kolom tambahan */}
                        </tr>
                        <tr className=" hover:bg-red-200 cursor-pointer text-center">
                          <td className="border-2 border-gray-500 px-4 py-2">
                            <input
                              type="checkbox"
                              className="w-4 h-4 text-red-700 border-red-700"
                            />
                          </td>
                          <td className="border-2 border-gray-500 px-4 py-2">
                            Nurfan Rahmat Berlian
                          </td>
                          <td className="border-2 border-gray-500 px-4 py-2">
                            Universitas Ahmad Dahlan
                          </td>
                          {/* Tambahkan lebih banyak <td> untuk data kolom tambahan */}
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>
            <button className="bg-red-700 rounded-md text-sm text-white p-2 w-24 " onClick={closeModal}>
              Submit
            </button>
          </div>
        </div>
    )}
      <div className="flex flex-col gap-2">
        {kampus.slice(startIndex, endIndex).map((dataKampus: any, index) => (
          <div
            key={index}
            className="userGuru flex justify-between  w-full p-4 bg-white rounded-md border border-gray-300  hover:bg-gray-400 cursor-pointer "
          >
            <div className="flex gap-4 p-1">
              <img
                className="profilImg"
                src="/kucing.png"
                width={70}
                height={70}
                alt=""
              />
              <div className="flex flex-col gap-1">
                <h1 className="text-xs  font-inter">{dataKampus.name}</h1>
                <h1 className="text-xs  font-inter">Name : Guru1</h1>
                <h1 className="text-xs  font-inter">
                  Privilege :{" "}
                  <button className="p-1 bg-gray-300 rounded-lg">
                    View Page
                  </button>{" "}
                </h1>
              </div>
            </div>
            <div className="flex gap-2 justify-center items-center">
            <button className="py-2 px-4 bg-blue-500 text-white font-inter text-xs rounded-md" onClick={() => handleEdit(index)}>Edit</button>
            <button className="py-2 px-4 bg-red-500 text-white font-inter text-xs rounded-md" onClick={() => handleDelete(index)}>Hapus</button>
            </div>
          </div>
        ))}
      </div>
      {/* Display page numbers */}
      <div className="flex justify-center mt-4">{getPageNumbers()}</div>
    </>
  );
}
