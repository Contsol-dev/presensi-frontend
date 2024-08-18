"use client";
import Link from "next/link";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hidePassword, setHidePassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const togglePasswordVisibility = () => {
    setHidePassword(!hidePassword);
  };

  const handleLogin = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_SERVER}/admin/login`,
        {
          email,
          password,
        }
      );

      if (response.status === 200) {
        const id = response.data.id;
        const nama = response.data.nama;
        if (typeof window !== "undefined") {
          sessionStorage.setItem("id", id);
          sessionStorage.setItem("nama", nama);
        }
        console.log("berhasil login");
        router.push("/admin/dashboard");
      } else {
        console.error("gagal login");
      }
    } catch (error) {
      console.error("Gagal login:", error);
      setErrorMessage("Username atau password salah");
      setIsError(true);
      setHidePassword(false);
      setTimeout(() => {
        setIsError(false);
      }, 5000);
    }
  };

  return (
    <>
      <div className="flex justify-center items-center h-screen ">
        <div className="bg-white flex items-center border mx-auto  adjust shadow-xl w-[726px]  h-fit z-40 px-20 py-10">
          <form className="flex flex-col mx-auto  w-full">
            <div className="flex flex-col justify-center text-center mx-auto gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="25"
                viewBox="0 0 21 25"
                className="mx-auto"
                fill="none"
              >
                <path
                  d="M10.5159 0C6.70591 0 3.58864 3.11727 3.58864 6.92727V10.3909H0.125V24.2455H20.9068V10.3909H17.4432V6.92727C17.4432 3.11727 14.3259 0 10.5159 0ZM10.5159 3.46364C12.4555 3.46364 13.9795 4.98764 13.9795 6.92727V10.3909H7.05227V6.92727C7.05227 4.98764 8.57627 3.46364 10.5159 3.46364Z"
                  fill="black"
                />
              </svg>
              <b className="text-3xl pb-16 mx-auto flex-col items-center gap-2">
                Log In
              </b>
            </div>
            <div className="flex flex-col gap-5 w-full">
              <div className="flex flex-col gap-4  rounded-xl">
                <label className="font-semibold" htmlFor="email">
                  Username/Email
                </label>
                <input
                  type="text"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border-2  rounded-md h-[55px] p-2 border-bg"
                  placeholder="Masukkan username / email"
                  required
                />
              </div>
              <div className="flex flex-col gap-4 rounded-xl">
                <label className="font-semibold" htmlFor="password">
                  Password
                </label>
                <input
                  type={hidePassword ? "text" : "password"}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full rounded-md border-2 h-[55px] p-2 border-bg"
                  placeholder="Masukkan password"
                  required
                />
              </div>
              <div className="flex justify-between w-full text-[19px]">
                <div className="flex gap-2 items-center">
                  <input
                    type="checkbox"
                    name="rememberMe"
                    id="rememberMe"
                    className="h-4 w-4 border "
                  />
                  <label htmlFor="rememberMe">Ingatkan Saya</label>
                </div>
                <div className="flex gap-2">
                  <label htmlFor="forgotPassword">Lupa Kata Sandi?</label>
                  <a
                    href="/verifikasi"
                    className="text-[#660708] font-semibold hover:scale-[1.05] duration-150 transition-all"
                  >
                    Reset
                  </a>
                </div>
              </div>
            </div>
            <button
              type="button"
              onClick={handleLogin}
              className="bg-grey text-center text-white text-lg p-3 rounded-md px-10 mx-auto my-8 hover:bg-[#660708] transition-all duration-150"
            >
              Login as Administrator
            </button>
            {/* <button type='submit' className='bg-grey text-center text-white text-lg p-3 rounded-md w-[194px] mx-auto my-10 hover:bg-[#660708] transition-all duration-150'>Login</button> */}
          </form>
        </div>
      </div>
    </>
  );
}
