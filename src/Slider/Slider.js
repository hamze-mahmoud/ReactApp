import { useEffect, useState } from "react"
import "./Slider.css"
export default function Slider(){
     const [currentSlide,setCurrentSlide]=useState(0);
     const [pixels,setPixels]=useState(600);

     const [currentImage,setCurrentImage]=useState(false)
     const images = [
        'https://picsum.photos/600/300?random=1',
        'https://picsum.photos/600/300?random=2',
        'https://picsum.photos/600/300?random=3',
        'https://picsum.photos/600/300?random=4'
      ];
      const length=images.length;
  const Next=()=>{
    setCurrentSlide((prev)=>(prev+1)%length)
    setPixels((prev)=>prev*2)
  }
const prev=()=>{
    setCurrentSlide((prev)=>(prev+-1+length)%length)
    
}
useEffect(()=>{
 const interval= setInterval(()=>{
    setCurrentSlide((prevSlide) => (prevSlide + 1) % length);
    setCurrentImage(false)
  },5000)
  return () => clearInterval(interval); // Clean up the interval on component unmount

},[length])

const hadnelImage=(c)=>{
    setCurrentImage(c)

}
    return(
        <div style={{position:'relative'}}>

        <div className="slider">
            <div className="slide-images " style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                {images.map((el,key)=>{
                    return(
                        <img style={{cursor:'pointer',opacity:'.7'}} onClick={()=>{
                            hadnelImage(el)
                        }} src={el} alt="image" className="img" />
                    )
                })}
            </div>
           
           
        </div>
        <div className="Parentslider">
            <div className="Parent-slide-images" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                {images.map((el,key)=>{
                    return(
                        <img src={el&&currentImage?currentImage:el} alt="image" className="img" />
                    )
                })}
            </div>
          
           
        </div>
        </div>

    )
}