import axios from "axios";
import React, { useEffect, useState } from "react";
import { LiaDownloadSolid } from "react-icons/lia";

interface DetailProps {
  selectedKey: string;
}
interface PemagangData {
  username: string;
  nama: string;
  asal_sekolah: string;
  tempat_lahir: string;
  tanggal_lahir: string;
  nomor_hp: string;
  tanggal_masuk: string;
  tanggal_keluar: string;
  nip: string;
  shift_id: number;
  divisi_id: number;
  os: string;
  browser: string;
  status_akun: string;
  konfirmasi_admin: boolean;
  email: string;
}

export default function Detail({ selectedKey }: DetailProps) {
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [pemagang, setPemagang] = useState<PemagangData>();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [tanggalMasuk, setTanggalMasuk] = useState(
    new Date().toISOString().substring(0, 10)
  );
  const [tanggalKeluar, setTanggalKeluar] = useState(
    new Date().toISOString().substring(0, 10)
  );
  const [nip, setNip] = useState("");
  const [divisi, setDivisi] = useState(0);
  const [shift, setShift] = useState(0);
  const [os, setOs] = useState("");
  const [browser, setBrowser] = useState("");
  const [status, setStatus] = useState("");
  const [konfirmasi, setKonfirmasi] = useState(false);
  const [showBarcode, setShowBarcode] = useState(false); // State for barcode popup visibility
  const [shifts, setShifts] = useState([]);
  const [divisions, setDivisions] = useState([]);
  const fetchData = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/admin/shift");
      const jsonData = await response.json();
      setShifts(jsonData.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/admin/divisi/aktif"
      );
      setDivisions(response.data.divisions);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const openBarcodePopup = () => {
    setShowBarcode(true);
    // Menambahkan class pada body untuk mengatur overflow
    document.body.classList.add("overflow-hidden");
  };

  // const closeBarcodePopup = () => {
  //     setShowBarcode(false);
  //     // Menghapus class overflow-hidden saat popup ditutup
  //     document.body.classList.remove('overflow-hidden');
  // };

  const downloadBarcode = () => {
    const barcodeUrl = "/path/to/barcode.png"; // Ganti dengan URL sesuai dengan lokasi barcode
    const link = document.createElement("a");
    link.href = barcodeUrl;
    link.download = "barcode.png"; // Nama file yang akan disimpan
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Menutup popup setelah mengunduh
    setShowBarcode(false);
  };

  const togglePasswordVisibility = () => setPasswordVisible(!passwordVisible);
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
  };

  const toggleBarcodePopup = () => {
    setShowBarcode(!showBarcode); // Toggles the visibility of the barcode popup
  };

  const fetchUser = async () => {
    try {
      const response = await axios.get(
        "http://127.0.0.1:8000/admin/detail-pemagang/" + selectedKey
      );
      setPemagang(response.data.user);
      setTanggalMasuk(response.data.user.tanggal_masuk);
      setTanggalKeluar(response.data.user.tanggal_keluar);
      setBrowser(response.data.user.browser);
      setOs(response.data.user.os);
      setNip(response.data.user.nip);
      setShift(response.data.user.shift_id);
      setDivisi(response.data.user.divisi_id);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
    fetchUser();
  }, []);

  const handleSimpan = async () => {
    console.log("konts");
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/admin/detail-pemagang",
        {
          username: selectedKey,
          password: password,
          confPassword: confPassword,
          tanggal_masuk: tanggalMasuk,
          tanggal_keluar: tanggalKeluar,
          nip: nip,
          divisi_id: divisi,
          shift_id: shift,
          os: os,
          browser: browser,
          status_akun: status,
          konfirmasi_admin: konfirmasi,
        }
      );
      if (response.data.success) {
        console.log(response.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="detail-container py-4 flex flex-col">
      <div className="header-container mb-2 md:mb-2">
        <div className="relative header border-2 w-full mb-2 p-2 md:p-4 bg-zinc-900">
          <p className="text-s md:text-2xl text-white">
            <b>{pemagang?.nama}</b>
          </p>
          <span className="text-xs text-slate-400">
            Konfirmasi Anggota Baru
          </span>
        </div>
      </div>
      {/* container data */}
      <div className="data-container mb-2 md:mb-4">
        {/* baris 1 */}
        <div className="row-1 flex flex-col md:flex-row md:space-y-4 md:space-x-4">
          {/* form  Biodata */}
          <form className="Biodata w-full md:w-1/3 h-fit p-4 mt-2 md:mt-4 border-2 border-zinc-400">
            <p className="px-1 mt-3">Nama</p>
            <span className="border-2 border-zinc-400 text-xs px-2 py-1 w-full h-7 block overflow-hidden whitespace-nowrap">
              {pemagang?.nama}
            </span>
            <p className="px-1 mt-3">Asal Sekolah/Kampus</p>
            <span className="border-2 border-zinc-400 text-xs px-2 py-1 w-full h-7 block overflow-hidden whitespace-nowrap">
              {pemagang?.asal_sekolah}
            </span>
            <p className="px-1 mt-3">Tempat lahir</p>
            <span className="border-2 border-zinc-400 text-xs px-2 py-1 w-full h-7 block overflow-hidden whitespace-nowrap">
              {pemagang?.tempat_lahir}
            </span>
            <p className="px-1 mt-3">Tanggal lahir</p>
            <span className="border-2 border-zinc-400 text-xs px-2 py-1 w-full h-7 block overflow-hidden whitespace-nowrap">
              {pemagang?.tanggal_lahir}
            </span>
            <p className="px-1 mt-3">Nomor HP</p>
            <span className="border-2 border-zinc-400 text-xs px-2 py-1 w-full h-7 block overflow-hidden whitespace-nowrap">
              {pemagang?.nomor_hp}
            </span>
          </form>

          {/* form  Akun */}
          <form className="Akun w-full md:w-1/3 h-fit p-4 mt-4 border-2 border-zinc-400">
            <p className="px-1 mt-3">Username</p>
            <span className="border-2 border-zinc-400 text-xs px-2 py-1 w-full h-7 block overflow-hidden whitespace-nowrap">
              {pemagang?.username}
            </span>
            <p className="px-1 mt-3">Email</p>
            <span className="border-2 border-zinc-400 text-xs px-2 py-1 w-full h-7 block overflow-hidden whitespace-nowrap">
              {pemagang?.email}
            </span>
            <p className="px-1 mt-3">Password</p>
            <div className="relative">
              <input
                type={passwordVisible ? "text" : "password"}
                className="border-2 border-zinc-400 text-xs px-2 py-1 w-full h-7 block overflow-hidden whitespace-nowrap"
                placeholder="Isi jika ingin di ubah"
                value={password}
                onChange={handlePasswordChange}
              />
              <div
                className="absolute inset-y-1 right-0 flex item-center pr-2 cursor-pointer"
                onClick={togglePasswordVisibility} // Corrected function name
              >
                {passwordVisible ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="h-5 w-5 text-gray-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="h-5 w-5 text-gray-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 91-7 7-7-7"
                    />
                  </svg>
                )}
              </div>
            </div>
            <p className="px-1 mt-3">Ulangi Password</p>
            <input
              type={passwordVisible ? "text" : "password"}
              className="border-2 border-zinc-400 text-xs px-2 py-1 w-full h-7 block overflow-hidden whitespace-nowrap"
              placeholder="Ulangi Password"
              value={confPassword}
              onChange={(e) => setConfPassword(e.target.value)}
            />
          </form>

          {/* form Kerja */}
          <form className="Kerja w-full md:w-1/3 h-fit p-4 mt-4 border-2 border-zinc-400">
            <p className="px-1 mt-3">Tanggal Masuk</p>
            <input
              type="date"
              className="border-2 border-zinc-400 text-xs px-2 py-1 w-full h-7 block overflow-hidden whitespace-nowrap"
              value={tanggalMasuk}
              onChange={(e) => setTanggalMasuk(e.target.value)}
            />
            <p className="px-1 mt-3">Tanggal keluar</p>
            <input
              type="date"
              className="border-2 border-zinc-400 text-xs px-2 py-1 w-full h-7 block overflow-hidden whitespace-nowrap"
              value={tanggalKeluar}
              onChange={(e) => setTanggalKeluar(e.target.value)}
            />
            <p className="px-1 mt-3">NIP</p>
            <input
              className="border-2 border-zinc-400 text-xs px-2 py-1 w-full h-7 block overflow-hidden whitespace-nowrap"
              placeholder="enter"
              value={nip}
              onChange={(e) => setNip(e.target.value)}
            />
            <p className="px-1 mt-3">Divisi</p>
            <select
              className="border-2 border-zinc-400 text-xs px-2 py-1 w-full h-7 block overflow-hidden whitespace-nowrap"
              value={divisi}
              onChange={(e) => setDivisi(e.target.value)}
            >
              <option value={0}>Pilih Divisi</option>
              {divisions.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.id} - {item.nama_divisi}
                </option>
              ))}
            </select>
            <p className="px-1 mt-3">Shift</p>
            <select
              className="border-2 border-zinc-400 text-xs px-2 py-1 w-full h-7 block overflow-hidden whitespace-nowrap"
              value={shift}
              onChange={(e) => setShift(e.target.value)}
            >
              <option value={0}>Pilih Shift</option>
              {shifts.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.id} - {item.nama_shift}
                </option>
              ))}
            </select>
          </form>
        </div>

        {/* baris 2 */}
        <div className="row-2 flex flex-col md:flex-row md:space-y-4 md:space-x-4 mb-4">
          {/* form Perangkat */}
          <form className="Perangkat w-full md:w-1/3 h-fit p-4 mt-4 border-2 border-zinc-400">
            <p className="px-1 mt-3">OS</p>
            <input
              className="border-2 border-zinc-400 text-xs px-2 py-1 w-full h-7 block overflow-hidden whitespace-nowrap"
              placeholder="enter"
              value={os}
              onChange={(e) => setOs(e.target.value)}
            />
            <p className="px-1 mt-3">Browser</p>
            <input
              className="border-2 border-zinc-400 text-xs px-2 py-1 w-full h-7 block overflow-hidden whitespace-nowrap"
              placeholder="enter"
              value={browser}
              onChange={(e) => setBrowser(e.target.value)}
            />
            <p className="px-1 mt-3">Status Akun</p>
            <select
              className="border-2 border-zinc-400 text-xs px-2 py-1 w-full h-7 block overflow-hidden whitespace-nowrap"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="aktif">Aktif</option>
              <option value="tidak aktif">Tidak Aktif</option>
            </select>
            <p className="px-1 mt-3">Konfirmasi Email</p>
            <select
              className="border-2 border-zinc-400 text-xs px-2 py-1 w-full h-7 block overflow-hidden whitespace-nowrap"
              value={konfirmasi}
              onChange={(e) => setKonfirmasi(e.target.value)}
            >
              <option value={true}>Sudah</option>
              <option value={false}>Belum</option>
            </select>
          </form>
        </div>
      </div>

      {/* container G-Drive */}
      <div className="G-Drive mb-4">
        {/* Header G-Drive */}
        <div className="header border-2 bg-red-200 wrap p-2 md:p-4 mb-4 rounded-lg">
          <p className="text-s md:text-2xl">
            <b>Input Link G-Drive Alumni</b>
          </p>
          <span className="text-xs">Form Untuk Upload Link G-Drive Alumni</span>
        </div>

        {/* container link */}
        <div className="Link flex flex-col md:flex-row md:space2y-4 md:space-x-4 mb-4">
          {/* Link Sertifikat */}
          <div className="sertifikat m w-full md:w-1/4 p-4 mt-4 border-2 border-zinc-400">
            <p className="border-b-2 border-zinc-400 text-center font-semibold">
              Sertifikat
            </p>
            <p className="px-1 mt-3">Link G-Drive</p>
            <input
              className="border-2 border-zinc-400 text-xs px-2 py-1 w-full h-7 block overflow-hidden whitespace-nowrap"
              placeholder="enter"
            />
          </div>

          {/* Link Member Card */}
          <div className="member-card m w-full md:w-1/4 p-4 mt-4 border-2 border-zinc-400">
            <p className="border-b-2 border-zinc-400 text-center font-semibold">
              Member Card
            </p>
            <p className="px-1 mt-3">Link G-Drive</p>
            <input
              className="border-2 border-zinc-400 text-xs px-2 py-1 w-full h-7 block overflow-hidden whitespace-nowrap"
              placeholder="enter"
            />
          </div>

          {/* Link Penilaian */}
          <div className="penilaian-magang m w-full md:w-1/4 p-4 mt-4 border-2 border-zinc-400">
            <p className="border-b-2 border-zinc-400 text-center font-semibold">
              Penilaian Magang
            </p>
            <p className="px-1 mt-3">Link G-Drive</p>
            <input
              className="border-2 border-zinc-400 text-xs px-2 py-1 w-full h-7 block overflow-hidden whitespace-nowrap"
              placeholder="enter"
            />
          </div>

          {/* Link Grup WA */}
          <div className="whatsApp-group m w-full md:w-1/4 p-4 mt-4 border-2 border-zinc-400">
            <p className="border-b-2 border-zinc-400 text-center font-semibold">
              WhatsApp Group
            </p>
            <p className="px-1 mt-3">Link WhatsApp Group</p>
            <input
              className="border-2 border-zinc-400 text-xs px-2 py-1 w-full h-7 block overflow-hidden whitespace-nowrap"
              placeholder="enter"
            />
          </div>
        </div>
      </div>

      {/* Button Simpan */}
      <button
        className="w-48 bg-red-500 text-white text-xs rounded-lg self-center p-1 mt-auto"
        onClick={handleSimpan}
      >
        Simpan
      </button>
    </div>
  );
}
