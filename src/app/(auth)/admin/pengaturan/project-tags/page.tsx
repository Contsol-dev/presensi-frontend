"use client";
import AdminProfile from "@/app/component/adminProfile";
import NavbarAdminDashboard from "@/app/component/nav-admin";
import React, { useEffect, useState } from "react";
import { RiEdit2Line } from 'react-icons/ri';
import { RiDeleteBinLine } from 'react-icons/ri';

import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

export default function utama() {
  return (
    <>
      <div className="w-full h-screen flex m-auto lg:p-0 overflow-hidden ">
        <NavbarAdminDashboard />
        <Pengaturan />
        <div className="overflow-auto bg-gray-100 w-full p-4 flex flex-col gap-5  min-h-0">
          <AdminProfile />
          <Search/>
          <Project/>
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
          className="project text-black list-none bg-red-200 rounded-lg px-2 py-1 my-1 cursor-pointer"
          onClick={toggleManageDivisi}
        >
          <div className="flex gap-4">
            <span>Manage Project</span>{" "}
            {showManageDivisi ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </div>

          {showManageDivisi && (
            <ul className="childrenn list-disc list-inside text-gray-400 text-sm ml-4 ">
              <li className="text-black border border-black rounded-lg px-2 py-1 my-1">
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
  return (
    <div className="search flex gap-3 items-center w-full p-2">
      <div className="formSearch w-2/5 font-inter">
        <h1 className="text-base mb-2 font-bold">Project’s Tag</h1>
        <div className="search-container "></div>
      </div>
    </div>
  );
}


function Project() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState([]);
  
  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  
  const handleProjectChange = (event: any) => {
    // Lakukan sesuatu dengan nilai yang dipilih
    setDropdownOpen(false); // Menutup dropdown saat opsi proyek dipilih
  }
  
  return (
    <div className="flex  gap-2 w-full h-full  p-2">
      <div className="w-1/2  p-2 rounded-sm flex flex-col gap-3 ">
        <h1 className="text-sm font-inter font-bold ">Add New Tag</h1>
        <div className="flex flex-col gap-1">
          <p className="text-xs ">Name</p>
          <input
            type="text"
            className="w-full bg-transparent border border-black focus:outline-none p-2 text-xs rounded-md"
            placeholder="Masukan nama proyek"
          />
          <p className="text-[10px] font-inter">
            The name is how it appears on your site
          </p>
        </div>
        <div className="relative">
          <button
            onClick={toggleDropdown}
            className="w-full bg-transparent border border-black flex justify-between text-left p-2 text-xs rounded-md"
          >
            Cari Project
            <IoIosArrowDown width={30} />
          </button>
          <div className={`absolute top-full right-0 bg-white border border-black w-full rounded-b-md z-10 ${dropdownOpen ? '' : 'hidden'}`} style={{ textAlign: 'right' }}>
            <label htmlFor="project1" style={{ borderBottom: '1px solid black', paddingBottom: '5px', marginRight: '250px', fontSize: 'smaller' }}>Project 1</label>
            <input type="radio" id="project1" name="project" value="5" onChange={handleProjectChange} />
            <br />
            
            <label htmlFor="project2" style={{ borderBottom: '1px solid black', paddingBottom: '5px', marginRight: '250px', fontSize: 'smaller' }}>Project 2</label>
            <input type="radio" id="project2" name="project" value="10" onChange={handleProjectChange} />
            <br />
            
            <label htmlFor="project3" style={{ borderBottom: '1px solid black', paddingBottom: '5px', marginRight: '250px', fontSize: 'smaller' }}>Project 3</label>
            <input type="radio" id="project3" name="project" value="15" onChange={handleProjectChange} />
            <br />
            <label htmlFor="project3" style={{ borderBottom: '1px solid black', paddingBottom: '5px', marginRight: '250px', fontSize: 'smaller' }}>Project 4</label>
            <input type="radio" id="project3" name="project" value="15" onChange={handleProjectChange} />
            <br />
        </div>
        </div>
        <p className="text-[10px] font-inter">List of Project</p>
        <div className="flex flex-col gap-1">
          <p className="text-xs ">Slug</p>
          <input
            type="text"
            className="w-full bg-transparent border border-black focus:outline-none p-2 text-xs rounded-md"
            placeholder="Text"
          />
          <p className="text-[10px] font-inter">
            Slug is the part of a URL that explains the page's content. It is
            usually all lowercase and contains only letters, numbers, and
            hyphens.{" "}
          </p>
        </div>

        <button className="bg-red-700 rounded-md hover:bg-red-900 w-32  text-xs items-center justify-center gap-2 py-2 px-3 text-white  font-inter">
          Add New
        </button>
      </div>

      <div className=" tableProject w-1/2  rounded-md flex flex-col px-2 py-1  overflow-auto gap-2">
        <Table />
      </div>
    </div>
  );
}

function Table() {
  const [kampus, setKampus] = useState([]);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [deleteIndex, setDeleteIndex] = useState(null);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [showEditPopup, setShowEditPopup] = useState(false);
  const [searchTerm, setSearchTerm] = useState(""); // State untuk kata kunci pencarian
 
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  
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

  const closePopup = () => {
    setShowEditPopup(false); // Menutup popup edit ketika tombol "X" diklik
  };

  const cancelDelete = () => {
    setShowDeleteConfirmation(false);
  };

    // Fungsi untuk melakukan pencarian
    const searchFilter = (kampus : any) => {
      return kampus.filter((data : any) =>
        data.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    };
      // Menyaring data berdasarkan kata kunci pencarian
    const filteredKampus = searchFilter(kampus);

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
      ? "bg-gray-300 trLaporan border border-gray-200 text-xs font-inter "
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

  const totalPages = Math.ceil(kampus.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  
  const handleProjectChange = (event: any) => {
    // Lakukan sesuatu dengan nilai yang dipilih
    setDropdownOpen(false); // Menutup dropdown saat opsi proyek dipilih
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
  function EditPopup() {
    const [showEditPopup, setShowEditPopup] = useState(true);
  
    const confirmSave = () => {
      // Logika untuk menyimpan data atau menutup popup edit
      setShowEditPopup(false); // Contoh: Menutup popup setelah menyimpan data
    };
  
    const openModal = () => {
      // Logika untuk membuka modal
    };
  }
  
  return (
    <>
      {showEditPopup && (
        <div className="modal-overlay">
          <div className="modal-delete bg-white rounded-lg p-6 max-w-md">
          <div className="flex justify-end">
          <button onClick={closePopup} className="text-gray-500 hover:text-gray-700">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.354 4.646a.5.5 0 0 0-.708 0L10 9.293 5.354 4.646a.5.5 0 1 0-.708.708L9.293 10l-4.647 4.646a.5.5 0 0 0 .708.708L10 10.707l4.646 4.647a.5.5 0 0 0 .708-.708L10.707 10l4.647-4.646a.5.5 0 0 0 0-.708z"/>
                </svg>
              </button>
          </div>

            <h1 className="text-sm font-inter font-bold">Edit Tag</h1>
            <div className="flex flex-col gap-1">
              <p className="text-xs">Name</p>
              <input
                type="text"
                className="w-full bg-transparent border border-black focus:outline-none p-2 text-xs rounded-md"
                placeholder="Masukan nama proyek"
              />
              <p className="text-[10px] font-inter">
                The name is how it appears on your site
              </p>
            </div>
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="w-full bg-transparent border border-black flex justify-between text-left p-2 text-xs rounded-md"
              >
                Cari Project
                <IoIosArrowDown width={30} />
              </button>
              <div className={`absolute top-full right-0 bg-white border border-black w-full rounded-b-md z-10 ${dropdownOpen ? '' : 'hidden'}`} style={{ textAlign: 'right' }}>
                <label htmlFor="project1" style={{ borderBottom: '1px solid black', paddingBottom: '5px', marginRight: '380px' }}>Project 1</label>
                <input type="radio" id="project1" name="project" value="5" onChange={handleProjectChange} />
                <br />
                
                <label htmlFor="project2" style={{ borderBottom: '1px solid black', paddingBottom: '5px', marginRight: '380px' }}>Project 2</label>
                <input type="radio" id="project2" name="project" value="10" onChange={handleProjectChange} />
                <br />
                
                <label htmlFor="project3" style={{ borderBottom: '1px solid black', paddingBottom: '5px', marginRight: '380px' }}>Project 3</label>
                <input type="radio" id="project3" name="project" value="15" onChange={handleProjectChange} />
                <br />
              </div>
            </div>
            <p className="text-[10px] font-inter">List of Project</p>
            <div className="flex flex-col gap-1">
              <p className="text-xs">Slug</p>
              <input
                type="text"
                className="w-full bg-transparent border border-black focus:outline-none p-2 text-xs rounded-md"
                placeholder="Text"
              />
              <p className="text-[10px] font-inter">
                Slug is the part of a URL that explains the page's content. It is
                usually all lowercase and contains only letters, numbers, and
                hyphens.
              </p>
            </div>
            <button className="bg-red-700 rounded-md hover:bg-red-900 w-32 text-xs items-center justify-center gap-2 py-2 px-3 text-white font-inter">Simpan</button>
          </div>
          </div>
      )}
    
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
      <input
        type="text"
        className="w-full p-2 bg-white  focus:outline-none text-xs rounded-md"
        placeholder="Search Project"
        // Mengupdate state kata kunci pencarian saat nilai input berubah
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <p className="text-[10px] font-inter text-gray-400">0 views</p>
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

      <div className="overflow-auto">
      <table className="table-auto rounded-lg">
        <thead className="bg-white border-b-2 border-gray-500 text-xs font-inter">
          <tr>
            <th className="px-2 py-2"></th>
            <th className="px-2 py-2">No</th>
            <th className="px-2 py-2">Tag</th>
            <th className="px-2 py-2">Nama Project</th>
            <th className="px-2 py-2">Slug</th>
            <th className="px-2 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredKampus
            .slice(startIndex, endIndex) // Menerapkan pembagian halaman
            .map((dataKampus: any, index: any) => (
              <tr key={index} className={getRowClassName(index)}>
                <td className="px-2 py-2 text-center">
                  <input type="checkbox" className="w-4 h-4" />
                </td>
                <td className="td px-2 py-2 text-center min-w-150px">
                  <span className="text-blue-800 underline hover:text-blue-950">
                    {index + 1}
                  </span>
                </td>
                <td className="td px-2 py-2 text-center ">
                  {dataKampus.Tag}
                  <span>Text</span>
                </td>
                <td className="px-2 py-2 text-center">
                  <div className="flex justify-center items-center">
                    {dataKampus.name}
                  </div>
                </td>
                  <td className="px-2 py-2 text-center">
                    <div className="flex gap-2 justify-center items-center">
                      {dataKampus.Slug}
                      <span>https</span>
                    </div>
                  </td>
                  <td className="px-2 py-2 text-center">
                    <div className="flex gap-2 justify-center items-center">
                      <button
                        className="py-2 px-4 text-white font-inter text-xs rounded-md relative"
                        onClick={() => handleEdit(index)}
                      >
                        <RiEdit2Line className="absolute bottom-2 right-2" style={{ color: "Black" }} />
                      </button>
                      <button
                        className="py-2 px-4 text-white font-inter text-xs rounded-md relative"
                        onClick={() => handleDelete(index)}
                      >
                        <RiDeleteBinLine className="absolute bottom-2 right-2" style={{ color: "Black" }} />
                      </button>
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
