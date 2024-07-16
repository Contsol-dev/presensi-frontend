/* eslint-disable @next/next/no-img-element */

import { ChangeEvent, useState } from "react";

export default function Halaman() {
  // Bikin tanggalan
  const tanggalan = new Date();
  const sebulanlalu = new Date(tanggalan.getTime() - 30 * 24 * 60 * 60 * 1000);
  const Tanggal1 = sebulanlalu.toISOString().substring(0, 10);
  const Tanggal2 = tanggalan.toISOString().substring(0, 10);

  // tanggalan 1
  const [tanggal1, setTanggal1] = useState<string>(Tanggal1);

  const handleDateChange = (event: ChangeEvent<HTMLInputElement>) =>
    setTanggal1(event.target.value);

  // tanggalan 2
  const [tanggal2, setTanggal2] = useState<string>(Tanggal2);

  const handleDate2Change = (Event: ChangeEvent<HTMLInputElement>) =>
    setTanggal2(Event.target.value);
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
                <div className="flex gap-1 px-2 text-[11px]">
                  <input type="checkbox" />
                  <p>Shift Pagi</p>
                </div>
                <div className="flex gap-1 px-2 text-[11px]">
                  <input type="checkbox" />
                  <p>Shift Middle</p>
                </div>
                <div className="flex gap-1 px-2 text-[11px]">
                  <input type="checkbox" />
                  <p>Shift Siang</p>
                </div>
              </div>
              <div className="py-1">
                <p className=" block px-2 py-1 text-xs border border-t-black">
                  Kantor
                </p>
                <div className="flex gap-1 px-2 text-[11px]">
                  <input type="checkbox" />
                  <p>Kantor 1</p>
                </div>
                <div className="flex gap-1 px-2 text-[11px]">
                  <input type="checkbox" />
                  <p>Kantor 2</p>
                </div>
                <div className="flex gap-1 px-2 text-[11px]">
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

  function Tanggal() {
    return (
      <div className="date flex flex-col md:flex-row gap-4 overflow-x-auto justify-end ">
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
          <div className="p-2 text-sm border border-black cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              className="bi bi-search"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
            </svg>
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
            <tr className="trLaporan border border-gray-200 text-xs bg-white font-inter">
              <td className="px-2 py-2 text-center">
                <input type="checkbox" />
              </td>
              <td className="px-2 py-2 text-center">1</td>
              <td className="td px-2 py-2 text-center">
                <a href="/detail-profile" className="hover:text-blue-950 ">
                  Nurfan Rahmat Berlian
                </a>
              </td>
              <td className="td px-2 py-2 text-center">
                MJ/PROG/UAD/SEPT2023/01
              </td>
              <td className="px-2 py-2 text-center">
                <a
                  href="/detail-profile/detail-hadir"
                  className="flex justify-center items-center"
                >
                  <span>30</span>
                  <img src="/info.svg" alt="info" className="w-3 ml-1" />
                </a>
              </td>
              <td className="px-2 py-2 text-center">
                <a
                  href="/detail-profile/detail-izin"
                  className="flex justify-center items-center"
                >
                  <span className="text-koneng">30</span>
                  <img src="/info.svg" alt="info" className="w-3 ml-1" />
                </a>
              </td>
              <td className="px-2 py-2 text-center">
                <a
                  href="/detail-profile/detail-tidak-hadir"
                  className="flex justify-center items-center"
                >
                  <span className="text-error">30</span>
                  <img src="/info.svg" alt="info" className="w-3 ml-1" />
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }

  return (
    <div className="relative bg-gray-200 p-4 flex flex-col gap-5 h-full">
      <Header />
      <Tanggal />
      <Table />
    </div>
  );
}
