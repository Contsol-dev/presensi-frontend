"use client";
import React, { useEffect, useState } from "react";
import { FiPlusCircle } from "react-icons/fi";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { BsCardText } from "react-icons/bs";
import AdminProfile from "@/app/component/adminProfile";
import NavbarAdminDashboard from "@/app/component/nav-admin";
import { AiOutlinePicture } from "react-icons/ai";

export default function Utama() {
  const [data, setData] = useState({});

  return (
    <>
      <div className="w-screen h-screen flex m-auto lg:p-0 overflow-hidden ">
        <NavbarAdminDashboard />
        <Pengaturan />
        <div className="overflow-auto bg-gray-100 w-full p-4 flex flex-col gap-5  min-h-0">
          <AdminProfile />
          <Search data={data} setData={setData} />
          <Table data={data} setData={setData} />
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
        <li className="text-black bg-red-200 rounded-lg px-2 py-1 my-1">
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

function Search({ data, setData }: any) {
  const [isModalOpen, setModalOpen] = useState(false);
  const [newInput, setNewInput] = useState({ name: null, photo: null });

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleTextInput = (
    event: React.ChangeEvent<HTMLInputElement>,
    id: string
  ) => {
    setNewInput((prevInput) => ({ ...prevInput, [id]: event?.target?.value }));
  };

  const handleFileInput = (
    event: React.ChangeEvent<HTMLInputElement>,
    id: string
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setNewInput((prevInput) => ({ ...prevInput, [id]: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveFile = () => {
    setNewInput((prevInput) => ({ ...prevInput, photo: null }));
  };

  const submitDivision = () => {
    setData(newInput);
    setNewInput({ name: null, photo: null });
    setModalOpen(false);
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
                <div className="flex flex-row gap-4 items-center mb-2">
                  {/* check foto ? sudah diupload : icon image */}
                  {newInput?.photo ? (
                    <div className="text-3xl rounded-full border border-black text-[#808080]">
                      <img
                        src={newInput.photo}
                        alt="Uploaded"
                        style={{
                          borderRadius: "50%",
                          width: "50px",
                          height: "50px",
                        }}
                      />
                    </div>
                  ) : (
                    <div className="text-3xl rounded-full border border-black p-2 text-[#808080]">
                      <AiOutlinePicture />
                    </div>
                  )}
                  <div>
                    <label
                      htmlFor="file"
                      className="button border border-2 text-xs px-4 py-2 rounded cursor-pointer"
                    >
                      Add Photo
                    </label>
                    <input
                      className="w-[130px] hidden"
                      id="file"
                      type="file"
                      onChange={(event) => handleFileInput(event, "photo")}
                    />
                  </div>
                  <div
                    className="text-red-500 text-xs cursor-pointer"
                    onClick={handleRemoveFile}
                  >
                    Remove
                  </div>
                </div>
                <div>
                  <p className="text-xs">Nama Divisi</p>
                </div>
                <div>
                  <form action="">
                    <input
                      className="w-full h-[45px] text-xs border-b border-[#C1C7CD] bg-[#F2F4F8] p-2 focus:outline-none"
                      type="text"
                      placeholder="Masukkan Nama Divisi"
                      onChange={(event) => handleTextInput(event, "name")}
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
                    Simpan
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
  const [kampus, setKampus] = useState<any[]>([]);
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

  //setiap "data" berubah akan ditambahkan ke "kampus"
  useEffect(() => {
    setKampus((prevKampus) => [data, ...prevKampus]);
  }, [data]);

  const handleModalEditOpen = (dataKampus: any, index: number) => {
    setEditInput({ ...dataKampus, index });
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

  const handleFileInput = (
    event: React.ChangeEvent<HTMLInputElement>,
    id: string
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setEditInput((prevInput) => ({ ...prevInput, [id]: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveFile = () => {
    setEditInput((prevInput) => ({ ...prevInput, photo: null }));
  };

  const submitEditDivision = () => {
    setKampus((prevKampus) => {
      const temp = [...prevKampus];
      temp[editInput.index] = {
        ...temp[editInput.index],
        name: editInput.name,
        photo: editInput.photo,
      };
      return temp;
    });
    setEditInput({ index: -1, name: "", photo: null });
    setModalEdit(false);
    console.log("idxedit", editInput.index);
  };

  const handleRemoveData = (index: number) => {
    setKampus((prevKampus) => {
      const temp = [...prevKampus];
      temp.splice(index, 1);
      return temp;
    });
    console.log("idxrmv", index);
  };

  useEffect(() => {
    console.log("temp", kampus);
  }, [kampus]);

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
              <th className="px-2 py-2">No</th>
              <th className="px-2 py-2">Nama Divisi</th>
              <th className="px-2 py-2">Penilaian</th>
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
                    {dataKampus.name}
                  </td>
                  <td className="px-2 py-2 text-center">
                    <div className="flex justify-center items-center">
                      <a href="/admin/pengaturan/manage-divisi/penilaian">
                        <BsCardText width={30} style={{ color: "green" }} />
                      </a>
                    </div>
                  </td>
                  <td className="px-2 py-2 text-center">
                    <div className="flex gap-2 justify-center items-center">
                      <button
                        className="py-2 px-4 bg-blue-500 text-white font-inter text-xs rounded-md"
                        onClick={() => {
                          handleModalEditOpen(dataKampus, index);
                        }}
                      >
                        Edit
                      </button>
                      <button
                        className="py-2 px-4 bg-red-500 text-white font-inter text-xs rounded-md"
                        onClick={() => {
                          handleRemoveData(index);
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

      {/* Display page numbers */}
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
                <p className="font-medium text-md">Profile Divisi</p>
                <div className="flex flex-row gap-4 items-center mb-2">
                  {/* check foto ? sudah diupload : icon image */}
                  {editInput?.photo ? (
                    <div className="text-3xl rounded-full border border-black text-[#808080]">
                      <img
                        src={editInput.photo}
                        alt="Uploaded"
                        style={{
                          borderRadius: "50%",
                          width: "50px",
                          height: "50px",
                        }}
                      />
                    </div>
                  ) : (
                    <div className="text-3xl rounded-full border border-black p-2 text-[#808080]">
                      <AiOutlinePicture />
                    </div>
                  )}
                  <div>
                    <label
                      htmlFor="file"
                      className="button border border-2 text-xs px-4 py-2 rounded cursor-pointer"
                    >
                      Add Photo
                    </label>
                    <input
                      className="w-[130px] hidden"
                      id="file"
                      type="file"
                      onChange={(event) => handleFileInput(event, "photo")}
                    />
                  </div>
                  <div
                    className="text-red-500 text-xs cursor-pointer"
                    onClick={handleRemoveFile}
                  >
                    Remove
                  </div>
                </div>
                <div>
                  <p className="text-xs">Nama Divisi</p>
                </div>
                <div>
                  <form action="">
                    <input
                      className="w-full h-[45px] text-xs border-b border-[#C1C7CD] bg-[#F2F4F8] p-2 focus:outline-none"
                      type="text"
                      placeholder="Masukkan Nama Divisi"
                      value={editInput?.name}
                      onChange={(event) => handleTextInput(event, "name")}
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
