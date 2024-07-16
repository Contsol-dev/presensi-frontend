import React, { useState } from 'react'
import Detail from './Detail'
import List from './List';
import SearchBar from './SearchBar';
import Contents from './Contents';
import Filter from './Filter';
import Sunting from './Sunting';
import Nilai from './Nilai';

interface Anggota {
    id : string;
    nama: string;
    NIP: string;
    waktu: string;
    kampus : string;
    tempatLahir : string;
    tanggalLahir : Date;
    NoHP : string;
    username : string;
    Email : string;
    Password : string;
    masuk : Date;
    keluar : Date;
    project : string;
    status : boolean;
}

const anggotaBaru : Anggota [] = [
    {
        id : '01',
        nama : 'Lalisa Fitriyani',
        NIP : 'MJ/UIUX/POLINES/AGST2023/07',
        waktu : '15 menit yang lalu',
        kampus : 'undaru',
        tempatLahir : 'Mowila',
        tanggalLahir : new Date('2002-09-23'),
        NoHP : '089945671223',
        username : 'Player01',
        Email : 'mendokusai123@yahoo.com',
        Password : 'waterPark01',
        masuk : new Date('2023-05-23'),
        keluar : new Date('2023-07-23'),
        project : 'Titip Sini',
        status : false
    },
    {
        id : '02',
        nama : 'Meyden Azalea',
        NIP : 'MJ/UIUX/POLINES/AGST2023/07',
        waktu : '26 menit yang lalu',
        kampus : 'undaru',
        tempatLahir : 'Mowila',
        tanggalLahir : new Date('2002-09-23'),
        NoHP : '089945671223',
        username : 'Player01',
        Email : 'mendokusai123@yahoo.com',
        Password : 'waterPark01',
        masuk : new Date('2023-05-23'),
        keluar : new Date('2023-07-23'),
        project : 'Presensi',
        status : false
    },
    {
        id : '03',
        nama : 'Rehan Satria',
        NIP : 'MJ/UIUX/POLINES/AGST2023/07',
        waktu : '33 menit yang lalu',
        kampus : 'undaru',
        tempatLahir : 'Mowila',
        tanggalLahir : new Date('2002-09-23'),
        NoHP : '089945671223',
        username : 'Player01',
        Email : 'mendokusai123@yahoo.com',
        Password : 'waterPark01',
        masuk : new Date('2023-05-23'),
        keluar : new Date('2023-07-23'),
        project : 'Titip Sini',
        status : false
    },
    {
        id : '04',
        nama : 'David Eslam',
        NIP : 'MJ/UIUX/POLINES/AGST2023/07',
        waktu : '49 menit yang lalu',
        kampus : 'undaru',
        tempatLahir : 'Mowila',
        tanggalLahir : new Date('2002-09-23'),
        NoHP : '089945671223',
        username : 'Player01',
        Email : 'mendokusai123@yahoo.com',
        Password : 'waterPark01',
        masuk : new Date('2023-05-23'),
        keluar : new Date('2023-07-23'),
        project : 'Titip Sini',
        status : false
    },
    {
        id : '05',
        nama : 'Berten tiaga',
        NIP : 'MJ/UIUX/POLINES/AGST2023/07',
        waktu : '55 menit yang lalu',
        kampus : 'undaru',
        tempatLahir : 'Mowila',
        tanggalLahir : new Date('2002-09-23'),
        NoHP : '089945671223',
        username : 'Player01',
        Email : 'mendokusai123@yahoo.com',
        Password : 'waterPark01',
        masuk : new Date('2023-05-23'),
        keluar : new Date('2023-07-23'),
        project : 'Titip Sini',
        status : false
    },
    {
        id : '06',
        nama : 'Fikrus sidqi',
        NIP : 'MJ/UIUX/POLINES/AGST2023/07',
        waktu : '1 jam yang lalu',
        kampus : 'undaru',
        tempatLahir : 'Mowila',
        tanggalLahir : new Date('2002-09-23'),
        NoHP : '089945671223',
        username : 'Player01',
        Email : 'mendokusai123@yahoo.com',
        Password : 'waterPark01',
        masuk : new Date('2023-05-23'),
        keluar : new Date('2023-07-23'),
        project : 'Presensi',
        status : false
    },
    {
        id : '07',
        nama : 'Megawatt isukar',
        NIP : 'MJ/UIUX/POLINES/AGST2023/07',
        waktu : '1 jam yang lalu',
        kampus : 'undaru',
        tempatLahir : 'Mowila',
        tanggalLahir : new Date('2002-09-23'),
        NoHP : '089945671223',
        username : 'Player01',
        Email : 'mendokusai123@yahoo.com',
        Password : 'waterPark01',
        masuk : new Date('2023-05-23'),
        keluar : new Date('2023-07-23'),
        project : 'Titip Sini',
        status : false
    },
    {
        id : '08',
        nama : 'Puanmah Arani',
        NIP : 'MJ/UIUX/POLINES/AGST2023/07',
        waktu : '2 jam yang lalu',
        kampus : 'undaru',
        tempatLahir : 'Mowila',
        tanggalLahir : new Date('2002-09-23'),
        NoHP : '089945671223',
        username : 'Player01',
        Email : 'mendokusai123@yahoo.com',
        Password : 'waterPark01',
        masuk : new Date('2023-05-23'),
        keluar : new Date('2023-07-23'),
        project : 'Presensi',
        status : false
    },
    {
        id : '09',
        nama : 'Gan Jarpran',
        NIP : 'MJ/UIUX/POLINES/AGST2023/07',
        waktu : '3 jam yang lalu',
        kampus : 'undaru',
        tempatLahir : 'Mowila',
        tanggalLahir : new Date('2002-09-23'),
        NoHP : '089945671223',
        username : 'Player01',
        Email : 'mendokusai123@yahoo.com',
        Password : 'waterPark01',
        masuk : new Date('2023-05-23'),
        keluar : new Date('2023-07-23'),
        project : 'Presensi',
        status : false
    },
    {
        id : '10',
        nama : 'Hang Krima',
        NIP : 'MJ/UIUX/POLINES/AGST2023/07',
        waktu : '4 jam yang lalu',
        kampus : 'undaru',
        tempatLahir : 'Mowila',
        tanggalLahir : new Date('2002-09-23'),
        NoHP : '089945671223',
        username : 'Player01',
        Email : 'mendokusai123@yahoo.com',
        Password : 'waterPark01',
        masuk : new Date('2023-05-23'),
        keluar : new Date('2023-07-23'),
        project : 'Titip Sini',
        status : false
    },
]

