"use client";
import React, { useState } from "react";
import NavbarContributor from "@/app/component/nav-contributor";
import ContributorProfile from "@/app/component/contributorProfile";
import DataTable from "react-data-table-component";

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
        fontSize: "15px",
        fontWeight: "1000",
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
      name: "Divisi",
      selector: (row: any) => row.divisi,
    },
    {
      name: "Status Kehadiran",
      selector: (row: any) => row.kehadiran,
    },
    {
      name: "Status Keterangan",
      selector: (row: any) => row.keterangan,
    },
  ];
  const data = [
    {
      id: 1,
      no: "1",
      name: "alpin",
      NIP: "MJ/UIUX/POLINES/AGST2023/07",
      divisi: "programmer",
      kehadiran: "Hadir",
      keterangan: "Hadir",
    },
    {
      id: 2,
      no: "2",
      name: "khalil",
      NIP: "MJ/UIUX/POLINES/AGST2023/07",
      divisi: "ui/ux",
      kehadiran: "Izin Keperluan Kampus",
      keterangan: "Tidak Mengganti Jam",
    },
    {
      id: 3,
      no: "3",
      name: "usmul",
      NIP: "MJ/UIUX/POLINES/AGST2023/07",
      divisi: "programmer",
      kehadiran: "Izin Sakit Dengan Surat Dokter",
      keterangan: "Tidak Mengganti Jam",
    },
    {
      id: 4,
      no: "4",
      name: "bimbim",
      NIP: "MJ/UIUX/POLINES/AGST2023/07",
      divisi: "hr",
      kehadiran: "Tidak Hadir",
      keterangan: "Mengganti Jam",
    },
    {
      id: 5,
      no: "5",
      name: "hehe",
      NIP: "MJ/PR/POLINES/AGST2023/07",
      divisi: "project manager",
      kehadiran: "Hadir",
      keterangan: "Hadir",
    },
    {
      id: 6,
      no: "6",
      name: "bambam",
      NIP: "MJ/PR/POLINES/AGST2023/07",
      divisi: "project manager",
      kehadiran: "Hadir",
      keterangan: "Hadir",
    },
    {
      id: 7,
      no: "7",
      name: "bumbum",
      NIP: "MJ/PR/POLINES/AGST2023/07",
      divisi: "project manager",
      kehadiran: "Hadir",
      keterangan: "Hadir",
    },
    {
      id: 8,
      no: "8",
      name: "bembem",
      NIP: "MJ/PR/POLINES/AGST2023/07",
      divisi: "project manager",
      kehadiran: "Hadir",
      keterangan: "Hadir",
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
    <div className="flex bg-[#EEEEEE]">
      <div>
        <NavbarContributor />
      </div>
      <div className="flex flex-col w-full">
        <div>
          <ContributorProfile />
        </div>
        <div className="my-8">
          <div className="text-end mx-8">
            <input
              type="text"
              onChange={handlefilter}
              className="rounded-lg lg:rounded-md w-full max-w-lg lg:max-w-sm lg:text-[15px] h-[50px] lg:h-[35px] pl-4 bg-[#E9E9E9] border-2 lg:border border-black outline-none"
              placeholder="Cari nama atau divisi"
            />
          </div>
          <div className="flex flex-col justify-center items-center gap-4 my-10 lg:my-20">
            <div className="text-3xl lg:text-xl font-semibold text-[#26577C]">
              <h2>Presensi Mahasiswa</h2>
            </div>
            <div className="w-full max-w-6xl lg:max-w-3xl h-screen">
              <DataTable
                pagination
                columns={columns}
                data={records}
                fixedHeader
                striped
                customStyles={customStyles}
                paginationPerPage={5}
                paginationRowsPerPageOptions={[5, 10, 25, 40]}
              ></DataTable>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
