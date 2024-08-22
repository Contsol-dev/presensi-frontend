"use client";
import AdminProfile from "@/app/component/adminProfile";
import NavbarAdminDashboard from "@/app/component/nav-admin";
import axios from "axios";
import { useState, useEffect } from "react";
import { FiPlusCircle } from "react-icons/fi";

// Define interface for Shift data
interface Shift {
  id: number;
  nama_shift: string;
  masuk: string;
  istirahat: string;
  kembali: string;
  pulang: string;
}

// Define interface for ShiftDetail used in editing
interface ShiftDetail {
  id?: number;
  nama_shift: string;
  masuk: string;
  istirahat: string;
  kembali: string;
  pulang: string;
}

// Define interface for state in TambahShift component
interface ShiftState {
  nama_shift: string;
  masuk: string;
  istirahat: string;
  kembali: string;
  pulang: string;
}

// Define interface for props in Pengaturan and Table components if needed
interface PengaturanProps {}

interface TableProps {}

export default function Utama() {
  return (
    <>
      <div className="w-full h-screen flex m-auto lg:p-0 overflow-hidden">
        <NavbarAdminDashboard />
        <Pengaturan />
        <div className="overflow-auto bg-gray-100 w-full p-4 flex flex-col gap-5 min-h-0">
          <AdminProfile />
          <TambahShift />
          <Table />
        </div>
      </div>
    </>
  );
}

function Pengaturan(props: PengaturanProps) {
  const [showManageDivisi, setShowManageDivisi] = useState(false);

  const toggleManageDivisi = () => {
    setShowManageDivisi(!showManageDivisi);
  };

  return (
    <div className="w-72 h-full bg-white py-4 flex flex-col items-center">
      <h1 className="font-bold text-lg font-inter mb-24">Pengaturan</h1>
      <p className="text-sm text-gray-600">PENGATURAN UTAMA</p>
      <ul className="list-disc list-inside text-gray-400 text-sm border-b border-black pb-7 ">
        <li className=" text-black bg-red-200 rounded-lg px-2 py-1 my-1">
          <a href="/admin/pengaturan/manage-shift">Manage Shift</a>
        </li>
        <li className="hover:text-black hover:bg-red-200 rounded-lg px-2 py-1 my-1">
          <a href="/admin/pengaturan/manage-divisi">Manage Divisi</a>
        </li>
      </ul>
    </div>
  );
}

