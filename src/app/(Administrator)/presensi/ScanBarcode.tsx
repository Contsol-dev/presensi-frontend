import { useState, ChangeEvent, useEffect } from "react";
import { AiFillWarning } from "react-icons/ai";
import { IoPersonSharp } from "react-icons/io5";
import { LuClock8 } from "react-icons/lu";
import { IoPersonCircleSharp } from "react-icons/io5";
import { MdOutlineDateRange, MdOutlineLogout } from "react-icons/md";
import formattedDate from "@/utils/calender";

export default function ScanBarcode() {
  const [time, setTime] = useState("00:00:00");
  const [progress, setProgress] = useState(0);
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
  useEffect(() => {
    const intervalId = setInterval(updateProgressAndTime, 1000);

    return () => clearInterval(intervalId);
  }, []);
  const [pilih, setPilih] = useState(true);
  const handleClick = () => {
    setPilih(!pilih);
  };
  return (
    <>
      <div className="text-[12px] font-inter">
        <div
          className=" bg-[screen] "
          style={{ backgroundImage: "url(/bgUser.svg)" }}
        >
          <div className=" px-5  text-white flex flex-col py-10 md:px-10 gap-10">
            <div className="w-full flex justify-between">
              <div className="flex items-center gap-3   ">
                <MdOutlineDateRange className="text-[24px] md:text-[34px] " />
                <span className="text-[16px] md:text-xl text-white gap-2 items-center ">
                  {formattedDate}
                </span>
              </div>
              <span className="font-bold text-[28px]">{time}</span>
            </div>

            <i className="md:text-3xl mx-auto text-center mb-5">
              &quot; Sudahkah Anda Istighfar Hari Ini &quot;
            </i>
          </div>
        </div>
        <div className="flex m-10 gap-14">
          <div className="w-1/3 ">
            {pilih === true && (
              <div className="relative">
                <div className="flex justify-between">
                  <button
                    onClick={handleClick}
                    className="px-2 py-1 border border-solid border-[#edecec] border-b-0 w-1/2 text-center rounded-t-md"
                  >
                    Scan Presensi Harian
                  </button>
                  <button
                    onClick={handleClick}
                    className="px-2 py-1 bg-[#edecec] border-b border-[#edecec] w-1/2 text-center rounded-t-md"
                  >
                    Scan Ganti Jam
                  </button>
                </div>
                <div className="flex flex-col items-center border border-solid border-t-0 rounded-b-md text-center border-[#edecec] p-5">
                  <b>Scan Barcode Anda</b>
                  <img className="h-[250px]" src="/barcode.png" />
                  <p className="flex items-center gap-2 font-bold text-red">
                    <AiFillWarning /> Arahkan Barcode Pada Kamera
                  </p>
                </div>
              </div>
            )}
            {pilih === false && (
              <div className="relative">
                <div className="flex  justify-between">
                  <button
                    onClick={handleClick}
                    className="px-2 py-1 bg-[#edecec] border-b border-[#edecec] w-1/2 text-center rounded-t-md"
                  >
                    Scan Presensi Harian
                  </button>
                  <button
                    onClick={handleClick}
                    className="px-2 py-1 border border-solid border-[#edecec] border-b-0 w-1/2 text-center rounded-t-md"
                  >
                    Scan Ganti Jam
                  </button>
                </div>
                <div className="flex flex-col items-center border border-solid border-t-0 rounded-b-md text-center border-[#edecec] p-5">
                  <b>Scan Barcode</b>
                  <img className="h-[250px]" src="/barcode.png" />
                  <p className="flex items-center gap-2 font-bold text-red">
                    <AiFillWarning /> Arahkan Barcode Pada Kamera
                  </p>
                </div>
              </div>
            )}
          </div>
          <div className="w-1/3">
            <p className="text-center font-bold text-xl mb-2">Shift Middle</p>
            <div className=" flex flex-col gap-2">
              <div className="flex border border-[#cfcece] ">
                <div className="w-[35%] p-2 flex gap-2 items-center">
                  <IoPersonSharp />
                  <p>Nama</p>
                </div>
                <div className=" bg-[#cfcece] w-[65%] py-2">
                  <p className="px-2"></p>
                </div>
              </div>
              <div className="flex border border-[#cfcece] ">
                <div className="w-[35%] p-2 flex gap-2 items-center">
                  <IoPersonSharp />
                  <p>NIP</p>
                </div>
                <div className=" bg-[#cfcece] w-[65%] py-2">
                  <p className="px-2"></p>
                </div>
              </div>
              <div className="flex border border-[#cfcece] ">
                <div className="w-[35%] p-2 flex gap-2 items-center">
                  <LuClock8 />
                  <p>Jam Masuk</p>
                </div>
                <div className=" bg-[#cfcece] w-[65%] py-2">
                  <p className="px-2"></p>
                </div>
              </div>
              <div className="flex border border-[#cfcece] ">
                <div className="w-[35%] p-2 flex gap-2 items-center">
                  <LuClock8 />
                  <p>Jam Istirahat</p>
                </div>
                <div className=" bg-[#cfcece] w-[65%] py-2">
                  <p className="px-2"></p>
                </div>
              </div>
              <div className="flex border border-[#cfcece] ">
                <div className="w-[35%] p-2 flex gap-2 items-center">
                  <LuClock8 />
                  <p>Jam Kembali</p>
                </div>
                <div className=" bg-[#cfcece] w-[65%] py-2">
                  <p className="px-2"></p>
                </div>
              </div>
              <div className="flex border border-[#cfcece] ">
                <div className="w-[35%] p-2 flex gap-2 items-center">
                  <LuClock8 />
                  <p>Jam Pulang</p>
                </div>
                <div className=" bg-[#cfcece] w-[65%] py-2">
                  <p className="px-2"></p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[30%]">
            <div className=" bg-[#cfcece] py-4 px-3 overflow-auto h-[350px]">
              <p className="font-bold text-xl">Aktivitas Terbaru</p>
              <div className="flex items-center gap-2 mt-5 mb-2">
                <p className=" text-red-700 text-base">
                  <IoPersonCircleSharp />
                </p>
                <p className="font-bold">
                  Fauzi Istirahat{" "}
                  <span className=" font-normal">10 Menit yang lalu</span>
                </p>
              </div>
              <div className="flex items-center gap-2 mt-5 mb-2">
                <p className=" text-red-700 text-base">
                  <IoPersonCircleSharp />
                </p>
                <p className="font-bold">
                  Fauzi Istirahat{" "}
                  <span className=" font-normal">10 Menit yang lalu</span>
                </p>
              </div>
              <div className="flex items-center gap-2 mt-5 mb-2">
                <p className=" text-red-700 text-base">
                  <IoPersonCircleSharp />
                </p>
                <p className="font-bold">
                  Fauzi Istirahat{" "}
                  <span className=" font-normal">10 Menit yang lalu</span>
                </p>
              </div>
              <div className="flex items-center gap-2 mt-5 mb-2">
                <p className=" text-red-700 text-base">
                  <IoPersonCircleSharp />
                </p>
                <p className="font-bold">
                  Fauzi Istirahat{" "}
                  <span className=" font-normal">10 Menit yang lalu</span>
                </p>
              </div>
              <div className="flex items-center gap-2 mt-5 mb-2">
                <p className=" text-red-700 text-base">
                  <IoPersonCircleSharp />
                </p>
                <p className="font-bold">
                  Fauzi Istirahat{" "}
                  <span className=" font-normal">10 Menit yang lalu</span>
                </p>
              </div>
              <div className="flex items-center gap-2 mt-5 mb-2">
                <p className=" text-red-700 text-base">
                  <IoPersonCircleSharp />
                </p>
                <p className="font-bold">
                  Fauzi Istirahat{" "}
                  <span className=" font-normal">10 Menit yang lalu</span>
                </p>
              </div>
              <div className="flex items-center gap-2 mt-5 mb-2">
                <p className=" text-red-700 text-base">
                  <IoPersonCircleSharp />
                </p>
                <p className="font-bold">
                  Fauzi Istirahat{" "}
                  <span className=" font-normal">10 Menit yang lalu</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
