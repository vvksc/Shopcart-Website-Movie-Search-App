
import { Link } from 'react-router-dom';
import ProductProps from '../assets/Productprops'
import '../CSS/ProductDetail.css';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, addwish } from '../Redux/action';
import { useRef } from 'react';




export default function ProductDisplay(props: ProductProps) {
   
    
    
    const dispatch = useDispatch();
    const addcart = (props) => {
        dispatch(addItem(props))
    }
    const addwishlist = (props) => {
      
        
        dispatch(addwish(props))
        ref1.current.style.color='red';
    }

    const ref1=useRef();


    return (
        <>

            <div className="prod">  <Link to={'/con'} state={props}>
                <img src={props.images[1]} alt="" /></Link>
               
                <div className="prod1">
                    <span><h3>{props.title}</h3></span>
                    <span><h3><i className="fa-solid fa-indian-rupee-sign"></i>{props.price}</h3></span>
                </div>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing eli <br />
                    <i className="fa-regular fa-star"></i><i className="fa-regular fa-star"></i><i className="fa-regular fa-star"></i><i className="fa-regular fa-star"></i><i className="fa-regular fa-star-half"></i>4.3
                    <br />
                    <button onClick={() => addcart(props)}>Add to cart</button>
                     <button className='wishlist' onClick={() => addwishlist(props)}><i ref={ref1} className="fa-solid fa-heart heart"></i></button>
                     </p>

                {/* <Link to={'/con'} state={props}>Click Here For Details</Link> */}

            </div>
        </>
    )
}
