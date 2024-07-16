import React from "react";
import "src/styleInvoice/style.css";

const rowNumbers = Array.from({ length: 15 }, (_, index) => index + 1);
const Invoice = () => {
  const Data = [
    {
      id: 1,
      name: "Tangguh Hari Cahyono",
      masuk: "08:00",
      pulang: "08:00",
      mulai: "08:00",
      selesai: "08:00",
      totalJam: "08:00",
      lebih: "08:00",
      kurang: "08:00",
      logAktifitas: "Membuat tampilan responsive",
      sKehadiran: "Hadir",
      Kebaikan: "Merapihkan Sandal",
      status: true,
    },
    {
      id: 2,
      name: "Tangguh  Cahyono",
      masuk: "08:00",
      pulang: "08:00",
      mulai: "08:00",
      selesai: "08:00",
      totalJam: "08:00",
      lebih: "08:00",
      kurang: "08:00",
      logAktifitas: "Membuat tampilan responsive",
      sKehadiran: "Izin",
      Kebaikan: "Merapihkan Sandal",
      status: false,
    },
    {
      id: 3,
      name: "Tangguh Hari ",
      masuk: "08:00",
      pulang: "08:00",
      mulai: "08:00",
      selesai: "08:00",
      totalJam: "08:00",
      lebih: "08:00",
      kurang: "08:00",
      logAktifitas: "Membuat tampilan responsive",
      sKehadiran: "Tidak Hadir",
      Kebaikan: "Merapihkan Sandal",
      status: true,
    },
  ];
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
          Data per tanggal 01–09–2023
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
              const item = Data[rowNumber - 1]; // Adjust the index based on your data
              return (
                <tr key={rowNumber}>
                  <td>{rowNumber}</td>
                  <td>{item ? item.name : ""}</td>
                  <td>{item ? item.masuk : ""}</td>
                  <td>{item ? item.mulai : ""}</td>
                  <td>{item ? item.selesai : ""}</td>
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
