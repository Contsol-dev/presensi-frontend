
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
import React, { useState } from "react";



interface ContentItemProps {
  nama: string;
  logo: React.ReactNode; 
  anggota: string;
  onClick: () => void;
}

interface ContentProps {
  updatePilihan: (stat: string) => void;
}

function ContentItem({ nama, logo, anggota, onClick}: ContentItemProps) {
  
  return (
    <div className="basis-1/4 ml-10 mt-[26px] mr-3">
      <div className="float-left justify-center bg-white border rounded-full border-solid border-white p-2.5 mr-2">{logo}</div>
      <span className="text-sm flex flex-col mt-0">
        <div onClick={onClick} className="nama font-bold font-inter cursor-pointer">
          {nama}
        </div>
        <p className="anggota font-inter">{anggota}</p>
      </span>
    </div>
  );
}

export default function Contents({ updatePilihan }: ContentProps) {
  const [showAllTeams, setShowAllTeams] = useState(false);

  const handlePilihanChange = () => {
    const stat = "filter";
    updatePilihan(stat);
  };
  const divisions = [
    {
      nama: "UI/UX Designer",
      logo: <LuPenTool style={{ fontSize: "1.5rem" }} />, 
      anggota: "20 Orang",
    },
    {
      nama: "Marketing & Sales",
      logo: <SlBag style={{ fontSize: "1.5rem" }} />, 
      anggota: "20 Orang",
    },
    {
      nama: "Social Media Specalist",
      logo: <BiLike style={{ fontSize: "1.5rem" }} />, 
      anggota: "20 Orang",
    },
    {
      nama: "Programmer",
      logo: <IoMdCode style={{ fontSize: "1.5rem" }} />,
      anggota: "20 Orang",
    },
    {
      nama: "Marcom/Public Relation",
      logo: <LiaHandshake style={{ fontSize: "1.5rem" }} />, 
      anggota: "20 Orang",
    },
    {
      nama: "Tiktok Creator",
      logo: <img src="/person.svg" alt=""/>, 
      anggota: "20 Orang",
    },
    {
      nama: "Desain Grafis",
      logo: <IoColorPaletteOutline style={{ fontSize: "1.5rem" }} />,
      anggota: "20 Orang",
    },
    {
      nama: "Content Writer",
      logo: <img src="/note.svg" alt=""/>, 
      anggota: "20 Orang",
    },
    {
      nama: "Host/Presenter",
      logo: <img src="/presenter.svg" alt=""/>, 
      anggota: "20 Orang",
    },
    {
      nama: "Fotografer",
      logo: <IoCameraOutline style={{ fontSize: "1.5rem" }} />, 
      anggota: "20 Orang",
    },
    {
      nama: "Content Planner",
      logo: <SlCalender style={{ fontSize: "1.5rem" }} />, 
      anggota: "20 Orang",
    },
    {
      nama: "Voice Over Talent",
      logo: <LuMic style={{ fontSize: "1.5rem" }} />, 
      anggota: "20 Orang",
    },
    {
      nama: "Videografer",
      logo: <BsCameraVideo style={{ fontSize: "1.5rem" }} />,
      anggota: "20 Orang",
    },
    {
      nama: "Administrasi",
      logo: <img src="/admin.svg" alt=""/>, 
      anggota: "20 Orang",
    },
    {
      nama: "Las",
      logo: <img src="/las.svg" alt=""/>, 
      anggota: "20 Orang",
    },
    {
      nama: "Digital Marketing",
      logo: <img src="/digitalMarketing.svg" alt=""/>, 
      anggota: "20 Orang",
    },
    {
      nama: "Project Manager  ",
      logo: <img src="/projectManager.svg" alt=""/>, 
      anggota: "20 Orang",
    },
    {
      nama: "Human Resource",
      logo: <img src="/humanResource.svg" alt=""/>, 
      anggota: "20 Orang",
    },
    {
      nama: "Research & Development",
      logo: <MdManageSearch style={{ fontSize: "1.5rem" }} />, 
      anggota: "20 Orang",
    },

    // Add more divisions as needed
  ];


  const handleSeeAllTeams = () => {
    setShowAllTeams(!showAllTeams);
  };

  const visibleDivisions = showAllTeams ? divisions : divisions.slice(0, 19);

  const DivisionElements = visibleDivisions.map((division, index) => (
    <ContentItem onClick={handlePilihanChange} key={index} {...division} />
  ));

  return (
    <>
      <div className="flex flex-wrap ml-2">{DivisionElements}</div>
      <div>
        <p
          onClick={handlePilihanChange}
          className="p-5 mt-2 text-red-700 font-bold font-inter cursor-pointer"
        >
          See all teams...
        </p>
      </div>
    </>
  );
}