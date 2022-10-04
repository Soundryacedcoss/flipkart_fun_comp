import './componant2.css'
import img1 from './image/Flipkart2 (1).png'
import img2 from './image/Flipkart2 (2).png'
import img3 from './image/Flipkart2 (3).png'
import img4 from './image/Flipkart2 (4).png'
import img5 from './image/Flipkart2 (5).png'
import img6 from './image/Flipkart2 (6).png'
import img7 from './image/Flipkart2 (7).png'
import img8 from './image/Flipkart2 (8).png'

export default function Componant2() {
  return (
    <div className='tsk-2_main'>
    <div className='DivA flex '>
    <div className='tsk-1_sec01'>
   <img className='tsk02_img' src={img1} alt="" />
   <p>Top offers</p>
   </div>
   <div className='tsk-1_sec01'>
   <img className='tsk02_img' src={img2} alt="" />
   <p>Grocery</p>
   </div>
   <div className='tsk-1_sec01'>
   <img className='tsk02_img' src={img3} alt="" />
   <p>mobile</p>
   </div>
   <div className='tsk-1_sec01'>
   <img className='tsk02_img' src={img4} alt="" />
   <a  className='tsk01_link' href="http://"> <p>Fashion</p> </a>
   </div>
   </div>
   <div className='DivB flex'>
   <div className='tsk-1_sec01'>
   <img className='tsk02_img' src={img5} alt="" />
   <a className='tsk01_link' href="http://"><p>Electronics</p></a> 
   </div>
   <div className='tsk-1_sec01'>
   <img className='tsk02_img' src={img6} alt="" />
    <a className='tsk01_link' href="http://"><p>Home</p></a> 
   </div>
   <div className='tsk-1_sec01'>
   <img className='tsk02_img' src={img7} alt="" />
   <a className='tsk01_link' href="http://"><p>Home</p></a>
   </div>
   <div className='tsk-1_sec01'>
   <img className='tsk02_img' src={img8} alt="" />
   <a className='tsk01_link' href="http://"><p>trevel</p></a>
   </div>
   
   </div>

  </div>
  )
}
