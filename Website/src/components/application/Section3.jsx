import img5 from '/app/5.png'
import img6 from '/app/6.png'
import img7 from '/app/7.png'
import '../../App.css'

const Section3 = () => {
  return (
    <div className='mt-16'>
        <div className='bg-orange py-12 flex flex-col-reverse justify-center items-center gap-16 w-full'>
            <div className='font-Poppins lg:px-0 px-7'>
            <div className='font-Poppins'>
                <h1 className='lg:text-[35px] text-[28px] mb-5 lg:px-0 px-7 font-[600]'>Proses Kerja Sistem Gizi Assisten</h1>
                <div className='w-full lg:w-[900px] text-justify lg:px-0 px-7'>
                <p className='text-[18px] font-[600]'>1. Input Deskripsi dan Kategori Makanan</p>
                  <p className='text-[16px]'>Pengguna memasukkan deskripsi makanan yang diinginkan dan memilih kategori makanan (buah, sayuran, daging, umbi) dari pilihan yang tersedia.</p>
                  <p className='text-[18px] font-[600] mt-5'>2. Mencari Resep Makanan</p>
                  <p className='text-[16px]'>Berdasarkan input deskripsi dan kategori, sistem akan menampilkan resep-resep makanan yang relevan dengan pilihan pengguna.</p>
                  <p className='text-[18px] font-[600] mt-5'>3. Memilih Menu dan Bahan</p>
                  <p className='text-[16px]'>Pengguna dapat memilih resep tertentu dari daftar yang ditampilkan, serta bahan-bahan yang diperlukan untuk membuat makanan tersebut.</p>
                  <p className='text-[18px] font-[600] mt-5'>4. Langkah-langkah Pembuatannya</p>
                  <p className='text-[16px]'>Sistem akan menampilkan langkah-langkah pembuatan resep yang telah dipilih, memandu pengguna dari awal hingga selesai.</p>
                  <p className='text-[18px] font-[600] mt-5'>5. Informasi Gizi</p>
                  <p className='text-[16px]'>Setelah memilih resep, sistem akan memberikan informasi nutrisi, seperti kalori, karbohidrat, lemak, protein, dan serat dari bahan-bahan yang digunakan dalam resep tersebut.</p>
                </div>
            </div>
            </div>
            <div className='flex lg:flex-row flex-col justify-center items-center gap-10'>
              <img src={img5} alt="" className='w-auto lg:h-[500px] h-[800px]'/>
              <img src={img6} alt="" className='w-auto lg:h-[500px] h-[800px]'/>
              <img src={img7} alt="" className='w-auto lg:h-[500px] h-[800px]'/>
            </div>
        </div>
    </div>
  )
}

export default Section3