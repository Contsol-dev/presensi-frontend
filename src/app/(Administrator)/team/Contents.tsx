/* eslint-disable @next/next/no-img-element */
import { LuPenTool } from "react-icons/lu";
import { SlBag } from "react-icons/sl";
import { BiLike } from "react-icons/bi";
import { IoMdCode } from "react-icons/io";
import { LiaHandshake } from "react-icons/lia";
import { IoColorPaletteOutline } from "react-icons/io5";
import { IoCameraOutline } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
import { LuMic } from "react-icons/lu";
import { BsCameraVideo } from "react-icons/bs";
import { MdManageSearch } from "react-icons/md";
import React, { useEffect, useState } from "react";
import axios from "axios";

interface ContentItemProps {
  nama_divisi: string;
  jumlah_anggota: string;
  onClick: () => void;
}

interface ContentProps {
  updatePilihan: (stat: string) => void;
  namaDivisi: string;
  onDivisiClick: (namaDivisi: string) => void;
}

function ContentItem({
  nama_divisi,
  jumlah_anggota,
  onClick,
}: ContentItemProps) {
  return (
    <div className="basis-1/4 ml-10 mt-[26px] mr-3">
      <span className="text-sm flex flex-col mt-0">
        <div
          onClick={onClick}
          className="nama font-bold font-inter cursor-pointer"
        >
          {nama_divisi}
        </div>
        <p className="anggota font-inter">{jumlah_anggota}</p>
      </span>
    </div>
  );
}

export default function Contents({
  updatePilihan,
  namaDivisi,
  onDivisiClick,
}: ContentProps) {
  const [showAllTeams, setShowAllTeams] = useState(false);
  const [divisions, setDivisions] = useState<ContentItemProps[]>([]);

  const handlePilihanChange = () => {
    const stat = "filter";
    updatePilihan(stat);
  };

  const fetchDiv = async () => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/admin/divisi/aktif",
        {
          nama_divisi: namaDivisi,
        }
      );
      setDivisions(response.data.divisions);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchDiv();
  }, [namaDivisi]);

  const handleDivisiClick = (namaDivisi: string) => {
    onDivisiClick(namaDivisi);
  };

  const handleSeeAllTeams = () => {
    setShowAllTeams(!showAllTeams);
  };

  const DivisionElements = Array.isArray(divisions)
    ? divisions.map((division, index) => (
        <ContentItem
          onClick={() => {
            handlePilihanChange();
            handleDivisiClick(division.nama_divisi);
          }}
          key={index}
          nama_divisi={division.nama_divisi}
          jumlah_anggota={division.jumlah_anggota}
        />
      ))
    : null;

  return (
    <>
      <div className="flex flex-wrap ml-2">{DivisionElements}</div>
      <div>
        <p
          onClick={() => {
            handlePilihanChange();
            handleDivisiClick("all");
          }}
          className="p-5 mt-2 text-red-700 font-bold font-inter cursor-pointer"
        >
          See all teams...
        </p>
      </div>
    </>
  );
}
