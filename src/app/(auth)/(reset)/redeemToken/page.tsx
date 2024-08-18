"use client";
import { motion as m } from "framer-motion";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import axios from "axios";

export default function ResetSandi() {
  const [token, setToken] = useState("");
  const router = useRouter();

  const handleChange = (e: any) => {
    e.preventDefault();
    setToken(e.target.value);
  };

  const handleRedeemToken = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_SERVER}/reset-password/${token}`
      );
      if (response.status === 200) {
        router.push(
          `/resetSandi?email=${encodeURIComponent(response.data.email)}`
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center gap-10  ">
      <div className="flex flex-col justify-center items-center gap-10 adjust">
        <div className="flex flex-col gap-5 text-center ">
          <b className="text-[44px] text-h1">Redeem Token Reset password</b>
          <p className="text-[32px]">
            Periksa email Anda, token hanya bisa digunakan sekali
          </p>
        </div>
        <div className="flex flex-col gap-8 ">
          <div className="flex items-center space-x-2 border-2 border-black rounded-2xl   py-1 px-2 ">
            <input
              type="text"
              className="p-2 border-none  w-[444px]  focus:outline-none rounded"
              placeholder="Token"
              onChange={handleChange}
            />
          </div>
          <m.div
            className="w-[370px] text-white flex justify-center mx-auto "
            whileHover={{ scale: 1.05 }}
          >
            <button
              onClick={handleRedeemToken}
              className="bg-h1 rounded-3xl p-4 w-[370px] text-white mt-10 font-semibold text-center  "
            >
              Redeem Token
            </button>
          </m.div>
        </div>
      </div>
    </div>
  );
}
