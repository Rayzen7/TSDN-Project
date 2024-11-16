import img3 from '/app/3.png'
import img4 from '/app/4.png'

const Section2 = () => {
  return (
    <div className='mt-16'>
        <div className='bg-green py-12 flex lg:flex-row flex-col justify-center items-center gap-16 w-full'>
            <div className='flex justify-center items-center gap-16'>
              <img src={img3} alt="" className='w-auto lg:h-[600px] h-[400px]'/>
              <img src={img4} alt="" className='w-auto lg:h-[600px] h-[400px]'/>
            </div>
            <div className='font-Poppins'>
                <h1 className='lg:text-[35px] text-[28px] mb-5 lg:px-0 px-7 font-[600]'>Proses Kerja Sistem Scanner (Fitur Utama)</h1>
                <div className='w-full lg:w-[700px] text-justify lg:px-0 px-7'>
                <p className='text-[18px] font-[600]'>1. Pengambilan Gambar</p>
                  <p className='text-[16px]'>Pengguna dapat memotret buah dengan membuka aplikasi dan menggunakan kamera ponsel. Aplikasi memeriksa izin untuk menggunakan kamera sebelum membuka kamera untuk mengambil gambar.</p>
                  <p className='text-[18px] font-[600] mt-5'>2. Pemrosesan Gambar</p>
                  <p className='text-[16px]'>Gambar yang diambil akan diproses, dikompresi, dan diubah menjadi byte array agar dapat dikirim ke server.</p>
                  <p className='text-[18px] font-[600] mt-5'>3. Kirim Gambar ke API Machine Learning</p>
                  <p className='text-[16px]'>Setelah dikompresi, gambar dikirim melalui API POST untuk dianalisis. API ini akan mengenali objek dalam gambar, seperti jenis buah.</p>
                  <p className='text-[18px] font-[600] mt-5'>4. Menerima Hasil Deteksi Buah</p>
                  <p className='text-[16px]'>Server mengembalikan hasil analisis dalam bentuk JSON, termasuk nama buah yang terdeteksi, misalnya &quot;pisang&quot; atau &quot;apel&quot;.</p>
                  <p className='text-[18px] font-[600] mt-5'>5. Mengambil Informasi Nutrisi</p>
                  <p className='text-[16px]'>Berdasarkan nama buah yang terdeteksi, aplikasi mengirim permintaan ke API lain untuk mendapatkan informasi nutrisi buah tersebut.</p>
                  <p className='text-[18px] font-[600] mt-5'>6. Menampilkan Informasi Nutrisi</p>
                  <p className='text-[16px]'>Informasi nutrisi seperti kalori, karbohidrat, lemak, dan protein ditampilkan pada layar dengan teks dan progress bar.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Section2