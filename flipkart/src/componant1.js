
import './componant1.css'
import img from './image/Flipkart1 (1).png'

export default function Componant1() {
  return (
    <div className='tsk_01_main'>
    <img src={img} alt="" />
    {/* <p id='logo_flip'> <h3>Flipkart </h3>explore plus</p> */}
    <input id='input_area' type="text" placeholder='Serach for products,brands and more'></input> 
    <button className='tsk_01_bt_01_login'>Login</button>
    <p>Become a Seller</p>
    <select name="" id="drop_more">
     <option className='tsk01_op' value=""> <h2>More</h2> </option>
     <option className='tsk01_op'  value="">kids</option>
     <option className='tsk01_op'  value="">Mens</option>
     <option className='tsk01_op'  value="">Women</option>
    </select>
    
    <p>🛒Cart</p>
   </div>
  )
}

