import "./Main.css"
import hamzeImage from '../Imgaes/hamze.jpg';
import { useState } from "react";
import image from '../Imgaes/gg.png'
import image2 from './tt.png'
import { FaFacebookF, FaWhatsapp,FaInstagram  } from "react-icons/fa";

export default function Main(){
    return(
        <div className="flex  justify-between mt-0">
            <div>

            
    <div
  className="w-64 h-64 bg-cover bg-center "
  style={{ backgroundImage: `url(${image})`,width:'1000px',height:'600px' }}
>
    
</div>

</div>

<div className="relative w-[1000px] h-[600px] bg-cover bg-center">
      <h1 className="absolute top-[20%] left-[-400px] w-[700px] text-[#033B8C] font-bold text-[55px]">
        DENTEX اهلاً بكم في شركة
      </h1>

      {/* Paragraph */}
      <p className="absolute top-[35%] left-[-400px] w-[700px] text-[18px] leading-[30px] font-bold text-gray-700">
        التسويق الإلكتروني ‏: ويعرف أيضا باسم التسويق الرقمي ‏ أو التسويق عبر
        الشبكة ‏ أو، ويشمل جميع الأساليب والممارسات ذات الصلة بعالم التسويق عبر
        شبكة: الاتصال عبر الإنترنت، وتحسين التجارة الإلكترونية. <br /> التسويق
        الإلكتروني ‏: ويعرف أيضا باسم التسويق الرقمي ‏ أو التسويق عبر الشبكة ‏ أو،
        ويشمل جميع الأساليب والممارسات ذات الصلة بعالم التسويق عبر شبكة: الاتصال
        عبر الإنترنت، وتحسين التجارة الإلكترونية. التسويق الإلكتروني ‏
      </p>

      <div>
        
      </div>
      <button
        className="absolute top-[70%] right-[-250px] w-[213px] rounded-md bg-[#03347D] px-4 py-2 text-white text-[18px] font-medium shadow-md hover:bg-[#022c5c] transition"
      >
        قم بالاتصال الان
      </button>

      <div className="absolute top-[70%] right-0 flex gap-6 text-[34px]">
  <a
    href="https://facebook.com"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center justify-center w-12 h-12 rounded-full bg-[#4267B2] text-white shadow-lg hover:bg-[#365899] transition"
  >
    <FaFacebookF />
  </a>

  <a
    href="https://wa.me/1234567890"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center justify-center w-12 h-12 rounded-full bg-[#25D366] text-white shadow-lg hover:bg-[#1ebe5d] transition"
  >
    <FaWhatsapp />
  </a>
  <a
    href="https://instagram.com"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 text-white shadow-lg hover:opacity-90 transition"
  >
    <FaInstagram />
  </a>
</div>

    </div>


<div>


<div className="w-64 h-64 bg-cover bg-center "
  style={{ backgroundImage: `url(${image2})`,width:'300px',height:'200px' }}
>

</div>
</div>


      </div>
    )


    
}