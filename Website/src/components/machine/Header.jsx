import logo from '/logo-healthyfy-color.png'
import '../../App.css'

const Header = () => {
  return (
    <div className='flex lg:flex-row flex-col-reverse justify-center items-center font-Poppins gap-20 lg:gap-44 py-12'>
      <div className='flex flex-col gap-5'>
          <div className='lg:text-start text-center'>
              <h1 className='font-[600] text-[30px] lg:text-[38px]'>Nutrition Scanner</h1>
              <p className='lg:text-[20px] lg:px-0 px-5 text-[17px]'>Sistem Scanner Nutrisi dengan menggunakan <br /> OpenCV Python</p>
          </div>
          <p className='lg:w-[800px] w-full text-justify lg:px-0 px-5 text-[15px] lg:text-[18px] lg:pt-0 pt-6'>OpenCV adalah pustaka untuk pengolahan gambar yang memungkinkan deteksi dan analisis objek. Dalam scanner makanan, OpenCV digunakan untuk mengubah gambar menjadi format yang dapat dianalisis, seperti mendeteksi warna dominan dan bentuk makanan, membantu sistem mengenali jenis makanan seperti pisang atau apel berdasarkan fitur visual.</p>
      </div>
      <img src={logo} alt="" className='w-[100px] h-auto'/>
    </div>
  )
}

export default Header