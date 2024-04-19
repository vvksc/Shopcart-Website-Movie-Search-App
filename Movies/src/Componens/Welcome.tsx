import { BottomNavigation, Button, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Welcome() {
  return (<> 
  
     
   <Typography variant='h3' sx={{color:'white',position:'relative',top:80, left:250}}>
  <pre> Movie Recommendation Engine <br />    • PickAMovieForMe.com</pre>
            </Typography>
        
  <Link to={`/${'action'}`}>  <Button variant='contained' color='error' size='large' sx={{position:'relative',top:120,left:480, fontSize:40}}>Start</Button>
  </Link>
  
 
 
  </>
)
}
