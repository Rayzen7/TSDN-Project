import img1 from '/projects/c1.png'

const Section3 = () => {
  return (
    <div className='mt-16'>
        <div className='bg-orange lg:flex-row flex-col-reverse py-12 flex justify-center items-center gap-16 lg:gap-32 w-full'>
            <div className='font-Poppins'>
                <h1 className='text-[35px] mb-5 font-[600] lg:px-0 px-7'>Train & Test</h1>
                <div className='lg:w-[600px] w-full lg:px-0 px-7 text-justify'>
                  <p className='text-[16px]'>1. ORB mengekstraksi poin-poin penting (keypoints) pada gambar, seperti sudut, tepi, atau pola</p>
                  <p className='text-[16px]'>2. Setelah fitur-fitur ini diekstrak, algoritma mencocokkan fitur dari dua gambar (gambar yang diunggah dan gambar referensi)</p>
                  <p className='text-[16px]'>3. Jika jumlah fitur yang cocok melebihi ambang batas tertentu, maka sistem menganggap kedua gambar itu sama.</p>
                </div>
            </div>
            <div className='flex flex-col justify-center items-center gap-10'>
              <img src={img1} alt="" className='w-[300px] lg:w-[450px] h-auto'/>
            </div>
        </div>
    </div>
  )
}

export default Section3