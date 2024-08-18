/* eslint-disable @next/next/no-img-element */

import React, { ChangeEvent, useState, useEffect } from "react";
import axios from "axios";
import { LiaDownloadSolid } from "react-icons/lia";
import Invoice from "./invoice";
import { IoIosArrowBack } from "react-icons/io";

interface PresensiData {
  username: string;
  nip: string;
  nama: string;
  jumlah_hadir: number;
  jumlah_izin: number;
  jumlah_tidak_hadir: number;
}

interface HalamanProps {
  onUsernameClick: (username: string) => void;
}

interface Shift {
  id: number;
  nama_shift: string;
  masuk: string;
  istirahat: string;
  kembali: string;
  pulang: string;
  created_at: string | null;
  updated_at: string | null;
}

export default function Halaman({ onUsernameClick }: HalamanProps) {
  // Bikin tanggalan
  const tanggalan = new Date();
  const sebulanlalu = new Date(tanggalan.getTime() - 30 * 24 * 60 * 60 * 1000);
  const Tanggal1 = sebulanlalu.toISOString().substring(0, 10);
  const Tanggal2 = tanggalan.toISOString().substring(0, 10);
  const [presensi, setPresensi] = useState<PresensiData[]>([]);
  const [search, setSearch] = useState("");
  const [shift, setShift] = useState<Shift[]>([]);
  const [id, setId] = useState(0);
  const [cekInvoice, setCekInvoice] = useState(false);
  const [tampil, setTampil] = useState(true);

  const fetchShift = async () => {
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

  // tanggalan 1
  const [tanggal1, setTanggal1] = useState<string>(Tanggal1);

  const handleDateChange = (event: ChangeEvent<HTMLInputElement>) =>
    setTanggal1(event.target.value);

  // tanggalan 2
  const [tanggal2, setTanggal2] = useState<string>(Tanggal2);

  const handleDate2Change = (Event: ChangeEvent<HTMLInputElement>) =>
    setTanggal2(Event.target.value);

  const fetchPresensi = async () => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_SERVER}/admin/laporan`,
        {
          tanggal_mulai: tanggal1,
          tanggal_selesai: tanggal2,
          filter: search,
          shift_id: id,
        }
      );
      setPresensi(response.data.data);
      console.log(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPresensi();
    fetchShift();
  }, [tanggal1, tanggal2, search, id]);

  const handleShift = (shift: number) => {
    if (id == shift) {
      setId(0);
    } else {
      setId(shift);
    }
  };

  const handleInvoice = () => {
    setTampil(!tampil);
    setCekInvoice(!cekInvoice);
  };

  // membuat header
  function Header() {
    return (
      <div className="flex flex-row w-full bg-search p-4">
        <div className="w-3/5 flex flex-col gap-1 text-white">
          <h1 className="text-3xl font-inter">
            <b>Laporan Data Presensi</b>
          </h1>
          <p className="text-xs font-inter">
            Data per tanggal {tanggal1} s/d {tanggal2}
          </p>
        </div>
        <div className="w-2/5 flex flex-col gap-2 text-white text-xs font-inter">
          <p>Cari Mahasiswa</p>
          <div className="search-container">
            <form action="">
              <div className="search-wrapper ">
                <div className="search-content flex gap-5 bg-gray-100 rounded-lg px-2 py-1">
                  <img
                    src="/search.svg"
                    alt="search-icon"
                    className="search-icon "
                  />
                  <input
                    className="bg-transparent text-xs h-7  w-4/5 focus:outline-none text-black "
                    type="text"
                    placeholder="Pencarian"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    autoFocus
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
  // membuat property filter
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
            <div className="absolute right-4 z-10 border border-solid border-[#b5b5b5] bg-[#E9E9E9] px-1">
              <div className="py-1">
                <p className=" block px-2 py-1 text-xs">Shift</p>
                {shift.map((item) => (
                  <div key={item.id} className="flex gap-1 px-2 text-[11px]">
                    <p onClick={() => handleShift(item.id)}>
                      Shift {item.nama_shift}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  function Tanggal() {
    return (
      <div className="date flex flex-col md:flex-row gap-4 justify-end ">
        <div className="flex gap-3 justify-end">
          <div className="p-2 items-center text-xs border border-black">
            <input
              className="focus:outline-none bg-gray-200 cursor-pointer"
              type="date"
              value={tanggal1}
              onChange={handleDateChange}
            />
          </div>
          <div className="p-2 items-center text-xs border border-black">
            <input
              className="focus:outline-none bg-gray-200 cursor-pointer"
              type="date"
              value={tanggal2}
              onChange={handleDate2Change}
            />
          </div>
        </div>
        <div className="flex gap-5 justify-end">
          <div className="flex gap-1 p-2 text-xs border border-black cursor-pointer">
            <img src="/filter.svg" alt="filter" />
            <Filter />
          </div>
        </div>
      </div>
    );
  }

  function Table() {
    return (
      <div className="tableData">
        <table className="table-auto w-full">
          <thead>
            <tr className="bg-gray-300 text-xs font-inter">
              <th className="px-2 py-2">
                <input type="checkbox" />
              </th>
              <th className="px-2 py-2">No</th>
              <th className="px-2 py-2">Nama</th>
              <th className="px-2 py-2">NIP</th>
              <th className="px-2 py-2">Total Kehadiran</th>
              <th className="px-2 py-2">Total Izin</th>
              <th className="px-2 py-2">Total Ketidakhadiran</th>
            </tr>
          </thead>
          <tbody>
            {presensi.map((item, index) => (
              <tr
                key={index}
                className="trLaporan border border-gray-200 text-xs bg-white font-inter"
              >
                <td className="px-2 py-2 text-center">
                  <input type="checkbox" />
                </td>
                <td className="px-2 py-2 text-center">{index + 1}</td>
                <td className="td px-2 py-2 text-center">
                  <a
                    href="#"
                    className="hover:text-blue-950"
                    onClick={() => onUsernameClick(item.username)}
                  >
                    {item.nama}
                  </a>
                </td>
                <td className="td px-2 py-2 text-center">{item.nip}</td>
                <td className="px-2 py-2 text-center">
                  <a href="#" className="flex justify-center items-center">
                    <span>
                      {item.jumlah_hadir !== undefined ? item.jumlah_hadir : 0}
                    </span>
                    <img src="/info.svg" alt="info" className="w-3 ml-1" />
                  </a>
                </td>
                <td className="px-2 py-2 text-center">
                  <a href="#" className="flex justify-center items-center">
                    <span className="text-koneng">
                      {item.jumlah_izin !== undefined ? item.jumlah_izin : 0}
                    </span>
                    <img src="/info.svg" alt="info" className="w-3 ml-1" />
                  </a>
                </td>
                <td className="px-2 py-2 text-center">
                  <a href="#" className="flex justify-center items-center">
                    <span className="text-error">
                      {item.jumlah_tidak_hadir !== undefined
                        ? item.jumlah_tidak_hadir
                        : 0}
                    </span>
                    <img src="/info.svg" alt="info" className="w-3 ml-1" />
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  return (
    <>
      {tampil && (
        <div className="relative bg-gray-200 p-4 flex flex-col gap-5 h-full">
          <Header />
          <Tanggal />
          <Table />
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
      )}
      {cekInvoice && (
        <div>
          <p
            // className="absolute top-[310px] left-2 cursor-pointer"
            onClick={handleInvoice}
          >
            <IoIosArrowBack />
          </p>
          <Invoice
            filter={search}
            shift_id={id}
            tanggal_mulai={tanggal1}
            tanggal_selesai={tanggal2}
          />
        </div>
      )}
    </>
  );
}