function TambahShift() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [shiftBaru, setShiftBaru] = useState<ShiftState>({
    nama_shift: "",
    masuk: "",
    istirahat: "",
    kembali: "",
    pulang: "",
  });

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setShiftBaru((prevDetail) => ({
      ...prevDetail,
      [name]: value,
    }));
  };

  const handleAddShift = async () => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_SERVER}/admin/shift/add`,
        shiftBaru
      );
      console.log("Response:", response.data);
      window.location.reload();
    } catch (error) {
      console.error("Error:", error);
    }
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

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="bg-white w-1/3 rounded-xl p-4">
            <div className="modal-content">
              <h1 className="text-lg font-inter font-bold mb-5 ">
                Tambah Shift
              </h1>
              <div className="my-4">
                <p className="text-xs font-inter">Nama Shift</p>
                <input
                  type="text"
                  name="nama_shift"
                  className="bg-gray-100 rounded-md w-full border-b text-xs border-gray-600 p-2 focus:outline-none "
                  placeholder="input Shift"
                  onChange={handleInputChange}
                />
              </div>
              <div className="my-4">
                <p className="text-xs font-inter">Jam Masuk</p>
                <input
                  type="time"
                  step={1}
                  name="masuk"
                  onChange={handleInputChange}
                  className="bg-gray-100 rounded-md w-full border-b text-xs border-gray-600 p-2 focus:outline-none "
                  placeholder="input Shift"
                />
              </div>
              <div className="my-4">
                <p className="text-xs font-inter">Jam Istirahat</p>
                <input
                  type="time"
                  step={1}
                  name="istirahat"
                  onChange={handleInputChange}
                  className="bg-gray-100 rounded-md w-full border-b text-xs border-gray-600 p-2 focus:outline-none "
                  placeholder="input Shift"
                />
              </div>
              <div className="my-4">
                <p className="text-xs font-inter">Jam Kembali</p>
                <input
                  type="time"
                  step={1}
                  name="kembali"
                  onChange={handleInputChange}
                  className="bg-gray-100 rounded-md w-full border-b text-xs border-gray-600 p-2 focus:outline-none "
                  placeholder="input Shift"
                />
              </div>
              <div className="my-4">
                <p className="text-xs font-inter">Jam Pulang</p>
                <input
                  type="time"
                  step={1}
                  name="pulang"
                  onChange={handleInputChange}
                  className="bg-gray-100 rounded-md w-full border-b text-xs border-gray-600 p-2 focus:outline-none "
                  placeholder="input Shift"
                />
              </div>
              <div>
                <div className="flex justify-end gap-2 mt-2">
                  <button
                    onClick={closeModal}
                    className="border border-gray-600 flex rounded-lg text-xs items-center justify-center gap-2 py-2 px-3 text-black w-24 font-inter"
                  >
                    Batal
                  </button>
                  <button
                    onClick={handleAddShift}
                    className="bg-red-700 flex rounded-lg hover:bg-red-900 text-xs items-center justify-center gap-2 py-2 px-3 text-white w-24 font-inter"
                  >
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
  const [shift, setShift] = useState<Shift[]>([]);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setModalOpen] = useState(false);
  const [shiftDetail, setShiftDetail] = useState<ShiftDetail | undefined>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_SERVER}/admin/shift`
        );
        const jsonData = await response.json();
        setShift(jsonData.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const getRowClassName = (index: number) => {
    return index % 2 === 0
      ? "bg-white trLaporan border border-gray-200 text-xs font-inter "
      : "bg-gray-300 trLaporan border border-gray-200 text-xs font-inter ";
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

  const openModalEdit = (dataShift: Shift) => {
    setShiftDetail(dataShift);
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);

  const handleEditShift = async () => {
    if (shiftDetail) {
      try {
        const response = await axios.post(
          `${process.env.NEXT_PUBLIC_API_SERVER}/admin/shift/update/${shiftDetail.id}`,
          shiftDetail
        );
        console.log("Response:", response.data);
        window.location.reload();
      } catch (error) {
        console.error("Error:", error);
      }
    }
  };

  return (
    <>
      <div className="border border-gray-600 rounded-lg h-auto">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border">
            <thead>
              <tr className="bg-gray-200 border border-gray-600">
                <th className="p-3 text-left">Nama Shift</th>
                <th className="p-3 text-left">Jam Masuk</th>
                <th className="p-3 text-left">Jam Istirahat</th>
                <th className="p-3 text-left">Jam Kembali</th>
                <th className="p-3 text-left">Jam Pulang</th>
                <th className="p-3 text-left">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {shift.slice(startIndex, endIndex).map((shiftData, index) => (
                <tr key={shiftData.id} className={getRowClassName(index)}>
                  <td className="p-3">{shiftData.nama_shift}</td>
                  <td className="p-3">{shiftData.masuk}</td>
                  <td className="p-3">{shiftData.istirahat}</td>
                  <td className="p-3">{shiftData.kembali}</td>
                  <td className="p-3">{shiftData.pulang}</td>
                  <td className="p-3">
                    <button
                      onClick={() => openModalEdit(shiftData)}
                      className="text-xs bg-blue-500 text-white py-1 px-2 rounded hover:bg-blue-700"
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex justify-between items-center p-3">
          <div className="text-xs font-inter">{`Page ${currentPage} of ${totalPages}`}</div>
          <div className="flex gap-2">{getPageNumbers()}</div>
        </div>
      </div>

      {isModalOpen && shiftDetail && (
        <div className="modal-overlay">
          <div className="bg-white w-1/3 rounded-xl p-4">
            <h1 className="text-lg font-inter font-bold mb-5 ">Edit Shift</h1>
            <div className="my-4">
              <p className="text-xs font-inter">Nama Shift</p>
              <input
                type="text"
                name="nama_shift"
                value={shiftDetail.nama_shift}
                onChange={(e) =>
                  setShiftDetail((prev) => ({
                    ...prev!,
                    nama_shift: e.target.value,
                  }))
                }
                className="bg-gray-100 rounded-md w-full border-b text-xs border-gray-600 p-2 focus:outline-none "
                placeholder="input Shift"
              />
            </div>
            <div className="my-4">
              <p className="text-xs font-inter">Jam Masuk</p>
              <input
                type="time"
                step={1}
                name="masuk"
                value={shiftDetail.masuk}
                onChange={(e) =>
                  setShiftDetail((prev) => ({
                    ...prev!,
                    masuk: e.target.value,
                  }))
                }
                className="bg-gray-100 rounded-md w-full border-b text-xs border-gray-600 p-2 focus:outline-none "
                placeholder="input Shift"
              />
            </div>
            <div className="my-4">
              <p className="text-xs font-inter">Jam Istirahat</p>
              <input
                type="time"
                step={1}
                name="istirahat"
                value={shiftDetail.istirahat}
                onChange={(e) =>
                  setShiftDetail((prev) => ({
                    ...prev!,
                    istirahat: e.target.value,
                  }))
                }
                className="bg-gray-100 rounded-md w-full border-b text-xs border-gray-600 p-2 focus:outline-none "
                placeholder="input Shift"
              />
            </div>
            <div className="my-4">
              <p className="text-xs font-inter">Jam Kembali</p>
              <input
                type="time"
                step={1}
                name="kembali"
                value={shiftDetail.kembali}
                onChange={(e) =>
                  setShiftDetail((prev) => ({
                    ...prev!,
                    kembali: e.target.value,
                  }))
                }
                className="bg-gray-100 rounded-md w-full border-b text-xs border-gray-600 p-2 focus:outline-none "
                placeholder="input Shift"
              />
            </div>
            <div className="my-4">
              <p className="text-xs font-inter">Jam Pulang</p>
              <input
                type="time"
                step={1}
                name="pulang"
                value={shiftDetail.pulang}
                onChange={(e) =>
                  setShiftDetail((prev) => ({
                    ...prev!,
                    pulang: e.target.value,
                  }))
                }
                className="bg-gray-100 rounded-md w-full border-b text-xs border-gray-600 p-2 focus:outline-none "
                placeholder="input Shift"
              />
            </div>
            <div className="flex justify-end gap-2 mt-2">
              <button
                onClick={closeModal}
                className="border border-gray-600 flex rounded-lg text-xs items-center justify-center gap-2 py-2 px-3 text-black w-24 font-inter"
              >
                Batal
              </button>
              <button
                onClick={handleEditShift}
                className="bg-red-700 flex rounded-lg hover:bg-red-900 text-xs items-center justify-center gap-2 py-2 px-3 text-white w-24 font-inter"
              >
                Simpan
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
