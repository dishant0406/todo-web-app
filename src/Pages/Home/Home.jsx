import './Home.css';

import { useFetch } from '../../Hooks/useFetch';

import React from 'react'
import TaskList from '../../Components/TasksList/TaskList';

import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },
}));

const Home = () => {

  const {data, isPending, error} = useFetch('http://localhost:3000/tasks');

  const classes = useStyles();

  return (
    

    <div className='home'>
      
      {error && <p className='error'>{error}</p>}
      {isPending && <div className={classes.root}>
                      <CircularProgress />
                    </div>}
      {data && <TaskList tasks={data}/>}
    </div>
  )
}

export default Home