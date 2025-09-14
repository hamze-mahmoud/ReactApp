import image from './image.png'
import { FaShoppingCart  } from "react-icons/fa";

export default function Cards(){
    return(
        <div style={{width:'445px',padding:'4px',height:'370px'}} className='bg-[#FDFDFD]'>
           <div>
            <img src={image} style={{width:'426px',height:'261px'}}/>
           </div>
           <div className="flex  bg-[#012761] " style={{width:'424px',flexDirection:'column',color:'white'}}>
            <div className="flex justify-between p-2">
                
            
            <span className='bg-[#201615] p-1'  >
                
                  ش553
             
                  </span>
            <span style={{color:'#FDFDFD',fontSize:'20px'}}>معدات طبية اسم المعالج هنا</span>

            </div>
         <hr style={{backgroundColor:'white'}}/>


           <div className="flex justify-between p-2">
           <div className="flex items-center gap-2 hover:text-red-600 transition">
      <FaShoppingCart className="text-2xl" />
      <span style={{color:'#FDFDFD',fontSize:'20px'}}>اضافة الى السلة</span>
    </div>
          
            <span style={{color:'#FDFDFD',fontSize:'20px'}}>معلومات  المنتج</span>
           </div>


           </div>
        </div>
    )
}