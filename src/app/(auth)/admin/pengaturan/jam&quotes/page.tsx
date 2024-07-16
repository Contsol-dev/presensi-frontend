"use client";
import React, { useEffect, useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { VscClose } from "react-icons/vsc";
import { RiEdit2Line } from "react-icons/ri";
import AdminProfile from "@/app/component/adminProfile";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import NavbarAdminDashboard from "@/app/component/nav-admin";

export default function utama() {
  return (
    <>
      <div className=" w-full h-screen p-2 flex m-auto lg:p-0 overflow-hidden">
        <NavbarAdminDashboard />
        <Pengaturan />
        <div className="overflow-auto bg-gray-100 w-full p-4 flex flex-col gap-5  min-h-0">
          <AdminProfile />
          <Quotes />
        </div>
      </div>
    </>
  );
}

function Pengaturan() {
  const [showManageDivisi, setShowManageDivisi] = useState(false);

  const toggleManageDivisi = () => {
    setShowManageDivisi(!showManageDivisi);
  };
  return (
    <div className="w-72 h-full bg-white py-4 flex flex-col items-center">
      <h1 className="font-bold text-lg font-inter mb-24">Pengaturan</h1>
      <p className="text-sm text-gray-600">PENGATURAN UTAMA</p>
      <ul className="list-disc list-inside text-gray-400 text-sm border-b border-black pb-7 ">
        <li className="text-black bg-red-200 rounded-lg px-2 py-1 my-1">
          <a href="/admin/pengaturan/jam&quotes">Quotes</a>
        </li>
        <li className="hover:text-black hover:bg-red-200 rounded-lg px-2 py-1 my-1">
          <a href="/admin/pengaturan/manage-shift">Manage Shift</a>
        </li>
        <li className="hover:text-black hover:bg-red-200 rounded-lg px-2 py-1 my-1">
          <a href="/admin/pengaturan/manage-divisi">Manage Divisi</a>
        </li>
        <li
          className="project hover:text-black list-none hover:bg-red-200 rounded-lg px-2 py-1 my-1 cursor-pointer"
          onClick={toggleManageDivisi}
        >
          <div className="flex gap-4">
            <span>Manage Project</span>{" "}
            {showManageDivisi ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </div>

          {showManageDivisi && (
            <ul className="childrenn list-disc list-inside text-gray-400 text-sm ml-4 ">
              <li className="hover:text-black hover:border hover:border-black rounded-lg px-2 py-1 my-1">
                <a href="/admin/pengaturan/project-category">
                  Project’s Category
                </a>
              </li>
              <li className="hover:text-black hover:border hover:border-black rounded-lg px-2 py-1 my-1">
                <a href="">Project’s Tags</a>
              </li>
              {/* Tambahkan lebih banyak subitem sesuai kebutuhan */}
            </ul>
          )}
        </li>
        <li className="hover:text-black hover:bg-red-200 rounded-lg px-2 py-1 my-1">
          <a href="/admin/pengaturan/manage-alumni">Manage Alumni</a>
        </li>
        <li className="hover:text-black hover:bg-red-200 rounded-lg px-2 py-1 my-1">
          <a href="/admin/pengaturan/lokasi-kantor">Manage Kantor</a>
        </li>
      </ul>
      <p className="text-sm text-gray-600 pt-7">PANEL ADMINISTRATOR</p>
      <ul className="list-disc list-inside text-gray-400 text-sm ">
        <li className="hover:text-black hover:bg-red-200 rounded-lg px-2 py-1 my-1">
          <a href="/admin/pengaturan/user&organization">User & Organizations</a>
        </li>
      </ul>
    </div>
  );
}

function Quotes() {
  const [quote, setQuote] = useState("Selamat Ulang Tahun");
  const [quoteInput, setQuoteInput] = useState("");
  const [cardData, setCardData] = useState([
    { id: 1, Quotes: "Kalau Lapar Makanlah" },
    { id: 2, Quotes: "Kalau Lelah Jangan Login ML" },
    { id: 3, Quotes: "Barang Siapa ....." },
    { id: 4, Quotes: "Barang Gue wkwkkwk" },
    {
      id: 5,
      Quotes: "Inget yaa Kalo Cape itu Istirahat Bukan Malah Kepengen Mat*",
    },
    { id: 6, Quotes: "Tumru" },
  ]);

  const handleSave = () => {
    const element = document.getElementById("ultah") as HTMLTextAreaElement;
    const textareaValue = element ? element.value : "";
    setQuote(textareaValue);
  };

  const handleAddQuote = () => {
    const element = document.getElementById("quote") as HTMLInputElement;
    const inputValue = element ? element.value : "";
    const newId = cardData.length + 1;
    const newCard = { id: newId, Quotes: inputValue };
    setCardData([...cardData, newCard]);

    setQuoteInput("");
  };
  const handleDeleteQuote = (id: any) => {
    const updatedCardData = cardData.filter((card) => card.id !== id);
    setCardData(updatedCardData);
  };

  return (
    <div className="flex  gap-6  w-full h-full  p-2">
      <div className="dataQuotes w-1/2 h-full  ">
        <div className=" bg-gray-200 p-4 rounded-sm  overflow-auto h-80">
          {cardData.slice(0, 9).map((card) => (
            <div key={card.id} className=" w-full flex gap-2 p-2  ">
              <h1 className=" w-full text-xs font-inter m-0  border-b border-black">
                {card.Quotes}
              </h1>
              <VscClose
                size={30}
                className="cursor-pointer"
                onClick={() => handleDeleteQuote(card.id)}
              />
            </div>
          ))}
        </div>
        <input
          id="quote"
          value={quoteInput}
          onChange={(e) => setQuoteInput(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              handleAddQuote();
            }
          }}
          type="text"
          placeholder="Tambahkan Quotes"
          className="inputQuote text-xs  w-full h-9 placeholder:text-gray-600 placeholder:font-inter placeholder:text-xs focus:outline-none p-2  mt-5"
        />

        <div className="flex justify-end gap-2 mt-2">
          <button className="border border-gray-600 flex rounded-sm    text-xs items-center justify-center gap-2 py-2 px-3 text-black w-24 font-inter">
            Batal
          </button>
          <button
            onClick={handleAddQuote}
            className="bg-red-500 flex rounded-sm hover:bg-red-700   text-xs items-center justify-center gap-2 py-2 px-3 text-white w-24 font-inter"
          >
            Tambahkan
          </button>
        </div>
      </div>

      <div className="quoteUltah w-1/2 h-80 rounded-md flex flex-col gap-6 items-center p-4 shadow-quote">
        <h1 className="font-inter text-sm font-bold ">QUOTES ULANG TAHUN</h1>

        <h1
          id="quotUltah"
          className=" bg-white w-full text-black rounded-sm text-sm p-2 text-center overflow-wrap break-word word-wrap break-word white-space normal"
        >
          {quote}
        </h1>
        <div className="relative  w-full">
          <p className="text-sm">Edit Quotes</p>
          <textarea
            className="rounded-sm w-full h-20 focus:outline-none p-2  text-xs"
            id="ultah"
            placeholder="Masukan quotes......."
          ></textarea>
          <RiEdit2Line
            className="absolute bottom-2 right-2"
            style={{ color: "gray" }}
          />
        </div>
        <button className="buttonUltah  " onClick={handleSave}>
          Simpan
        </button>
      </div>
    </div>
  );
}
