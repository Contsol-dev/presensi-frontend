import Aktif, {Anggota, anggotaBaru} from './Aktif';
// Dataset Dummy

interface ShowListProps {
    list: Anggota;
    onClick: (list: Anggota) => void;
}

interface ListProps {
    setSelectedKey: (key: any) => void;
    updatePilihan: (stat: string) => void;
}

export default function List({ setSelectedKey, updatePilihan }: ListProps){
    
    // buat fungsi onClick
    const handlePilihanChange = (key: number) => {
        setSelectedKey(key)
        const stat = 'data'
        updatePilihan(stat);
    }

    // buat fungsi looping dataset 
    const listsElements = anggotaBaru.map((list, index) => (
        <ShowList key={index} list={list} onClick={() => handlePilihanChange(index)} />
    ))

    // buat properti untuk memasukan dataset yg dilooping ke dalam body HTML
    function ShowList({list, onClick}: ShowListProps){
        return(
                    <li 
                        className='md:flex gap-4 w-full h-full items-center m-2 p-2 bg-zinc-300 border-2 rounded-lg border-zinc-400 shadow-xl cursor-pointer'                
                        onClick={() => onClick(list)}
                    >
                        <b className='w-2/3 text-s'>{list.nama} </b>
                        <p className='w-1/3 text-xs whitespace-nowrap'>{list.waktu}</p>
                    </li>
        )
    }
    return(
        <div>
            <ul 
                className='list-group ml-5'
            >
                {listsElements}
            </ul>
        </div>
    )
}
