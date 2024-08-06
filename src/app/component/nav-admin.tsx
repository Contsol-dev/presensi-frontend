import React, { useState } from "react";
import Logo from "./logo";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { RiEdit2Line } from "react-icons/ri";

export default function NavbarAdminDashboard() {
  const [nav, setNav] = useState(true);
  const [hide, setHide] = useState(false);
  const [tampilkanIkonEdit, setTampilkanIkonEdit] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const toggleNav = () => {
    setNav(!nav);
    setHide(!hide);
  };

  const toggleIkonEdit = () => {
    setTampilkanIkonEdit(!tampilkanIkonEdit);
  };

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <>
      {hide && (
        <button onClick={toggleNav} className="p-4 lg:p-3 left-8 top-10 text-white rounded-full shadow-lg bg-button z-40 fixed">
          <AiOutlineMenu />
        </button>
      )}
      {nav && (
        <div className="bg-[#DCDCDC] fixed h-full max-h-50 lg:h-screen lg:w-[300px] pb-20 lg:sticky z-30 top-0 boxshadow border-r border-[#DCDCDC]">
          <div className="h-[200px] lg:h-[130px] mb-10 lg:mb-5 flex justify-center items-center relative">
            <span onClick={toggleIkonEdit}>
              <Logo />
            </span>
            {tampilkanIkonEdit && (
              <>
                <RiEdit2Line className="absolute bottom-2 right-2" style={{ color: "black" }} onClick={togglePopup} />
                {showPopup && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                  <div className="bg-white p-5 shadow-lg rounded-lg">
                    <h2 className="text-center font-bold">Logo Seven Inc</h2>
                    
                    {/* Container untuk elemen dengan tata letak flex */}
                    <div className="flex items-center justify-center mt-4">
                      {/* Ikon bulat dengan ukuran lebih besar */}
                      <div className="relative rounded-full bg-white border border-black p-6 mr-4">
                        <i className="fa fa-image fa-2x"></i> {/* Perbesar ikon */}
                      </div>

                      {/* Label untuk Add Photo dengan latar belakang putih dan border hitam */}
                      <label 
                        className="bg-white text-black border border-black px-4 py-2 rounded cursor-pointer" 
                        htmlFor="file-input"
                      >
                        Add Photo
                      </label>

                      {/* Elemen input file yang disembunyikan */}
                      <input
                        id="file-input"
                        type="file"
                        className="hidden"
                        // Callback untuk mengunggah foto
                      />

                      {/* Label untuk Remove tanpa border, hanya teks merah */}
                      <label 
                        className="text-red-500 cursor-pointer ml-4" 
                        onClick={() => {
                          // Tambahkan fungsi untuk menghapus foto atau mengatur ulang input
                          console.log('Remove Photo clicked');
                        }}
                      >
                        Remove
                      </label>
                    </div>

                    {/* Tombol Batal dan Simpan */}
                    <div className="flex justify-center mt-4 space-x-4">
                      <button
                        className="bg-gray-200 text-black px-4 py-2 rounded"
                        onClick={() => {
                          // Callback untuk tindakan pembatalan
                          console.log('Cancel clicked');
                          setShowPopup(false); // Menutup popup
                        }}
                      >
                        Batal
                      </button>

                      <button
                        className="bg-red-500 text-white px-4 py-2 rounded"
                        onClick={() => {
                          // Callback untuk tindakan simpan
                          console.log('Save clicked');
                          // Tambahkan logika untuk menyimpan perubahan
                        }}
                      >
                        Simpan
                      </button>
                    </div>
                  </div>
                </div>
              )}

            </>
            )}
          </div>

          <div className="nav-link lg:flex lg:flex-col h-content lg:h-screen gap-4 lg:gap-[40px] w-full px-11 lg:text-sm grid grid-cols-1">
            <Link href="/admin/dashboard">Dashboard</Link>
            <Link href="/presensi">Presensi</Link>
            <Link href="/team">Divisi</Link>
            <Link href="/admin/laporan">Laporan</Link>
            <Link href="/admin/kampus-sekolah">Sekolah/Kampus</Link>
            <Link href="/admin/pengaturan/manage-shift">Pengaturan</Link>
            <Link href="/admin/logout" className="flex gap-4 max-h-2 lg:absolute lg:py-8 lg:bottom-0">
              Keluar
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="26" viewBox="0 0 30 26" fill="none" className="opacity-50">
                <path
                  d="M18.494 6.8894V3.97644C18.494 3.20387 18.1868 2.46295 17.64 1.91666C17.0932 1.37038 16.3516 1.06348 15.5783 1.06348H3.91566C3.14238 1.06348 2.40077 1.37038 1.85398 1.91666C1.30719 2.46295 1 3.20387 1 3.97644V21.4542C1 22.2268 1.30719 22.9677 1.85398 23.514C2.40077 24.0603 3.14238 24.3672 3.91566 24.3672H14.9952C16.6054 24.3672 18.494 23.0629 18.494 21.4542V18.5413"
                  stroke="black"
                  strokeOpacity="1"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path d="M23.1562 6.88916L28.9876 12.7151L23.1562 18.541" stroke="black" strokeOpacity="1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M9.16406 12.7148H27.8243" stroke="black" strokeOpacity="1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
