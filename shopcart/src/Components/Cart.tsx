import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import '../CSS/Cart.css';
import Nav1 from './Nav1';
import Nav2 from './Nav2';
import { useSelector,useDispatch } from 'react-redux';
import { addItem, delItem, delitemty } from '../Redux/action';

export default function Cart() {
  const state=useSelector((state)=>state.addItem);
 
  
     const dispatch = useDispatch();

   const[Totalamount,setTotalAmount]=useState(9);
    let a=0;
    let b=0;
  
  
  
    const cartItems=(cartItem)=>{
        
        a+=cartItem.price*cartItem.qty;
        b+=cartItem.discountPercentage*cartItem.price*cartItem.qty/100.0;
        return(
            <div className="cart">
                 <div className="cartimage">               
            <Link to={'/con'}>
                <img src={cartItem.thumbnail} alt=""  /></Link>
                </div>
            <div className="cart1">
                <h1>{cartItem.title}</h1>
                <p>{cartItem.description} Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore magnam illum enim voluptas illo itaque temporibus provident, nobis, dolor alias, laudantium rerum libero quidem delectus harum cum labore! Amet, soluta?<br /> <br />
                <i className="fa-regular fa-star"></i><i className="fa-regular fa-star"></i><i className="fa-regular fa-star"></i><i className="fa-regular fa-star"></i><i className="fa-regular fa-star-half"></i>4.3
                <button style={{position:'relative',left:'30px'}} onClick={()=>{dispatch(delItem(cartItem))}}>Remove Item</button> </p>

        
            </div>
           <div className="cart2">
                <p><h3>Item Quantity</h3><button className='btn' onClick={()=> dispatch(delitemty(cartItem))}>-</button> <span className='span'>{cartItem.qty}</span><button className='btn' onClick={()=> dispatch(addItem(cartItem))}>+</button></p>
 
 <span><h3>Item Amount(in Rs.) <br /><br /> <i className="fa-solid fa-indian-rupee-sign"></i>{cartItem.price*cartItem.qty}</h3></span>
 
 </div>
            {/* { <Link to={'/con'} state={props}>Click Here For Details</Link> } */}

        </div>       
        )
        

    }
    return (
        <>
        
  {    
    state.addItem.length !==0 && state.addItem.map((cartItems))

}
          
<div className="total">
                 <div className="totalimage">               
            <Link to={'/con'}>
                <img src={'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} alt=""  /></Link>
                </div>
            <div className="tota1">
                <pre>
                <h1>Amount            :{a}  <br />Discunt           :{b}</h1>
                           <h1>Total Cart Value  :{a-b}</h1>
                </pre>
            </div>
          
            {/* { <Link to={'/con'} state={props}>Click Here For Details</Link> } */}

        </div>
        <Link to={'/'}> <h1>Continue Shopping</h1> </Link>

        </>
    )
}
