"use client";
import React, { useState } from "react";
import NavbarContributor from "@/app/component/nav-contributor";
import ContributorProfile from "@/app/component/contributorProfile";
import DataTable from "react-data-table-component";
import { IoIosInformationCircle } from "react-icons/io";

export default function Administrator() {
  const customStyles = {
    rows: {
      stripedStyle: {
        backgroundColor: "#D8DADF",
      },
      style: {
        height: "75px",
        fontSize: "15px",
      },
    },
    headCells: {
      style: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingLeft: "8px",
        paddingRight: "8px",
        fontSize: "15px",
        fontWeight: "1000",
      },
    },
    cells: {
      style: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      },
    },
    pagination: {
      style: {
        justifyContent: "flex-start",
        backgroundColor: "transparent",
      },
    },
  };

  const columns = [
    {
      name: "No",
      selector: (row: any) => row.no,
    },
    {
      name: "Nama",
      selector: (row: any) => row.name,
    },
    {
      name: "NIP",
      selector: (row: any) => row.NIP,
    },
    {
      name: "Divisi",
      selector: (row: any) => row.divisi,
    },
    {
      name: "Status",
      selector: (row: any) => row.status,
    },
    {
      name: "",
      selector: (row: any) => row.info,
      style: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "30px",
        color: "#2B96C5",
      },
    },
  ];
  const data = [
    {
      id: 1,
      no: "1",
      name: "alpin yuda warija rambe",
      NIP: "MJ/PROG/TEL-U/AGST2023/07",
      divisi: "programmer",
      status: (
        <div className="w-content h-content px-[15px] py-[10px] rounded-lg bg-[#2B97C5] text-white">
          Active
        </div>
      ),
      info: (
        <button>
          <IoIosInformationCircle />
        </button>
      ),
    },
    {
      id: 2,
      no: "2",
      name: "khalil",
      NIP: "MJ/UIUX/TEL-U/AGST2023/07",
      divisi: "ui/ux",
      status: (
        <div className="w-content h-content px-[15px] py-[10px] rounded-lg bg-[#2B97C5] text-white">
          Active
        </div>
      ),
      info: (
        <button>
          <IoIosInformationCircle />
        </button>
      ),
    },
    {
      id: 3,
      no: "3",
      name: "usmul",
      NIP: "MJ/PROG/TEL-U/AGST2023/07",
      divisi: "programmer",
      status: (
        <div className="w-content h-content px-[15px] py-[10px] rounded-lg bg-[#2B97C5] text-white">
          Active
        </div>
      ),
      info: (
        <button>
          <IoIosInformationCircle />
        </button>
      ),
    },
    {
      id: 4,
      no: "4",
      name: "bimbim",
      NIP: "MJ/HR/TEL-U/AGST2023/07",
      divisi: "hr",
      status: (
        <div className="w-content h-content px-[15px] py-[10px] rounded-lg bg-[#E5383B] text-white">
          Inactive
        </div>
      ),
      info: (
        <button>
          <IoIosInformationCircle />
        </button>
      ),
    },
    {
      id: 5,
      no: "5",
      name: "hehe",
      NIP: "MJ/PM/TEL-U/AGST2023/07",
      divisi: "project manager",
      status: (
        <div className="w-content h-content px-[15px] py-[10px] rounded-lg bg-[#2B97C5] text-white">
          Active
        </div>
      ),
      info: (
        <button>
          <IoIosInformationCircle />
        </button>
      ),
    },
  ];

  const [records, setRecords] = useState(data);

  function handlefilter(event: any) {
    const searchTerm = event.target.value.toLowerCase();

    const newData = data.filter((row) => {
      const nameMatches = row.name.toLowerCase().includes(searchTerm);
      const divisiMatches = row.divisi.toLowerCase().includes(searchTerm);

      return nameMatches || divisiMatches;
    });

    setRecords(newData);
  }

  return (
    <div className="lg:flex z-40 bg-[#EEEEEE]">
      <div>
        <NavbarContributor />
      </div>
      <div className="lg:flex lg:flex-col lg:w-full">
        <div>
          <ContributorProfile />
        </div>
        <div className="my-2 lg:my-8">
          <div className="text-end mx-8">
            <input
              type="text"
              onChange={handlefilter}
              className="rounded-lg lg:rounded-md text-center lg:text-start lg:text-[15px] w-full max-w-lg lg:max-w-sm h-[50px] lg:h-[35px] lg:pl-4 bg-[#E9E9E9] border lg:border border-black outline-none"
              placeholder="Cari nama atau divisi"
            />
          </div>
          <div className="flex flex-col justify-center items-center gap-4 my-10 lg:my-20">
            <div className="text-xl lg:text-xl font-semibold text-[#26577C]">
              <h2>DATA MAHASISWA</h2>
            </div>
            <div className="w-screen lg:max-w-3xl h-screen">
              <DataTable
                pagination
                columns={columns}
                data={records}
                fixedHeader
                striped
                customStyles={customStyles}
              ></DataTable>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
