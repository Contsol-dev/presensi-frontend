"use client";
import AdminProfile from "@/app/component/adminProfile";
import NavbarAdmin from "@/app/component/nav-admin";
import DetIzin from "./DetailIzin";

export default function DetailIzin() {
  return (
    <>
      <div className="w-screen h-screen flex m-auto overflow-hidden">
        <NavbarAdmin />
        <div className="bg-gray-200 w-full p-4 flex-col">
          <AdminProfile />
          <div className="flex w-full h-full bg-neutral-200">
            <a
              href="/detail-profile"
              className="selected relative m-5 cursor-pointer underline"
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
                  strokeWidth="5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <div className="w-full overflow-auto">
              <DetIzin />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
