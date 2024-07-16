/* eslint-disable @next/next/no-img-element */

import { useState } from "react";
import DetailPresensi from "../detail-profile/DetailProfile";
import { FaRegUser } from "react-icons/fa";
import ScanBarcode from "./ScanBarcode";

export default function Header() {
  const [status, setStatus] = useState("presensi");
  const handleStatusChange = (stat: string) => setStatus(stat);

  function DataPresensi() {
    const [table, setTable] = useState("Umum");
    const [detail, setDetail] = useState(false);
    const [info, setInfo] = useState(false);

    const handleTableChange = (table: string) => setTable(table);

    function FilterDropdown() {
      const [open, setOpen] = useState(false);

      const toggleDropdown = () => setOpen(!open);

      return (
        <div className="inline-block text-left">
          <div>
            <button
              onClick={toggleDropdown}
              type="button"
              className="inline-flex w-full justify-center gap-x-1.5  bg-grey-500 text-sm font-semibold text-gray-900 hover:bg-gray-50"
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
            <div
              className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-500 border-2 bg-gray-100 focus:outline-none"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="menu-button"
              tabIndex={-1}
            >
              <div className="py-1" role="none">
                <p
                  className="text-gray-700 block px-4 py-2 text-sm"
                  role="menuitem"
                  tabIndex={-1}
                  id="menu-item-0"
                >
                  <b>Status</b>
                </p>
                <p
                  className="text-gray-700 block px-4 py-2 text-sm"
                  role="menuitem"
                  tabIndex={-1}
                  id="menu-item-1"
                >
                  <input type="checkbox" /> Hadir
                </p>
                <p
                  className="text-gray-700 block px-4 py-2 text-sm"
                  role="menuitem"
                  tabIndex={-1}
                  id="menu-item-1"
                >
                  <input type="checkbox" /> Izin
                </p>
                <p
                  className="text-gray-700 block px-4 py-2 text-sm"
                  role="menuitem"
                  tabIndex={-1}
                  id="menu-item-1"
                >
                  <input type="checkbox" /> Tidak Hadir
                </p>
              </div>
              <div className="py-1" role="none">
                <p
                  className="text-gray-700 block px-4 py-2 text-sm"
                  role="menuitem"
                  tabIndex={-1}
                  id="menu-item-2"
                >
                  <b>Shift</b>
                </p>
                <p
                  className="text-gray-700 block px-4 py-2 text-sm"
                  role="menuitem"
                  tabIndex={-1}
                  id="menu-item-1"
                >
                  <input type="checkbox" /> Shift Pagi
                </p>
                <p
                  className="text-gray-700 block px-4 py-2 text-sm"
                  role="menuitem"
                  tabIndex={-1}
                  id="menu-item-1"
                >
                  <input type="checkbox" /> Shift Middle
                </p>
                <p
                  className="text-gray-700 block px-4 py-2 text-sm"
                  role="menuitem"
                  tabIndex={-1}
                  id="menu-item-1"
                >
                  <input type="checkbox" /> Shift Siang
                </p>
              </div>
              <div className="py-1" role="none">
                <p
                  className="text-gray-700 block px-4 py-2 text-sm"
                  role="menuitem"
                  tabIndex={-1}
                  id="menu-item-4"
                >
                  <b>Kantor</b>
                </p>
                <p
                  className="text-gray-700 block px-4 py-2 text-sm"
                  role="menuitem"
                  tabIndex={-1}
                  id="menu-item-1"
                >
                  <input type="checkbox" /> Kantor 1
                </p>
                <p
                  className="text-gray-700 block px-4 py-2 text-sm"
                  role="menuitem"
                  tabIndex={-1}
                  id="menu-item-1"
                >
                  <input type="checkbox" /> Kantor 2
                </p>
                <p
                  className="text-gray-700 block px-4 py-2 text-sm"
                  role="menuitem"
                  tabIndex={-1}
                  id="menu-item-1"
                >
                  <input type="checkbox" /> Kantor 4
                </p>
              </div>
            </div>
          )}
        </div>
      );
    }

    function Detail() {
      const handleChangeDetail = () => {
        setDetail(!detail);
      };
      return (
        <div className="bg-black/50 w-full h-screen left-0 fixed flex justify-center items-center z-30">
          <div className="bg-[#DCDCDC] w-[508px] flex-col flex items-center gap-5 py-5 rounded-lg">
            <b className="text-[24px]">Setting jam default</b>
            <hr className="border border-[#B0B0B0] w-full" />
            <div className="bg-[#FFBCBD] text-[13px] flex rounded-lg flex-col mx-2 p-4">
              <span>
                anda akan merubah jam default presensi untuk tanggal{" "}
                <b> 2023-12-25</b>
              </span>
              <span>
                {" "}
                atas nama : <b>Figo Ferdyian</b>{" "}
              </span>
            </div>

            <div className="flex gap-20">
              <div className="flex flex-col gap-8 text-[14px]">
                <div className="flex flex-col items-center gap-2">
                  <p>Jam masuk</p>
                  <span className="py-2 px-5 border-2 border-[#B0B0B0]">
                    06:30:00
                  </span>
                </div>

                <div className="flex flex-col items-center gap-2">
                  <p>Jam Pulang</p>
                  <span className="py-2 px-5 border-2 border-[#B0B0B0]">
                    13:00:00
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-8 text-[14px]">
                <div className="flex flex-col items-center gap-2">
                  <p>Jam Ashar mulai</p>
                  <span className="py-2 px-5 border-2 border-[#B0B0B0]">
                    13:15:00s
                  </span>
                </div>

                <div className="flex flex-col items-center gap-2">
                  <p>jam ashar akhir</p>
                  <span className="py-2 px-5 border-2 border-[#B0B0B0]">
                    21:00:00
                  </span>
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-5 w-full px-5 text-[14px] pt-10">
              <button onClick={handleChangeDetail}>Batal</button>
              <button
                onClick={handleChangeDetail}
                className="bg-h1 py-2 px-5 text-white rounded-lg"
              >
                Simpan
              </button>
            </div>
          </div>
        </div>
      );
    }

    function InfoKehadiran() {
      const [open, setOpen] = useState(false);
      const [tambah, setTambah] = useState(false);

      const toggleOpenDropdown = () => {
        setOpen(!open);
        setTambah(false);
      };
      const toggleTambah = () => {
        setTambah(!tambah);
        setOpen(!open);
      };

      const handleChangeInfo = () => setInfo(!info);
      return (
        <div className="bg-black/50 w-full h-full py-5 left-0 flex fixed justify-center items-center z-30">
          <div className="bg-slate-100 flex flex-col w-[400px] h-full items-center rounded-lg p-5 gap-5 overflow-scroll">
            <b className="text-xl">Izin</b>
            <textarea
              className="w-full bg-slate-300 rounded-sm focus:outline-none"
              placeholder="Keterangan ketidakhadiran"
              defaultValue={""}
            />

            <div className="flex flex-col w-full gap-2">
              <p>Link Foto Gdrive</p>
              <span className="w-full bg-slate-300 text-xs whitespace-nowrap overflow-hidden p-2 rounded-sm">
                https://www.googledrive.com/results?search_que
              </span>
            </div>

            <div className="flex flex-col w-full gap-2">
              <p>Kategori Izin</p>
              <div className="bg-slate-300 w-full text-xs p-2 rounded-sm">
                <button
                  onClick={toggleOpenDropdown}
                  type="button"
                  className="flex w-full items-center justify-between cursor-pointer"
                >
                  <p className="text-left">Pilih Kategori</p>
                  <svg
                    className="h-5 text-gray-400 "
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
                <div className=" flex flex-col p-2 gap-2 bg-slate-300 text-xs">
                  <span className="flex justify-between">
                    <p>Sakit dengan Surat Dokter</p> <input type="radio" />
                  </span>
                  <hr className="broder border-slate-900" />
                  <span className="flex justify-between">
                    <p>Sakit tanpa Surat Dokter</p> <input type="radio" />
                  </span>
                  <hr className="broder border-slate-900" />
                  <span className="flex justify-between">
                    <p>Keperluan sekolah / kampus</p> <input type="radio" />
                  </span>
                  <hr className="broder border-slate-900" />
                  <span className="flex justify-between">
                    <p>Keperluan Lain</p> <input type="radio" />
                  </span>
                  <hr className="broder border-slate-900" />
                  <span
                    onClick={toggleTambah}
                    className="flex bg-red-200 rounded-lg p-2 w-fit  gap-2"
                  >
                    <img src="/addButton.svg" alt="" />
                    <p className="">Tambah Kategori</p>
                  </span>
                </div>
              )}

              {tambah && (
                <>
                  <div className=" flex flex-col p-2 gap-2 bg-slate-300 text-xs">
                    <span className="flex justify-between">
                      <p>Sakit dengan Surat Dokter</p> <b>X</b>
                    </span>
                    <hr className="broder border-slate-900" />
                    <span className="flex justify-between">
                      <p>Sakit tanpa Surat Dokter</p> <b>X</b>
                    </span>
                    <hr className="broder border-slate-900" />
                    <span className="flex justify-between">
                      <p>Keperluan sekolah / kampus</p> <b>X</b>
                    </span>
                    <hr className="broder border-slate-900" />
                    <span className="flex justify-between">
                      <p>Keperluan Lain</p> <b>X</b>
                    </span>
                    <hr className="broder border-slate-900" />
                  </div>
                  <input
                    className="shadow-md rounded-lg p-2 text-xs"
                    type="text"
                    name=""
                    id=""
                    placeholder="Tambah Kategori Izin"
                  />
                  <div className="flex w-full gap-10">
                    <button
                      onClick={toggleOpenDropdown}
                      className="w-1/2 text-xs p-2 rounded-sm"
                    >
                      Batal
                    </button>
                    <button
                      onClick={toggleOpenDropdown}
                      className="w-1/2 bg-red-800 text-xs text-white p-2 rounded-sm"
                    >
                      Tambahkan
                    </button>
                  </div>
                </>
              )}
            </div>

            <div className="flex w-full gap-10">
              <button className="w-1/2 bg-slate-300 text-xs p-2 rounded-sm">
                Tidak Ganti Jam
              </button>
              <button className="w-1/2 bg-slate-300 text-xs p-2 rounded-sm">
                Ganti Jam
              </button>
            </div>

            <b className="cursor-pointer" onClick={handleChangeInfo}>
              Simpan
            </b>
          </div>
        </div>
      );
    }
    function IzinPerhari() {
      const handleChangeDetail = () => {
        setDetail(!detail);
      };

      const handleChangeInfo = () => {
        setInfo(!info);
      };
      return (
        <div className="flex flex-col gap-3">
          <table className="table-auto w-full text-center text-[10px]">
            <thead className="bg-gray-300">
              <tr>
                <th className="p-1 cursor-pointer" rowSpan={2}>
                  <input type="checkbox" />
                </th>
                <th className="border-r-2 p-1" rowSpan={2}>
                  No
                </th>
                <th className="p-1" rowSpan={2}>
                  Nama
                </th>
                <th className="border-r-2 p-1" rowSpan={2}></th>
                <th className="border-b-2 p-1" colSpan={2}>
                  Jam Kerja
                </th>
                <th className="border-b-2 border-x-2 p-1" colSpan={2}>
                  Jam Istirhat
                </th>
                <th className="border-b-2 p-1" colSpan={2}>
                  Total Jam Kerja
                </th>
                <th className="border-x-2 p-1" rowSpan={2}>
                  Log Aktivitas
                </th>
                <th className="border-x-2 p-1" rowSpan={2}>
                  Status Kehadiran
                </th>
                <th className="p-1" rowSpan={2}>
                  Status Ganti Jam
                </th>
              </tr>
              <tr>
                <th className="border-x-2 p-1">Masuk</th>
                <th className="p-1">Pulang</th>
                <th className="border-x-2 p-1">Mulai</th>
                <th className="p-1">Selesai</th>
                <th className="border-x-2 p-1">Total Jam</th>
                <th className="p-1">(+)(-)</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              <tr className="border-b-2">
                <td className="p-1 cursor-pointer">
                  <input type="checkbox" />
                </td>
                <td className="p-1">1</td>
                <td className="p-1">
                  <a href="/Detail-profile">Alexander Pyton</a>
                </td>
                <td className="p-1 cursor-pointer" onClick={handleChangeDetail}>
                  <img src="/settingTabelPresensi.svg" alt="" />
                </td>
                <td className="p-1">...</td>
                <td className="p-1">...</td>
                <td className="p-1">...</td>
                <td className="p-1">...</td>
                <td className="border-r-2 p-1">...</td>
                <td className="p-1">...</td>
                <td className="p-1">...</td>
                <td className="p-1 flex gap-1 justify-center">
                  Tidak Hadir{" "}
                  <img
                    src="/info.svg"
                    className="cursor-pointer"
                    onClick={handleChangeInfo}
                    alt=""
                  />
                </td>
                <td className="p-1">Ganti</td>
              </tr>
            </tbody>
          </table>

          <span>
            <button className="flex items-center gap-2 bg-h1 py-2 px-5 text-white rounded-lg cursor-pointer text-xs">
              <img src="/unduh.svg" alt="" />
              <p>PDF</p>
            </button>
          </span>
        </div>
      );
    }

    return (
      <>
        {/* Header */}
        <div className="header-container relative bg-search w-full flex gap-2 mb-4 p-4 text-white">
          {/* teks */}
          <div className="text-content w-1/2">
            <h1 className="text-3xl">
              <b>Data Presensi</b>
            </h1>
            <p className="text-xs">Data per tanggal 2023-09-01</p>
          </div>
          {/* search */}
          <div className="Search-container w-1/2">
            <div>Cari Mahasiswa</div>
            <div className="bg-gray-100 rounded-lg px-3 py-2 flex gap-2 text-gray-500">
              <img src="/search.svg" alt="search icon" />
              <input
                className="bg-transparent text-xs text-black"
                type="text"
                placeholder="Pencarian"
              />
            </div>
          </div>
        </div>
        {/* container 2 */}
        <div className="container-2 w-full flex gap-2 my-2">
          <div className="table-kehadiran w-full md:w-1/2 bg-gray-100 divide-y divide-slate-400 shadow-md shadow-slate-300">
            <div className="p-2 h-10">
              <h3>
                <b>Total Kehadiran</b>
              </h3>
            </div>

            <div className="p-3 flex gap-2 md:h-10">
              <div
                onClick={() => handleTableChange("masuk")}
                className="gap-2 flex cursor-pointer"
              >
                <p className="text-xs self-center md:whitespace-nowrap">
                  Total Masuk
                </p>
                <p className="rounded-xl bg-green-500 px-2 self-center text-xs text-white">
                  200
                </p>
              </div>
              <div
                onClick={() => handleTableChange("izin")}
                className="gap-2 flex cursor-pointer"
              >
                <p className="text-xs self-center md:whitespace-nowrap">
                  Total Izin
                </p>
                <p className="rounded-xl bg-yellow-500 px-2 self-center text-xs text-white">
                  25
                </p>
              </div>
              <div
                onClick={() => handleTableChange("tidakMasuk")}
                className="gap-2 flex cursor-pointer"
              >
                <p className="text-xs self-center md:whitespace-nowrap">
                  Total Tidak Masuk
                </p>
                <p className="rounded-xl bg-red-500 px-2 self-center text-xs text-white">
                  100
                </p>
              </div>
            </div>
          </div>

          <div className="relative w-1/2 flex-wrap">
            <p
              onClick={() => handleStatusChange("scanBarcode")}
              className="text-red-500 underline text-right mb-4 cursor-pointer"
            >
              scan barcode
            </p>

            <form className="Search-container flex bg-gray-100  border-2 divide-x-2 divide-solid">
              <div className="px-3 py-2 w-2/3 gap-2 flex text-gray-500 hover:bg-gray-50">
                <img src="/search.svg" alt="search icon" />
                <input
                  className="bg-transparent text-xs w-full text-gray-500 cursor-pointer focus:outline-none"
                  type="date"
                />
              </div>
              <div className="flex gap-2 w-1/3 p-2 items-center">
                <img src="/filter.svg" alt="" />
                <div className="float-right">
                  <FilterDropdown />
                </div>
              </div>
            </form>
          </div>
        </div>
        {/* container 3 */}
        <div className="container3">
          {table == "izin" && (
            <div>
              <IzinPerhari />
            </div>
          )}
        </div>

        {detail && (
          <div className="absolute top-0">
            <Detail />
          </div>
        )}
        {info && (
          <div className="absolute top-0">
            <InfoKehadiran />
          </div>
        )}
      </>
    );
  }

  return (
    <>
      {status == "presensi" && (
        <div>
          <DataPresensi />
        </div>
      )}

      {status == "scanBarcode" && (
        <div className="flex flex-row">
          <div
            className="selected relative m-5"
            style={{
              marginLeft: "20px",
              cursor: "pointer",
              textDecoration: "underline",
            }}
            onClick={() => handleStatusChange("presensi")}
          >
            <svg
              width="18"
              height="28"
              viewBox="0 0 20 38"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.5 3L3 19.2021L17.5 35.4043"
                stroke="black"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="w-full">
            <ScanBarcode />
          </div>
        </div>
      )}
    </>
  );
}
