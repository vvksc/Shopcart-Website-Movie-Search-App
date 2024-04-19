import React from 'react'
import '../CSS/Nav1.css';
import { Link } from 'react-router-dom';

export default function Nav1() {
    return (
        <>
            <div className="main">
                <div className="one">
                    <div className="oneinner">
                    
        <Link to={'tel:+' + 8217097121}>
          <i className="ri-phone-line"></i>
          <span className="phone-number">+91-9876543210</span>
        </Link>
                        </div>
                </div>
                <div className="one">
               <pre> Get 50% off on items  <i class="fa-solid fa-grip-lines-vertical">   </i> Shop Now</pre>

                </div>
                <div className="one">
                    <pre>           English  <i class="fa-solid fa-chevron-down"></i>  India    <i class="fa-solid fa-chevron-down"></i></pre>
                </div>

            </div>

           
        </>
    )
}
