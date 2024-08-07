import React, { useState, useEffect } from "react";
import axios from "axios";
import "@/styleInvoice/style.css";

interface InvoiceProps {
  tanggal_mulai: string;
  tanggal_selesai: string;
  filter: string;
  shift_id: number;
}
interface PresensiData {
  username: string;
  nama: string;
  jumlah_hadir: number;
  jumlah_izin: number;
  jumlah_tidak_hadir: number;
}

const today = new Date().toLocaleDateString("id-ID", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

const Invoice = ({
  tanggal_mulai,
  tanggal_selesai,
  filter,
  shift_id,
}: InvoiceProps) => {
  const [presensi, setPresensi] = useState<PresensiData[]>([]);

  const fetchPresensi = async () => {
    try {
      const response = await axios.post("http://127.0.0.1:8000/admin/laporan", {
        tanggal_mulai: tanggal_mulai,
        tanggal_selesai: tanggal_selesai,
        filter: filter,
        shift_id: shift_id,
      });
      setPresensi(response.data.data);
      console.log(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPresensi();
  }, []);

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
          LAPORAN PRESENSI
        </h3>
        <p style={{ fontSize: "14px", fontWeight: "bold" }}>
          Data per tanggal {tanggal_mulai} s/d {tanggal_selesai}
        </p>
        <table className="table-auto w-full">
          <thead>
            <tr className="bg-gray-300 text-xs font-inter">
              <th className="px-2 py-2">
                <input type="checkbox" />
              </th>
              <th className="px-2 py-2">No</th>
              <th className="px-2 py-2">Nama</th>
              <th className="px-2 py-2">NIP</th>
              <th className="px-2 py-2">Total Kehadiran</th>
              <th className="px-2 py-2">Total Izin</th>
              <th className="px-2 py-2">Total Ketidakhadiran</th>
            </tr>
          </thead>
          <tbody>
            {presensi.map((item, index) => (
              <tr
                key={index}
                className="trLaporan border border-gray-200 text-xs bg-white font-inter"
              >
                <td className="px-2 py-2 text-center">
                  <input type="checkbox" />
                </td>
                <td className="px-2 py-2 text-center">{index + 1}</td>
                <td className="td px-2 py-2 text-center">
                  <a href="/detail-profile" className="hover:text-blue-950 ">
                    {item.nama}
                  </a>
                </td>
                <td className="td px-2 py-2 text-center">{item.username}</td>
                <td className="px-2 py-2 text-center">
                  <a
                    href="/detail-profile/detail-hadir"
                    className="flex justify-center items-center"
                  >
                    <span>
                      {item.jumlah_hadir !== undefined ? item.jumlah_hadir : 0}
                    </span>
                    <img src="/info.svg" alt="info" className="w-3 ml-1" />
                  </a>
                </td>
                <td className="px-2 py-2 text-center">
                  <a
                    href="/detail-profile/detail-izin"
                    className="flex justify-center items-center"
                  >
                    <span className="text-koneng">
                      {item.jumlah_izin !== undefined ? item.jumlah_izin : 0}
                    </span>
                    <img src="/info.svg" alt="info" className="w-3 ml-1" />
                  </a>
                </td>
                <td className="px-2 py-2 text-center">
                  <a
                    href="/detail-profile/detail-tidak-hadir"
                    className="flex justify-center items-center"
                  >
                    <span className="text-error">
                      {item.jumlah_tidak_hadir !== undefined
                        ? item.jumlah_tidak_hadir
                        : 0}
                    </span>
                    <img src="/info.svg" alt="info" className="w-3 ml-1" />
                  </a>
                </td>
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
