"use client";
import NavbarContributor from "@/app/component/nav-contributor";
import ContributorProfile from "@/app/component/contributorProfile";
import { FaUserCircle } from "react-icons/fa";

export default function Administrator() {
  return (
    <div className="flex bg-[#EEEEEE]">
      <div>
        <NavbarContributor />
      </div>
      <div className="flex flex-col w-full">
        <div>
          <ContributorProfile />
        </div>
        <div className="flex flex-row items-center gap-4 px-4 max-w-50 h-20 bg-black lg:mx-12">
          <div className="text-white text-[75px]">
            <FaUserCircle />
          </div>
          <div className="text-white text-xs">
            <h2>Syalita Widyandini</h2>
            <p>NIP: MJ/UIUX/POLINES/AGST2023/06</p>
          </div>
        </div>
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 max-w-50 h-[600px] bg-white lg:mx-12 my-2 rounded px-8 lg:px-20 py-14 text-xs">
          <div>
            <div className="flex flex-col gap-4">
              <h2 className="font-bold">Pengetahuan</h2>
              <div className="flex flex-row justify-between">
                <div>Pemahaman topik pemagang</div>
                <div className="w-[25px] px-8 border border-black rounded-md bg-[#DCDCDC]">
                  <p>...</p>
                </div>
              </div>
              <div className="flex flex-row justify-between">
                <div>Pemahaman ruang lingkup magang</div>
                <div className="w-[25px] text-center px-8 border border-black rounded-md bg-[#DCDCDC]">
                  <p>...</p>
                </div>
              </div>
            </div>
            <br />
            <br />
            <div>
              <div className="flex flex-col gap-4">
                <h2 className="font-bold">Keterampilan</h2>
                <div className="flex flex-row justify-between">
                  <div>Identifikasi masalah</div>
                  <div className="w-[25px] px-8 border border-black rounded-md bg-[#DCDCDC]">
                    <p>...</p>
                  </div>
                </div>
                <div className="flex flex-row justify-between">
                  <div>Pemecahan masalah</div>
                  <div className="w-[25px] px-8 border border-black rounded-md bg-[#DCDCDC]">
                    <p>...</p>
                  </div>
                </div>
                <div className="flex flex-row justify-between">
                  <div>Hasil kerja</div>
                  <div className="w-[25px] px-8 border border-black rounded-md bg-[#DCDCDC]">
                    <p>...</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4 mt-6">
                <h2 className="font-bold">Kritik & Saran</h2>
                <div
                  className="bg-[#DCDCDC] lg:w-[725px] h-[100px] px-2 rounded-md"
                  id=""
                >
                  Kerja bagus
                </div>
              </div>
            </div>
          </div>
          <div className="py-4 lg:py-0">
            <div className="flex flex-col gap-4 my-16 lg:mt-0">
              <h2 className="font-bold">Lainnya</h2>
              <div className="flex flex-row justify-between">
                <div>Partisipasi</div>
                <div className="w-[25px] px-8 border border-black rounded-md bg-[#DCDCDC]">
                  <p>...</p>
                </div>
              </div>
              <div className="flex flex-row justify-between">
                <div>Kejujuran</div>
                <div className="w-[25px] px-8 border border-black rounded-md bg-[#DCDCDC]">
                  <p>...</p>
                </div>
              </div>
              <div className="flex flex-row justify-between">
                <div>Kedisiplinan</div>
                <div className="w-[25px] px-8 border border-black rounded-md bg-[#DCDCDC]">
                  <p>...</p>
                </div>
              </div>
              <div className="flex flex-row justify-between">
                <div>Tanggung jawab</div>
                <div className="w-[25px] px-8 border border-black rounded-md bg-[#DCDCDC]">
                  <p>...</p>
                </div>
              </div>
              <div className="flex flex-row justify-between">
                <div>Inisiatif</div>
                <div className="w-[25px] px-8 border border-black rounded-md bg-[#DCDCDC]">
                  <p>...</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
