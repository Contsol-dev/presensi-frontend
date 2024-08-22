"use client";
import React, { useEffect, useState } from "react";
import { HiUserGroup } from "react-icons/hi2";
import { MdArrowCircleRight } from "react-icons/md";
import AdminProfile from "@/app/component/adminProfile";
import NavbarAdmin from "@/app/component/nav-admin";
import axios from "axios";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface Universitas {
  asal_sekolah: string;
  jumlah_partisipan: number;
}

export default function utama() {
  return (
    <>
      <div className="w-full flex m-auto lg:p-0">
        <NavbarAdmin />
        <div className="bg-gray-200 w-full p-4 flex flex-col gap-5 min-h-0">
          <AdminProfile />
          <Card />
        </div>
      </div>
    </>
  );
}

function Search({ onSearch }: any) {
  const [keyword, setKeyword] = useState("");

  const handleInputChange = (e: any) => {
    setKeyword(e.target.value);
  };

  const handleSearch = async (e: any) => {
    e.preventDefault();
    onSearch(keyword);
  };

  return (
    <div className="search flex gap-8 items-center w-full  p-2">
      <div className="formSearch w-2/5  font-inter">
        <p className="text-xs mb-2 font-bold">Cari Sekolah/Universitas</p>
        <div className="search-container ">
          <form onSubmit={handleSearch}>
            <div className="search-wrapper ">
              <div className="search-content flex gap-2 bg-gray-100 rounded-lg p-1 ">
                <img
                  src="/search.svg"
                  alt="search-icon"
                  className="search-icon "
                />
                <input
                  className="bg-transparent text-xs h-7  w-4/5 focus:outline-none text-black "
                  type="text"
                  placeholder="Cari Sekolah/Kampus"
                  value={keyword}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

function Card() {
  const router = useRouter();
  const [universitas, setUniversitas] = useState<Universitas[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_SERVER}/admin/sekolah`
        );
        const jsonData = await response.json();
        setUniversitas(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const handleSearch = async (keyword: any) => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_SERVER}/admin/sekolah`,
        {
          keyword: keyword,
        }
      );
      setUniversitas(response.data);
    } catch (error) {
      console.error("Error searching data:", error);
    }
  };

  return (
    <div>
      <Search onSearch={handleSearch} />
      <div className="cardContainer grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 p-4">
        {universitas.slice(0, 9).map((un) => (
          <div
            key={un.asal_sekolah}
            className="card w-full rounded-md p-2 flex flex-col"
          >
            <div className="bg-card w-full h-4/5 rounded-t-md flex flex-col items-center text-sm gap-2 text-white font-inter p-2">
              <h1>{un.asal_sekolah}</h1>
              <div className="flex justify-between w-full items-end ">
                <HiUserGroup size={70} style={{ color: "white" }} />
                <p>{`${un.jumlah_partisipan} Orang`}</p>
              </div>
            </div>
            <Link
              className="bg-white w-full h-1/5 rounded-b-md flex justify-between p-1"
              href={{
                pathname: "/admin/pengaturan/shift-nama",
                query: {
                  kampus: un.asal_sekolah,
                },
              }}
            >
              <p className="text-xs font-inter font-bold">View Detail</p>
              <MdArrowCircleRight />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
