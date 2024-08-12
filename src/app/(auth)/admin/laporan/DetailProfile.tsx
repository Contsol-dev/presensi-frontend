/* eslint-disable @next/next/no-img-element */
"use client";
import axios from "axios";
import { ChangeEvent, useEffect, useState } from "react";
import Invoice from "./invoice";
import { IoIosArrowBack } from "react-icons/io";
import { LiaDownloadSolid } from "react-icons/lia";

interface DetailPresensiProps {
  username: string;
}
interface MagangData {
  nama: string;
  nip: string;
  tanggal_masuk: string;
  tanggal_keluar: string;
  masuk: string;
  pulang: string;
}
interface PresensiData {
  tanggal: string;
  masuk: string;
  istirahat: string;
  kembali: string;
  pulang: string;
  log_activity: string;
  kebaikan: string;
  catatan: string;
  kehadiran: string;
}
export default function DetProfile({ username }: DetailPresensiProps) {
  const [cekInvoice, setCekInvoice] = useState(false);
  const [info, setInfo] = useState(false);
  const [catatan, setCatatan] = useState(false);
  const [magang, setMagang] = useState<MagangData>();
  const [presensi, setPresensi] = useState<PresensiData[]>([]);
  const [tampil, setTampil] = useState(true);
  const [masuk, setMasuk] = useState(0);
  const [terlambatMasuk, setTerlambatMasuk] = useState(0);
  const [istirahatAwal, setIstirahatAwal] = useState(0);
  const [terlambatKembali, setTerlambatKembali] = useState(0);
  const [pulangAwal, setPulangAwal] = useState(0);
  const [filter, setFilter] = useState("");
  const [no, setNo] = useState(new Date().toISOString().substring(0, 10));
  const [note, setNote] = useState("");

  const handleChangeInfo = () => setInfo(!info);
  const handleChangeCatatan = (tanggal: string, text: string) => {
    setNo(tanggal);
    setNote(text);
    setCatatan(true);
  };
  const handleInvoice = () => {
    setTampil(!tampil);
    setCekInvoice(!cekInvoice);
  };

  const fetchUser = async () => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_SERVER}/admin/detail-presensi`,
        {
          username: username,
          filter: filter,
        }
      );
      console.log(response);
      setMagang(response.data.magang);
      setPresensi(response.data.presensi);
      setMasuk(response.data.masuk);
      setTerlambatMasuk(response.data.terlambatMasuk);
      setIstirahatAwal(response.data.istirahatAwal);
      setTerlambatKembali(response.data.terlambatKembali);
      setPulangAwal(response.data.pulangAwal);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, [catatan, filter]);

  const handleNote = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_SERVER}/admin/detail-presensi/catatan`,
        {
          username: username,
          tanggal: no,
          catatan: note,
        }
      );
      if (response.data.success) {
        console.log(response.data.message);
      } else {
        console.log("Gagal");
      }
      setCatatan(false);
    } catch (error) {
      console.log(error);
    }
  };

  function DetailData() {
    return (
      <div className="flex flex-col gap-3">
        <table className="table-auto w-full text-center text-[10px] mb-12">
          <thead className="bg-gray-300">
            <tr>
              <th className="p-1 cursor-pointer" rowSpan={2}>
                <input type="checkbox" />
              </th>
              <th className="p-1" rowSpan={2}>
                No
              </th>
              <th className="border-x-2 p-1" rowSpan={2}>
                Tanggal
              </th>
              <th className="border-b-2 p-1" colSpan={2}>
                Jam Kerja
              </th>
              <th className="border-b-2 border-x-2 p-1" colSpan={2}>
                Jam Istirahat
              </th>
              <th className="border-x-2 p-1" rowSpan={2}>
                Log Aktivitas
              </th>
              <th className="border-x-2 p-1" rowSpan={2}>
                Status Kehadiran
              </th>
              <th className="p-1" rowSpan={2}>
                Kebaikan
              </th>
              <th className="border-l-2 p-1" rowSpan={2}>
                Catatan
              </th>
              <th className="p-1" rowSpan={2}></th>
            </tr>
            <tr>
              <th className="border-x-2 p-1">Masuk</th>
              <th className="p-1">Pulang</th>
              <th className="border-x-2 p-1">Mulai</th>
              <th className="p-1">Selesai</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {presensi.map((item, index) => (
              <tr className="relative border-b-2" key={index}>
                <td className="p-1 cursor-pointer">
                  <input type="checkbox" />
                </td>
                <td className="p-1">{index + 1}</td>
                <td className="p-1">{item.tanggal}</td>
                <td className="p-1">{item.masuk}</td>
                <td className="p-1">{item.pulang}</td>
                <td className="p-1">{item.istirahat}</td>
                <td className="p-1">{item.kembali}</td>
                <td className="p-1">{item.log_activity}</td>
                <td className="p-1">{item.kehadiran} </td>
                <td className="p-1">{item.kebaikan}</td>
                <td className="p-1">{item.catatan}</td>
                <td className="p-1">
                  <img
                    src="/write.svg"
                    alt="edit"
                    onClick={() =>
                      handleChangeCatatan(item.tanggal, item.catatan)
                    }
                    className="cursor-pointer"
                  />
                </td>
                {catatan && no == item.tanggal && (
                  <div className="absolute right-5 -bottom-32 flex flex-col h-fit w-1/3 gap-2 px-2 py-5 shadow-lg bg-slate-100 z-10">
                    <form onSubmit={handleNote}>
                      <textarea
                        className="w-full p-2 bg-slate-300 rounded-sm focus:outline-none text-xs text-left"
                        placeholder="Tambahkan Catatan Untuk User"
                        value={note}
                        onChange={(e) => setNote(e.target.value)}
                        autoFocus
                      ></textarea>
                      <div className="flex justify-end gap-5 w-full text-xs">
                        <button type="button" onClick={() => setCatatan(false)}>
                          Batal
                        </button>
                        <button
                          className="bg-h1 py-2 px-5 text-white rounded-lg"
                          type="submit"
                        >
                          Simpan
                        </button>
                      </div>
                    </form>
                  </div>
                )}
              </tr>
            ))}
          </tbody>
        </table>
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

    return (
      <div className="bg-black/50 w-full h-full py-5 left-0 flex fixed justify-center items-center z-30">
        <div className="bg-slate-100 flex flex-col w-[400px] h-full items-center rounded-lg p-5 gap-5">
          <b className="text-xl">Izin</b>
          <textarea
            className="w-full bg-slate-300 rounded-sm focus:outline-none"
            placeholder="Keterangan ketidakhadiran"
            defaultValue={""}
          />
          <div className="flex flex-col w-full gap-2">
            <p>Link Foto Gdrive</p>
            <span className="w-full bg-slate-300 text-xs whitespace-nowrap  p-2 rounded-sm">
              https://www.googledrive.com/results?search_query
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
              <div className="flex flex-col p-2 gap-2 bg-slate-300 text-xs">
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
                  className="flex bg-red-200 rounded-lg p-2 w-fit gap-2"
                >
                  <img src="/addButton.svg" alt="add" />
                  <p className="">Tambah Kategori</p>
                </span>
              </div>
            )}
            {tambah && (
              <>
                <div className="flex flex-col p-2 gap-2 bg-slate-300 text-xs">
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
          <button className="cursor-pointer" onClick={handleChangeInfo}>
            Simpan
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      {tampil && (
        <div className="flex flex-col gap-5 h-screen overflow-auto pb-20">
          <div className="header-container relative bg-search w-full flex gap-2 mb-4 p-4 text-white">
            <div className="flex gap-5 w-1/2">
              <svg
                width="65"
                height="69"
                viewBox="0 0 95 99"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <ellipse
                  cx="47.5"
                  cy="49.5"
                  rx="47.5"
                  ry="49.5"
                  fill="#BA181B"
                />
                <path
                  d="M47.927 19C40.5221 19 34.4635 26.464 34.4635 35.6608C34.4635 44.8575 40.5221 52.3215 47.927 52.3215C55.3319 52.3215 61.3905 44.8575 61.3905 35.6608C61.3905 26.464 55.3319 19 47.927 19ZM33.8576 52.3215C26.722 52.6547 21 58.4527 21 65.6501V72.3145H74.854V65.6501C74.854 58.4527 69.1993 52.6547 61.9964 52.3215C58.3612 56.3868 53.3797 58.9858 47.927 58.9858C42.4743 58.9858 37.4928 56.3868 33.8576 52.3215Z"
                  fill="#E9E9E9"
                />
              </svg>
              <div className="text-content">
                <h1 className="text-xl mb-2">
                  <b>{magang?.nama}</b>
                </h1>
                <p className="text-xs">NIP: {magang?.nip}</p>
              </div>
            </div>
            <div className="Search-container w-1/2">
              <div>Cari Status Kehadiran</div>
              <div className="bg-gray-100 rounded-lg px-3 py-2 flex gap-2 text-gray-500">
                <img src="/search.svg" alt="search icon" />
                <input
                  className="bg-transparent text-xs text-black focus:outline-0"
                  type="text"
                  placeholder="Pencarian"
                  value={filter}
                  onChange={(e) => setFilter(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-5 text-xs">
            <div className="baris-1 flex flex-col w-full md:w-2/3 gap-5">
              <div className="flex flex-col h-fit gap-2 p-2 shadow-lg bg-slate-100">
                <span className="flex">
                  <p className="w-1/2">Masa</p>
                  <p className="w-1/2 text-right">
                    {magang?.tanggal_masuk} ~ {magang?.tanggal_keluar}
                  </p>
                </span>
                <hr className="border" />
                <span className="flex">
                  <p className="w-1/2">Jam default masuk</p>
                  <p className="w-1/2 text-right">{magang?.masuk}</p>
                </span>
                <hr className="border" />
                <span className="flex">
                  <p className="w-1/2">Jam default pulang</p>
                  <p className="w-1/2 text-right">{magang?.pulang}</p>
                </span>
              </div>
              <div className="flex flex-col h-fit gap-2 p-2 shadow-lg bg-slate-100">
                <h3>Total terlambat (ditandai)</h3>
                <div className="flex w-full gap-5">
                  <div className="flex w-1/2">
                    <p className="w-2/3">Masuk</p>
                    <p className="w-16 rounded-xl text-xs text-center p-1 bg-black text-white">
                      {masuk} X
                    </p>
                  </div>
                  <div className="flex w-1/2">
                    <p className="w-2/3">Pulang</p>
                    <p className="w-16 rounded-xl text-xs text-center p-1 bg-black text-white">
                      {pulangAwal} X
                    </p>
                  </div>
                </div>
                <hr className="border" />
                <div className="flex w-full gap-5">
                  <div className="flex w-1/2">
                    <p className="w-2/3">Istirahat Keluar</p>
                    <p className="w-16 rounded-xl text-xs text-center p-1 bg-black text-white">
                      {istirahatAwal} X
                    </p>
                  </div>
                  <div className="flex w-1/2">
                    <p className="w-2/3">Istirahat Kembali</p>
                    <p className="w-16 rounded-xl text-xs text-center p-1 bg-black text-white">
                      {terlambatKembali} X
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="baris-3 flex gap-5 justify-between">
            <button className="bg-search p-3 text-white">
              <svg
                width="42"
                height="8"
                viewBox="0 0 42 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.264915 4.79616V3.76207L6.3956 0.789062V2.19709L1.87145 4.26065L1.913 4.17756V4.37607L1.87145 4.29758L6.3956 6.35653V7.76918L0.264915 4.79616ZM8.92312 4.79616V3.76207L15.0538 0.789062V2.19709L10.5297 4.26065L10.5712 4.17756V4.37607L10.5297 4.29758L15.0538 6.35653V7.76918L8.92312 4.79616ZM17.5813 4.79616V3.76207L23.712 0.789062V2.19709L19.1879 4.26065L19.2294 4.17756V4.37607L19.1879 4.29758L23.712 6.35653V7.76918L17.5813 4.79616ZM26.2395 4.79616V3.76207L32.3702 0.789062V2.19709L27.8461 4.26065L27.8876 4.17756V4.37607L27.8461 4.29758L32.3702 6.35653V7.76918L26.2395 4.79616ZM34.8977 4.79616V3.76207L41.0284 0.789062V2.19709L36.5043 4.26065L36.5458 4.17756V4.37607L36.5043 4.29758L41.0284 6.35653V7.76918L34.8977 4.79616Z"
                  fill="white"
                />
              </svg>
            </button>
            <button className="bg-search p-3 text-white">
              <svg
                width="42"
                height="8"
                viewBox="0 0 42 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M41.7351 4.79616V3.76207L35.6044 0.789062V2.19709L40.1286 4.26065L40.087 4.17756V4.37607L40.1286 4.29758L35.6044 6.35653V7.76918L41.7351 4.79616ZM33.0769 4.79616V3.76207L26.9462 0.789062V2.19709L31.4703 4.26065L31.4288 4.17756V4.37607L31.4703 4.29758L26.9462 6.35653V7.76918L33.0769 4.79616ZM24.4187 4.79616V3.76207L18.288 0.789062V2.19709L22.8121 4.26065L22.7706 4.17756V4.37607L22.8121 4.29758L18.288 6.35653V7.76918L24.4187 4.79616ZM15.7605 4.79616V3.76207L9.62979 0.789062V2.19709L14.1539 4.26065L14.1124 4.17756V4.37607L14.1539 4.29758L9.62979 6.35653V7.76918L15.7605 4.79616ZM7.10227 4.79616V3.76207L0.971591 0.789062V2.19709L5.49574 4.26065L5.45419 4.17756V4.37607L5.49574 4.29758L0.971591 6.35653V7.76918L7.10227 4.79616Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
          <div className="baris-3 flex gap-2">
            <div>
              <DetailData />
              <p
                className="flex gap-1 justify-center items-center text-[10px] rounded-sm text-center font-inter py-1 px-2 bg-button text-white w-[60px] cursor-pointer mb-10"
                onClick={handleInvoice}
              >
                <span>
                  <LiaDownloadSolid />
                </span>
                PDF
              </p>
            </div>
          </div>
          {info && (
            <div className="absolute top-0">
              <InfoKehadiran />
            </div>
          )}
        </div>
      )}
      {cekInvoice && (
        <div className="flex flex-col gap-5 h-screen overflow-auto pb-20">
          <p
            // className="absolute top-[310px] left-2 cursor-pointer"
            onClick={handleInvoice}
          >
            <IoIosArrowBack />
          </p>
          <div className="invoice-container">
            <div className="header">
              <img src="/logo.svg" alt="logo" />

              <div
                className="address"
                style={{
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <h2 style={{ marginLeft: "100px" }}>SEVEN INC.</h2>
                <p>Jalan Raya Janti, Gang Arjuna Nomor 59, Karangjambe,</p>
                <p>Banguntapan, Bantul, Yogyakarta</p>
                <p>Kode Pos: 55198 | Telp: +62 857 3163 6408</p>
              </div>
            </div>

            <div className="presensi-data" style={{ textAlign: "center" }}>
              <h3 style={{ fontSize: "18px", fontWeight: "bold" }}>
                PRESENSI {magang?.nama}
              </h3>
              <p style={{ fontSize: "14px", fontWeight: "bold" }}>
                {magang?.nip}
              </p>
              <table className="table-auto w-full text-center text-[10px] mb-12">
                <thead className="bg-gray-300">
                  <tr>
                    <th className="p-1" rowSpan={2}>
                      No
                    </th>
                    <th className="border-x-2 p-1" rowSpan={2}>
                      Tanggal
                    </th>
                    <th className="border-b-2 p-1" colSpan={2}>
                      Jam Kerja
                    </th>
                    <th className="border-b-2 border-x-2 p-1" colSpan={2}>
                      Jam Istirahat
                    </th>
                    <th className="border-x-2 p-1" rowSpan={2}>
                      Log Aktivitas
                    </th>
                    <th className="border-x-2 p-1" rowSpan={2}>
                      Status Kehadiran
                    </th>
                    <th className="p-1" rowSpan={2}>
                      Kebaikan
                    </th>
                    <th className="border-l-2 p-1" rowSpan={2}>
                      Catatan
                    </th>
                  </tr>
                  <tr>
                    <th className="border-x-2 p-1">Masuk</th>
                    <th className="p-1">Pulang</th>
                    <th className="border-x-2 p-1">Mulai</th>
                    <th className="p-1">Selesai</th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {presensi.map((item, index) => (
                    <tr className="relative border-b-2" key={index}>
                      <td className="p-1">{index + 1}</td>
                      <td className="p-1">{item.tanggal}</td>
                      <td className="p-1">{item.masuk}</td>
                      <td className="p-1">{item.pulang}</td>
                      <td className="p-1">{item.istirahat}</td>
                      <td className="p-1">{item.kembali}</td>
                      <td className="p-1">{item.log_activity}</td>
                      <td className="p-1">{item.kehadiran} </td>
                      <td className="p-1">{item.kebaikan}</td>
                      <td className="p-1">{item.catatan}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="footer">
              <div className="footer-text">
                <p>Yogyakarta, 25 November 2023</p>
                <p>Direktur SEVEN INC</p>
              </div>
              <div className="footer-name">
                <p>Rekario Danny Sanjaya, S.Kom</p>
              </div>
              <img className="footer-logo" src="/logo.svg" alt="logo" />
            </div>
            <div
              className="buttons-container"
              style={{ textAlign: "center", marginTop: "20px" }}
            >
              <button onClick={() => window.print()}>Print</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
