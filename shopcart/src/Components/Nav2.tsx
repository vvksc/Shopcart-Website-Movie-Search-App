import React, { useState } from 'react'
import '../CSS/Nav2.css';
import { Link } from 'react-router-dom';
import {  useDispatch, useSelector } from 'react-redux';
import ProductDisplay from './ProductDisplay';
import { setData, setSearchList } from '../Redux/action';


export default function Nav2() {
    const state=useSelector((state)=>state.addItem);
    const [search,setSearch]=useState("");
    const dispatch=useDispatch();

    function handleSearch(){
       console.log(search);
       console.log(state.data);
       
        const a= state.data.filter((x) => x.title.toLowerCase().includes(search.toLowerCase()));
        console.log(a);
        
        a.map((x)=>{
            console.log(x);
            
            dispatch(setSearchList(a));
        })
       
       
      
       
       
           
      


    } 



    return (
        <>
            <div className="nav2">
                <div className="nav21">
                <Link to={'/'}>  <h1><i className="fa-solid fa-bag-shopping"> SHOPEy</i></h1> </Link>
                </div>
                <div className="nav22">
              <span> Category  <i className="fa-solid fa-chevron-down"></i></span>
              <span>Deals</span>
             <Link to={'/wish'}> <button>Wishlist</button></Link>
              <span>Delivery</span>
              <span><input type="text" placeholder='Search here' onChange={(e)=>setSearch(e.target.value)} /></span> <button onClick={()=>handleSearch()}><i className="fa-solid fa-magnifying-glass"></i></button> 
                </div>
                <div className="nav23">
  
 <pre>  <i className="fa-regular fa-user"></i> Account  <Link to={'/cart'}><button> <i className="fa-solid fa-cart-plus"></i> {state.addItem.length}</button></Link>   </pre>

                   </div>

            </div>

           
        </>
    )
}




