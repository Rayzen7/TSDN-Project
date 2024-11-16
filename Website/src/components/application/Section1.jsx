import img1 from '/projects/a1.png'
import img2 from '/projects/a2.png'
import img3 from '/app/1.png'
import img4 from '/app/2.png'
import '../../App.css'

const Section1 = () => {
  return (
    <div className='mt-16'>
        <div className='bg-orange lg:py-0 py-12 flex lg:flex-row flex-col-reverse justify-center items-center gap-16 w-full'>
            <div className='font-Poppins lg:px-0 px-7'>
                <h1 className='lg:text-[35px] text-[28px] mb-5 font-[600]'>Import Pustaka Retrofit <br />untuk Konsumsi API</h1>
                <p className='text-[18px]'>1. Import Pustaka yang diperlukan</p>
                <p className='text-[18px]'>2. Buat Activity/Page</p>
            </div>
            <div className='flex lg:flex-row flex-col justify-center items-center gap-10'>
              <img src={img3} alt="" className='w-auto lg:h-[400px] h-[300px]'/>
              <img src={img4} alt="" className='w-auto lg:h-[400px] h-[300px]'/>
            </div>
        </div>
    </div>
  )
}

export default Section1