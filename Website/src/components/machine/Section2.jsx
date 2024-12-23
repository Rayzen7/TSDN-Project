import img from '/projects/b1.png'

const Section2 = () => {
  return (
    <div className='mt-16'>
        <div className='bg-green py-12 flex lg:flex-row flex-col justify-center items-center gap-16 w-full'>
            <div className='flex justify-center items-center'>
              <img src={img} alt="" className='w-auto lg:h-[600px] h-[400px]'/>
            </div>
            <div className='font-Poppins'>
                <h1 className='lg:text-[35px] text-[28px] mb-5 lg:px-0 px-7 font-[600]'>Image Proccessing</h1>
                <div className='w-full lg:w-[700px] text-justify lg:px-0 px-7'>
                  <p className='text-[18px] font-[600]'>1. Pendaftaran gambar.</p>
                  <p className='text-[16px]'>Gambar pada folder assets akan di ambil untuk pendaftaran.</p>
                  <p className='text-[18px] font-[600] mt-5'>2. Preprocessing</p>
                  <p className='text-[16px]'>Gambar diubah menjadi grayscale untuk mempermudah analisis, kemudian fitur penting diekstraksi menggunakan ORB. Gambar juga diubah ke format HSV untuk mendeteksi warna dominan (kuning, merah, atau hijau), dengan menghitung persentase area warna menggunakan mask/filter.</p>
                  <p className='text-[18px] font-[600] mt-5'>3. Ekstraksi Fitur</p>
                  <p className='text-[16px]'>Sistem mencocokkan fitur gambar unggahan dengan referensi menggunakan ORB. Warna dominan dihitung untuk mengidentifikasi jenis buah.</p>
                  <p className='text-[18px] font-[600] mt-5'>4. Pelatihan Model</p>
                  <p className='text-[16px]'>Sistem dilatih menggunakan data referensi untuk mempelajari pola, bentuk, sudut, dan warna gambar. Proses ini memungkinkan model mengenali dan mencocokkan gambar unggahan dengan akurasi yang lebih tinggi.</p>
                  <p className='text-[18px] font-[600] mt-5'>5. Model Analisis</p>
                  <p className='text-[16px]'>Sistem menentukan jenis makanan berdasarkan warna dominan dan memverifikasi apakah warna tersebut sesuai dengan aturan serta data gizi makanan tersebut.</p>
                  <p className='text-[18px] font-[600] mt-5'>6. Output</p>
                  <p className='text-[16px]'>Sistem mengembalikan nama makanan dan warna dominan. Jika tidak cocok, sistem memberikan pesan error.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Section2