"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { MdOutlineDateRange } from "react-icons/md";
import { RxAvatar } from "react-icons/rx";
import { HiOutlineLogout } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import formattedDate from "@/utils/calender";

export default function Home() {
  const [popup, setPopup] = useState(false);
  const [modalIzin, setModalIzin] = useState(false);
  const [modalMasuk, setModalMasuk] = useState(false);
  const [progress, setProgress] = useState(0);
  const [logs, setLogs] = useState([]);
  const [time, setTime] = useState("00:00:00");
  const [currentButton, setCurrentButton] = useState("Masuk");
  const [masukTime, setMasukTime] = useState<string | null>("---");
  const [istirahatTime, setIstirahatTime] = useState<string | null>("---");
  const [masukKembaliTime, setMasukKembaliTime] = useState<string | null>(
    "---"
  );
  const [pulangTime, setPulangTime] = useState<string | null>("---");
  const [kebaikan, setKebaikan] = useState("");
  const [logActivity, setLogActivity] = useState("");
  const [recordedTime, setRecordedTime] = useState<string | null>(null);
  const [modal2, setmodal2] = useState(false);
  const [namaShift, setnamaShift] = useState('---');
  const [nip, setNip] = useState('---')
  const router = useRouter();

  const nama = sessionStorage.getItem("nama");
  const username = sessionStorage.getItem("username");
  const [nip, setNip] = useState("");
  const [shift, setShift] = useState(0);
  const [namaShift, setNamaShift] = useState("");

  if (!nama || !username) {
    router.push("/user/login");
  }

  const fetchUser = async () => {
    try {
      const response = await axios.get(
        `http://127.0.0.1:8000/admin/detail-pemagang/${username}`
      );
      setNip(response.data.user.nip);
      setShift(response.data.user.shift_id);
      const shiftResponse = await axios.get(
        `http://127.0.0.1:8000/shift/${response.data.user.shift_id}`
      );
      setNamaShift(shiftResponse.data.data.nama_shift);
    } catch (error) {
      console.log(error);
    }
  };

  const handdleofclickmod2 = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0"); // bulan dimulai dari 0
    const day = String(today.getDate()).padStart(2, "0");
    const tanggal = `${year}-${month}-${day}`;
    try {
      const response = await axios.post("http://127.0.0.1:8000/kebaikan", {
        username: username,
        tanggal: tanggal,
        kebaikan: kebaikan,
      });
      setmodal2(true);
      setTimeout(() => {
        setmodal2(false);
      }, 3000);
    } catch (error) {
      console.error("Gagal input kebaikan:", error);
    }
  };

  const addLogActivity = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0"); // bulan dimulai dari 0
    const day = String(today.getDate()).padStart(2, "0");
    const tanggal = `${year}-${month}-${day}`;
    try {
      const response = await axios.post("http://127.0.0.1:8000/log-activity", {
        username: username,
        tanggal: tanggal,
        log_activity: logActivity,
      });
      console.log("Sukses");
      handleIzin();
    } catch (error) {
      console.error("Error: ", error);
    }
  };

  const getTodayLog = async () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0"); // bulan dimulai dari 0
    const day = String(today.getDate()).padStart(2, "0");
    const tanggal = `${year}-${month}-${day}`;
    try {
      const response = await axios.post("http://127.0.0.1:8000/get-log", {
        username,
        tanggal,
      });
      if (response.data.log.masuk) {
        setCurrentButton("Istirahat");
        setMasukTime(response.data.log.masuk);
      }
      if (response.data.log.istirahat) {
        setCurrentButton("Masuk Kembali");
        setIstirahatTime(response.data.log.istirahat);
      }
      if (response.data.log.kembali) {
        setCurrentButton("Pulang");
        setMasukKembaliTime(response.data.log.kembali);
      }
      if (response.data.log.pulang) {
        setCurrentButton("Sudah Klik Pulang");
        setPulangTime(response.data.log.pulang);
        setIsButtonHidden(true);
      }
      if (response.data.log.kebaikan) {
        setKebaikan(response.data.log.kebaikan);
      }
      if (response.data.log.log_activity) {
        setLogActivity(response.data.log.log_activity);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getLogs = async () => {
    try {
      const response = await axios.post("http://127.0.0.1:8000/get-logs", {
        username,
      });
      if (response.data.logs) {
        setLogs(response.data.logs);
      }
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const updateProgressAndTime = () => {
    const now = new Date();

    const shiftPagiStart = new Date();
    shiftPagiStart.setHours(6, 30, 0);
    const shiftPagiEnd = new Date();
    shiftPagiEnd.setHours(13, 0, 0);

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

  const [authorized, setAuthorized] = useState(true);
  const checkConnection = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/");
      console.log(response.status)
      setAuthorized(true); 
    } catch (err) {
      router.push('/user/login')
      setAuthorized(false);
    }
  }

  useEffect(() => {
    checkConnection();
    const intervalId = setInterval(updateProgressAndTime, 1000);
    fetchUser();
    return () => clearInterval(intervalId);
  }, []);

  const [edited, setEdited] = useState(false);

  useEffect(() => {
    getTodayLog();
    getLogs();
  }, [edited]);

  const [popupAttention, setPopupAttention] = useState(false);
  const [pulangNonaktif, setPulangNonaktif] = useState(false);

  const handlePulang = () => {
    if (recordedTime) {
      // Jika waktu sudah direkam, tampilkan popup attention
      setPopupAttention(true);
    } else {
      // Menonaktifkan tombol setelah diklik
      setPulangNonaktif(true);
    }
  };

  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [isButtonHidden, setIsButtonHidden] = useState(false);

  const handleMasuk = () => {
    if (currentButton === "Pulang") {
      // Disable the button when currentButton is "Pulang"
      setIsButtonHidden(true);
      // setPopupAttention(true);
    }
    setModalMasuk(!modalMasuk);
  };

  const handleIzin = () => {
    setModalIzin(!modalIzin);
  };

  const handleQuit = () => {
    setPopup(!popup);
  };

  const handleClosePopup = () => {
    // Implementasi untuk menutup popup
  };
  // record time
  const [input, setInput] = useState(" ");
  const [keterangan, setKeterangan] = useState<{ [key: string]: string }>({});
  const [isBlinking, setIsBlinking] = useState(true);
  const [terlambat, setTerlambat] = useState<string | null>(null);
  const [bgColormasuk, setBgColormasuk] = useState("bg-gray-300");
  const [bgColorIstirahat, setBgColorInstirahat] = useState("bg-gray-300");
  const [bgColorkem, setbgColorKem] = useState("bg-gray-300");
  const [bgColorPulang, setBgColorPulang] = useState("bg-gray-300");

  const logout = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/logout", {
        method: "GET",
      });

      if (!response.ok) {
        const errorDetails = await response.json();
        console.error("Server responded with an error:", errorDetails);
        throw new Error("Network response was not ok");
      }

      const result = await response.json();

      if (response.ok && result.success) {
        console.log("Success:", result.message);
        sessionStorage.clear();
        router.push("/user/login");
      } else {
        throw new Error(result.message || "Gagal Logout");
      }
    } catch (error) {
      console.error("Error: ", error);
    }
  };

  const addMasuk = async () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0"); // bulan dimulai dari 0
    const day = String(today.getDate()).padStart(2, "0");
    const hours = String(today.getHours()).padStart(2, "0");
    const minutes = String(today.getMinutes()).padStart(2, "0");
    const seconds = String(today.getSeconds()).padStart(2, "0");

    const waktu = `${hours}:${minutes}:${seconds}`;
    const tanggal = `${year}-${month}-${day}`;
    const data = {
      username: username,
      tanggal: tanggal,
      masuk: waktu,
    };

    try {
      console.log(JSON.stringify(data));
      const response = await fetch("http://127.0.0.1:8000/presensi-masuk", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorDetails = await response.json();
        console.error("Server responded with an error:", errorDetails);
        throw new Error("Network response was not ok");
      }

      const result = await response.json();

      if (response.ok) {
        console.log("Success:", result.message);
      } else {
        throw new Error(result.message || "Masuk Gagal");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const addIstirahat = async () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0"); // bulan dimulai dari 0
    const day = String(today.getDate()).padStart(2, "0");
    const hours = String(today.getHours()).padStart(2, "0");
    const minutes = String(today.getMinutes()).padStart(2, "0");
    const seconds = String(today.getSeconds()).padStart(2, "0");

    const waktu = `${hours}:${minutes}:${seconds}`;
    const tanggal = `${year}-${month}-${day}`;
    const data = {
      username: username,
      tanggal: tanggal,
      istirahat: waktu,
    };

    try {
      console.log(JSON.stringify(data));
      const response = await fetch("http://127.0.0.1:8000/presensi-istirahat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorDetails = await response.json();
        console.error("Server responded with an error:", errorDetails);
        throw new Error("Network response was not ok");
      }

      const result = await response.json();

      if (response.ok) {
        console.log("Success:", result.message);
      } else {
        throw new Error(result.message || "Istirahat Gagal");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  const addKembali = async () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0"); // bulan dimulai dari 0
    const day = String(today.getDate()).padStart(2, "0");
    const hours = String(today.getHours()).padStart(2, "0");
    const minutes = String(today.getMinutes()).padStart(2, "0");
    const seconds = String(today.getSeconds()).padStart(2, "0");

    const waktu = `${hours}:${minutes}:${seconds}`;
    const tanggal = `${year}-${month}-${day}`;
    const data = {
      username: username,
      tanggal: tanggal,
      kembali: waktu,
    };

    try {
      console.log(JSON.stringify(data));
      const response = await fetch("http://127.0.0.1:8000/presensi-kembali", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorDetails = await response.json();
        console.error("Server responded with an error:", errorDetails);
        throw new Error("Network response was not ok");
      }

      const result = await response.json();

      if (response.ok) {
        console.log("Success:", result.message);
      } else {
        throw new Error(result.message || "Kembali Gagal");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  const addPulang = async () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0"); // bulan dimulai dari 0
    const day = String(today.getDate()).padStart(2, "0");
    const hours = String(today.getHours()).padStart(2, "0");
    const minutes = String(today.getMinutes()).padStart(2, "0");
    const seconds = String(today.getSeconds()).padStart(2, "0");

    const waktu = `${hours}:${minutes}:${seconds}`;
    const tanggal = `${year}-${month}-${day}`;
    const data = {
      username: username,
      tanggal: tanggal,
      pulang: waktu,
    };

    try {
      console.log(JSON.stringify(data));
      const response = await fetch("http://127.0.0.1:8000/presensi-pulang", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorDetails = await response.json();
        console.error("Server responded with an error:", errorDetails);
        throw new Error("Network response was not ok");
      }

      const result = await response.json();

      if (response.ok) {
        console.log("Success:", result.message);
      } else {
        throw new Error(result.message || "Pulang Gagal");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleSimpanClick = () => {
    const currentTime = new Date().toLocaleTimeString();
    const shiftPagiStart = new Date();
    shiftPagiStart.setHours(6, 30, 0);
    const currentTimeAsDate = new Date();
    const shiftSiang = new Date();
    shiftSiang.setHours(13, 0, 0);

    if (currentButton === "Masuk") {
      if (currentTimeAsDate > shiftSiang) {
        let selisihWaktu = currentTimeAsDate.getTime() - shiftSiang.getTime();
        const selisihJam = Math.floor(selisihWaktu / 3600000);
        selisihWaktu -= selisihJam * 3600000;
        const selisihMenit = Math.floor(selisihWaktu / 60000);
        const selisihDetik = Math.floor((selisihWaktu % 60000) / 1000);

        setTerlambat(`- ${selisihJam}:${selisihMenit}:${selisihDetik} `);

        if (bgColormasuk === "bg-gray-300") {
          setBgColormasuk("bg-h1");
        } else {
          setBgColormasuk("bg-gray-300");
        }
      } else {
        setTerlambat(null);
      }
      addMasuk();
      setCurrentButton("Istirahat");
      setMasukTime(currentTime);
    } else if (currentButton === "Istirahat") {
      if (bgColorIstirahat === "bg-gray-300") {
        setBgColorInstirahat("bg-h1");
      } else {
        setBgColorInstirahat("bg-gray-300");
      }
      addIstirahat();
      setCurrentButton("Masuk Kembali");
      setIstirahatTime(currentTime);
    } else if (currentButton === "Masuk Kembali") {
      if (bgColorkem === "bg-gray-300") {
        setbgColorKem("bg-h1");
      } else {
        setbgColorKem("bg-gray-300");
      }
      addKembali();
      setCurrentButton("Pulang");
      setMasukKembaliTime(currentTime);
    } else if (currentButton === "Pulang") {
      if (bgColorPulang === "bg-gray-300") {
        setBgColorPulang("bg-h1");
      } else {
        setBgColorPulang("bg-gray-300");
      }
      addPulang();
      setCurrentButton("Sudah Klik Pulang");
      setPulangTime(currentTime);
      setIsButtonHidden(true);
    }

    setKeterangan((prevKeterangan) => ({
      ...prevKeterangan,
      [currentButton]: input,
    }));

    setModalMasuk(false);
    setInput("");
  };

  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setIsBlinking((prevState) => !prevState);
    }, 1000);

    return () => {
      clearInterval(blinkInterval);
    };
  }, []);

  const [inputs, setinputs] = useState<String>("");

  const clear = (e: any) => {
    setinputs((e.target.value = " "));
  };
  let [user, setUser] = useState(true);
  let [log, setLog] = useState(false);
  let [isiLog, setIsiLog] = useState("");
  let [idLog, setIdLog] = useState(0);
  let [buatLog, setBuat] = useState(false);
  let [ganti, setGanti] = useState(false);
  let [editLog, setEditLog] = useState(false);
  const openEdit = (isi: string, id: number) => {
    setIsiLog(isi);
    setIdLog(id);
    setEditLog(!editLog);
  };
  const closeEdit = () => {
    setEditLog(!editLog);
  };
  const saveEdit = async () => {
    try {
      const response = await axios.post("http://127.0.0.1:8000/log/edit", {
        id: idLog,
        log_activity: isiLog,
      });
      if (response.data.success) {
        alert("Log berhasil diubah");
      }
      setEdited(!edited);
      setEditLog(!editLog);
    } catch (error) {
      console.log(error);
      alert("Terjadi error");
    }
  };
  const handleLog = () => {
    setUser((user = false));
    setLog((log = true));
    getLogs();
  };
  const handBuatlog = () => {
    setBuat((user = false));
    setLog((buatLog = true));
  };
  const handleBack = () => {
    setUser((user = true));
    setLog((log = false));
  };
  const handleBackI = () => {
    setUser((user = true));
    setGanti((ganti = false));
  };
  const handleGanti = () => {
    setUser((user = false));
    setGanti((ganti = true));
  };

  return (
    <AnimatePresence>
      {user && (
        <div>
          {modalMasuk && (
            <motion.div
              transition={{ duration: 0.3 }}
              className=" h-screen bg-black/50 flex justify-center items-center w-full z-10 fixed"
            >
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 10, y: -20 }}
                className="bg-white adjust  rounded-xl pb-10 px-10 w-[580px] "
              >
                <div className="flex justify-center py-6  ">
                  <b className="text-2xl text-center font-semibold">
                    Keterangan
                  </b>
                </div>
                <span className="flex flex-col gap-2">
                  <textarea
                    name=""
                    id=""
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Ketik keterangan (opsional)"
                    className="resize-none h-[400px] rounded-lg focus:outline-none bg-grey/10 border-2 p-2 text-sm "
                  ></textarea>
                </span>

                <div className="flex justify-between pt-10">
                  <button
                    className="bg-white rounded-md px-10 py-2 text-black/50  hover:scale-[1.03] transition-all duration-150"
                    onClick={handleMasuk}
                  >
                    Cancel
                  </button>
                  <button
                    className="bg-button rounded-md px-10 py-2 text-white hover:scale-[1.03] transition-all duration-150"
                    onClick={handleSimpanClick}
                  >
                    Submit
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
          {modalIzin && (
            <motion.div
              transition={{ duration: 0.3 }}
              className="h-screen bg-black/50 flex justify-center items-center w-full z-10 fixed"
            >
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 10, y: -20 }}
                className="bg-white adjust rounded-xl pb-10 px-10 w-[580px] relative"
              >
                <div className="flex justify-center py-4">
                  <b className="text-2xl text-center font-semibold">
                    Activity Log
                  </b>
                  <button
                    className="absolute top-0 right-0 text-black/50 mr-2 mt-2"
                    onClick={handleIzin}
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 12h16"
                      ></path>
                    </svg>
                  </button>
                </div>
                <span className="flex flex-col gap-2">
                  <textarea
                    name=""
                    id=""
                    placeholder="Apa yang telah anda lakukan hari ini"
                    className="resize-none h-[300px] rounded-lg focus:outline-none bg-grey/10 border-2 p-2"
                    value={logActivity}
                    onChange={(e) => {
                      setLogActivity(e.target.value);
                    }}
                  ></textarea>
                  <p className="text-xs text-button">
                    Note : Jangan lupa submit sebelum memencet tombol pulang
                  </p>
                </span>

                <div className="flex justify-end pt-10">
                  <button
                    className="bg-button rounded-md px-10 py-2 text-white hover:scale-[1.03] transition-all duration-150"
                    onClick={addLogActivity}
                  >
                    Submit
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
          {popupAttention && (
            <motion.div
              transition={{ duration: 0.3 }}
              className=" h-screen bg-black/50 flex justify-center items-center w-full z-10 fixed"
            >
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 10, y: -20 }}
                className="bg-white adjust  rounded-xl pb-10 px-10 w-[580px] h-[250px]"
              >
                <div>
                  {/* Render the "Pulang" button */}
                  <button onClick={handleIzin}>
                    Silahkan Isi Log Activity
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}

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
                  <button
                    className="bg-h1 py-1 px-5 rounded-md text-white"
                    onClick={logout}
                  >
                    Ya
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}

          <div className="adjust">
            <div
              className="bg-cover bg-center"
              style={{ backgroundImage: "url(/bgUser.svg)" }}
            >
              {/* <img className='absolute top-0 z-0 w-full' src="/bgUser.svg" alt="" /> */}
              <div className=" px-5  figo text-white flex flex-col py-10 md:px-10 gap-20">
                <div className="w-full flex justify-between">
                  <div className="flex items-center gap-3   ">
                    <MdOutlineDateRange className="text-[24px] md:text-[34px] " />
                    <span className="text-[16px] md:text-xl text-white gap-2 items-center ">
                      {formattedDate}
                    </span>
                  </div>
                  <span className="font-bold text-[28px]">{time}</span>
                </div>

                <i className="md:text-3xl mx-auto text-center">
                  &quot; Sudahkah Anda Istighfar Hari Ini &quot;
                </i>

                <div className="flex justify-between items-center">
                  <div className="flex items-center w-fit bg-black/50 py-2 px-2  rounded-[50px] gap-2">
                    <span className="flex justify-center items-center bg-button rounded-full  md:text-[50px] p-2">
                      <RxAvatar />
                    </span>

                    <div>
                      <p className="text-sm md:text-2xl font-semibold">
                        {nama}
                      </p>
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

            <section className=" flex py-10 flex-wrap ">
              <div className="flex  flex-col items-center w-full  mx-10 gap-10 xl:w-1/4   ">
                <div className="flex flex-col text-xl w-full pb-10 gap-8 h-full justify-center ">
                  <b className="mx-auto text-[30px]">Shift {namaShift}</b>

                  <div className="flex gap-4 flex-col justify-center items-center">
                    <button
                      className="bg-grey max-w-[300px] w-full h-14 text-white rounded-xl hover:bg-[#b61b1b]  ${isButtonDisabled || isButtonHidden ? 'opacity-0 cursor-not-allowed' : ''}`}"
                      onClick={handleMasuk}
                      hidden={isButtonHidden}
                    >
                      {currentButton}
                    </button>
                    <button
                      onClick={handleIzin}
                      className="bg-grey flex p-2 items-center justify-center max-w-[300px] w-full  h-14  text-white rounded-xl border-2 border-grey hover:bg-[#b61b1b]"
                    >
                      <span className="mr-2">
                        <img src="\logActivity.svg" alt="" />
                      </span>
                      Log Activity
                    </button>
                    <button
                      onClick={handleLog}
                      className="bg-grey flex p-2 items-center justify-center max-w-[300px] w-full  h-14  text-white rounded-xl border-2 border-grey hover:bg-[#b61b1b]"
                    >
                      <span className="mr-2">
                        <img src="\historiLog.svg" alt="" />
                      </span>
                      Histori Log Activity
                    </button>
                  </div>
                </div>
              </div>

              <div className=" grid grid-cols-1  mx-auto">
                <div className="hidden md:flex text-h1 font-bold   justify-end  pb-5  "></div>

                <div className=" flex flex-wrap gap-12 text-[10%] mx-5 pb-10   h-fit md:pb-0 md:mx-0  ">
                  <div className="content relative  h-full rounded-lg   ">
                    <div className=" popup  border p-4 rounded-sm bg-gray-400 z-20 text-xl">
                      {keterangan["Masuk"] && <p>{keterangan["Masuk"]}</p>}
                    </div>
                    <div className="rounded-lg flex  flex-col content p-3 w-[267.75px] h-[126px] bg-grey/10 flex-shrink-0">
                      <div className="flex  justify-between items-center  ">
                        <div className="flex items-center text-[17px]  gap-2">
                          <span
                            className={`h-4 w-4 block ${bgColormasuk} rounded-full `}
                          ></span>
                          <b>Masuk</b>
                        </div>
                      </div>
                      <div className="flex flex-col px-6 justify-center   h-full  ">
                        {masukTime && (
                          <b className=" text-[20px]">{masukTime}</b>
                        )}
                        {recordedTime && (
                          <b className=" text-[20px]">{recordedTime} AM</b>
                        )}

                        {terlambat !== null && (
                          <b className="text-button text-[16px]">{terlambat}</b>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="content relative  h-full rounded-lg   ">
                    <div className=" popup  border p-4 rounded-sm bg-gray-400 z-20 text-xl">
                      {keterangan["Istirahat"] && (
                        <p>{keterangan["Istirahat"]}</p>
                      )}
                    </div>
                    <div className="rounded-lg flex  flex-col content p-3 w-[267.75px] h-[126px] bg-grey/10 flex-shrink-0">
                      <div className="flex  justify-between items-center  ">
                        <div className="flex items-center text-[17px]  gap-2">
                          <span
                            className={`h-4 w-4 block ${bgColorIstirahat} rounded-full `}
                          ></span>

                          <b>Istirahat</b>
                        </div>
                      </div>
                      <div className="flex flex-col px-6 justify-center   h-full  ">
                        {istirahatTime && (
                          <b className=" text-[20px]">{istirahatTime}</b>
                        )}
                        {recordedTime && (
                          <b className=" text-[20px]">{recordedTime} AM</b>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="content relative  h-full rounded-lg   ">
                    <div className=" popup  border p-4 rounded-sm bg-gray-400 z-20 text-xl">
                      {keterangan["Masuk Kembali"] && (
                        <p>{keterangan["Masuk Kembali"]}</p>
                      )}
                    </div>
                    <div className="rounded-lg flex  flex-col content p-3 w-[267.75px] h-[126px] bg-grey/10 flex-shrink-0">
                      <div className="flex  justify-between items-center  ">
                        <div className="flex items-center text-[17px]  gap-2">
                          <span
                            className={`h-4 w-4 block ${bgColorkem} rounded-full `}
                          ></span>
                          <b>Masuk Kembali</b>
                        </div>
                      </div>
                      <div className="flex flex-col px-6 justify-center   h-full  ">
                        {masukKembaliTime && (
                          <b className=" text-[20px]">{masukKembaliTime}</b>
                        )}
                        {recordedTime && (
                          <b className=" text-[20px]">{recordedTime} AM</b>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="content relative  h-full rounded-lg   ">
                    <div className=" popup  border p-4 rounded-sm bg-gray-400 z-20 text-xl">
                      {keterangan["Pulang"] && <p>{keterangan["Pulang"]}</p>}
                    </div>
                    <div className="rounded-lg flex  flex-col content p-3 w-[267.75px] h-[126px] bg-grey/10 flex-shrink-0">
                      <div className="flex  justify-between items-center  ">
                        <div className="flex items-center text-[17px]  gap-2">
                          <span
                            className={`h-4 w-4 block ${bgColorPulang} rounded-full `}
                          ></span>
                          <b>Pulang</b>
                        </div>
                      </div>
                      <div className="flex flex-col px-6 justify-center   h-full  ">
                        {pulangTime && (
                          <b className=" text-[20px]">{pulangTime}</b>
                        )}
                        {recordedTime && (
                          <b className=" text-[20px]">{recordedTime} AM</b>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid-cols-1 pt-6  gap-11 grid md:grid-cols-2 relative">
                  <div className="flex flex-col gap-4 mt-5 border-grey/10 border-2 h-[254px] w-full p-4">
                    <b className="text-[13.5px]">
                      Sudahkah Anda berbuat kebaikan hari ini? Jangan lupa untuk
                      selalu berbuat baik ya.
                    </b>
                    <textarea
                      name=""
                      id=""
                      className="resize-none bg-grey/10 rounded-lg  h-[129.761px]  focus:outline-none p-2 text-[16px]"
                      placeholder="Tambahkan kebaikan apa hari ini yang telah anda lakukan"
                      value={kebaikan}
                      onChange={(e) => {
                        setKebaikan(e.target.value);
                      }}
                    />
                    <div className="flex text-[17px] justify-end gap-4">
                      <button
                        className="bg-h1 text-white h-8 w-20 rounded-md"
                        onChange={clear}
                      >
                        Batal
                      </button>
                      <button
                        className="h-8 bg-grey w-44 text-white rounded-md"
                        onClick={handdleofclickmod2}
                      >
                        Tambahkan
                      </button>
                      {modal2 && (
                        <div className="bg-white flex flex-col p-10 absolute box-border h-[254px] bottom-0 ">
                          <i>
                            Memberikan kebaikan kepada orang lain berarti juga
                            memberikan kebaikan kepada diri sendiri.
                          </i>
                          <br />
                          <br />
                          <b className="text-center flex">
                            Terima kasih sudah berbuat baik hari ini. Semoga
                            kebaikanmu dibalas Tuhan.
                          </b>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      )}
      {log && (
        <div>
          <div
            className="bg-cover bg-center"
            style={{ backgroundImage: "url(/bgUser.svg)" }}
          >
            {/* <img className='absolute top-0 z-0 w-full' src="/bgUser.svg" alt="" /> */}
            <div className=" figo text-white flex flex-col py-10 md:px-10 gap-10">
              <div className="w-full flex justify-between">
                <div className="flex items-center gap-3   ">
                  <MdOutlineDateRange className="text-[24px] md:text-[34px] " />
                  <span className="text-[16px] md:text-xl text-white gap-2 items-center ">
                    {formattedDate}
                  </span>
                </div>
                <span className="font-bold text-[28px]">{time}</span>
              </div>

              <i className="md:text-3xl mx-auto text-center">
                &quot; Sudahkah Anda Istighfar Hari Ini &quot;
              </i>

              <div className="flex justify-between items-center">
                <div className="flex items-center w-fit bg-black/50 py-2 px-2  rounded-[50px] gap-2">
                  <span className="flex justify-center items-center bg-button rounded-full  md:text-[50px] p-2">
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
          <div className="flex flex-wrap p-3 mt-2 mx-10 items-center justify-between">
            <p className="cursor-pointer" onClick={handleBack}>
              <svg
                width="20"
                height="35"
                viewBox="0 0 20 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.5 3L3 17.5L17.5 32"
                  stroke="black"
                  strokeWidth="5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </p>
            <p className="font-inter font-bold lg:text-xl text-sm">
              History Log Activity
            </p>
            <p></p>
          </div>
          {editLog && (
            <motion.div
              transition={{ duration: 0.3 }}
              className=" h-screen bg-black/50 flex justify-center items-center top-0 w-full z-10 fixed"
            >
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 10, y: -20 }}
                className="bg-white adjust  rounded-xl pb-5 px-10 w-[500px] "
              >
                <div className="pt-5">
                  <b className="text-xl font-semibold">Edit Log Activity</b>
                </div>
                <span className="flex flex-col gap-2">
                  <p className="font-semibold mt-3">Edit Log Activity Anda</p>
                  <textarea
                    placeholder="Mengedit halaman Admin..."
                    className="bg-[#f7f3f3] h-44 focus:outline-none p-2"
                    value={isiLog}
                    onChange={(e) => setIsiLog(e.target.value)}
                  ></textarea>
                </span>

                <div className="flex justify-end gap-2 pt-6">
                  <button
                    className="bg-white rounded-md px-2 py-2 text-black/50  hover:scale-[1.03] transition-all duration-150"
                    onClick={closeEdit}
                  >
                    Cancel
                  </button>
                  <button
                    className=" bg-red-600 text-white rounded-md px-2 py-1  hover:scale-[1.03] transition-all duration-150"
                    onClick={saveEdit}
                  >
                    simpan
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
          <Table openEdit={openEdit} logs={logs} />
        </div>
      )}
    </AnimatePresence>
  );
}
interface tableProps {
  openBukti: () => void;
}
interface tableProps2 {
  openEdit: (isi: string, id: number) => void;
  logs: Array<{
    id: number;
    tanggal: string;
    log_activity: string;
  }>;
}
function Table({ openEdit, logs }: tableProps2) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Fungsi untuk mengecek apakah lebar layar kurang dari 768px (atau ukuran yang diinginkan)
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 600);
    };

    // Jalankan fungsi saat komponen pertama kali di-mount
    checkIfMobile();

    // Daftarkan event listener untuk memantau perubahan ukuran layar
    window.addEventListener("resize", checkIfMobile);

    // Membersihkan event listener saat komponen di-unmount
    return () => {
      window.removeEventListener("resize", checkIfMobile);
    };
  }, []);

  return (
    <div className="items-center justify-center mt-2 mb-5 px-5">
      <div>
        {/* Menyembunyikan tabel jika tampilan mobile */}
        {logs.length > 0 && (
          <table
            className={`border-collapse rounded-md border border-[#cfcece] bg-[#e9e9e9] ${
              isMobile ? "hidden" : ""
            } w-full`}
          >
            <thead className="bg-white border-b-2 border-[#cfcece]">
              <tr>
                <th className="p-2 text-center ">No</th>
                <th className="p-2 text-center ">Tanggal</th>
                <th className="p-2 text-center ">Activity Log</th>
                <th className="p-2 text-center ">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {logs.map((item, index) => (
                <tr key={item.id}>
                  <td className="p-2 text-center  text-slate-500">
                    {index + 1}
                  </td>
                  <td className="p-2 text-center   text-slate-500">
                    {item.tanggal}
                  </td>
                  <td className="p-2 pl-2  text-slate-500">
                    {item.log_activity}
                  </td>
                  <th className="p-2 text-center ">
                    <button
                      className="px-3 py-1 rounded-md text-[#ffff] bg-blue-500 text-sm font-inter"
                      onClick={() => openEdit(item.log_activity, item.id)}
                    >
                      Edit
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        {/* Menampilkan kartu jika tampilan mobile */}
        {logs.length > 0 && (
          <div className={`flex flex-col ${isMobile ? "" : "hidden"}`}>
            {logs.map((item) => (
              <div
                className="border rounded-md bg-cyan-100 p-2 border-cyan-500 mb-4 mx-3"
                key={item.id}
              >
                <div className="text-xs border-b border-blue-600 pb-2 mb-1 flex items-center justify-between">
                  <p>{item.tanggal}</p>
                </div>

                <p className="text-sm">Keterangan :</p>
                <p className="text-sm">{item.log_activity}</p>

                <button
                  className="text-center p-1 rounded-lg text-xs text-white mt-2 bg-blue-500  w-[100px]"
                  onClick={() => openEdit(item.log_activity, item.id)}
                >
                  Edit
                </button>
              </div>
            ))}

            {/* ... (tambahkan kartu lain sesuai kebutuhan) */}
          </div>
        )}
      </div>
    </div>
  );
}
