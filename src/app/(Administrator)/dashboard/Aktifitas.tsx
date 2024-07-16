import { FaRegUser } from 'react-icons/fa'

interface Anggota {
    nama: string;
    waktu: string;
    kampus : string;
    tempatLahir : string;
    tanggalLahir : Date;
    NoHP : string;
    username : string;
    Email : String;
    Password : String;
    masuk : Date;
    keluar : Date;
}

interface ShowListProps {
    list: Anggota;
}

// Dataset Dummy
const anggotaBaru : Anggota [] = [
    {
        nama : 'Lalisa Fitriyani',
        waktu : '15 menit yang lalu',
        kampus : 'undaru',
        tempatLahir : 'Mowila',
        tanggalLahir : new Date('2002-09-23'),
        NoHP : '089945671223',
        username : 'Player01',
        Email : 'mendokusai123@yahoo.com',
        Password : 'waterPark01',
        masuk : new Date('2023-05-23'),
        keluar : new Date('2023-07-23')
    },
    {
        nama : 'Meyden Azalea',
        waktu : '26 menit yang lalu',
        kampus : 'undaru',
        tempatLahir : 'Mowila',
        tanggalLahir : new Date('2002-09-23'),
        NoHP : '089945671223',
        username : 'Player01',
        Email : 'mendokusai123@yahoo.com',
        Password : 'waterPark01',
        masuk : new Date('2023-05-23'),
        keluar : new Date('2023-07-23')
    },
    {
        nama : 'rehan satria',
        waktu : '33 menit yang lalu',
        kampus : 'undaru',
        tempatLahir : 'Mowila',
        tanggalLahir : new Date('2002-09-23'),
        NoHP : '089945671223',
        username : 'Player01',
        Email : 'mendokusai123@yahoo.com',
        Password : 'waterPark01',
        masuk : new Date('2023-05-23'),
        keluar : new Date('2023-07-23')
    },
    {
        nama : 'David Eslam',
        waktu : '49 menit yang lalu',
        kampus : 'undaru',
        tempatLahir : 'Mowila',
        tanggalLahir : new Date('2002-09-23'),
        NoHP : '089945671223',
        username : 'Player01',
        Email : 'mendokusai123@yahoo.com',
        Password : 'waterPark01',
        masuk : new Date('2023-05-23'),
        keluar : new Date('2023-07-23')
    },
    {
        nama : 'Berten tiaga',
        waktu : '55 menit yang lalu',
        kampus : 'undaru',
        tempatLahir : 'Mowila',
        tanggalLahir : new Date('2002-09-23'),
        NoHP : '089945671223',
        username : 'Player01',
        Email : 'mendokusai123@yahoo.com',
        Password : 'waterPark01',
        masuk : new Date('2023-05-23'),
        keluar : new Date('2023-07-23')
    },
    {
        nama : 'Fikrus sidqi',
        waktu : '1 jam yang lalu',
        kampus : 'undaru',
        tempatLahir : 'Mowila',
        tanggalLahir : new Date('2002-09-23'),
        NoHP : '089945671223',
        username : 'Player01',
        Email : 'mendokusai123@yahoo.com',
        Password : 'waterPark01',
        masuk : new Date('2023-05-23'),
        keluar : new Date('2023-07-23')
    },
    {
        nama : 'Megawatt isukar',
        waktu : '1 jam yang lalu',
        kampus : 'undaru',
        tempatLahir : 'Mowila',
        tanggalLahir : new Date('2002-09-23'),
        NoHP : '089945671223',
        username : 'Player01',
        Email : 'mendokusai123@yahoo.com',
        Password : 'waterPark01',
        masuk : new Date('2023-05-23'),
        keluar : new Date('2023-07-23')
    },
    {
        nama : 'Puanmah Arani',
        waktu : '2 jam yang lalu',
        kampus : 'undaru',
        tempatLahir : 'Mowila',
        tanggalLahir : new Date('2002-09-23'),
        NoHP : '089945671223',
        username : 'Player01',
        Email : 'mendokusai123@yahoo.com',
        Password : 'waterPark01',
        masuk : new Date('2023-05-23'),
        keluar : new Date('2023-07-23')
    },
    {
        nama : 'Gan Jarpran',
        waktu : '3 jam yang lalu',
        kampus : 'undaru',
        tempatLahir : 'Mowila',
        tanggalLahir : new Date('2002-09-23'),
        NoHP : '089945671223',
        username : 'Player01',
        Email : 'mendokusai123@yahoo.com',
        Password : 'waterPark01',
        masuk : new Date('2023-05-23'),
        keluar : new Date('2023-07-23')
    },
    {
        nama : 'Hang Krima',
        waktu : '4 jam yang lalu',
        kampus : 'undaru',
        tempatLahir : 'Mowila',
        tanggalLahir : new Date('2002-09-23'),
        NoHP : '089945671223',
        username : 'Player01',
        Email : 'mendokusai123@yahoo.com',
        Password : 'waterPark01',
        masuk : new Date('2023-05-23'),
        keluar : new Date('2023-07-23')
    },
]


export default function Aktifitas(){
    // buat fungsi looping dataset 
    const listsElements = anggotaBaru.map((list, index) => (
        <ShowList key={index} list={list} />
    ))

    // buat properti untuk memasukan dataset yg dilooping ke dalam body HTML
    function ShowList({list}: ShowListProps){
        return(
            <span className=' flex gap-5 p-4 items-center'>
                <div className='bg-h1 w-fit h-fit p-2 rounded-full'>
                    <div className=' text-white'>
                        <FaRegUser />
                    </div>
                </div>
                <div className='flex gap-4 w-full h-full items-center'>
                    <b className='w-1/2 text-s'>{list.nama} </b>
                    <p className='w-1/2 text-xs'>{list.waktu}</p>
                </div>
            </span>
        )
    }

    return(
        <div className='w-full md:w-1/2 md:h-[840px] overscroll-auto overflow-auto flex flex-col shadow-2xl border right-0 top-[150px] bg-[#E9E9E9]'>
            <div className='sticky top-0 bg-[#E9E9E9] p-4 shadow-md'>
                <b>Aktifitas Terbaru</b>
            </div>

            <div className='flex flex-col m-2'>
                {listsElements}
            </div>

        </div>
    )
}