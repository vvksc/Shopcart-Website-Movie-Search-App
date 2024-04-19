import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Typography } from '@mui/material';


export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (<>
    <BottomNavigation sx={{ width:'90%', margin:5 ,backgroundColor:'black',color:'wheat' }}>
   
    <Typography variant='h6'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos accusantium, fugit molestiae dicta consequuntur reprehenderit eligendi assumenda obcaecati similique iure labore omnis qui expedita dolor incidunt odit earum, dolorum ex.</Typography>
  </BottomNavigation>


  <BottomNavigation sx={{ width:'90%',height:700, margin:5 ,backgroundColor:'grey' }}>
  <Typography variant='h3' sx={{
  padding:10
  }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt distinctio sequi ipsa recusandae minima voluptate, eveniet nisi accusamus facilis, enim quos consequatur voluptatibus?
 <br /><br /> <Typography variant='h2' color='error'>600+ Movies</Typography><Typography variant='h2' color='error'>700+ TV-Shows</Typography>
  </Typography>


  
  </BottomNavigation>
 
  
  
  </>
  );
}