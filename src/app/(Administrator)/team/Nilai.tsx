import axios from "axios";
import { useEffect, useState } from "react";

// Definisikan interface yang sesuai
interface NilaiProps {
  username: string;
  divisi_id: number;
}

interface PemagangData {
  username: string;
  nama: string;
  asal_sekolah: string;
  tempat_lahir: string;
  tanggal_lahir: string;
  nomor_hp: string;
  tanggal_masuk: string;
  tanggal_keluar: string;
  nip: string;
  shift_id: number;
  divisi_id: number;
  os: string;
  browser: string;
  status_akun: string;
  konfirmasi_admin: boolean;
  email: string;
}

interface SubKategori {
  id: number;
  nama: string; // Ubah sesuai dengan data yang diterima dari API
  nilai?: number; // Optional karena nilai mungkin di-set belakangan
}

interface Kategori {
  id: number;
  nama_kategori: string;
  sub_kategori: SubKategori[];
}

interface Penilaian {
  kategori: Kategori;
}

// Gunakan interface yang sesuai untuk state
export default function Nilai({ username, divisi_id }: NilaiProps) {
  const [data, setData] = useState<Penilaian[]>([]);
  const [pemagang, setPemagang] = useState<PemagangData>();
  const [penilaian, setPenilaian] = useState<Penilaian[]>([]);

  const fetchData = async () => {
    try {
      // Fetch data penilaian
      const responsePenilaian = await fetch(
        `${process.env.NEXT_PUBLIC_API_SERVER}/admin/manage-penilaian/${divisi_id}`
      );
      const resultPenilaian = await responsePenilaian.json();
      console.log(resultPenilaian);
      setData(resultPenilaian.penilaian);

      setPenilaian(
        resultPenilaian.penilaian.map((item: any) => ({
          kategori: {
            id: item.kategori.id,
            nama_kategori: item.kategori.nama_kategori,
            sub_kategori: item.kategori.sub_kategori.map((sub: any) => ({
              id: sub.id,
              nama: sub.nama, // Sesuaikan dengan nama yang sesuai dari API
              nilai: 0,
            })),
          },
        }))
      );
    } catch (error) {
      console.error("Error fetching penilaian data:", error);
    }

    try {
      // Fetch data pemagang
      const responsePemagang = await fetch(
        `${process.env.NEXT_PUBLIC_API_SERVER}/admin/detail-pemagang/${username}`
      );
      const resultPemagang = await responsePemagang.json();
      console.log(resultPemagang.user);
      setPemagang(resultPemagang.user);
    } catch (error) {
      console.error("Error fetching pemagang data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [divisi_id]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    kategoriId: number,
    subKategoriId: number
  ) => {
    const { value } = e.target;
    setPenilaian((prevPenilaian) =>
      prevPenilaian.map((item) =>
        item.kategori.id === kategoriId
          ? {
              ...item,
              kategori: {
                ...item.kategori,
                sub_kategori: item.kategori.sub_kategori.map((sub) =>
                  sub.id === subKategoriId
                    ? { ...sub, nilai: Number(value) }
                    : sub
                ),
              },
            }
          : item
      )
    );
  };

  const handlerSubmitNilai = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_SERVER}/admin/pemagang/nilai`,
        {
          username: username,
          penilaian: penilaian,
        }
      );
      console.log(response.data);
      alert("Data berhasil disimpan!");
    } catch (error) {
      console.error("Error submitting data:", error);
      alert("Terjadi kesalahan saat menyimpan data.");
    }
  };

  return (
    <div className="basis-3/4">
      <div className="flex font-inter mt-2 text-[#FFFFFF] bg-[#404040] items-center border border-1 border-solid border-black p-2">
        <div className="mx-2">
          <svg
            width="75"
            height="79"
            viewBox="0 0 95 99"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <ellipse cx="47.5" cy="49.5" rx="47.5" ry="49.5" fill="#BA181B" />
            <path
              d="M47.927 19C40.5221 19 34.4635 26.464 34.4635 35.6608C34.4635 44.8575 40.5221 52.3215 47.927 52.3215C55.3319 52.3215 61.3905 44.8575 61.3905 35.6608C61.3905 26.464 55.3319 19 47.927 19ZM33.8576 52.3215C26.722 52.6547 21 58.4527 21 65.6501V72.3145H74.854V65.6501C74.854 58.4527 69.1993 52.6547 61.9964 52.3215C58.3612 56.3868 53.3797 58.9858 47.927 58.9858C42.4743 58.9858 37.4928 56.3868 33.8576 52.3215Z"
              fill="#E9E9E9"
            />
          </svg>
        </div>
        <div className="flex font-inter flex-col text-xs p-2 gap-1">
          <p className="font-bold">{pemagang?.nama}</p>
          <p>NIP : {pemagang?.nip}</p>
        </div>
      </div>
      <div className="flex items-center justify-center p-3 bg-[#eeeded]">
        <h1 className="font-bold font-inter text-sm">INPUT NILAI MAGANG</h1>
      </div>
      <form
        className="bg-[#eeeded] px-10 text-xs text-[#00000099]"
        onSubmit={handlerSubmitNilai}
      >
        <div className="pb-5 px-2 flex flex-wrap font-inter text-xs gap-5 justify-between">
          {data.map((item) => (
            <div className="basis-3/4" key={item.kategori.id}>
              <p className="font-bold">{item.kategori.nama_kategori}</p>
              {item.kategori.sub_kategori.map((itemk) => (
                <span className="flex mt-2 justify-between" key={itemk.id}>
                  <p className="mr-2">{itemk.nama}</p>
                  <input
                    type="text"
                    className="w-[30%] border border-solid border-1 border-black rounded-md"
                    onChange={(e) =>
                      handleInputChange(e, item.kategori.id, itemk.id)
                    }
                  />
                </span>
              ))}
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center py-5">
          <button
            type="submit"
            className="bg-[#A4161A] rounded-md text-xs text-white px-4 py-2"
          >
            Simpan
          </button>
        </div>
      </form>
    </div>
  );
}
