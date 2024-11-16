import nadine from '/nadine1.png';
import pandu from '/pandu1.png';
import setio from '/setio1.png';
import rasya from '/rasya1.png';
import instagram from '/instagram.png';

const OurTim = () => {
  return (
    <div>
        <h1 className='text-center font-Poppins font-[600] text-[40px] mt-10 mb-12'>Our Tim</h1>
        <div className='flex lg:flex-row flex-col justify-center items-center gap-x-0 lg:gap-x-48 gap-y-20 mt-7 flex-wrap px-16 lg:px-64'>
            <div className='flex-col flex gap-5'>
                <img src={rasya} alt="" className='w-[220px] h-auto mx-auto block'/>
                <div>
                    <h1 className='text-[30px] font-Poppins'>M. Rasya</h1>
                    <p className='font-Poppins font-[600]'>UI/UX Designer</p>
                    <div className='flex items-center gap-2 mt-3'>
                        <img src={instagram} alt="" className='w-[30px] h-auto'/>
                        <a href="https://www.instagram.com/rasya_wantoroo/?__pwa=1#" target='_blank' className='text-blue-500'>@rasya_wantoroo</a>
                    </div>
                </div>
            </div>
            <div className='flex-col flex gap-5'>
                <img src={setio} alt="" className='w-[220px] h-auto mx-auto block'/>
                <div>
                    <h1 className='text-[30px] font-Poppins'>Setio</h1>
                    <p className='font-Poppins font-[600]'>Machine Learning</p>
                    <div className='flex items-center gap-2 mt-3'>
                        <img src={instagram} alt="" className='w-[30px] h-auto'/>
                        <a href="https://www.instagram.com/scaxh_/?__pwa=1" target='_blank' className='text-blue-500'>@Scaxh_</a>
                    </div>
                </div>
            </div>
            <div className='flex-col flex gap-5'>
                <img src={pandu} alt="" className='w-[220px] h-auto mx-auto block'/>
                <div>
                    <h1 className='text-[30px] font-Poppins'>Pandu</h1>
                    <p className='font-Poppins font-[600]'>Mobile Developer</p>
                    <div className='flex items-center gap-2 mt-3'>
                        <img src={instagram} alt="" className='w-[30px] h-auto'/>
                        <a href="https://www.instagram.com/pandoetria/?utm_source=ig_web_button_share_sheet" target='_blank' className='text-blue-500'>@pandoetria</a>
                    </div>
                </div>
            </div>
            <div className='flex-col flex gap-5'>
                <img src={nadine} alt="" className='w-[220px] h-auto mx-auto block'/>
                <div>
                    <h1 className='text-[30px] font-Poppins'>Nadine</h1>
                    <p className='font-Poppins font-[600]'>Data Analyst</p>
                    <div className='flex items-center gap-2 mt-3'>
                        <img src={instagram} alt="" className='w-[30px] h-auto'/>
                        <a href="https://www.instagram.com/kamfingkamdem?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target='_blank' className='text-blue-500'>@kamfingkamdem</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default OurTim