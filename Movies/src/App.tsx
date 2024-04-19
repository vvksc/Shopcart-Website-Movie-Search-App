import { Routes, Route } from "react-router-dom"
import Home from "./Componens/Home"
import Navbar from "./Componens/Navbar"
import Home1 from "./Componens/Detail"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { adddata } from "./Redux/Action"
import { action } from "./data/action"
import Detail from "./Componens/Detail"
import { Button } from "@mui/material"
import Welcome from "./Componens/Welcome"
import SimpleBottomNavigation from "./Componens/BottomNavigation"
import RecipeReviewCard from "./Componens/Blog"
import Search from "./Componens/Search"
function App() {
const dispatch=useDispatch();
const genres = ['all','Action', 'Comedy', 'Drama', 'Thriller', 'Adventure', 'Thriller', 'Science Fiction'];

return(<> 
<div className="app">
       <Navbar/>
      
       <Routes>
         <Route path='/' element={<Welcome/>} />
         <Route path='/home' element={<Home genre={'Action'}/>} />
         {/* <Route path='/Action' element={<div>dfghjkl</div>} />
         <Route path='/Comedy' element={<div><h1>hllo</h1></div>} />
         <Route path='/Drama' element={<div><h1>hllo</h1></div>} />
         <Route path='/Thriller' element={<div><h1>hllo</h1></div>} />
         <Route path='/Adventure' element={<div><h1>hllo</h1></div>} /> */}
         {
          genres.map((x)=><Route path={`/${x}`} element={<Home genre={x}/>} />)
         }
      <Route path='/blogs' element={<RecipeReviewCard/>} />
      <Route path='/search' element={<Search/>} />
     
         <Route path='/details' element={<Detail/>} />
      </Routes>

      </div>  
      <SimpleBottomNavigation/>
    </>
)
}

export default App
