"use client";
import React, { useState, useEffect, Component } from "react";
import { MdOutlineDateRange, MdOutlineLogout } from "react-icons/md";
import { RxAvatar, RxButton } from "react-icons/rx";
import { HiOutlineLogout } from "react-icons/hi";
import { AiOutlinePlus } from "react-icons/ai";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import formattedDate from "@/utils/calender";
import { timeEnd } from "console";
import "/src/styleAlumni/style.css";

export default function Home() {
  const [showDownloadButton, setShowDownloadButton] = useState(false);
  const [popup, setPopup] = useState(false);
  const [progress, setProgress] = useState(0);
  const [time, setTime] = useState("00:00:00");
  const [showInstruction, setShowInstruction] = useState(true);
  const [showDownloadSertifikatButton, setShowDownloadSertifikatButton] = useState(false); // State untuk tombol "Download Sertifikat"
  const [showDownloadMemberCardButton, setShowDownloadMemberCardButton] = useState(false); // State untuk tombol "Download Member Card"
  const [showDownloadNilaiButton, setShowDownloadNilaiButton] = useState(false); // State untuk tombol "Download Nilai"
  const [showDownloadGrupButton, setShowDownloadGrupButton] = useState(false); // State untuk tombol "Link Grup"

  const handleSertifikatClick = () => {
    setShowDownloadSertifikatButton(true);
    setShowDownloadMemberCardButton(false);
    setShowDownloadNilaiButton(false);
    setShowDownloadGrupButton(false);
    setShowInstruction(false);
  };
  
  const handleMemberCardClick = () => {
    setShowDownloadMemberCardButton(true);
    setShowDownloadSertifikatButton(false);
    setShowDownloadNilaiButton(false);
    setShowDownloadGrupButton(false);
    setShowInstruction(false);
  };
  
  const handleNilaiClick = () => {
    setShowDownloadNilaiButton(true);
    setShowDownloadSertifikatButton(false);
    setShowDownloadMemberCardButton(false);
    setShowDownloadGrupButton(false);
    setShowInstruction(false);
  };
  
  const handleGrupClick = () => {
    setShowDownloadGrupButton(true);
    setShowDownloadSertifikatButton(false);
    setShowDownloadMemberCardButton(false);
    setShowDownloadNilaiButton(false);
    setShowInstruction(false);
  };

  const updateProgressAndTime = () => {
    const now = new Date();
    const shiftSiangStart = new Date();
    shiftSiangStart.setHours(13, 0, 0);
    const shiftSiangEnd = new Date();
    shiftSiangEnd.setHours(21, 0, 0);
    const totalSeconds = (now.getTime() - shiftSiangStart.getTime()) / 1000;
    const percentage = (totalSeconds / ((shiftSiangEnd.getTime() - shiftSiangStart.getTime()) / 1000)) * 100;
    setProgress(percentage);
    const currentHours = now.getHours();
    const currentMinutes = now.getMinutes();
    const currentSeconds = now.getSeconds();
    const timeString = `${String(currentHours).padStart(2, "0")}:${String(currentMinutes).padStart(2, "0")}:${String(currentSeconds).padStart(2, "0")}`;
    setTime(timeString);

    if (percentage >= 100) {
      setTimeout(() => {
        setProgress(0);
        setTime("00:00:00");
      }, 1000);
    }
  };

  useEffect(() => {
    const intervalId = setInterval(updateProgressAndTime, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const handleQuit = () => {
    setPopup(!popup);
  };

  const handleDownloadSertifikat = () => {
    // Kode untuk men-download sertifikat
  };
  const handleDownloadMemberCard = () => {
    // Kode untuk men-download sertifikat
  };
  const handleDownloadNilai = () => {
    // Logika untuk mengunduh nilai
  };
  const handleDownloadGrup = () => {
    // Logika untuk masuk ke link Grup WA
  };

  return (
    <AnimatePresence>
      <div>
        {popup && (
          <motion.div transition={{ duration: 0.3 }} className=" h-screen bg-black/50 flex justify-center items-center w-full z-10 fixed">
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 10, y: -20 }} className="bg-white gap-10 rounded-lg text-[16px] max-w-[531px] w-full p-10 justify-center items-center flex flex-col">
              <b>Log Out</b>
              <b>Apa anda yakin ingin keluar?</b>
              <div className="flex justify-between w-full">
                <button className="bg-grey/10 py-1 px-5 rounded-md" onClick={handleQuit}>
                  Tidak
                </button>
                <a href="/user/login" className="bg-h1 py-1 px-5 rounded-md text-white">
                  Ya
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}

        <div className="adjust">
          <div className="bg-cover bg-center" style={{ backgroundImage: "url(/bgUser.svg)" }}>
            <div className=" px-5  syalita text-white flex flex-col py-10 md:px-10 gap-20">
              <div className="w-full flex justify-between">
                <div className="flex items-center gap-3">
                  <MdOutlineDateRange className="text-[24px] md:text-[34px]" />
                  <span className="text-[16px] md:text-xl text-white gap-2 items-center">{formattedDate}</span>
                </div>
                <span className="font-bold text-[28px]">{time}</span>
              </div>

              <i className="md:text-3xl mx-auto text-center">"Selamat, Anda Telah Menjadi Alumni Seven Inc! Semoga sukses selalu"</i>

              <div className="flex justify-between items-center">
                <div className="flex items-center w-fit bg-black/50 py-2 px-2 rounded-[50px] gap-2">
                  <span className="flex justify-center items-center bg-button rounded-full md:text-[50px] p-2">
                    <RxAvatar />
                  </span>

                  <div>
                    <p className="text-sm md:text-2xl font-semibold">Syalita Widyandini</p>
                    <p className="pr-10 text-[12px] font-thin md:text-lg">MJ/UUX/POLINES/AOST2023/06</p>
                  </div>
                </div>
                <button onClick={handleQuit}>
                  <HiOutlineLogout className="text-[40px] hover:text-button transition-all duration-150" />
                </button>
              </div>
            </div>
          </div>

          <section className="flex py-10 flex-wrap relative">
            <div className="menu-container flex flex-col items-center w-full mx-10 gap-10 xl:w-1/4">
              <div className="flex flex-col text-xl w-full pb-10 gap-8 h-full justify-center">
                <b className="mx-auto text-[30px]">Menu</b>

                <div className="flex gap-4 flex-col justify-center items-center">
                  <button className="bg-grey flex p-2 items-center justify-center max-w-[300px] w-full h-14 text-white rounded-xl border-2 border-grey hover:bg-[#b61b1b]" onClick={handleSertifikatClick}>
                    Sertifikat
                  </button>
                  <button className="bg-grey flex p-2 items-center justify-center max-w-[300px] w-full h-14 text-white rounded-xl border-2 border-grey hover:bg-[#b61b1b]" onClick={handleMemberCardClick}>
                    Member Card
                  </button>
                  <button className="bg-grey flex p-2 items-center justify-center max-w-[300px] w-full h-14 text-white rounded-xl border-2 border-grey hover:bg-[#b61b1b]" onClick={handleNilaiClick}>
                    Lihat Nilai
                  </button>
                  <button className="bg-grey flex p-2 items-center justify-center max-w-[300px] w-full h-14 text-white rounded-xl border-2 border-grey hover:bg-[#b61b1b]" onClick={handleGrupClick}>
                    Link WA Grup
                  </button>
                </div>
              </div>
            </div>
            {/* Instructions gray box */}
            <div className="instruction-container bg-gray-300 p-4 rounded" style={{ width: 'calc(100% - 1/3*100% - 15px)', margin: '20px 20px 0 10px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              {/* Render download button conditionally */}
              {showDownloadSertifikatButton && (
                <button className="bg-blue-500 flex p-2 items-center justify-center max-w-[300px] w-full h-14 text-white rounded-xl border-2 border-grey hover:bg-[#b61b1b]" onClick={handleDownloadSertifikat}>
                Download Sertifikat
              </button>              
              )}
              {showDownloadMemberCardButton && (
                <div className="bg-gray-300 p-4 rounded w-full flex flex-col items-center">
                  <p className="text-center mb-4">Kartu ini merupakan kartu member magangjogja.com yang dapat digunakan saat magang atau dalam lingkungan perusahaan. Kartu ini hanya dimiliki oleh peserta magang dan dapat digunakan untuk mendapatkan akses khusus magangjogja.com. Silahkan download sertifikat pada link di bawah ini</p>
                  <button className="bg-blue-500 flex p-2 items-center justify-center max-w-[300px] w-full h-14 text-white rounded-xl border-2 border-grey hover:bg-[#b61b1b]" onClick={handleDownloadMemberCard}>
                    Download Member Card
                  </button>
                </div>
              )}
              {showDownloadNilaiButton && (
              <button className="bg-blue-500 flex p-2 items-center justify-center max-w-[300px] w-full h-14 text-white rounded-xl border-2 border-grey hover:bg-[#b61b1b]" onClick={handleDownloadNilai}>
                Download Nilai
              </button>
              )}
              {showDownloadGrupButton && (
              <button className="bg-blue-500 flex p-2 items-center justify-center max-w-[300px] w-full h-14 text-white rounded-xl border-2 border-grey hover:bg-[#b61b1b]" onClick={handleDownloadGrup}>
                Gabung Grup Wa
              </button>              
              )}
              {/* Instruction message */}
              {showInstruction && <p className="text-center">Pilih opsi dari menu terlebih dahulu..</p>}
            </div>
          </section>
        </div>
      </div>
    </AnimatePresence>
  );
}