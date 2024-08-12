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
import axios from "axios";
import { useRouter } from "next/navigation";
import { serialize } from "v8";

export default function Home() {
  const [showDownloadButton, setShowDownloadButton] = useState(false);
  const [popup, setPopup] = useState(false);
  const [progress, setProgress] = useState(0);
  const [time, setTime] = useState("00:00:00");
  const [showInstruction, setShowInstruction] = useState(true);
  const [showDownloadSertifikatButton, setShowDownloadSertifikatButton] =
    useState(false); // State untuk tombol "Download Sertifikat"
  const [showDownloadMemberCardButton, setShowDownloadMemberCardButton] =
    useState(false); // State untuk tombol "Download Member Card"
  const [showDownloadNilaiButton, setShowDownloadNilaiButton] = useState(false); // State untuk tombol "Download Nilai"
  const [showDownloadGrupButton, setShowDownloadGrupButton] = useState(false); // State untuk tombol "Link Grup"
  const [nama, setNama] = useState("");
  const [nip, setNip] = useState("");
  const [sertifikat, setSertifikat] = useState("");
  const [memberCard, setMemberCard] = useState("");
  const [nilai, setNilai] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const username = sessionStorage.getItem("username");
  const router = useRouter();

  if (!username) {
    router.push("/user/login");
  }

  const fetchPresensi = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_SERVER}/alumni/files/${username}`
      );
      console.log(response.data.files);
      setNama(response.data.nama);
      setNip(response.data.nip);
      setSertifikat(response.data.files.sertifikat);
      setMemberCard(response.data.files.member_card);
      setNilai(response.data.files.nilai);
      setWhatsapp(response.data.files.whatsapp);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPresensi();
  }, []);

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
    const percentage =
      (totalSeconds /
        ((shiftSiangEnd.getTime() - shiftSiangStart.getTime()) / 1000)) *
      100;
    setProgress(percentage);
    const currentHours = now.getHours();
    const currentMinutes = now.getMinutes();
    const currentSeconds = now.getSeconds();
    const timeString = `${String(currentHours).padStart(2, "0")}:${String(
      currentMinutes
    ).padStart(2, "0")}:${String(currentSeconds).padStart(2, "0")}`;
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
    const link = document.createElement("a");
    if (sertifikat) {
      const start = sertifikat.indexOf("/d/") + 3;
      const end = sertifikat.indexOf("/", start);
      const fileId = sertifikat.substring(start, end);
      const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;
      link.href = downloadUrl;
      link.download = "Sertifikat.pdf";
    } else {
      link.href = "#";
    }
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  const handleDownloadMemberCard = () => {
    const link = document.createElement("a");
    if (memberCard) {
      const start = memberCard.indexOf("/d/") + 3;
      const end = memberCard.indexOf("/", start);
      const fileId = memberCard.substring(start, end);
      const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;
      link.href = downloadUrl;
      link.download = "MemberCard.pdf";
    } else {
      link.href = "#";
    }
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  const handleDownloadNilai = () => {
    const link = document.createElement("a");
    if (nilai) {
      const start = nilai.indexOf("/d/") + 3;
      const end = nilai.indexOf("/", start);
      const fileId = nilai.substring(start, end);
      const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;
      link.href = downloadUrl;
      link.download = "Nilai.pdf";
    } else {
      link.href = "#";
    }
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  const handleDownloadGrup = () => {
    const link = document.createElement("a");
    link.href = whatsapp ? whatsapp : "#";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <AnimatePresence>
      <div>
        {popup && (
          <motion.div
            transition={{ duration: 0.3 }}
            className=" h-screen bg-black/50 flex justify-center items-center w-full z-10 fixed"
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 10, y: -20 }}
              className="bg-white gap-10 rounded-lg text-[16px] max-w-[531px] w-full p-10 justify-center items-center flex flex-col"
            >
              <b>Log Out</b>
              <b>Apa anda yakin ingin keluar?</b>
              <div className="flex justify-between w-full">
                <button
                  className="bg-grey/10 py-1 px-5 rounded-md"
                  onClick={handleQuit}
                >
                  Tidak
                </button>
                <a
                  href="/user/login"
                  onClick={() => {
                    sessionStorage.clear();
                  }}
                  className="bg-h1 py-1 px-5 rounded-md text-white"
                >
                  Ya
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}

        <div className="adjust">
          <div
            className="bg-cover bg-center"
            style={{ backgroundImage: "url(/bgUser.svg)" }}
          >
            <div className=" px-5  syalita text-white flex flex-col py-10 md:px-10 gap-20">
              <div className="w-full flex justify-between">
                <div className="flex items-center gap-3">
                  <MdOutlineDateRange className="text-[24px] md:text-[34px]" />
                  <span className="text-[16px] md:text-xl text-white gap-2 items-center">
                    {formattedDate}
                  </span>
                </div>
                <span className="font-bold text-[28px]">{time}</span>
              </div>

              <i className="md:text-3xl mx-auto text-center">
                "Selamat, Anda Telah Menjadi Alumni Seven Inc! Semoga sukses
                selalu"
              </i>

              <div className="flex justify-between items-center">
                <div className="flex items-center w-fit bg-black/50 py-2 px-2 rounded-[50px] gap-2">
                  <span className="flex justify-center items-center bg-button rounded-full md:text-[50px] p-2">
                    <RxAvatar />
                  </span>

                  <div>
                    <p className="text-sm md:text-2xl font-semibold">{nama}</p>
                    <p className="pr-10 text-[12px] font-thin md:text-lg">
                      {nip}
                    </p>
                  </div>
                </div>
                <button onClick={handleQuit}>
                  <HiOutlineLogout className="text-[40px] hover:text-button transition-all duration-150" />
                </button>
              </div>
            </div>
          </div>

          <section className="flex py-10 flex-wrap relative">
            <div className="menu-container flex flex-col items-center w-full mx-1 gap-2 w-1/4">
              <div className="flex flex-col text-xl w-full pb-10 gap-8 h-full">
                <b className="mx-auto text-[30px]">Menu</b>

                <div className="flex gap-4 flex-col items-center">
                  <button
                    className="bg-grey flex p-2 items-center justify-center max-w-[300px] w-full h-14 text-white rounded-xl border-2 border-grey hover:bg-[#b61b1b]"
                    onClick={handleSertifikatClick}
                  >
                    Sertifikat
                  </button>
                  <button
                    className="bg-grey flex p-2 items-center justify-center max-w-[300px] w-full h-14 text-white rounded-xl border-2 border-grey hover:bg-[#b61b1b]"
                    onClick={handleMemberCardClick}
                  >
                    Member Card
                  </button>
                  <button
                    className="bg-grey flex p-2 items-center justify-center max-w-[300px] w-full h-14 text-white rounded-xl border-2 border-grey hover:bg-[#b61b1b]"
                    onClick={handleNilaiClick}
                  >
                    Lihat Nilai
                  </button>
                  <button
                    className="bg-grey flex p-2 items-center justify-center max-w-[300px] w-full h-14 text-white rounded-xl border-2 border-grey hover:bg-[#b61b1b]"
                    onClick={handleGrupClick}
                  >
                    Link WA Grup
                  </button>
                </div>
              </div>
            </div>
            {/* Instructions gray box */}
            <div
              className="instruction-container bg-gray-300 p-4 rounded"
              style={{
                width: "calc(100% - 1/3*100% - 15px)",
                height: "100%",
                margin: "20px 20px 20px 10px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {/* Render download button conditionally */}
              {showDownloadSertifikatButton && (
                <div className="relative w-full h-full">
                  {sertifikat && (
                    <iframe
                      src={
                        sertifikat.substring(
                          0,
                          sertifikat.indexOf("/view") + 1
                        ) + "preview"
                      }
                      width="100%"
                      height="100%"
                      allow="autoplay"
                      style={{ border: "none" }}
                      className="w-full h-full"
                    ></iframe>
                  )}
                  <button
                    className="bg-blue-500 flex p-2 items-center justify-center max-w-[300px] w-full h-14 text-white rounded-xl border-2 border-grey hover:bg-[#b61b1b] absolute"
                    onClick={handleDownloadSertifikat}
                    style={{
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    Download Sertifikat
                  </button>
                </div>
              )}
              {showDownloadMemberCardButton && (
                <div className="relative w-full h-full">
                  {memberCard && (
                    <iframe
                      src={memberCard.replace(
                        "/view?usp=drive_link",
                        "/preview"
                      )}
                      width="100%"
                      height="100%"
                      allow="autoplay"
                      style={{ border: "none" }}
                      className="w-full h-full"
                    ></iframe>
                  )}
                  <p className="text-center my-10 pb-10">
                    Kartu ini merupakan kartu member magangjogja.com yang dapat
                    digunakan saat magang atau dalam lingkungan perusahaan.
                    Kartu ini hanya dimiliki oleh peserta magang dan dapat
                    digunakan untuk mendapatkan akses khusus magangjogja.com.
                    Silahkan download sertifikat pada link di bawah ini
                  </p>
                  <button
                    className="bg-blue-500 flex p-2 items-center justify-center max-w-[300px] w-full h-14 text-white rounded-xl border-2 border-grey hover:bg-[#b61b1b] absolute"
                    onClick={handleDownloadMemberCard}
                    style={{
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    Download Member Card
                  </button>
                </div>
              )}
              {showDownloadNilaiButton && (
                <div className="relative w-full h-full">
                  {nilai && (
                    <iframe
                      src={nilai.replace("/view?usp=drive_link", "/preview")}
                      width="100%"
                      height="100%"
                      allow="autoplay"
                      style={{ border: "none" }}
                      className="w-full h-full"
                    ></iframe>
                  )}
                  <button
                    className="bg-blue-500 flex p-2 items-center justify-center max-w-[300px] w-full h-14 text-white rounded-xl border-2 border-grey hover:bg-[#b61b1b] absolute"
                    onClick={handleDownloadNilai}
                    style={{
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    Download Nilai
                  </button>
                </div>
              )}
              {showDownloadGrupButton && (
                <button
                  className="bg-blue-500 flex p-2 items-center justify-center max-w-[300px] w-full h-14 text-white rounded-xl border-2 border-grey hover:bg-[#b61b1b]"
                  onClick={handleDownloadGrup}
                >
                  Gabung Grup Wa
                </button>
              )}
              {/* Instruction message */}
              {showInstruction && (
                <p className="text-center">
                  Pilih opsi dari menu terlebih dahulu..
                </p>
              )}
            </div>
          </section>
        </div>
      </div>
    </AnimatePresence>
  );
}
