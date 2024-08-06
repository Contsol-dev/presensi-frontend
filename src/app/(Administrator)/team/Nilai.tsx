import { useEffect, useState } from 'react';

export default function Nilai({ username, divisi_id }) {
    const [data, setData] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(`http://127.0.0.1:8000/admin/manage-penilaian/${divisi_id}`);
          const result = await response.json();
          setData(result);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, [divisi_id]);

    const handlerSubmitNilai = async (e) => {
        e.preventDefault();
        alert('submit hehe');
    }
    
    return (
        <div className='basis-3/4'>
            <div className="flex font-inter mt-2 text-[#FFFFFF] bg-[#404040] items-center border border-1 border-solid border-black p-2">
            <div className="mx-2">
                <svg width="75" height="79" viewBox="0 0 95 99" fill="none" xmlns="http://www.w3.org/2000/svg">
                <ellipse cx="47.5" cy="49.5" rx="47.5" ry="49.5" fill="#BA181B" />
                <path
                    d="M47.927 19C40.5221 19 34.4635 26.464 34.4635 35.6608C34.4635 44.8575 40.5221 52.3215 47.927 52.3215C55.3319 52.3215 61.3905 44.8575 61.3905 35.6608C61.3905 26.464 55.3319 19 47.927 19ZM33.8576 52.3215C26.722 52.6547 21 58.4527 21 65.6501V72.3145H74.854V65.6501C74.854 58.4527 69.1993 52.6547 61.9964 52.3215C58.3612 56.3868 53.3797 58.9858 47.927 58.9858C42.4743 58.9858 37.4928 56.3868 33.8576 52.3215Z"
                    fill="#E9E9E9"
                />
                </svg>
            </div>
            <div className="flex font-inter flex-col text-xs p-2 gap-1">
                <p className="font-bold">Syalita Widyandini</p>
                <p>NIP : MJ/UI/UX/POLINES/AGST2023/06</p>
            </div>
            </div>
            <div className="flex items-center justify-center p-3 bg-[#eeeded]">
            <h1 className="font-bold font-inter text-sm">INPUT NILAI MAGANG</h1>
            </div>
            <form className="bg-[#eeeded] px-10 text-xs text-[#00000099]">
            <div className="pb-5 px-2 flex flex-wrap font-inter text-xs  gap-5 justify-between">
                <div className="basis-3/4 ">
                <p className="font-bold">Pengetahuan</p>
                <span className="flex mt-2 justify-between">
                    <p className="mr-2">Desain Thinking</p>
                    <input type="text" className="w-[30%] border border-solid border-1 border-black rounded-md" />
                </span>
                <span className="flex mt-2 justify-between">
                    <p className="mr-2">Pemahaman penerapan Desain</p>
                    <input type="text" className="w-[30%] border border-solid border-1 border-black rounded-md" />
                </span>
                </div>
            </div>
            <div className="p-2">
                <p>Kritik & Saran</p>
                <input type="text" className="w-full h-16 mt-2 border border-solid border-1 border-black rounded-md" />
            </div>
            <div className="flex items-center justify-center py-5">
                <button onClick={(e) => handlerSubmitNilai(e)} className="bg-[#A4161A] rounded-md text-xs text-white px-4 py-2">Simpan</button>
            </div>
            </form>
        </div>
        );
    }