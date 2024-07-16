const currentDate = new Date();

const namaHari = [
    'Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'
];


const namaBulan = [
    'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli',
    'Agustus', 'September', 'Oktober', 'November', 'Desember'
];

const namaHariIndonesia = namaHari[currentDate.getDay()];
const tanggal = currentDate.getDate();
const namaBulanIndonesia = namaBulan[currentDate.getMonth()];
const tahun = currentDate.getFullYear();


const formattedDate = `${namaHariIndonesia}, ${tanggal} ${namaBulanIndonesia} ${tahun}`;

export default formattedDate


