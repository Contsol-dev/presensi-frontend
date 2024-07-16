"use client";
import React, { useEffect, useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import AdminProfile from "@/app/component/adminProfile";
import NavbarAdminDashboard from "@/app/component/nav-admin";

export default function utama() {
  return (
    <>
      <div className="w-screen  flex m-auto lg:p-0  ">
        <NavbarAdminDashboard />
        <div className="w-full flex ">
          <Pengaturan />
          <div className="overflow-auto bg-gray-100 w-full p-4 flex flex-col gap-5  min-h-0">
            <AdminProfile />
            <Content />
          </div>
        </div>
      </div>
    </>
  );
}

function Navbar() {
  const [nav, setnav] = useState(true);
  const [hide, sethide] = useState(false);

  const shownav = () => {
    setnav(!nav);
    sethide(!hide);
  };
  return (
    <>
      {hide && (
        <button onClick={shownav} className="burger flex justify-center items-center left-12 top-4 w-6 h-6 text-white rounded-full shadow-lg bg-button z-40 fixed color">
          <AiOutlineMenu />
        </button>
      )}
      {nav && (
        <div className="navbar bg-[#DCDCDC] flex flex-col justify-between p-2  h-screen w-[340px] pb-20 sticky z-30 top-0 boxshadow border-r border-[#DCDCDC] ">
          <div onClick={shownav} className="absolute cursor-pointer right-5 top-5 text-xl">
            <AiOutlineClose />
          </div>
          <div className="logo w-full flex  justify-center items-center">
            <img src="/logo.svg" width="50px" height="50px" alt="logo" />
          </div>

          <div className="menu w-11/12 h-3/6 p-4   ">
            <ul className="gap-4 flex flex-col text-sm font-inter">
              <ul className="gap-4 flex flex-col text-sm font-inter">
                <li>
                  <a href="/dashboard">Dashboard</a>
                </li>
                <li>
                  <a href="/presensi">Presensi</a>
                </li>
                <li>
                  <a href="/team">Divisi</a>
                </li>
                <li>
                  <a href="\admin\laporan">Laporan</a>
                </li>
                <li>
                  <a href="\admin\kampus-sekolah">Sekolah/Kampus</a>
                </li>
                <li>
                  <a href="\admin\pengaturan\jam&quotes">Pengaturan</a>
                </li>
              </ul>
            </ul>
          </div>
          <div className="logout w-11/12 flex gap-x-4  px-4 ">
            <h1>Log out</h1>
            <img className="w-5" src="/logout.svg" alt="" />
          </div>
        </div>
      )}
    </>
  );
}

function Pengaturan() {
  const [showManageDivisi, setShowManageDivisi] = useState(false);

  const toggleManageDivisi = () => {
    setShowManageDivisi(!showManageDivisi);
  };
  return (
    <div className="w-72 h-full bg-white py-4 flex flex-col items-center">
      <h1 className="font-bold text-lg font-inter mb-24">Pengaturan</h1>
      <p className="text-sm text-gray-600">PENGATURAN UTAMA</p>
      <ul className="list-disc list-inside text-gray-400 text-sm border-b border-black pb-7 ">
        <li className="hover:text-black hover:bg-red-200 rounded-lg px-2 py-1 my-1">
          <a href="/admin/pengaturan/jam&quotes">Quotes</a>
        </li>
        <li className="hover:text-black hover:bg-red-200 rounded-lg px-2 py-1 my-1">
          <a href="/admin/pengaturan/manage-shift">Manage Shift</a>
        </li>
        <li className="hover:text-black hover:bg-red-200 rounded-lg px-2 py-1 my-1">
          <a href="/admin/pengaturan/manage-divisi">Manage Divisi</a>
        </li>
        <li className="project hover:text-black list-none hover:bg-red-200 rounded-lg px-2 py-1 my-1 cursor-pointer" onClick={toggleManageDivisi}>
          <div className="flex gap-4">
            <span>Manage Project</span> {showManageDivisi ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </div>

          {showManageDivisi && (
            <ul className="childrenn list-disc list-inside text-gray-400 text-sm ml-4 ">
              <li className="hover:text-black hover:border hover:border-black rounded-lg px-2 py-1 my-1">
                <a href="/admin/pengaturan/project-category">Project’s Category</a>
              </li>
              <li className="hover:text-black hover:border hover:border-black rounded-lg px-2 py-1 my-1">
                <a href="/admin/pengaturan/project-tags">Project’s Tags</a>
              </li>
              
            </ul>
          )}
        </li>
        <li className="hover:text-black hover:bg-red-200 rounded-lg px-2 py-1 my-1">
          <a href="/admin/pengaturan/manage-alumni">Manage Alumni</a>
        </li>

        <li className="text-black bg-red-200 rounded-lg px-2 py-1 my-1">
          <a href="/admin/pengaturan/lokasi-kantor">Lokasi Kantor</a>
        </li>
      </ul>
      <p className="text-sm text-gray-600 pt-7">PANEL ADMINISTRATOR</p>
      <ul className="list-disc list-inside text-gray-400 text-sm ">
        <li className="hover:text-black hover:bg-red-200 rounded-lg px-2 py-1 my-1">
          <a href="/admin/pengaturan/user&organization">User & Organizations</a>
        </li>
      </ul>
    </div>
  );
}

function Profil() {
  return (
    <>
      <div className="profil flex w-full items-center justify-end gap-4">
        <img className="lonceng w-5" src="/lonceng.svg" alt="lonceng" />
        <div className="name ">
          <h1 className="text-lg font-bold">Nurfan Rahmat Berlian</h1>
          <p className="text-sm">Admin</p>
        </div>
        <img className="profilImg" src="/kucing.png" width={50} height={50} alt="profil" />
      </div>
    </>
  );
}

function Content() {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="content w-full h-full bg-white rounded-md p-4 flex flex-col gap-3">
      <h1 className="text-sm font-inter font-bold">Daftar Lokasi Kantor</h1>
      <button onClick={openModal} className="p-2 bg-blue-500 flex items-center justify-center rounded-xl text-white text-xs mt-4 w-32 gap-2 ">
        <IoLocationSharp width={30} style={{ color: "white" }} /> Tambah Lokasi
      </button>

      <Table />

      {isModalOpen && <Modal closeModal={closeModal} isModalOpen={isModalOpen} />}
    </div>
  );
}

function Table() {
    const [kampus, setKampus] = useState([]);
    const [itemsPerPage, setItemsPerPage] = useState(5);
    const [currentPage, setCurrentPage] = useState(1);
    const [deleteIndex, setDeleteIndex] = useState(null);
    const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
    const [editIndex, setEditIndex] = useState(null);
    const [showEditPopup, setShowEditPopup] = useState(false);
    const [showManageDivisi, setShowManageDivisi] = useState(false);
    
    const toggleManageDivisi = () => {
              setShowManageDivisi(!showManageDivisi);
    };
    const handleEdit = (index: any) => {
      setEditIndex(index);
      setShowEditPopup(true);
    };

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch("https://restaurant-api.dicoding.dev/list");
          const jsonData = await response.json();
          setKampus(jsonData.restaurants);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
  
      fetchData();
    }, []);

    const handleDelete = (index: any) => {
      setDeleteIndex(index);
      setShowDeleteConfirmation(true); 
    };
  
    const confirmDelete = () => {
      if (deleteIndex !== null) {
        const updatedKampus = [...kampus];
        updatedKampus.splice(deleteIndex, 1);
        setKampus(updatedKampus);
        setShowDeleteConfirmation(false);
      }
    };    
  
  const cancelDelete = () => {
    setShowDeleteConfirmation(false);
  };
  

  const getRowClassName = (index: any) => {
    return index % 2 === 0 ? "bg-gray-300 trLaporan border border-gray-200 text-xs font-inter " : "bg-white trLaporan border border-gray-200 text-xs font-inter ";
  };

  const handleItemsPerPageChange = (event: any) => {
    const selectedItemsPerPage = parseInt(event.target.value, 10);
    setItemsPerPage(selectedItemsPerPage);
    setCurrentPage(1);
  };

  const handlePageChange = (event: any) => {
    const selectedPage = parseInt(event.target.value, 10);
    setCurrentPage(selectedPage);
  };

  const handleSave = () => {
    // Handle saving data here
    setShowEditPopup(false);
  };

  const totalPages = Math.ceil(kampus.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const getPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <button
          key={i}
          className={`px-1 py-1 mx-1 font-inter text-xs
    text-black ${i === currentPage ? "border-b text-xs border-black text-black" : ""}`}
          onClick={() => setCurrentPage(i)}
        >
          {i}
        </button>
      );
    }
    return pageNumbers;
  };
  

  return (
    <>
   {showDeleteConfirmation && (
      <div className="modal-overlay">
        <div className="modal-delete bg-white rounded-lg p-6 max-w-md">
          <div className="modal-content text-center">
            <h1 className="text-lg font-bold mb-3 text-sm">Delete</h1>
            <p className="text-xs mb-3">Apakah Anda yakin ingin menghapus data?</p>
            <div className="flex justify-center mt-2">
              <button className="bg-gray-300 text-black px-4 py-2 mr-20 rounded-md text-xs" onClick={cancelDelete}>Tidak</button>
              <button className="bg-red-500 text-white px-4 py-2 ml-20 rounded-md text-xs" onClick={confirmDelete}>Ya</button>
            </div>
          </div>
        </div>
      </div>
    )}
    {showEditPopup && (
    <div className="modal-overlay ">
      <div className="inputLokasi bg-white w-9/12 h-3/4  rounded-xl p-4 overflow-auto">
        <div className="relative cursor-pointer " onClick={() => setShowEditPopup(false)}>
          <IoClose className="absolute top-0 right-0" />
        </div>

        <div className="modal-content flex gap-4 ">
          <div className="inputProject w-1/2  p-2 rounded-sm flex flex-col gap-3 ">
            <h1 className="text-sm font-inter font-bold ">Edit Lokasi</h1>
            <p className="text-xs font-bold font-inter">Add New Maker</p>

            <div className="flex flex-col gap-1 ">
              <p className="text-xs font-inter">Status Alamat</p>
              <input
                className="border-gray-300 bg-gray-100 border p-2 rounded-md"
                type="text"
                placeholder="Pilih Status Absen"
              />
            </div>
            <div className="flex flex-col gap-1 ">
              <p className="text-xs font-inter">Kapasitas</p>
              <input
                className="border-gray-300 bg-gray-100 border p-2 rounded-md"
                type="text"
              />
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-xs font-inter">Alamat</p>
              <textarea
                className="w-full h-20 bg-gray-100 focus:outline-none p-2 border border-black rounded-md text-xs"
                defaultValue="Jl. Raya Janti Gg. Harjuna No.59, Jaranan, Karangjambe, Kec. Banguntapan, Kabupaten Bantul, Daerah Istimewa Yogyakarta 55281"
                placeholder="Jl. Raya Janti Gg. Harjuna No.59, Jaranan, Karangjambe, Kec. Banguntapan, Kabupaten Bantul, Daerah Istimewa Yogyakarta 55281"
              ></textarea>
              <div className="flex flex-col gap-1 ">
                <p className="text-xs font-inter">Jarak Radius Absen (Meter *)</p>
                <input
                  className="border-gray-300 bg-gray-100 border p-2 rounded-md"
                  type="text"
                  placeholder="Pilih Status Absen"
                />
              </div>
              <div className="project rounded-lg cursor-pointer">
              <p className="text-xs font-inter">Jarak Status Absensi</p>
              <div className="flex gap-4 w-full bg-gray-100 border border-black focus:outline-none p-2 text-xs rounded-md justify-between" onClick={toggleManageDivisi}>
                <span>Pilih Status Absen</span> {showManageDivisi ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </div>

              {showManageDivisi && (
                <div className="ml-4">
                  <div className="hover:text-black hover:border hover:border-black rounded-lg px-2 py-1 my-1 flex justify-between items-center">
                    <span>Scan QR Code</span> <input type="checkbox" className="w-4 h-4" />
                  </div>
                  <div className="hover:text-black hover:border hover:border-black rounded-lg px-2 py-1 my-1 flex justify-between items-center">
                    <span>On Tap Website</span> <input type="checkbox" className="w-4 h-4" />
                  </div>
                </div>
              )}
            </div>
              </div>
              <div className="flex justify-start gap-2 mt-2">
                  <button
                    className="bg-red-700 flex rounded-lg hover:bg-red-900 text-xs items-center justify-center gap-2 py-2 px-3 text-white w-24 font-inter"
                    onClick={handleSave}
                  >
                    Simpan
                  </button>              
                  </div>
              </div>
              <div className="lokasiMaps flex w-1/2 p2 overflow-auto">
                <MapComponent />
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="flex gap-4">

        <div className="filter flex gap-1 w-32 h-10 items-center justify-center text-sm bg-gray-200 border border-black rounded-md ">
          <select id="page-dropdown" name="page" className="jenisFilter w-3/4 focus:outline-none text-xs bg-gray-200 cursor-pointer" onChange={handlePageChange} value={currentPage}>
            {Array.from({ length: totalPages }, (_, index) => (
              <option className="sm:text-xs" key={index + 1} value={index + 1}>
                Page {index + 1}
              </option>
            ))}
          </select>
        </div>


        <div className="filter flex gap-1 w-32 h-10 items-center bg-slate-200 justify-center text-sm border border-black rounded-md">
          <select id="items-per-page-dropdown" name="itemsPerPage" className="jenisFilter focus:outline-none text-xs bg-gray-200 cursor-pointer" onChange={handleItemsPerPageChange} value={itemsPerPage}>
            <option className="sm:text-xs" value="5">
              5 item per page
            </option>
            <option className="sm:text-xs" value="10">
              10 item per page
            </option>
            <option className="sm:text-xs" value="15">
              15 item per page
            </option>
          </select>
        </div>
      </div>

      <div className="tableData">
      
        <table className="table-auto w-full rounded-lg ">
          <thead className="bg-white border-b-2  border-gray-500 text-xs font-inter ">
            <tr className="bg-gray-100">
              <th className="px-2 py-2">No</th>
              <th className="px-2 py-2">Nama Lokasi</th>
              <th className="px-2 py-2">Alamat</th>
              <th className="px-2 py-2">Kapasitas</th>
              <th className="px-2 py-2">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {kampus.slice(startIndex, endIndex).map((dataKampus: any, index) => (
              <tr key={index} className={getRowClassName(index)}>
                <td className="px-2 py-2 text-center">{startIndex + index + 1}</td>
                <td className="td px-2 py-2 text-center">{dataKampus.name}</td>
                <td className="px-2 py-2 text-center">
                  <div className="flex justify-center items-center">Jogja</div>
                </td>
                <td className="px-2 py-2 text-center">30</td>
                <td className="px-2 py-2 text-center">
                  <div className="flex gap-2 justify-center items-center">
                  <button className="py-2 px-4 bg-blue-500 text-white font-inter text-xs rounded-md" onClick={() => handleEdit(index)}>Edit</button>
                    <button className="py-2 px-4 bg-red-500 text-white font-inter text-xs rounded-md" onClick={() => handleDelete(index)}>Hapus</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      
      <div className="flex justify-center mt-4">{getPageNumbers()}</div>
    </>
  );
}

function Modal({ isModalOpen, closeModal }: { closeModal: () => void; isModalOpen: boolean }) {
  const [showEditPopup, setShowEditPopup] = useState(false);
  const [showManageDivisi, setShowManageDivisi] = useState(false);

  const toggleManageDivisi = () => {
    setShowManageDivisi(!showManageDivisi);
  };

  const handleSave = () => {
    // Handle saving data here
    setShowEditPopup(false);
    closeModal(); // Close modal after saving
  };

  return (
    <>

      {isModalOpen && (
        <div className="modal-overlay ">
          <div className="inputLokasi bg-white w-9/12 h-3/4  rounded-xl p-4 overflow-auto">
            <div className="relative cursor-pointer " onClick={closeModal}>
              <IoClose className="absolute top-0 right-0" />
            </div>

            <div className="modal-content flex  gap-4 ">
              <div className="inputProject w-1/2  p-2 rounded-sm flex flex-col gap-3 ">
                <h1 className="text-sm font-inter font-bold ">Tambahkan Lokasi Kantor</h1>
                <p className="text-xs font-bold font-inter">Add New Maker</p>

                <div className="flex flex-col gap-1 ">
                  <p className="text-xs font-inter">Status Absensi</p>
                  <input type="text" className="w-full bg-gray-100  border border-black focus:outline-none p-2 text-xs rounded-md" placeholder="Masukan nama Kantor" />
                </div>

                <div className="flex flex-col gap-1 ">
                  <p className="text-xs ">Kapasitas</p>
                  <input type="text" className="w-full bg-gray-100  border border-black focus:outline-none p-2 text-xs rounded-md" placeholder="Masukan Kapasitas Kantor" />
                </div>

                <div className="flex flex-col gap-1 ">
                  <p className="text-xs ">Alamat</p>
                  <textarea className="w-full h-20 bg-gray-100 focus:outline-none p-2 border border-black rounded-md text-xs" placeholder="Masukkan Alamat"></textarea>
                </div>

                <div className="flex flex-col gap-1 ">
                  <p className="text-xs ">Jarak Radius Absen ( Meter *)</p>
                  <input type="text" className="w-full bg-gray-100  border border-black focus:outline-none p-2 text-xs rounded-md" placeholder="Masukkan Jarak Radius Absen" />
                </div>

                <div className="project rounded-lg cursor-pointer">
              <p className="text-xs font-inter">Jarak Status Absensi</p>
              <div className="flex gap-4 w-full bg-gray-100 border border-black focus:outline-none p-2 text-xs rounded-md justify-between" onClick={toggleManageDivisi}>
                <span>Pilih Status Absen</span> {showManageDivisi ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </div>

              {showManageDivisi && (
                <div className="ml-4">
                  <div className="hover:text-black hover:border hover:border-black rounded-lg px-2 py-1 my-1 flex justify-between items-center">
                    <span>Scan QR Code</span> <input type="checkbox" className="w-4 h-4" />
                  </div>
                  <div className="hover:text-black hover:border hover:border-black rounded-lg px-2 py-1 my-1 flex justify-between items-center">
                    <span>On Tap Website</span> <input type="checkbox" className="w-4 h-4" />
                  </div>
                </div>
              )}
                </div>

                <div className="flex justify-start gap-2 mt-2">
                  <button
                    className="bg-red-700 flex rounded-lg hover:bg-red-900 text-xs items-center justify-center gap-2 py-2 px-3 text-white w-24 font-inter"
                    onClick={handleSave}
                  >
                    Simpan
                  </button>                   </div>
                </div>

              <div className="lokasiMaps flex w-1/2 p2  overflow-auto">
                <MapComponent />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

const MapComponent = () => {
  return (
    <iframe
      title="Google Maps"
      width="600"
      height="450"
      frameBorder="0"
      style={{ border: 0 }}
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.994262653703!2d110.40678507500493!3d-7.790430992229475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a575d56935b97%3A0x2083067682590692!2sSeven%20Inc.!5e0!3m2!1sid!2sid!4v1703572047752!5m2!1sid!2sid"
      allowFullScreen
    ></iframe>
  );
};
