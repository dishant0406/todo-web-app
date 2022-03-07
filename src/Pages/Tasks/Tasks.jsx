import './Tasks.css'

import {useParams} from 'react-router-dom';

import React from 'react'
import { useFetch } from '../../Hooks/useFetch';


//Material UI
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';

import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import Typography from '@material-ui/core/Typography';




const useStyles = makeStyles({
  root: {
    marginTop: '1rem',
    maxWidth: 445,
  },
  media: {
    height: 250,
  },
});





const Tasks = () => {
  const {id} = useParams();
  
  const {data, isPending, error} = useFetch(`http://localhost:3000/tasks/${id}`);
  
  const classes = useStyles();

  return (
    <div style={{boxShadow: '16px 10px 18px -9px rgba(0,0,0,0.1)'}}>
      {error && <div className='error'>{error}</div>}
      {isPending && <p className='loading'>Loading...</p>}
      {data && <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://source.unsplash.com/random/350×150/?work"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {data.title}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary" component="p">

            {data.Time}
          </Typography>
          <Typography variant="subtitle1" color="Textprimary" component="p">
          {data.list.map(item=><li>{item}</li>)}  
          </Typography>
          <Typography variant="subtitle1" color="textSecondary" component="p">

            {data.summery}
          </Typography>
        </CardContent>
      </CardActionArea>
      
    </Card>}
    </div>
    
  )
}

export default Tasks;