export { anggotaBaru };
    export type { Anggota };

export default function Aktif(){
    // buat fungsi
    const [pilihan, setPilihan] = useState('aktif');

    const [selectedKey, setSelectedKey] = useState(null)
    const handleEditClick = (aktif : any) => {
        setSelectedKey(aktif); // Mengatur selectedKey ke indeks yang benar
    };

    const handleStatusChange = (status: string) => setPilihan(status)

    const updatePilihan = (stat: string) => {
        setPilihan(stat);
    };

    const updatePilihan1 = (stat: string) => {
        setPilihan(stat);
    };

    const updatePilihan2 = (stat: string) => {
        setPilihan(stat);
    };
    return (
        <>
            {/* tampilan pilihan = aktif */}
            {pilihan == 'aktif' && 
            <>
                <SearchBar />
                <div className='team flex'>
                    <h4 
                        className='selected'
                        style={{ marginLeft: '20px', cursor: 'pointer', textDecoration: 'underline' }} 
                        onClick={() => handleStatusChange('aktif')} 
                    >
                        <b>Aktif</b>
                    </h4>
                    <h4 
                        className='selected relative'
                        style={{ marginLeft: '20px', cursor: 'pointer',}} 
                        onClick={() => handleStatusChange('tdkAktif')}
                    >
                        <span className='absolute blok rounded-full h-3 w-3 text-white text-[10px] right-0 flex justify-center items-center bg-red-700'>
                            {anggotaBaru.length}
                        </span>
                        <b>Tidak Aktif</b>
                    </h4>
                </div>
                <Contents updatePilihan={updatePilihan}/>
            </>
            } 

            {/* tampilan pilihan = Filter */}
            {pilihan == 'filter' &&
                <div className='flex flex-rows'>
                    <div 
                        className='selected relative m-5'
                        style={{ marginLeft: '20px', cursor: 'pointer', textDecoration:'underline' }} 
                        onClick={() => handleStatusChange('aktif')}
                    > 
                        <svg width="18" height="28" viewBox="0 0 20 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.5 3L3 19.2021L17.5 35.4043" stroke="black" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <Filter updatePilihan1={updatePilihan1} updatePilihan2={updatePilihan2} />
                </div>
            }

            {/* tampilan pilihan = sunting */}
            {pilihan == 'sunting' &&
            <div className='flex flex-rows'>
                <div 
                    className='selected relative m-5'
                    style={{ marginLeft: '20px', cursor: 'pointer', textDecoration:'underline' }} 
                    onClick={() => handleStatusChange('aktif')}
                > 
                    <svg width="18" height="28" viewBox="0 0 20 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.5 3L3 19.2021L17.5 35.4043" stroke="black" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div>
                    {selectedKey !== null && (
                        <Sunting selectedKey={selectedKey} selectedDetail={anggotaBaru[selectedKey]} />
                    )}
                </div>
            </div>
            }

            {/* tampilan pilihan = nilai */}
            {pilihan == 'nilai' &&
            <div className='flex flex-rows'>
                <div 
                    className='selected relative m-5'
                    style={{ marginLeft: '20px', cursor: 'pointer', textDecoration:'underline' }} 
                    onClick={() => handleStatusChange('filter')}
                > 
                    <svg width="18" height="28" viewBox="0 0 20 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.5 3L3 19.2021L17.5 35.4043" stroke="black" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            <div>
                <Nilai />
                </div>
            </div>
            }

            {/* tampilan pilihan = tidak aktif */}
            {pilihan == 'tdkAktif' &&
                <div className=''>
                    <div className='sticky flex mt-8'>
                        <h4 
                            className='selected'
                            style={{ marginLeft: '20px', cursor: 'pointer'}} 
                            onClick={() => handleStatusChange('aktif')} 
                        >
                            <b>Aktif</b>
                        </h4>
                        <h4 
                            className='selected relative'
                            style={{ marginLeft: '20px', cursor: 'pointer', textDecoration:'underline' }} 
                            onClick={() => handleStatusChange('tdkAktif')}
                        >
                            <b>Tidak Aktif</b>
                        </h4>
                    </div>
                    <div className='flex flex-col m-2'>
                        <List setSelectedKey={setSelectedKey} updatePilihan={updatePilihan} />
                    </div>
                    
                </div>
            }

            {/* tampilan pilihan = data */}
            {pilihan == 'data' &&
            <div className='flex flex-rows'>
                <div 
                    className='selected relative m-5'
                    style={{ marginLeft: '20px', cursor: 'pointer', textDecoration:'underline' }} 
                    onClick={() => handleStatusChange('tdkAktif')}
                > 
                    <svg width="18" height="28" viewBox="0 0 20 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.5 3L3 19.2021L17.5 35.4043" stroke="black" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div>
                    {selectedKey !== null && (
                        <Detail selectedKey={selectedKey} selectedDetail={anggotaBaru[selectedKey]} />
                    )}
                </div>
            </div>
            }
        </>
    )
}


