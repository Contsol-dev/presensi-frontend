/* eslint-disable @next/next/no-img-element */
export default function Dashboard(){
    return(
        <div className='flex flex-col gap-5 w-full md:w-1/2'>

            {/* baris 1 */}
            <div className='row-1 flex flex-col md:flex-row gap-5'>

                <div className='relative bg-blue-600 rounded-xl flex flex-col w-full md:h-[261px] md:w-[230px] p-5 text-white gap-1'>
                    <b className='h-1/3'>Jumlah Pemagang</b>
                    <b className='h-2/3 text-4xl '>300</b>
                    <img src="/dashboardLogoJumlahPemagang.svg" alt="" className='absolute bottom-0 right-0' />

                </div>
                
                <div className='relative bg-[#626332] rounded-xl flex flex-col w-full md:h-[261px] md:w-[230px] p-5 text-white gap-1'>
                    <b className='h-1/3'>Alumni</b>
                    <b className='h-2/3 text-4xl '>800</b>
                    <img src="/dashboardLogoAlumni.svg" alt="" className='absolute bottom-0 right-0' />
                </div>
            </div>

            {/* baris 2 */}
            <div className='row-2 flex flex-col md:flex-row gap-5'>
                <div className='relative bg-[#169423] rounded-xl flex flex-col w-full md:h-[261px] md:w-[230px] p-5 text-white gap-1'>
                    <b className='h-1/3'>Masuk</b>
                    <b className='h-2/3 text-4xl '>10</b>
                    <img src="/dashboardLogoMasuk.svg" alt="" className='absolute bottom-0 right-0' />
                </div>

                <div className='relative bg-[#CA3636] rounded-xl flex flex-col w-full md:h-[261px] md:w-[230px] p-5 text-white gap-1'>
                    <b className='h-1/3'>Tidak Masuk</b>
                    <b className='h-2/3 text-4xl '>300</b>
                    <img src="/dashboardLogoTidakMasuk.svg" alt="" className='absolute bottom-0 right-0' />
                </div>
            </div>

            {/* baris 3 */}
            <div className='flex gap-5'>
                <div className='relative bg-[#FF8A00] rounded-xl flex flex-col w-full md:h-[261px] md:w-[230px] p-5 text-white gap-1'>
                    <b className='h-1/3'>Izin</b>
                    <b className='h-2/3 text-4xl '>800</b>
                    <img src="/dashboardLogoIzin.svg" alt="" className='absolute bottom-0 right-0' />
                </div>
            </div>
        </div>
    )
}