import axios from 'axios';
import React, { useEffect, useMemo, useState } from 'react'
import { action } from '../data/action';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import '../CSS/Home.css'
import { Link, useLocation } from 'react-router-dom';
import { adventure } from '../data/adventure';
import { comedy } from '../data/comedy';
import { thriller } from '../data/thriller';
import { drama } from '../data/drama';
import { blogData } from '../data/blog';
export default function Home({ genre }) {




  const [data, setData] = useState([]);
  const location = useLocation();
  let { value } = location.state != null && location.state

  const movies = (genre: string) => {
    value = ''
    genre = genre.toLowerCase();
    if (genre === 'action') {
      return action;
    } else if (genre === 'thriller') {
      return thriller;
    } else if (genre === 'comedy') {
      return comedy;
    } else if (genre === 'drama') {
      return drama;
    } else if (genre === 'adventure') {
      return adventure;
    } else {
      return [...action, ...drama, ...comedy, ...thriller, ...adventure];
    }
  };
 
  const moviesMemo = useMemo(() => movies(genre), [genre]);
  useEffect(() => {
    setData(moviesMemo);
    if (value != null && value != '') {
      const filteredMovie = moviesMemo.filter((movie) =>
        movie.title.originalTitleText.text
          .toLowerCase()
          .includes(value.toLocaleLowerCase())
      );
      setData(filteredMovie);
    }
    console.log(data[0]);
  }, [genre, value]);




  return (
    <>
      <div className="container">
        {
          data.map((x) => {



            return (

              <Card sx={{ width: '30%' }} className='Card'>
                <h1></h1>
                <Link to={'/details'} state={x}><CardMedia
                  component="img"
                  alt="green iguana"
                  height="180"
                  image={x.title.primaryImage.imageUrl}
                /></Link>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {x.title.originalTitleText.text}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {x.title.titleText.text}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">{x.title.ratingsSummary.aggregateRating}</Button>
                  <Button size="small">WatchNow</Button>
                </CardActions>
              </Card>)


          })
        }
      </div>
    </>
  )
}
