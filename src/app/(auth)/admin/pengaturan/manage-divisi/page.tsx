"use client";
import React, { useEffect, useState } from "react";
import { FiPlusCircle } from "react-icons/fi";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { BsCardText } from "react-icons/bs";
import AdminProfile from "@/app/component/adminProfile";
import NavbarAdminDashboard from "@/app/component/nav-admin";
import { AiOutlinePicture } from "react-icons/ai";
import axios from "axios";

export default function Utama() {

  return (
    <>
      <div className="w-screen h-screen flex m-auto lg:p-0 overflow-hidden ">
        <NavbarAdminDashboard />
        <Pengaturan />
        <div className="overflow-auto bg-gray-100 w-full p-4 flex flex-col gap-5  min-h-0">
          <AdminProfile />
          <TambahDivisi />
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
          <a href="/admin/pengaturan/manage-shift">Manage Shift</a>
        </li>
        <li className="text-black bg-red-200 rounded-lg px-2 py-1 my-1">
          <a href="/admin/pengaturan/manage-divisi">Manage Divisi</a>
        </li>
      </ul>
    </div>
  );
}

function TambahDivisi() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [divisiBaru, setDivisiBaru] = useState('');

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleInputChange = (e) => {
    const { value } = e.target;
    setDivisiBaru(value);
  };

  const submitDivision = async () => {
    try {
      console.log(divisiBaru);
      const response = await axios.post('http://127.0.0.1:8000/admin/manage-divisi/add', {
        'nama_divisi': divisiBaru
      });
      console.log('Response:', response.data);
      window.location.reload();
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="search flex gap-8 items-center w-full p-2">
      <div className="formSearch w-2/5 font-inter">
        <h1 className="text-base mb-2 font-bold">Manage Divisi</h1>
        <p className="text-xs font-inter">
          Membuat Divisi Untuk Pegawai Magang
        </p>
        <div className="search-container ">
          <button
            id="btnModal"
            className="text-xs bg-white p-2 rounded-lg flex gap-2 mt-4 justify-center items-center"
            onClick={openModal}
          >
            <FiPlusCircle width={30} /> Tambah Divisi
          </button>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-pengaturan bg-white max-w-xs p-8 rounded-xl p-4">
            <div className="modal-content">
              <h1 className="text-lg font-inter font-bold mb-5 ">
                Tambah Divisi
              </h1>

              <div className="flex flex-col gap-2 mb-4">
                <p className="font-medium text-md">Profile Divisi</p>
                <div>
                  <p className="text-xs">Nama Divisi</p>
                </div>
                <div>
                  <form action="">
                    <input
                      className="w-full h-[45px] text-xs border-b border-[#C1C7CD] bg-[#F2F4F8] p-2 focus:outline-none"
                      type="text"
                      name="nama_divisi"
                      placeholder="Masukkan Nama Divisi"
                      onChange={handleInputChange}
                    />
                  </form>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="flex justify-end gap-2 mt-2">
                  <button
                    onClick={closeModal}
                    className="border border-gray-600 flex rounded-lg    text-xs items-center justify-center gap-2 py-2 px-3 text-black w-24 font-inter"
                  >
                    Batal
                  </button>
                  <button
                    onClick={submitDivision}
                    className="bg-red-700 flex rounded-lg hover:bg-red-900   text-xs items-center justify-center gap-2 py-2 px-3 text-white w-24 font-inter"
                  >
                    Tambah
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

function Table({ data, setData }: any) {
  const [divisi, setDivisi] = useState([]);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [modalEdit, setModalEdit] = useState(false);
  const [editInput, setEditInput] = useState({
    index: -1,
    name: "",
    photo: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://127.0.0.1:8000/admin/manage-divisi"
        );
        const jsonData = await response.json();
        setDivisi(jsonData.data);
        console.log(divisi);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  const [divisiDetail, setDivisiDetail] = useState();
  const handleModalEditOpen = (dataDivisi: any) => {
    setDivisiDetail(dataDivisi);
    setModalEdit(true);
  };

  const handleModalEditClose = () => {
    setEditInput({ index: -1, name: "", photo: null });
    setModalEdit(false);
  };

  const handleTextInput = (
    event: React.ChangeEvent<HTMLInputElement>,
    id: string
  ) => {
    setEditInput((prevInput) => ({ ...prevInput, [id]: event?.target?.value }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDivisiDetail((prevDetail) => ({
      ...prevDetail,
      [name]: value,
    }));
  };

  const submitEditDivision = async () => {
    try {
      console.log(divisiDetail);
      const response = await axios.post('http://127.0.0.1:8000/admin/manage-divisi', divisiDetail);
      console.log('Response:', response.data);
      window.location.reload();
    } catch (error) {
      console.error('Error:', error);
    }
    setModalEdit(false);
  };

  const handleDeleteDivisi = async (index: any) => {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/admin/manage-divisi/delete/${index}`);
      console.log('Response:', response.data);
      window.location.reload();
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const getRowClassName = (index: any) => {
    return index % 2 === 0
      ? "bg-gray-300  trLaporan border border-gray-200 text-xs font-inter "
      : "bg-white trLaporan border border-gray-200 text-xs font-inter ";
  };

  const handleItemsPerPageChange = (event: any) => {
    const selectedItemsPerPage = parseInt(event.target.value, 10);
    setItemsPerPage(selectedItemsPerPage);
    setCurrentPage(1);
  };

  const handlePageChange = (event: any) => {
    const selectedPage = parseInt(event.target.value, 10);
    setCurrentPage(selectedPage);
  };

  const totalPages = Math.ceil(divisi.length / itemsPerPage);
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

  const handlePenilaian = (divisi_id: any) => {
    localStorage.setItem('divisi_id', divisi_id);
    window.location.href = '/admin/pengaturan/manage-divisi/penilaian';
  }

  return (
    <>
      <div className="flex gap-4">
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
        <table className="table-auto w-full rounded-lg ">
          <thead className="bg-white border-b-2 border-gray-500 text-xs font-inter ">
            <tr>
              <th className="px-2 py-2">No</th>
              <th className="px-2 py-2">Nama Divisi</th>
              <th className="px-2 py-2">Penilaian</th>
              <th className="px-2 py-2">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {divisi
              .slice(startIndex, endIndex)
              .map((dataDivisi: any, index) => (
                <tr key={index} className={getRowClassName(index)}>
                  <td className="px-2 py-2 text-center">
                    {startIndex + index + 1}
                  </td>
                  <td className="td px-2 py-2 text-center">
                    {dataDivisi.nama_divisi}
                  </td>
                  <td className="px-2 py-2 text-center">
                    <div className="flex justify-center items-center">
                      <button onClick={() => handlePenilaian(dataDivisi.id)}>
                        <BsCardText width={30} style={{ color: "green" }} />
                      </button>
                    </div>
                  </td>
                  <td className="px-2 py-2 text-center">
                    <div className="flex gap-2 justify-center items-center">
                      <button
                        className="py-2 px-4 bg-blue-500 text-white font-inter text-xs rounded-md"
                        onClick={() => {
                          handleModalEditOpen(dataDivisi);
                        }}
                      >
                        Edit
                      </button>
                      <button
                        className="py-2 px-4 bg-red-500 text-white font-inter text-xs rounded-md"
                        onClick={() => {
                          handleDeleteDivisi(dataDivisi.id);
                        }}
                      >
                        Hapus
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-center mt-4">{getPageNumbers()}</div>

      {/* Modal Edit */}
      {modalEdit && (
        <div className="modal-overlay">
          <div className="modal-pengaturan bg-white max-w-xs p-8 rounded-xl p-4">
            <div className="modal-content">
              <h1 className="text-lg font-inter font-bold mb-5 ">
                Edit Divisi
              </h1>

              <div className="flex flex-col gap-2 mb-4">
                <div>
                  <p className="text-xs">Nama Divisi</p>
                </div>
                <div>
                  <form action="">
                    <input
                      className="w-full h-[45px] text-xs border-b border-[#C1C7CD] bg-[#F2F4F8] p-2 focus:outline-none"
                      type="text"
                      name="nama_divisi"
                      placeholder="Masukkan Nama Divisi"
                      value={divisiDetail.nama_divisi}
                      onChange={handleInputChange}
                    />
                  </form>
                </div>
              </div>

              <div className="flex justify-center">
                <div className="flex justify-end gap-2 mt-2">
                  <button
                    onClick={handleModalEditClose}
                    className="border border-gray-600 flex rounded-lg    text-xs items-center justify-center gap-2 py-2 px-3 text-black w-24 font-inter"
                  >
                    Batal
                  </button>
                  <button
                    onClick={submitEditDivision}
                    className="bg-red-700 flex rounded-lg hover:bg-red-900   text-xs items-center justify-center gap-2 py-2 px-3 text-white w-24 font-inter"
                  >
                    Simpan
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
