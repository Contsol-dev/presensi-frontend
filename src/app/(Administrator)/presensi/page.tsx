/* eslint-disable react/no-unescaped-entities */
"use client";

import { useState, ChangeEvent, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import AdminProfile from "@/app/component/adminProfile";

import NavbarAdmin from "@/app/component/nav-admin";
import { FaSearch } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { CiFilter } from "react-icons/ci";
import { PiGearSixDuotone } from "react-icons/pi";
import { PiPencilSimpleLineThin } from "react-icons/pi";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";
import { GoPlusCircle } from "react-icons/go";
import { LiaDownloadSolid } from "react-icons/lia";
import ScanBarcode from "./ScanBarcode";
import DetailPresensi from "../detail-profile/DetailProfile";
import Invoice from "./invoice";
import { IoIosArrowBack } from "react-icons/io";
import { BrowserRouter as Router } from "react-router-dom";
import { Link } from "react-router-dom";

// halaman presensi

export default function Presensi() {
  const nextConfig = {};
  const [presensi, setPresensi] = useState(true);
  const [barcodePresensi, setBarcodePresensi] = useState(false);
  const [cekInvoice, setCekInvoice] = useState(false);
  const handleBarcode = () => {
    setPresensi(!presensi);
    setBarcodePresensi(!barcodePresensi);
  };
  const [detailP, setDetailP] = useState(false);
  const handleDetailP = () => {
    setDetailP(!detailP);
  };
  const handleInvoice = () => {
    setPresensi(!presensi);
    setCekInvoice(!cekInvoice);
  };
  return (
    <div>
      {presensi && (
        <div className="w-full h-screen flex overflow-hidden">
          <NavbarAdmin />
          <div className="flex flex-col w-screen h-screen bg-neutral-200 py-5 px-10">
            <AdminProfile />
            {detailP == false && (
              <Header
                handleBarcode={handleBarcode}
                handleDetailP={handleDetailP}
                handleInvoice={handleInvoice}
              />
            )}

            {detailP == true && (
              <div className="flex gap-2 mt-2">
                <p className="text-lg cursor-pointer" onClick={handleDetailP}>
                  <IoIosArrowBack />
                </p>
                <DetailPresensi />
              </div>
            )}
          </div>
        </div>
      )}
      {barcodePresensi && (
        <div>
          <p
            className="absolute top-[310px] left-2 cursor-pointer"
            onClick={handleBarcode}
          >
            <IoIosArrowBack />
          </p>
          <ScanBarcode />
        </div>
      )}
      {cekInvoice && (
        <div>
          <p
            // className="absolute top-[310px] left-2 cursor-pointer"
            onClick={handleInvoice}
          >
            <IoIosArrowBack />
          </p>
          <Invoice />
        </div>
      )}
    </div>
  );
}

const Data = [
  {
    id: 1,
    name: "Tangguh Hari Cahyono",
    masuk: "08:00",
    pulang: "08:00",
    mulai: "08:00",
    selesai: "08:00",
    totalJam: "08:00",
    lebih: "08:00",
    kurang: "08:00",
    logAktifitas: "Membuat tampilan responsive",
    sKehadiran: "Hadir",
    Kebaikan: "Merapihkan Sandal",
    status: true,
  },
  {
    id: 2,
    name: "Tangguh  Cahyono",
    masuk: "08:00",
    pulang: "08:00",
    mulai: "08:00",
    selesai: "08:00",
    totalJam: "08:00",
    lebih: "08:00",
    kurang: "08:00",
    logAktifitas: "Membuat tampilan responsive",
    sKehadiran: "Izin",
    Kebaikan: "Merapihkan Sandal",
    status: false,
  },
  {
    id: 3,
    name: "Tangguh Hari ",
    masuk: "08:00",
    pulang: "08:00",
    mulai: "08:00",
    selesai: "08:00",
    totalJam: "08:00",
    lebih: "08:00",
    kurang: "08:00",
    logAktifitas: "Membuat tampilan responsive",
    sKehadiran: "Tidak Hadir",
    Kebaikan: "Merapihkan Sandal",
    status: true,
  },
];
// Header presensi
interface headerProps {
  handleBarcode: () => void;
  handleDetailP: () => void;
  handleInvoice: () => void;
}

function Header({ handleBarcode, handleDetailP, handleInvoice }: headerProps) {
  const [filteredData, setFilteredData] = useState<typeof Data>(Data);

  const handleFilter = (status: string) => {
    const filtered = Data.filter((item) => item.sKehadiran === status);
    setFilteredData(filtered);
  };

  const handlePrint = () => {
    window.print();
  };
  return (
    <>
      <div className="bg-[#404040] text-white text-sm lg:text-sm py-3 px-5 font-inter">
        <div className="flex justify-between  items-center">
          <div>
            <h1 className="text-[20px] mb-2 mr-10 lg:text-[30px] font-bold">
              Data Presensi
            </h1>
            <p className="lg:text-sm text-[10px]">
              Data per tanggal 2023-09-23
            </p>
          </div>
          <div className="">
            <p>Cari Mahasiswa</p>
            <SearchBar />
          </div>
        </div>
      </div>
      <div className="overflow-auto w-full">
        <div className="flex justify-between">
          {/* data kehadiran */}
          <div className=" mt-2 w-[50%]">
            <div className="bg-[#E9E9E9] shadow-md p-2">
              <p className="font-bold text-xs borde">Total Kehadiran</p>
            </div>
            <div className="text-[12px] justify-between bg-[#E9E9E9]  border-2 border-t-[#DCDCDC] shadow-md p-2 flex felx-col flex-warp">
              <div
                className="cursor-pointer"
                onClick={() => handleFilter("Hadir")}
              >
                Total Masuk{" "}
                <span className=" bg-green-600 rounded-md text-white p-1">
                  200
                </span>
              </div>
              <div
                className="cursor-pointer"
                onClick={() => handleFilter("Izin")}
              >
                Total Izin{" "}
                <span className=" bg-yellow-400 rounded-md text-white py-1 px-2">
                  200
                </span>
              </div>
              <div
                className="cursor-pointer"
                onClick={() => handleFilter("Tidak Hadir")}
              >
                Total Tidak Masuk{" "}
                <span className=" bg-red-600 rounded-md text-white py-1 px-2">
                  200
                </span>
              </div>
            </div>
            <div>
              <p></p>
            </div>
          </div>
          {/* scan Barcode dan filter date */}
          <div className="mt-2">
            <p
              onClick={handleBarcode}
              className="cursor-pointer text-end text-[10px] text-red-600 underline underline-offset-2"
            >
              Scan Barcode
            </p>
            <div className="mt-7">
              <DatePicker />
            </div>
          </div>
        </div>
        <TablePresensi
          filteredData={filteredData}
          handleDetailP={handleDetailP}
        />
        <p
          className="flex gap-1 justify-center items-center text-[10px] rounded-sm text-center font-inter py-1 px-2 mt-3 bg-button text-white w-[60px] cursor-pointer"
          onClick={handleInvoice}
        >
          <span>
            <LiaDownloadSolid />
          </span>
          PDF
        </p>
      </div>
    </>
  );
}

// SearchBar
function SearchBar() {
  return (
    <div className="flex items-center mt-3 ml-auto relative">
      <div className="relative ">
        <input
          type="text"
          className="lg:w-[400px] bg-neutral-200 font-inter border border-gray-300 px-2 py-1 rounded-md pl-8"
          placeholder="Cari Divisi/team"
        />
        <a
          href="/search"
          className="absolute inset-y-0 left-0 flex items-center pl-2 text-gray-400 hover:text-black"
        >
          {/* Use the anchor tag to wrap the search logo */}
          <FaSearch />
        </a>
      </div>
    </div>
  );
}

interface MyAppDatePickerProps {
  initialDate?: string;
}

// filter tanggal
function DatePicker({
  initialDate = new Date().toISOString().substring(0, 10),
}: MyAppDatePickerProps): JSX.Element {
  const [selectedDate, setSelectedDate] = useState<string>(initialDate);

  const handleDateChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(event.target.value);
  };

  return (
    <div className="relative font-inter text-sm flex items-center px-2 border border-solid border-black">
      <div className="">
        <CiSearch />
      </div>
      <input
        style={{ cursor: "pointer", outline: "none" }}
        className="pl-2 bg-[#E9E9E9] font-inter text-sm"
        type="date"
        value={selectedDate}
        onChange={handleDateChange}
      />
      <div className="flex items-center  border-l border-black pl-2">
        <CiFilter />
        <Filter />
      </div>
      <style jsx>{`
        @media (min-width: 768px) {
          input[type="date"]::-webkit-calendar-picker-indicator {
            cursor: pointer;
            margin-left: 80px;
          }
        }

        @media (max-width: 767px) {
          input[type="date"]::-webkit-calendar-picker-indicator {
            cursor: pointer;
          }
        }
      `}</style>
    </div>
  );
}
interface TablePresensiProps {
  filteredData: typeof Data;
  handleDetailP: () => void;
}
function TablePresensi({ filteredData, handleDetailP }: TablePresensiProps) {
  const [jam, setJam] = useState(false);
  const [aturJam, setAturJam] = useState(false);
  const [info, setInfo] = useState(false);
  const [infoIzin, setInfoIzin] = useState(false);
  const [kIzin, setKIzin] = useState(true);
  const [kIzinAktif, setKIzinAktif] = useState(false);
  const [tambahKategori, setTambahKategori] = useState(false);
  // Function to open the modal and set the selected item
  const openModal = () => {
    setJam(true);
  };
  const openInfo = () => {
    setInfo(!info);
  };
  const handleTambahKategori = () => {
    setTambahKategori(!tambahKategori);
    setKIzinAktif(!kIzinAktif);
  };
  const openInfoI = () => {
    setInfoIzin(!infoIzin);
  };
  // Function to close the modal
  const closeModal = () => {
    setJam(false);
  };
  const handleAturJam = () => {
    setAturJam(!aturJam);
  };
  const handleKIzin = () => {
    setKIzin(!kIzin);
    setKIzinAktif(!kIzinAktif);
  };

  return (
    <div>
      <table className="text-[10px] table-auto border-collapse items-center mt-2  border border-solid border-[#b5b5b5] rounded-t-md bg-[#F2F4F8] w-full">
        <thead className=" bg-[#DCDCDC] font-inter text-center">
          <tr>
            <th className="pt-1 pl-2 text-center" rowSpan={2}>
              <input type="checkbox" />
            </th>
            <th className=" py-1 text-center " rowSpan={2}>
              No
            </th>

            <th className=" pt-1 text-center " rowSpan={2} colSpan={2}>
              Nama
            </th>
            <th className=" pt-1 text-center  " colSpan={2}>
              <p className="border-b border-black border-solid">Jam Kerja</p>
            </th>
            <th className=" pt-1  text-center  " colSpan={2}>
              <p className="border-solid border-b border-black">
                Jam Istirahat
              </p>
            </th>
            <th className=" pt-1 px-2 text-center  " colSpan={2}>
              <p className="border-solid border-b border-black">
                Total Jam Kerja
              </p>
            </th>
            <th className=" pt-1 px-2 text-center  " colSpan={2}>
              <p className="border-solid border-b border-black">
                Log Aktivitas
              </p>
            </th>
            <th rowSpan={2}>Status Kehadiran</th>
            <th rowSpan={2}>Kebaikan</th>
          </tr>
          <tr>
            <th className=" pb-1 border-solid border-r border-black">
              <p className="">Masuk</p>
            </th>
            <th className=" pb-1">Pulang</th>
            <th className=" pb-1  border-solid border-r border-black">Mulai</th>
            <th className=" pb-1 ">Selesai</th>
            <th className=" pb-1 border-solid border-r border-black">
              Total Jam
            </th>
            <th className="flex items-center gap-2 justify-center pb-1 ">
              <p>(+)</p>
              <p>(-)</p>
            </th>
            <th className=" pb-1  border-solid border-r border-black">
              Log Aktivitas
            </th>
            <th className=" pb-1">Aksi</th>
          </tr>
        </thead>
        <tbody className=" text-[#69696b]">
          {filteredData.map((item, index) => (
            <tr key={index}>
              <td className=" pt-2 pb-1 text-center pl-2 ">
                <input type="checkbox" />
              </td>
              <td className=" pt-1 text-center">{index + 1}</td>
              <td className=" cursor-pointer pt-1" onClick={handleDetailP}>
                {item.name}
              </td>
              <td>
                <div onClick={openModal} className="cursor-pointer">
                  <PiGearSixDuotone />
                </div>
              </td>
              <td className="text-center text-blue-600 underline underline-offset-1">
                <span className="cursor-pointer" onClick={handleAturJam}>
                  {item.masuk}
                </span>{" "}
                <span
                  onClick={openInfo}
                  className="cursor-pointer text-center bg-red-500 text-white rounded-full py-[1px] px-[3px] text-[5px]"
                >
                  i
                </span>
              </td>
              <td className="text-center text-blue-600 underline underline-offset-1">
                <span className="cursor-pointer" onClick={handleAturJam}>
                  {item.pulang}
                </span>{" "}
                <span
                  onClick={openInfo}
                  className="cursor-pointer bg-red-500 text-white rounded-full py-[1px] px-[3px] text-[5px]"
                >
                  i
                </span>
              </td>
              <td className="text-center text-blue-600 underline underline-offset-1">
                <span className="cursor-pointer" onClick={handleAturJam}>
                {item.mulai}{" "}
                </span>
                <span
                  onClick={openInfo}
                  className="cursor-pointer bg-red-500 text-white rounded-full py-[1px] px-[3px] text-[5px]"
                >
                  i
                </span>
              </td>
              <td className="text-center text-blue-600 underline underline-offset-1">
                <span className="cursor-pointer" onClick={handleAturJam}>
                {item.selesai}{" "}
                </span>
                <span
                  onClick={openInfo}
                  className="cursor-pointer bg-red-500 text-white rounded-full py-[1px] px-[3px] text-[5px]"
                >
                  i
                </span>
              </td>
              <td className=" text-center">
                {item.totalJam}{" "}
                <span
                  onClick={openInfo}
                  className="cursor-pointer bg-red-500 text-white rounded-full py-[1px] px-[3px] text-[5px]"
                >
                  i
                </span>
              </td>
              <td
                className={`text-center ${
                  item.sKehadiran === "Tidak Hadir" ? "text-red-500" : ""
                }`}
              >
                {item.kurang}{" "}
                <span
                  onClick={openInfo}
                  className="cursor-pointer bg-red-500 text-white rounded-full py-[1px] px-[3px] text-[5px]"
                >
                  i
                </span>
              </td>
              <td className=" pt-1 text-center">{item.logAktifitas}</td>
              <td className=" pt-1 text-center px-2">
                <span
                  className={`py-1 px-[6px] text-white font-bold rounded-full text-[6px] mr-1 ${
                    item.status == true ? "bg-green-500 " : " bg-neutral-400"
                  } `}
                >
                  ✓
                </span>
                <span
                  className={`py-1 px-[6px] text-white font-bold  rounded-full text-[6px] ${
                    item.status == false ? "bg-red-500" : " bg-neutral-400"
                  } `}
                >
                  X
                </span>
              </td>
              <td className=" pt-1 text-center">
                <span>{item.sKehadiran}</span>
                <span
                  onClick={openInfoI}
                  className="cursor-pointer bg-black text-white rounded-full py-[1px] px-[3.5px] text-[5px] ml-1"
                >
                  i
                </span>
              </td>
              <td className=" pt-1 text-center">{item.Kebaikan}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {jam && (
      <div className="fixed h-screen bg-black/50 flex top-0 left-0 right-0 justify-center items-center w-full z-40">
        <div className="bg-[#DCDCDC] adjust rounded-md pb-10 px-5 w-[400px]">
          <div className="flex justify-center py-5 border-b border-black">
            <b className="text-xl text-center font-semibold">
              Sunting Jam Default
            </b>
          </div>
          <div className="text-xs py-4 px-2 bg-red-300 rounded-md my-2">
            <p>
              Anda akan merubah jam default presensi untuk tanggal 
              <span className="font-semibold"> 2024-01-24 </span> atas nama: 
              <span className="font-semibold"> Tangguh Hari Cahyono </span>
            </p>
          </div>
          <div className="text-xs flex flex-wrap gap-2 justify-between">
            <div className="p-2 w-[150px] text-center mt-2">
              <p>Jam Masuk</p>
              <input type="time" className="p-2 w-full border border-solid border-black"/>
            </div>
            <div className="p-2 w-[150px] text-center mt-2">
              <p>Jam Ashar Masuk</p>
              <input type="time" className="p-2 w-full border border-solid border-black"/>
            </div>
            <div className="p-2 w-[150px] text-center mt-2">
              <p>Jam Pulang</p>
              <input type="time" className="p-2 w-full border border-solid border-black"/>
            </div>
            <div className="p-2 w-[150px] text-center mt-2">
              <p>Jam Ashar Akhir</p>
              <input type="time" className="p-2 w-full border border-solid border-black"/>
            </div>
          </div>
          <div className="flex pt-10 justify-end text-xs gap-2">
            <button
              className="px-7 py-2 text-black hover:scale-[1.03] transition-all duration-150"
              onClick={closeModal}
            >
              Batal
            </button>
            <button
              className="bg-button rounded-md px-5 py-2 text-white hover:scale-[1.03] transition-all duration-150"
              onClick={closeModal}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    )}
    {aturJam && (
      <div className="fixed h-screen bg-black/50 flex top-0 left-0 right-0 justify-center items-center w-full z-40">
        <div className="bg-[#DCDCDC] rounded-md pb-10 px-5 w-[400px]">
          <div className="flex justify-center py-5 border-b border-black">
            <b className="text-xl text-center font-semibold">
              Sunting Jam Default
            </b>
          </div>
          <div className="text-xs py-4 px-2 bg-red-300 rounded-md my-2">
            <p>
              Anda akan merubah jam presensi masuk pada tanggal 
              <span className="font-semibold"> 2024-01-24 </span> atas nama: 
              <span className="font-semibold"> Tangguh Hari Cahyono </span>
            </p>
          </div>
          <div className="text-xs ">
            <div className="p-2 w-[150px] mt-2">
              <p>Jam Masuk</p>
              <input  type="time" className="p-2 w-full border border-solid border-black"/>
            </div>
            <div className="p-2 ">
              <p>Keterangan</p>
              <textarea
                placeholder="Keterangan"
                className="bg-[#DCDCDC] p-2 w-full h-20 border border-black focus:outline-none"
              />
            </div>
          </div>
          <div className="flex pt-2 justify-end text-xs gap-2">
            <button
              className="px-7 py-2 text-black hover:scale-[1.03] transition-all duration-150"
              onClick={handleAturJam}
            >
              Batal
            </button>
            <button
              className="bg-button rounded-md px-5 py-2 text-white hover:scale-[1.03] transition-all duration-150"
              onClick={handleAturJam}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    )}
      {info && (
        <div className="fixed h-screen bg-black/50 flex top-0 left-0 right-0 justify-center items-center w-full z-40">
          <div className="bg-[#DCDCDC] rounded-md pb-10 px-5 w-[400px]">
            <div className="relative p-5 mt-10 bg-[#cfcece] h-60">
              <p className="text-xs font-inter">
                "Maaf saya terlambat karena sedang mencari cari jawaban yg gk
                ketemu"
              </p>
              <span className="absolute bottom-0 right-0 mr-5 mb-2">
                <PiPencilSimpleLineThin />
              </span>
            </div>
            <div className="flex pt-2 justify-center end text-xs gap-2">
              <button
                className="px-7 py-2 text-black text-center  hover:scale-[1.03] transition-all duration-150"
                onClick={openInfo}
              >
                Kembali
              </button>
            </div>
          </div>
        </div>
      )}
      {infoIzin && (
        <div className="transition delay-150 duration-300 fixed h-screen bg-black/50 flex top-0 left-0 right-0 justify-center items-center w-full z-40 overflow-auto">
          <div className="bg-[#DCDCDC] rounded-md pb-10 px-5 w-[400px]">
            <p className="mt-5 text-center">Izin</p>
            <div className="relative p-2 mt-5 bg-[#cfcece] h-60">
              <p className="text-xs font-inter">
                "Maaf saya terlambat karena sedang mencari cari jawaban yg gk
                ketemu"
              </p>
              <span className="absolute bottom-0 right-0 mr-5 mb-2">
                <PiPencilSimpleLineThin />
              </span>
            </div>
            <div className="text-xs mt-4">
              <p>Link Foto Gdrive</p>
              <p className="p-2 mt-2 bg-[#cfcece]">
                https://www.googledrive.com
              </p>
            </div>
            <div
              onClick={handleKIzin}
              className="bg-[#cfcece] flex p-2 justify-between items-center text-xs mt-4"
            >
              <p>Kategori Izin</p>
              {kIzin && (
                <p>
                  <MdKeyboardArrowDown />
                </p>
              )}
              {kIzinAktif && (
                <p>
                  <MdKeyboardArrowUp />
                </p>
              )}
            </div>
            {kIzinAktif && (
              <div className="text-xs font-inter p-2 bg-slate-200">
                <div className="flex py-1 justify-between items-center">
                  <p>Sakit dengan surat dokter</p>
                  <span>
                    <input type="radio" />
                  </span>
                </div>
                <div className="flex border-t border-zinc-400 py-1 justify-between items-center">
                  <p>Sakit dengan surat dokter</p>
                  <span>
                    <input type="radio" />
                  </span>
                </div>
                <div className="flex border-t border-zinc-400 py-1 justify-between items-center">
                  <p>Sakit dengan surat dokter</p>
                  <span>
                    <input type="radio" />
                  </span>
                </div>
                <div className="flex border-t border-zinc-400 py-1 justify-between items-center">
                  <p>Sakit dengan surat dokter</p>
                  <span>
                    <input type="radio" />
                  </span>
                </div>
                <button
                  onClick={handleTambahKategori}
                  className="flex gap-2 justify-center items-center bg-red-300 border border-solid border-black rounded-md p-1 w-[45%] text-xs font-inter text-center"
                >
                  <p>Tambah Kategori</p>
                  <GoPlusCircle />
                </button>
              </div>
            )}
            {tambahKategori && (
              <TambahKeterangan tambahKategori={handleTambahKategori} />
            )}
            <div className="text-xs flex justify-between mt-5">
              <p className="bg-[#cfcece] w-1/3 text-center p-2">
                Tidak Ganti Jam
              </p>
              <p className="bg-[#cfcece] w-1/3 text-center p-2">Ganti Jam</p>
            </div>

            <div className="flex pt-2 justify-center end text-xs gap-2">
              <button
                className="px-7 py-2 text-black text-center  hover:scale-[1.03] transition-all duration-150"
                onClick={openInfoI}
              >
                Simpan
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
function Filter() {
  const [open, setOpen] = useState(false);
  function handleOpen() {
    setOpen(!open);
  }
  return (
    <div>
      <div className="inline-block text-left">
        <div>
          <button
            onClick={handleOpen}
            type="button"
            className="inline-flex w-full justify-center gap-x-1.5  bg-[#E9E9E9]  text-sm text-gray-900"
            id="menu-button"
            aria-expanded="true"
            aria-haspopup="true"
          >
            Filter
            <svg
              className="-mr-1 h-5 w-5 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        {open && (
          <div className="absolute right-0 z-10 mt-1 w-[95px] border border-solid border-[#b5b5b5] bg-[#E9E9E9] px-1">
            <div className="py-1">
              <p className=" block px-2 py-1 text-xs">Status</p>
              <div className="flex gap-1 px-2 text-[8px]">
                <input type="checkbox" />
                <p>Hadir</p>
              </div>
              <div className="flex gap-1 px-2 text-[8px]">
                <input type="checkbox" />
                <p>Izin</p>
              </div>
              <div className="flex gap-1 px-2 text-[8px]">
                <input type="checkbox" />
                <p>Tidak Hadir</p>
              </div>
            </div>
            <div className="py-1">
              <p className=" block px-2 py-1 text-xs border border-t-black">
                Shift
              </p>
              <div className="flex gap-1 px-2 text-[8px]">
                <input type="checkbox" />
                <p>Shift Pagi</p>
              </div>
              <div className="flex gap-1 px-2 text-[8px]">
                <input type="checkbox" />
                <p>Shift Middle</p>
              </div>
              <div className="flex gap-1 px-2 text-[8px]">
                <input type="checkbox" />
                <p>Shift Siang</p>
              </div>
            </div>
            <div className="py-1">
              <p className=" block px-2 py-1 text-xs border border-t-black">
                Kantor
              </p>
              <div className="flex gap-1 px-2 text-[8px]">
                <input type="checkbox" />
                <p>Kantor 1</p>
              </div>
              <div className="flex gap-1 px-2 text-[8px]">
                <input type="checkbox" />
                <p>Kantor 2</p>
              </div>
              <div className="flex gap-1 px-2 text-[8px]">
                <input type="checkbox" />
                <p>Kantor 4</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
interface TambahKategori {
  tambahKategori: () => void;
}
function TambahKeterangan({ tambahKategori }: TambahKategori) {
  return (
    <>
      <div className="text-xs">
        <p className="my-2">Tambah Kategori</p>
        <div className="px-2 bg-[#cfcece]">
          <div className="flex justify-between py-2">
            <p>Sakit dengan surat dokter</p>
            <p>X</p>
          </div>
          <div className="flex justify-between border-t border-black py-2">
            <p>Sakit dengan surat dokter</p>
            <p>X</p>
          </div>
          <div className="flex justify-between border-t border-black py-2">
            <p>Sakit dengan surat dokter</p>
            <p>X</p>
          </div>
          <div className="flex justify-between border-t border-black py-2">
            <p>Keperluan Lain</p>
            <p>X</p>
          </div>
        </div>
        <input
          placeholder="Tambah Kategori Izin "
          className="mt-2 bg-[#cfcece] w-full p-2 focus:outline-none rounded-md"
          type="text"
        />
        <div className="flex justify-end gap-2 mt-10">
          <button onClick={tambahKategori} className="px-2 py-1">
            Batal
          </button>
          <button
            onClick={tambahKategori}
            className=" bg-red-700 px-2 py-1 text-white"
          >
            Tambahkan
          </button>
        </div>
      </div>
    </>
  );
}
