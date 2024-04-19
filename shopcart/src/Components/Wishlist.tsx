import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { delItem, delwish } from '../Redux/action';

export default function Wishlist() {

    const state=useSelector((state)=>state.addItem);
    console.log(state.Wish);
    
    const dispatch=useDispatch();
      const cartItems=(cartItem)=>{
          return(
              <div className="prod">
                              
              <Link to={'/con'}>
                  <img src={cartItem.thumbnail} alt="" /></Link>
              <div className="prod1">
                  <span><h3>{cartItem.title}</h3></span>
                  <span><h3><i className="fa-solid fa-indian-rupee-sign"></i>{cartItem.price}</h3></span>
              </div>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing eli <br />
                  <i className="fa-regular fa-star"></i><i className="fa-regular fa-star"></i><i className="fa-regular fa-star"></i><i className="fa-regular fa-star"></i><i className="fa-regular fa-star-half"></i>4.3
                  <br />
                  <button onClick={()=>{dispatch(delwish(cartItem))}}>Remove</button></p>
  
              {/* { <Link to={'/con'} state={props}>Click Here For Details</Link> } */}
  
          </div>
          )
      }
      return (
          <>
           
  {
      state.Wish.length !==0 && state.Wish.map((cartItems))
  }
             
              {/* {
                  cart.map((data,i) => {
                      return (
                         
                      )
                  })
              } */}
  
          </>
      )
  
}
