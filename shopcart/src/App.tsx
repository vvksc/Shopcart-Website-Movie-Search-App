
import './App.css'



import Home from './Components/Home'
import { Routes, Route } from 'react-router-dom'
import Specificdisplay from './Components/SpecificDisplay'
import Cart from './Components/Cart'
import Footer from './Components/Footer'
import Wishlist from './Components/Wishlist'
import Nav1 from './Components/Nav1'
import Nav2 from './Components/Nav2'
import BottomFooter from './Components/BottomFooter'
import GiftPop from './Components/Gift'
import { useState } from 'react'




function App() {

  const [pop, setPop] = useState<boolean>(false);
  
  return(
    <>
   <Nav1/>
   <Nav2/>

    <Routes>
         <Route path='/' element={<Home />} />
         <Route path='/con' element={<Specificdisplay />} />
         <Route path='/cart' element={<Cart/>} />
         <Route path='/wish' element={<Wishlist/>} />
       </Routes>
    
   <Footer/>
   <BottomFooter setPop={setPop}/>
   <GiftPop pop={pop} setPop={setPop}/>
    
    </>
  )
}

export default App
