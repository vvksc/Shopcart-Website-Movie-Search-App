import axios, { all } from 'axios';
import React, { useEffect, useState } from 'react'
import ProductDisplay from './ProductDisplay';
import '../CSS/Body.css'
import Nav1 from './Nav1';
import Nav2 from './Nav2';
import Nav3 from './Nav3';
import { useDispatch, useSelector } from 'react-redux';
import { setCate, setData } from '../Redux/action';




export default function Home() {
    const [allitems, setAllitems] = useState([]);
    const [render, setRender] = useState([]);
    const dispatch = useDispatch();
    const state = useSelector((state) => state.addItem);
    console.log(state.search);

    useEffect(() => {
        axios.get('https://dummyjson.com/products').then((res) => {
            setAllitems(res.data.products);

            res.data.products.map((x) => {
                dispatch(setData(x));
            })


            setRender(res.data.products);
            console.log(render);


        })
    }, [])



    function Category(items: any) {
        axios.get('https://dummyjson.com/products/category/' + items).then((res) => {
            setAllitems(res.data.products); })

        const render1 = state.data.filter((item) => item.category === items);
        
       
        
        
        setRender(render1);
    }

    function Cate() {

        axios.get('https://dummyjson.com/products').then((res) => {
            setAllitems(res.data.products); setRender(res.data.products);
        })
    }



    function Sort() {
            
            const sortedArr=allitems;
            console.log("before sorting : " ,sortedArr);

            // sort.sort(dynamicSort("price"));
       

            for(let a=0;a<sortedArr.length-1;a++){
                for(let b=a+1;b<sortedArr.length-1;b++){

                    if(sortedArr[a].price > sortedArr[b].price){
                        const c=sortedArr[a];
                        sortedArr[a]=sortedArr[b];
                        sortedArr[b]=c;
                    }
                }
            }
            console.log(sortedArr);

           setRender(sortedArr);

           console.log("Sorted Array : " , sortedArr);




    }


    return (
        <>

            <Nav3 />


            <h2>Todays Best Deals for you</h2>
            <div className="nav4">
                <div className="nav41"><button onClick={() => Cate()} >All Items</button>  <button onClick={() => Category('skincare')}>Beauty</button> <button onClick={() => Category('laptops')}>Laptops</button>  <button onClick={() => Category('automotive')}>Gadets
                </button> <button onClick={() => Category('furniture')}>Furniture</button>  <button onClick={() => Category('groceries')}>Groceries</button>  <button onClick={() => Category('home-decoration')}>Home-Decor</button> <button onClick={() => Category('tops')}>Tops</button>  <button onClick={() => Category('sunglasses')}>Sunglasses</button></div>
                <div className="nav42"><button onClick={() => Sort()}>Sort By <i className="fa-solid fa-caret-down"></i></button></div>

            </div>

            {/* {
    state.data.length !==0 && state.data.map((cartItems))
} */}
            <div className="products">
                {

                    state.search.length != 0 ? render.map((products, i) => (
                        state.search.includes(products) &&
                        <ProductDisplay key={i}  {...products} />
                    )) :
                        render.map((products, i) => (

                            <ProductDisplay key={i}  {...products} />
                        ))
                }</div>


        </>
    )
}

