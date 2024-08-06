import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import Detail from "./Detail";
import List from "./List";
import SearchBar from "./SearchBar";
import Contents from "./Contents";
import Filter from "./Filter";
import Sunting from "./Sunting";
import Nilai from "./Nilai";

export default function Aktif() {
  // buat fungsi
  const [pilihan, setPilihan] = useState("aktif");
  const [search, setSearch] = useState("");
  const [selectedDivisi, setSelectedDivisi] = useState("");
  const [selectedKey, setSelectedKey] = useState("");
  const [username, setUsername] = useState("");
  const [divisiId, setDivisiId] = useState(0);
  const handleEditClick = (aktif: any) => {
    setSelectedKey(aktif); // Mengatur selectedKey ke indeks yang benar
  };

  const handleStatusChange = (status: string) => setPilihan(status);

  const updatePilihan = (stat: string) => {
    setPilihan(stat);
  };

  const updatePilihan1 = (stat: string) => {
    setPilihan(stat);
  };

  const updatePilihan2 = (
    stat: string,
    username: string,
    divisi_id: number
  ) => {
    setPilihan(stat);
  };

  const handleDivisiClick = (namaDivisi: string) => {
    setSelectedDivisi(namaDivisi);
  };

  return (
    <>
      {/* tampilan pilihan = aktif */}
      {pilihan == "aktif" && (
        <>
          <div className="flex items-center ml-auto relative">
            <div className="relative">
              <input
                type="text"
                className=" bg-neutral-200 font-inter border border-black px-32 py-1 rounded-md pl-8"
                placeholder="Cari Nama Divisi"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                autoFocus
              />
              <a
                href="/search"
                className="absolute inset-y-0 left-0 flex items-center pl-2 text-gray-400 hover:text-black"
              >
                {/* Use the anchor tag to wrap the search logo */}
                <FaSearch />
              </a>
            </div>
          </div>
          <div className="team flex">
            <h4
              className="selected"
              style={{
                marginLeft: "20px",
                cursor: "pointer",
                textDecoration: "underline",
              }}
              onClick={() => handleStatusChange("aktif")}
            >
              <b>Aktif</b>
            </h4>
            <h4
              className="selected relative"
              style={{ marginLeft: "20px", cursor: "pointer" }}
              onClick={() => handleStatusChange("tdkAktif")}
            >
              <b>Tidak Aktif</b>
            </h4>
          </div>
          <Contents
            updatePilihan={updatePilihan}
            namaDivisi={search}
            onDivisiClick={handleDivisiClick}
          />
        </>
      )}

      {/* tampilan pilihan = Filter */}
      {pilihan == "filter" && (
        <div className="flex flex-rows">
          <div
            className="selected relative m-5"
            style={{
              marginLeft: "20px",
              cursor: "pointer",
              textDecoration: "underline",
            }}
            onClick={() => handleStatusChange("aktif")}
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
                stroke-width="5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <Filter
            updatePilihan1={updatePilihan1}
            updatePilihan2={updatePilihan2}
            namaDivisi={selectedDivisi}
          />
        </div>
      )}

      {/* tampilan pilihan = sunting */}
      {pilihan == "sunting" && (
        <div className="flex flex-rows">
          <div
            className="selected relative m-5"
            style={{
              marginLeft: "20px",
              cursor: "pointer",
              textDecoration: "underline",
            }}
            onClick={() => handleStatusChange("aktif")}
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
                stroke-width="5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div>
            {selectedKey !== null && (
              <Sunting
                selectedKey={selectedKey}
                selectedDetail={anggotaBaru[selectedKey]}
              />
            )}
          </div>
        </div>
      )}

      {/* tampilan pilihan = nilai */}
      {pilihan == "nilai" && (
        <div className="flex flex-rows">
          <div
            className="selected relative m-5"
            style={{
              marginLeft: "20px",
              cursor: "pointer",
              textDecoration: "underline",
            }}
            onClick={() => handleStatusChange("filter")}
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
                stroke-width="5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div>
            <Nilai />
          </div>
        </div>
      )}

      {/* tampilan pilihan = tidak aktif */}
      {pilihan == "tdkAktif" && (
        <div className="">
          <div className="sticky flex mt-8">
            <h4
              className="selected"
              style={{ marginLeft: "20px", cursor: "pointer" }}
              onClick={() => handleStatusChange("aktif")}
            >
              <b>Aktif</b>
            </h4>
            <h4
              className="selected relative"
              style={{
                marginLeft: "20px",
                cursor: "pointer",
                textDecoration: "underline",
              }}
              onClick={() => handleStatusChange("tdkAktif")}
            >
              <b>Tidak Aktif</b>
            </h4>
          </div>
          <div className="flex flex-col m-2">
            <List
              setSelectedKey={setSelectedKey}
              updatePilihan={updatePilihan}
            />
          </div>
        </div>
      )}

      {/* tampilan pilihan = data */}
      {pilihan == "data" && (
        <div className="flex flex-rows">
          <div
            className="selected relative m-5"
            style={{
              marginLeft: "20px",
              cursor: "pointer",
              textDecoration: "underline",
            }}
            onClick={() => handleStatusChange("tdkAktif")}
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
                stroke-width="5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div>
            {selectedKey !== null && <Detail selectedKey={selectedKey} />}
          </div>
        </div>
      )}
    </>
  );
}
