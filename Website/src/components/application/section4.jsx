import img1 from '/projects/a1.png'
import img2 from '/projects/a2.png'
import img3 from '/app/1.png'
import img4 from '/app/2.png'
import img5 from '/app/8.png'
import img6 from '/app/9.png'
import img7 from '/app/10.png'
import '../../App.css'

const Section4 = () => {
  return (
    <div className='mt-16'>
        <div className='bg-green py-12 flex flex-col-reverse justify-center items-center gap-16 w-full'>
            <div className='font-Poppins lg:px-0 px-7'>
            <div className='font-Poppins'>
                <h1 className='lg:text-[35px] text-[28px] mb-5 lg:px-0 px-7 font-[600]'>Proses Kerja Sistem Konsultasi dengan Faskes</h1>
                <div className='w-full lg:w-[900px] text-justify lg:px-0 px-7'>
                  <p className='text-[18px] font-[600]'>1. Pendaftaran dan Login Pengguna</p>
                  <p className='text-[16px]'>Pengguna melakukan registrasi atau login ke aplikasi menggunakan akun mereka. Setelah masuk, mereka dapat memilih untuk berkonsultasi dengan fasilitas kesehatan.</p>
                  <p className='text-[18px] font-[600] mt-5'>2. Memilih Faskes dan Jenis Layanan</p>
                  <p className='text-[16px]'>Pengguna memilih fasilitas kesehatan (Faskes) yang diinginkan dan jenis layanan konsultasi (dokter umum, spesialis, atau layanan lainnya).</p>
                  <p className='text-[18px] font-[600] mt-5'>3. Menyampaikan Gejala atau Pertanyaan</p>
                  <p className='text-[16px]'>Pengguna mengisi form atau mengetikkan gejala atau pertanyaan yang ingin mereka konsultasikan dengan tenaga medis yang tersedia.</p>
                  <p className='text-[18px] font-[600] mt-5'>6. Mendapatkan Hasil dan Rekomendasi</p>
                  <p className='text-[16px]'>Setelah konsultasi, pengguna menerima hasil diagnosis atau rekomendasi dari dokter, yang bisa berupa saran pengobatan, tindak lanjut, atau rujukan ke faskes lain.</p>
                </div>
            </div>
            </div>
            <div className='flex lg:flex-row flex-col justify-center items-center gap-10'>
              <img src={img5} alt="" className='w-auto lg:h-[500px] h-[300px]'/>
              <img src={img6} alt="" className='w-auto lg:h-[500px] h-[300px]'/>
              <img src={img7} alt="" className='w-auto lg:h-[500px] h-[300px]'/>
            </div>
        </div>
    </div>
  )
}

export default Section4