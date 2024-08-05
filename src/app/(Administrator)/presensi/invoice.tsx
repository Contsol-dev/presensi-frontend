import React, { useState, useEffect } from "react";
import axios from "axios";
import "@/styleInvoice/style.css";

interface InvoiceProps {
  filter: string;
  search: string;
}
interface PresensiData {
  nama: string;
  masuk: string;
  pulang: string;
  istirahat: string;
  kembali: string;
  log_activity: string;
  kehadiran: string;
  kebaikan: string;
}

const today = new Date().toLocaleDateString("id-ID", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

const Invoice = ({ filter, search }: InvoiceProps) => {
  const [data, setData] = useState<PresensiData[]>([]);

  const fetchPresensi = async () => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/admin/presensi/harian",
        {
          filter: filter,
          nama: search,
        }
      );
      console.log(response.data);
      setData(response.data.presensi);
    } catch (error) {
      console.log(error);
    }
  };

  const rowNumbers = Array.from(
    { length: data.length },
    (_, index) => index + 1
  );

  useEffect(() => {
    fetchPresensi();
  }, [filter, search]);

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
          PRESENSI HARIAN
        </h3>
        <p style={{ fontSize: "14px", fontWeight: "bold" }}>
          Data per tanggal {today}
        </p>
        <table>
          <thead>
            <tr>
              <th>No</th>
              <th>Nama</th>
              <th>Masuk</th>
              <th>Istirahat</th>
              <th>Kembali</th>
              <th>Pulang</th>
            </tr>
          </thead>
          <tbody>
            {rowNumbers.map((rowNumber) => {
              const item = data[rowNumber - 1]; // Adjust the index based on your data
              return (
                <tr key={rowNumber}>
                  <td>{rowNumber}</td>
                  <td>{item ? item.nama : ""}</td>
                  <td>{item ? item.masuk : ""}</td>
                  <td>{item ? item.istirahat : ""}</td>
                  <td>{item ? item.kembali : ""}</td>
                  <td>{item ? item.pulang : ""}</td>
                </tr>
              );
            })}
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
