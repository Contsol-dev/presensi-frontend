import React, { useState, useEffect } from "react";
import axios from "axios";
import "@/styleInvoice/style.css";

interface InvoiceProps {
  username: string;
}

const today = new Date().toLocaleDateString("id-ID", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

const Invoice = ({ username }: InvoiceProps) => {
  const [data, setData] = useState([]);
  const [nama, setNama] = useState("");
  const [nip, setNip] = useState("");

  const fetchPresensi = async () => {
    try {
      const response = await axios.get(
        `http://127.0.0.1:8000/admin/penilaian/${username}`
      );
      console.log(response.data);
      setData(response.data.penilaian);
      setNama(response.data.username);
      setNip(response.data.nip);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPresensi();
  }, [username]);

  return (
    <div className="invoice-container z-10">
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
        <h3 style={{ fontSize: "18px", fontWeight: "bold" }}>Nilai {nama}</h3>
        <p style={{ fontSize: "14px", fontWeight: "bold" }}>NIP : {nip}</p>
        <div className="pb-5 px-2 flex flex-wrap flex-col mt-5 font-inter text-xs gap-5 justify-between mx-auto border w-100">
          {data.map((kategori) => (
            <div className="" key={kategori.kategori.id}>
              <p className="font-bold">{kategori.kategori.nama_kategori}</p>
              {kategori.kategori.sub_kategori &&
                kategori.kategori.sub_kategori.map((sub) => (
                  <span className="flex mt-2 justify-between" key={sub.id}>
                    <p className="mr-2">{sub.nama}</p>
                    <a className="w-[30%] border border-solid border-1 border-black rounded-md">
                      {sub.nilai}
                    </a>
                  </span>
                ))}
            </div>
          ))}
        </div>
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
