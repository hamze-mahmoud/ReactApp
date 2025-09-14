import { Link } from "react-router-dom"
import image from './صورة-واتساب-بتاريخ-1444-03-14-في-19.37 1 (1).png'
import './Header.css'
export default function Header() {
  return (
    <header className="bg-[#033885] shadow-md" style={{height:'97px'}}>
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        
         <div className="flex items-center space-x-2">
          <button className="bg-white text-[#033885] px-3 py-1 rounded-md hover:bg-gray-100 transition">
            العربية
          </button>
          <button className="bg-black text-white px-3 py-1 rounded-md hover:bg-gray-800 transition">
            تسجيل الدخول
          </button>
        </div>

        <nav>
          <ul className="flex items-center space-x-6 text-white font-medium">
            <li className="text-gray-300   w-23"><Link to="/about">نبذة عنا</Link></li>
            <li className="text-gray-300 link-item  w-23"><Link to="/services">خدمات</Link></li>
            <li className="text-gray-300 link-item  w-23"><Link to="/clients">الزبائن</Link></li>
            <li className="text-gray-300 link-item  w-23"><Link to="/packages">الباقات</Link></li>
            <li className="text-gray-300 link-item  w-23"><Link to="/articles">المقالات</Link></li>
            <li className="text-gray-300 link-item  w-23"><Link to="/contact">اتصل بنا</Link></li>
            <li className="link-item"><Link to="/main"> الرئيسية</Link></li>

          </ul>
        </nav>
<div>
<img src={image}  style={{height:'100px',width:'240px',fontSize:'40px'}} className="mt-10"/>

</div>
      </div>
    </header>
  )
}
