import React from 'react'

import {Link} from 'react-router-dom'

//Material UI
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';




const useStyles = makeStyles({
  root: {
    width: 275,
    flexGrow: 1,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  paper: {
    height: 140,
    width: 100,
  },
  
});


const TaskList = ({tasks}) => {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;



  return (
    <div>
       <Grid container spacing={3}  justifyContent="center" style={{ minHeight: "100vh" }}>
      {tasks.map(task=>{
        return  <Grid item key={task.id}>
        <Card className={classes.root} variant="outlined" style={{boxShadow: '16px 10px 18px -9px rgba(0,0,0,0.1)'}}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Tasks
        </Typography>
        <Typography variant="h5" component="h2">
          {task.title}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {task.Time}
        </Typography>
        <Typography variant="body2" component="p">
          {task.summery.substring(0,50)+'...'}
        </Typography>
      </CardContent>
      <CardActions>
      <Link to={`/tasks/${task.id}`}><Button variant="contained" disableElevation >More..</Button></Link>
      </CardActions>
    </Card>
    </Grid>
      })}
      </Grid>
    </div>
  )
}

export default TaskList