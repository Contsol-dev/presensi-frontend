/* eslint-disable react/no-unescaped-entities */
"use client";

import { useState, ChangeEvent, useEffect } from "react";
import axios from "axios";
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

// Header presensi
interface headerProps {
  handleBarcode: () => void;
  handleDetailP: () => void;
  handleInvoice: () => void;
}

function Header({ handleBarcode, handleDetailP, handleInvoice }: headerProps) {
  const [filter, setFilter] = useState("");
  const [masuk, setMasuk] = useState(0);
  const [izin, setIzin] = useState(0);
  const [tidakMasuk, setTidakMasuk] = useState(0);
  const [selectedDate, setSelectedDate] = useState(
    new Date().toISOString().substring(0, 10)
  );
  const [search, setSearch] = useState("");
  const fetchPresensi = async () => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/admin/presensi/harian"
      );
      console.log(response.data);
      setMasuk(response.data.hadir);
      setIzin(response.data.izin);
      setTidakMasuk(response.data.tidakHadir);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPresensi();
  }, []);

  const handleFilter = async (status: string) => {
    if (filter == status) {
      setFilter("");
    } else {
      setFilter(status);
    }
  };

  const today = new Date().toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

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
            <p className="lg:text-sm text-[10px]">Data per tanggal {today}</p>
          </div>
          <div className="">
            <p>Cari Mahasiswa</p>
            <SearchBar searchString={search} onTextChange={setSearch} />
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
                onClick={() => handleFilter("hadir")}
              >
                Total Masuk{" "}
                <span className=" bg-green-600 rounded-md text-white py-1 px-2">
                  {masuk}
                </span>
              </div>
              <div
                className="cursor-pointer"
                onClick={() => handleFilter("izin")}
              >
                Total Izin{" "}
                <span className=" bg-yellow-400 rounded-md text-white py-1 px-2">
                  {izin}
                </span>
              </div>
              <div
                className="cursor-pointer"
                onClick={() => handleFilter("tidak Hadir")}
              >
                Total Tidak Masuk{" "}
                <span className=" bg-red-600 rounded-md text-white py-1 px-2">
                  {tidakMasuk}
                </span>
              </div>
            </div>
            <div>
              <p></p>
            </div>
          </div>
          {/* scan Barcode dan filter date */}
          <div className="mt-4">
            <div className="mt-7">
              <DatePicker
                selectedDate={selectedDate}
                onDateChange={setSelectedDate}
              />
            </div>
          </div>
        </div>
        <TablePresensi
          filter={filter}
          handleDetailP={handleDetailP}
          search={search}
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

interface MySearchBarProps {
  searchString: string;
  onTextChange: (search: string) => void;
}

// SearchBar
function SearchBar({ searchString, onTextChange }: MySearchBarProps) {
  const handleTextChange = (event: ChangeEvent<HTMLInputElement>) => {
    onTextChange(event.target.value);
  };

  return (
    <div className="flex items-center mt-3 ml-auto relative">
      <div className="relative ">
        <input
          type="text"
          className="lg:w-[400px] bg-neutral-200 font-inter border border-gray-300 px-2 py-1 rounded-md pl-8 text-black"
          value={searchString}
          onChange={handleTextChange}
          placeholder="Cari Mahasiswa"
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
  selectedDate: string;
  onDateChange: (date: string) => void;
}

// filter tanggal
function DatePicker({
  selectedDate,
  onDateChange,
}: MyAppDatePickerProps): JSX.Element {
  const handleDateChange = (event: ChangeEvent<HTMLInputElement>) => {
    onDateChange(event.target.value);
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
      {/* <div className="flex items-center  border-l border-black pl-2">
        <CiFilter />
        <Filter />
      </div> */}
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
  filter: string;
  search: string;
  handleDetailP: () => void;
}
interface PresensiData {
  nama: string;
  masuk: string;
  pulang: string;
  istirahat: string;
  kembali: string;
  log_activity: string;
  kehadiran: string;
  kebaikan: string;
}
function TablePresensi({ filter, search, handleDetailP }: TablePresensiProps) {
  const [jam, setJam] = useState(false);
  const [aturJam, setAturJam] = useState(false);
  const [info, setInfo] = useState(false);
  const [infoIzin, setInfoIzin] = useState(false);
  const [kIzin, setKIzin] = useState(true);
  const [kIzinAktif, setKIzinAktif] = useState(false);
  const [tambahKategori, setTambahKategori] = useState(false);
  const [data, setData] = useState<PresensiData[]>([]);

  const fetchPresensi = async () => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/admin/presensi/harian",
        {
          filter: filter,
          nama: search,
        }
      );
      console.log(response.data);
      setData(response.data.presensi);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPresensi();
  }, [filter, search]);
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

            <th className=" pt-1 text-center " rowSpan={2}>
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
            <th className=" pt-1 px-2 text-center" rowSpan={2}>
              <p>Log Aktivitas</p>
            </th>
            <th rowSpan={2} className="text-center">
              Status Kehadiran
            </th>
            <th rowSpan={2} className="text-center">
              Kebaikan
            </th>
          </tr>
          <tr>
            <th className=" pb-1 border-solid border-r border-black">
              <p className="">Masuk</p>
            </th>
            <th className=" pb-1">Pulang</th>
            <th className=" pb-1  border-solid border-r border-black">Mulai</th>
            <th className=" pb-1 ">Selesai</th>
          </tr>
        </thead>
        <tbody className=" text-[#69696b]">
          {data.map((item, index) => (
            <tr key={index}>
              <td className=" pt-2 pb-1 text-center pl-2 ">
                <input type="checkbox" />
              </td>
              <td className=" pt-1 text-center">{index + 1}</td>
              <td className=" cursor-pointer pt-1" onClick={handleDetailP}>
                {item.nama}
              </td>
              <td className="text-center text-blue-600 underline underline-offset-1">
                <span className="cursor-pointer" onClick={handleAturJam}>
                  {item.masuk}
                </span>
              </td>
              <td className="text-center text-blue-600 underline underline-offset-1">
                <span className="cursor-pointer" onClick={handleAturJam}>
                  {item.pulang}
                </span>
              </td>
              <td className="text-center text-blue-600 underline underline-offset-1">
                <span className="cursor-pointer" onClick={handleAturJam}>
                  {item.istirahat}
                </span>
              </td>
              <td className="text-center text-blue-600 underline underline-offset-1">
                <span className="cursor-pointer" onClick={handleAturJam}>
                  {item.kembali}
                </span>
              </td>
              <td className=" pt-1 text-center">{item.log_activity}</td>
              <td className=" pt-1 text-center">
                <span>{item.kehadiran}</span>
              </td>
              <td className=" pt-1 text-center">{item.kebaikan}</td>
            </tr>
          ))}
        </tbody>
      </table>
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
