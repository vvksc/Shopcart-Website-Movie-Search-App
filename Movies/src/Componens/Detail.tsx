import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import { useLocation } from 'react-router-dom';
import Button from '@mui/material/Button';
export default function Detail() {
  const theme = useTheme();
  const location=useLocation()
  const data=location.state;
  console.log(data);
  
  return (
    <>
 
  
    <Card sx={{ display: 'flex', height:500, marginTop:5 }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
        <Typography component="div" variant="h6">
          rating {data.title.ratingsSummary.aggregateRating}
          </Typography>
          <Typography component="div" variant="h1">
           {data.title.originalTitleText.text}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
           {data.title.releaseYear.year}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias recusandae qui blanditiis vitae voluptatem voluptatibus iure repudiandae nulla architecto deleniti ducimus laboriosam, minus excepturi expedita odio dolore natus pariatur cupiditate?
          </Typography>
          
        </CardContent>
        <Button color='warning'>Watch Trailer</Button>
        <Button>Watch Movie Now</Button>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 451 }}
        image={data.title.primaryImage.imageUrl}
      />
    </Card>
    </> );
}

