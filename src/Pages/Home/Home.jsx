import './Home.css';

import React, { useEffect, useState } from 'react'
import TaskList from '../../Components/TasksList/TaskList';

import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import { todofirestore } from '../../Fireabase/config';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },
}));

const Home = () => {

  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

 useEffect(() => {

      setIsPending(true);

      const unsub = todofirestore.collection('tasks').onSnapshot((snapshot)=>{
        if(snapshot.empty){

          setError('No Tasks to Load');
          setIsPending(false);

        }
        else{
          
          let results = [];
          snapshot.docs.forEach(doc => {
            results.push({id: doc.id, ...doc.data()})
          })
          setData(results);
          setIsPending(false);
        }
      }, (err)=>{
        setError(err.message);
        setIsPending(false);
      })


      return () => unsub();
   
 }, [])
 

  const classes = useStyles();

  return (
    

    <div className='home'>
      
      {error && <p className='error'>{error}</p>}
      {isPending && <div className={classes.root}>
                      <CircularProgress />
                    </div>}
      
      {!error && data && <TaskList tasks={data}/>}
      
    </div>
  )
}

export default Home;