import { useEffect, useState } from "react";
import axios from "axios";

// Definisikan tipe data untuk anggota
interface Anggota {
  username: string;
  nama: string;
  asal_sekolah: string;
  tempat_lahir: string;
  tanggal_lahir: string;
  nomor_hp: string;
  nip: string;
  status_pegawai: string;
  tanggal_masuk: string;
  tanggal_keluar: string | null;
  divisi_id: number | null;
  shift_id: number | null;
  nilai_id: number | null;
}

// Props untuk komponen ShowList
interface ShowListProps {
  list: Anggota; // Gunakan tipe Anggota di sini
  onClick: (list: Anggota) => void;
}

// Props untuk komponen List
interface ListProps {
  setSelectedKey: (key: any) => void;
  updatePilihan: (stat: string) => void;
}

export default function List({ setSelectedKey, updatePilihan }: ListProps) {
  // Definisikan state anggota dengan tipe Anggota[]
  const [anggota, setAnggota] = useState<Anggota[]>([]);

  // Fungsi untuk mengubah pilihan berdasarkan key
  const handlePilihanChange = (key: string) => {
    setSelectedKey(key);
    const stat = "data";
    updatePilihan(stat);
  };
  const fetchTidakAktif = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_SERVER}/admin/divisi/belum-aktif`
      );
      setAnggota(response.data.unactive);
      console.log(response.data.unactive);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTidakAktif();
  }, []);

  // Fungsi looping untuk menampilkan elemen ShowList
  const listsElements = anggota.map((list, index) => (
    <ShowList
      key={index}
      list={list}
      onClick={() => handlePilihanChange(list.username)}
    />
  ));

  // Komponen untuk menampilkan daftar anggota
  function ShowList({ list, onClick }: ShowListProps) {
    return (
      <li
        className="md:flex gap-4 w-full h-full items-center m-2 p-2 bg-zinc-300 border-2 rounded-lg border-zinc-400 shadow-xl cursor-pointer"
        onClick={() => onClick(list)}
      >
        <b className="w-2/3 text-s">{list.nama} </b>
        <p className="w-1/3 text-xs whitespace-nowrap">
          {"Terdaftar sejak " + list.tanggal_masuk}
        </p>
      </li>
    );
  }
  return (
    <div>
      <ul className="list-group ml-5">{listsElements}</ul>
    </div>
  );
}
