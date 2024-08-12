import React, { useState, useEffect } from "react";
import axios from "axios";
import "@/styleInvoice/style.css";

interface InvoiceProps {
  filter: string;
  username: string;
}
interface MagangData {
  nama: string;
  nip: string;
  tanggal_masuk: string;
  tanggal_keluar: string;
  masuk: string;
  pulang: string;
}
interface PresensiData {
  tanggal: string;
  masuk: string;
  istirahat: string;
  kembali: string;
  pulang: string;
  log_activity: string;
  kebaikan: string;
  catatan: string;
  kehadiran: string;
}

const today = new Date().toLocaleDateString("id-ID", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

const Invoice = ({ filter, username }: InvoiceProps) => {
  const [presensi, setPresensi] = useState<PresensiData[]>([]);
  const [magang, setMagang] = useState<MagangData>();

  const fetchUser = async () => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_SERVER}/admin/detail-presensi`,
        {
          username: username,
          filter: filter,
        }
      );
      console.log(response);
      setMagang(response.data.magang);
      setPresensi(response.data.presensi);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, [filter]);

  const rowNumbers = Array.from(
    { length: presensi.length },
    (_, index) => index + 1
  );

  return (
    <div className="invoice-container">
      <div className="header">
        <img src="/logo.svg" alt="logo" />

        <div
          className="address"
          style={{
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h2 style={{ marginLeft: "100px" }}>SEVEN INC.</h2>
          <p>Jalan Raya Janti, Gang Arjuna Nomor 59, Karangjambe,</p>
          <p>Banguntapan, Bantul, Yogyakarta</p>
          <p>Kode Pos: 55198 | Telp: +62 857 3163 6408</p>
        </div>
      </div>

      <div className="presensi-data" style={{ textAlign: "center" }}>
        <h3 style={{ fontSize: "18px", fontWeight: "bold" }}>
          PRESENSI {magang?.nama}
        </h3>
        <p style={{ fontSize: "14px", fontWeight: "bold" }}>{magang?.nip}</p>
        <table className="table-auto w-full text-center text-[10px] mb-12">
          <thead className="bg-gray-300">
            <tr>
              <th className="p-1 cursor-pointer" rowSpan={2}>
                <input type="checkbox" />
              </th>
              <th className="p-1" rowSpan={2}>
                No
              </th>
              <th className="border-x-2 p-1" rowSpan={2}>
                Tanggal
              </th>
              <th className="border-b-2 p-1" colSpan={2}>
                Jam Kerja
              </th>
              <th className="border-b-2 border-x-2 p-1" colSpan={2}>
                Jam Istirahat
              </th>
              <th className="border-x-2 p-1" rowSpan={2}>
                Log Aktivitas
              </th>
              <th className="border-x-2 p-1" rowSpan={2}>
                Status Kehadiran
              </th>
              <th className="p-1" rowSpan={2}>
                Kebaikan
              </th>
              <th className="border-l-2 p-1" rowSpan={2}>
                Catatan
              </th>
              <th className="p-1" rowSpan={2}></th>
            </tr>
            <tr>
              <th className="border-x-2 p-1">Masuk</th>
              <th className="p-1">Pulang</th>
              <th className="border-x-2 p-1">Mulai</th>
              <th className="p-1">Selesai</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {presensi.map((item, index) => (
              <tr className="relative border-b-2" key={index}>
                <td className="p-1 cursor-pointer">
                  <input type="checkbox" />
                </td>
                <td className="p-1">{index + 1}</td>
                <td className="p-1">{item.tanggal}</td>
                <td className="p-1">{item.masuk}</td>
                <td className="p-1">{item.pulang}</td>
                <td className="p-1">{item.istirahat}</td>
                <td className="p-1">{item.kembali}</td>
                <td className="p-1">{item.log_activity}</td>
                <td className="p-1">{item.kehadiran} </td>
                <td className="p-1">{item.kebaikan}</td>
                <td className="p-1">{item.catatan}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="footer">
        <div className="footer-text">
          <p>Yogyakarta, 25 November 2023</p>
          <p>Direktur SEVEN INC</p>
        </div>
        <div className="footer-name">
          <p>Rekario Danny Sanjaya, S.Kom</p>
        </div>
        <img className="footer-logo" src="/logo.svg" alt="logo" />
      </div>
      <div
        className="buttons-container"
        style={{ textAlign: "center", marginTop: "20px" }}
      >
        <button onClick={() => window.print()}>Print</button>
      </div>
    </div>
  );
};

export default Invoice;
