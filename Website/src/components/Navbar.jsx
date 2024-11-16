import logo from '/TSDN.png'
import healthyfy from '/logo-healthyfy.png'

const Navbar = () => {
  return (
    <div className='flex justify-around items-center h-[10vh] lg:h-[15vh] w-full font-Poppins bg-green'>
        <img src={healthyfy} alt="" className='lg:w-[50px] w-[30px] h-auto'/>
        <h1 className='lg:text-[35px] text-[25px] font-[600] text-black'>Healthyfy</h1>
        <img src={logo} alt="" className='lg:w-[80px] w-[50px] h-auto'/>
    </div>
  )
}

export default Navbar