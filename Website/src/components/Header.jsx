import { Link } from "react-router-dom"

const Header = () => {
  return (
    <div className="flex flex-col justify-center items-center">
        <div className="font-Poppins py-12 hover:scale-[110%] transition-all duration-500">
            <h1 className="text-[32px] lg:text-start text-center lg:mb-0 mb-5 font-[600]">Nutrition Scanner</h1>
            <p className="text-justify lg:w-[1100px] w-full text-[15px] lg:px-0 px-7 lg:text-[18px]">Nutrition Scanner adalah fitur inovatif berbasis Augmented Reality (AR) yang membantu pengguna mengetahui informasi gizi makanan secara instan. Cukup dengan memindai makanan, fitur ini menampilkan data seperti kalori, protein, lemak, dan vitamin untuk mendukung gaya hidup sehat. Kami Tim Healthyfy berupaya membuat inovasi yang dapat dikembangkan serta diterapkan untuk kesehatan masyarakat Indonesia.</p>
        </div>
        <div className="bg-orange w-full h-[30vh] lg:h-[26vh] text-black font-Poppins font-[600] flex lg:flex-row flex-col justify-center gap-7 lg:gap-[300px] cursor-pointer items-center text-[19px] mt-7">
            <Link to='/machine'><button className="bg-green px-7 py-3 rounded-full hover:bg-greenHover duration-300">Machine Learning</button></Link>
            <Link><button className="bg-green px-7 py-3 rounded-full hover:bg-greenHover duration-300">application</button></Link>
        </div>
    </div>
  )
}

export default Header