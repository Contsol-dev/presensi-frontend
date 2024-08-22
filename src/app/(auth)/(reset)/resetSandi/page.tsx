"use client";
import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import axios from "axios";
import { motion as m } from "framer-motion";

export default function ResetSandi() {
  const router = useRouter();
  const { email } = useParams();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [password, setPassword] = useState(false);
  const [newPassword, setNewPassword] = useState({
    password: "",
    confirm_password: "",
    email: email,
  });

  useEffect(() => {
    resetPassword();
  }, [password]);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setNewPassword({
      ...newPassword,
      [name]: value,
    });
  };

  const handleResetPassword = () => {
    setPassword(!password);
  };

  const resetPassword = async () => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_SERVER}/new-password`,
        newPassword
      );

      if (response.status === 200) {
        router.push("/user/login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center gap-10">
      <div className="flex flex-col justify-center items-center gap-10 adjust">
        <div className="flex flex-col gap-5 text-center">
          <b className="text-[44px] text-h1">Buat Password baru</b>
        </div>
        <div className="flex flex-col gap-8">
          <div className="flex items-center space-x-2 border-2 border-black rounded-2xl py-1 px-2">
            <input
              type={passwordVisible ? "text" : "password"}
              className="p-2 border-none w-[444px] focus:outline-none rounded"
              placeholder="Password"
              name="password"
              onChange={handleInputChange}
            />
            <button
              onClick={togglePasswordVisibility}
              className="text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              {passwordVisible ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
            </button>
          </div>
          <div className="flex items-center space-x-2 border-2 border-black rounded-2xl py-1 px-2">
            <input
              type={passwordVisible ? "text" : "password"}
              className="p-2 border-none w-[444px] focus:outline-none rounded"
              placeholder="Confirm Password"
              name="confirm_password"
              onChange={handleInputChange}
            />
            <button
              onClick={togglePasswordVisibility}
              className="text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              {passwordVisible ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
            </button>
          </div>
          <m.div
            className="w-[370px] text-white flex justify-center mx-auto"
            whileHover={{ scale: 1.05 }}
          >
            <button
              onClick={handleResetPassword}
              className="bg-h1 rounded-3xl p-4 w-[370px] text-white mt-10 font-semibold text-center"
            >
              Reset Password
            </button>
          </m.div>
        </div>
      </div>
    </div>
  );
}
