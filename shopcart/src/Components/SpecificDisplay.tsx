import React from 'react'
import '../CSS/SpecificDisplay.css';
import { useLocation } from 'react-router-dom';
import Nav1 from './Nav1';
import Nav2 from './Nav2';

export default function Specificdisplay() {
    const location = useLocation();
const data = location.state;
console.log(data,"data");
  return (
    <>
  
    <div className="main1">
        <div className="left">
          <img src={data.thumbnail} alt=""></img>
          
        </div>
        <div className="right">
            <h3>id:{data.id}</h3>
            <h3>Title:{data.title}</h3>
            <h3>Discription:{data.description}</h3>
            <h3>price:{data.price}</h3>
            <h3>Discount:{data.discountPercentage}</h3>
            <h3>Stock:{data.stock}</h3>
            <h3>Brand:{data.brand}</h3>
            <h3>Category:{data.category}</h3>
        </div>
    </div>
    <div className="images">
    <img src={data.images[1]} alt=""></img><img src={data.images[2]} alt=""></img><img src={data.images[3]} alt=""></img>
    </div>
    
    </>
  )
}
