import { FaRegUser } from "react-icons/fa";

interface Anggota {
  nama: string;
  waktu: string;
  kampus: string;
  tempatLahir: string;
  tanggalLahir: Date;
  NoHP: string;
  username: string;
  Email: String;
  Password: String;
  masuk: Date;
  keluar: Date;
}

interface ShowListProps {
  list: Anggota;
}

// Dataset Dummy
const anggotaBaru: Anggota[] = [
  {
    nama: "Lalisa Fitriyani",
    waktu: "15 menit yang lalu",
    kampus: "undaru",
    tempatLahir: "Mowila",
    tanggalLahir: new Date("2002-09-23"),
    NoHP: "089945671223",
    username: "Player01",
    Email: "mendokusai123@yahoo.com",
    Password: "waterPark01",
    masuk: new Date("2023-05-23"),
    keluar: new Date("2023-07-23"),
  },
  {
    nama: "Meyden Azalea",
    waktu: "26 menit yang lalu",
    kampus: "undaru",
    tempatLahir: "Mowila",
    tanggalLahir: new Date("2002-09-23"),
    NoHP: "089945671223",
    username: "Player01",
    Email: "mendokusai123@yahoo.com",
    Password: "waterPark01",
    masuk: new Date("2023-05-23"),
    keluar: new Date("2023-07-23"),
  },
  {
    nama: "rehan satria",
    waktu: "33 menit yang lalu",
    kampus: "undaru",
    tempatLahir: "Mowila",
    tanggalLahir: new Date("2002-09-23"),
    NoHP: "089945671223",
    username: "Player01",
    Email: "mendokusai123@yahoo.com",
    Password: "waterPark01",
    masuk: new Date("2023-05-23"),
    keluar: new Date("2023-07-23"),
  },
  {
    nama: "David Eslam",
    waktu: "49 menit yang lalu",
    kampus: "undaru",
    tempatLahir: "Mowila",
    tanggalLahir: new Date("2002-09-23"),
    NoHP: "089945671223",
    username: "Player01",
    Email: "mendokusai123@yahoo.com",
    Password: "waterPark01",
    masuk: new Date("2023-05-23"),
    keluar: new Date("2023-07-23"),
  },
  {
    nama: "Berten tiaga",
    waktu: "55 menit yang lalu",
    kampus: "undaru",
    tempatLahir: "Mowila",
    tanggalLahir: new Date("2002-09-23"),
    NoHP: "089945671223",
    username: "Player01",
    Email: "mendokusai123@yahoo.com",
    Password: "waterPark01",
    masuk: new Date("2023-05-23"),
    keluar: new Date("2023-07-23"),
  },
  {
    nama: "Fikrus sidqi",
    waktu: "1 jam yang lalu",
    kampus: "undaru",
    tempatLahir: "Mowila",
    tanggalLahir: new Date("2002-09-23"),
    NoHP: "089945671223",
    username: "Player01",
    Email: "mendokusai123@yahoo.com",
    Password: "waterPark01",
    masuk: new Date("2023-05-23"),
    keluar: new Date("2023-07-23"),
  },
  {
    nama: "Megawatt isukar",
    waktu: "1 jam yang lalu",
    kampus: "undaru",
    tempatLahir: "Mowila",
    tanggalLahir: new Date("2002-09-23"),
    NoHP: "089945671223",
    username: "Player01",
    Email: "mendokusai123@yahoo.com",
    Password: "waterPark01",
    masuk: new Date("2023-05-23"),
    keluar: new Date("2023-07-23"),
  },
  {
    nama: "Puanmah Arani",
    waktu: "2 jam yang lalu",
    kampus: "undaru",
    tempatLahir: "Mowila",
    tanggalLahir: new Date("2002-09-23"),
    NoHP: "089945671223",
    username: "Player01",
    Email: "mendokusai123@yahoo.com",
    Password: "waterPark01",
    masuk: new Date("2023-05-23"),
    keluar: new Date("2023-07-23"),
  },
  {
    nama: "Gan Jarpran",
    waktu: "3 jam yang lalu",
    kampus: "undaru",
    tempatLahir: "Mowila",
    tanggalLahir: new Date("2002-09-23"),
    NoHP: "089945671223",
    username: "Player01",
    Email: "mendokusai123@yahoo.com",
    Password: "waterPark01",
    masuk: new Date("2023-05-23"),
    keluar: new Date("2023-07-23"),
  },
  {
    nama: "Hang Krima",
    waktu: "4 jam yang lalu",
    kampus: "undaru",
    tempatLahir: "Mowila",
    tanggalLahir: new Date("2002-09-23"),
    NoHP: "089945671223",
    username: "Player01",
    Email: "mendokusai123@yahoo.com",
    Password: "waterPark01",
    masuk: new Date("2023-05-23"),
    keluar: new Date("2023-07-23"),
  },
];

export default function Aktifitas() {
  // buat fungsi looping dataset
  const listsElements = anggotaBaru.map((list, index) => (
    <ShowList key={index} list={list} />
  ));

  // buat properti untuk memasukan dataset yg dilooping ke dalam body HTML
  function ShowList({ list }: ShowListProps) {
    return (
      <span className=" flex gap-5 py-4 items-center">
        <div className="bg-h1 w-fit h-fit p-2 rounded-full">
          <div className="text-white lg:text-sm">
            <FaRegUser />
          </div>
        </div>
        <div className="flex gap-5 items-center lg:text-[12px]">
          <p className="font-semibold">
            {list.nama} <span>log in</span>
          </p>
          <p>{list.waktu}</p>
        </div>
      </span>
    );
  }

  return (
    <div className="lg:w-[500px] hidden lg:block lg:h-full gap-10 p-10 flex flex-col shadow-[-9px_-3px_14px_0px_#00000030] border right-0 top-[150px] bg-[#E9E9E9] ">
      <b className="lg:text-sm">Aktifitas Terbaru</b>
      <div className="flex flex-col notife">
        {listsElements}
        <div className=" flex gap-5 px-4 py-8  items-center">
          <div className="flex gap-5 items-center">
            <a
              href="#"
              className="font-normal text-red-600 cursor-pointer lg:text-sm"
            >
              Lihat lebih lanjut{" "}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
