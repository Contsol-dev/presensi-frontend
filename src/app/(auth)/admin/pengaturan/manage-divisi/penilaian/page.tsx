"use client";
import Link from 'next/link';
import AdminProfile from '@/app/component/adminProfile';
import NavbarAdmin from '@/app/component/nav-admin';
import '/src/stylePenilaian/style.css';
import React, { useEffect, useState } from "react";
import axios from 'axios';

export default function Penilaian() {

  const [penilaian, setPenilaian] = useState([]);
  const [kategori, setKategori] = useState([]);
  const [namaDivisi, setNamaDivisi] = useState('');
  const [isModalOpen, setModalOpen] = useState(false);

  const fetchPenilaianData = async () => {
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_SERVER}/admin/manage-penilaian/${localStorage.getItem('divisi_id')}`);
      setPenilaian(response.data.penilaian);
    } catch (err) {
      console.log(err);
    }
  };
  
  const fetchNamaDivisi = async () => {
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_SERVER}/admin/manage-divisi/get/${localStorage.getItem('divisi_id')}`);
      setNamaDivisi(response.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchKategoriPenilaian = async () => {
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_SERVER}/admin/manage-penilaian-kategori/${localStorage.getItem('divisi_id')}`);
      setKategori(response.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (localStorage.getItem('divisi_id')) {
      fetchNamaDivisi();
      fetchPenilaianData();
    }
  }, []);


  const openModal = () => {
    fetchKategoriPenilaian();
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleInputChange = (e:any, id:any) => {
    const {value} = e.target;
    setSubCNew({
      'category_id': id,
      'nama_subkategori': value
    })
  }
  
  const handleInputKategori = (e:any) => {
    const {value} = e.target;
    setCNew({
      'division_id': localStorage.getItem('divisi_id'),
      'nama_kategori': value
    })
  }

  const handleDeleteSubcategory = async (id:any) => {
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_SERVER}/admin/manage-penilaian-subkategori/${id}`);
      console.log(response.data);
      fetchPenilaianData();
    } catch (err) {
      console.log(err);
    }
  }

  const [subCNew, setSubCNew] = useState({
    'category_id': '',
    'nama_subkategori': ''
  });

  const handleAddSubcategory = async () => {
    try {
      console.log(subCNew)
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_SERVER}/admin/manage-penilaian-subkategori`, subCNew);
      console.log('Response:', response.data);
      fetchPenilaianData();
    } catch (error) {
      console.error('Error:', error);
    }
  }

  const handleDeleteCategory = async (id:any) => {
    try {
      const division = localStorage.getItem('divisi_id')
      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_SERVER}/admin/manage-penilaian-kategori/${division}/${id}`);
      console.log(response.data);
      fetchKategoriPenilaian();
      fetchPenilaianData();
    } catch (err) {
      console.log(err);
    }
  }

  const [CNew, setCNew] = useState({
    'division_id': '',
    'nama_kategori': '',
  })

  const handleAddCategory = async () => {
    try {
      console.log(CNew)
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_SERVER}/admin/manage-penilaian-kategori`, CNew);
      console.log('Response:', response.data);
      fetchKategoriPenilaian();
      fetchPenilaianData();
    } catch (error) {
      console.error('Error:', error);
    }
  }

  return (
    <>
    <div className="w-full h-screen flex overflow-hidden">
        <NavbarAdmin />
        <div className="bg-gray-200 w-full p-4 flex-col relative overflow-y-auto">
          <AdminProfile />
          <div className="flex items-center">
            <Link href="/admin/pengaturan/manage-divisi" passHref>
              <div className="selected relative m-5 cursor-pointer underline">
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
              </div>
            </Link>
            <div className="ml-7 font-bold">Kategori Penilaian Divisi <span>{namaDivisi}</span></div>
          </div>          

          <div className="bg-black h-2 w-full relative">
            <div className="absolute top-2 left-0 p-6 text-white">Tambah Kategori Penilaian Divisi <span>{namaDivisi}</span></div>
            <p className="absolute top-12 left-0 p-6 text-xs text-white">
              Digunakan untuk menentukan kategori penilaian kepada Peserta Magang
            </p>
          </div>

          {isModalOpen && (
            <div className="modal-overlay">
              <div className="modal-pengaturan bg-white max-w-xs p-8 rounded-xl p-4">
                <div className="modal-content">
                  <h1 className="text-lg font-inter font-bold mb-5 ">
                    Tambah Kategori
                  </h1>

                  <div className="bg-gray-200 rounded-md p-4 mb-4">
                    {kategori.map((item, index) => (
                      <div key={index} className="w-full mt-4 text-box relative">
                        <div className="flex justify-between">
                          <div className="text-center mb-2">{item.nama_kategori}</div>
                          <button onClick={() => handleDeleteCategory(item.id)}>
                            <svg
                              className="action-icon"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M18 6L6 18M6 6L18 18"
                                stroke="black"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </button>
                        </div>
                        <div className="border-line"></div>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center mt-2">
                    <input
                      type="text"
                      name=''
                      onChange={handleInputKategori}
                      className="border-gray-300 bg-gray-100 border p-2 rounded-md"
                      style={{ width: '100%', fontSize: 'small' }}
                      placeholder="Tambah Kategori Izin"
                    />
                  </div>
                  <div className="flex justify-center">
                    <div className="flex justify-end gap-2 mt-2" style={{ marginLeft: '65px' }}>
                      <button
                        onClick={closeModal}
                        className="border border-gray-600 flex rounded-lg text-xs items-center justify-center gap-2 py-2 px-3 text-black w-24 font-inter"
                      >
                        Batal
                      </button>
                      <button
                        onClick={handleAddCategory}
                        className="bg-red-700 flex rounded-lg hover:bg-red-900 text-xs items-center justify-center gap-2 py-2 px-3 text-white w-24 font-inter"
                      >
                        Tambahkan
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          <div className="bg-white p-4 mt-4 white-box relative">
            <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 add-category" onClick={openModal}>
              + Tambah Kategori
            </button>
          <div className="flex flex-wrap mt-4">
      {penilaian.map((item, index) => (
        <div key={index} className="w-1/2 p-2">
          <div className="mt-2 text-sm font-semibold">{item.kategori.nama_kategori}</div>
          {item.kategori.sub_kategori.map((subitem) => (
            <div key={subitem.id} className="w-full mt-4 text-box relative">
              <div className="flex justify-between">
                <div className="text-center mb-2">{subitem.nama}</div>
                <button onClick={() => handleDeleteSubcategory(subitem.id)}>
                  <svg
                    className="action-icon"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18 6L6 18M6 6L18 18"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
              <div className="border-line"></div>
            </div>
          ))}
          <div className="flex items-center mt-2">
            <input onChange={(e) => handleInputChange(e, item.kategori.id)} type="text" className="border-gray-300 bg-gray-100 border p-2 rounded-md" style={{ width: '65%' }} />
            <button onClick={handleAddSubcategory} className="bg-red-600 text-white px-4 py-2 ml-2 rounded-md hover:bg-red-800">Tambah</button>
          </div>
        </div>
      ))}
    </div>
            {/* Tombol Submit */}
            <Link href="/admin/pengaturan/manage-divisi" passHref>
              <button className="absolute bottom-4 right-4 bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-800">
                Submit
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};