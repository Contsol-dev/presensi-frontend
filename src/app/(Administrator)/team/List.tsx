import { useEffect, useState } from "react";
import Aktif from "./Aktif";
import axios from "axios";
// Dataset Dummy

interface ShowListProps {
  list: [];
  onClick: (list: []) => void;
}

interface ListProps {
  setSelectedKey: (key: any) => void;
  updatePilihan: (stat: string) => void;
}

export default function List({ setSelectedKey, updatePilihan }: ListProps) {
  // buat fungsi onClick
  const [anggota, setAnggota] = useState([]);
  const handlePilihanChange = (key: number) => {
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

  // buat fungsi looping dataset
  const listsElements = anggota.map((list, index) => (
    <ShowList
      key={index}
      list={list}
      onClick={() => handlePilihanChange(list.username)}
    />
  ));

  // buat properti untuk memasukan dataset yg dilooping ke dalam body HTML
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
