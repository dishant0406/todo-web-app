import './Create.css'

import React, { useRef, useState, useEffect } from 'react'
import {useHistory} from 'react-router-dom';


//MATERIAL UI
import TextField from "@material-ui/core/TextField";
import { FormControl } from '@material-ui/core';
import { FormLabel } from '@material-ui/core';
import { todofirestore } from '../../Fireabase/config';
import { Button } from "@material-ui/core";

const Create = () => {
  const [title, setTitle] = useState('');
  const [summery, setSummery] = useState('');
  const [time, setTime] = useState('');
  const [newtask, setNewTask] = useState('');
  const [alltasks, setAlltasks] = useState([])
  const taskref = useRef(null);
  const history = useHistory();

  

  const handleChange = async (e)=>{
    e.preventDefault();

    const doc = {
      title: title,
      list: alltasks,
      summery: summery,
      Time: `${time} minutes`
    }

    try{
    await todofirestore.collection('tasks').add(doc);
    history.push('/');
    }
    catch(err){
      console.log(err);
    }
  }

  const handleAdd =(e)=>{
      e.preventDefault();
      const tsk = newtask.trim();

      if(tsk && !alltasks.includes(tsk)){
        setAlltasks([...alltasks, tsk]);
      }

      setNewTask('');

      taskref.current.focus();
  }

  

  return (
    <form onSubmit={handleChange} style={{display: 'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', marginTop: '1rem'}}>
    

      <FormControl>
        <FormLabel>
      <TextField
          id="outlined-full-width"
          label="Title"
          style={{ margin: 8 }}
          placeholder="Enter Title"
          helperText=""
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          onChange={e=> setTitle(e.target.value)} value={title}
          required
        />
        </FormLabel>

        <FormLabel style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <TextField
          id="outlined-full-width"
          label="Tasks"
          style={{ margin: 8 }}
          placeholder="Add Tasks"
          helperText={`Current Tasks: ${alltasks.toString()}`}
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          onChange={e=> setNewTask(e.target.value)} value={newtask}
          required
          inputRef={taskref}
        />
        <Button variant="contained" color="secondary" onClick={handleAdd} style={{marginBottom: '1.5rem'}}> 
        Add
        </Button>
        </FormLabel>

        <FormLabel>
        <TextField
          id="outlined-full-width"
          label="Summery"
          style={{ margin: 8 }}
          placeholder="Enter Summery"
          helperText=''
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          onChange={e=> setSummery(e.target.value)} value={summery}
          required
        />
        </FormLabel>

        <FormLabel>
        <TextField
          id="outlined-full-width"
          type='number'
          label="Time"
          style={{ margin: 8 }}
          placeholder="Enter Deadline Time"
          helperText=""
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          onChange={e=> setTime(e.target.value)} value={time}
          required
        />
        </FormLabel>
        
        </FormControl>
    
    <Button variant="contained" color="primary" onClick={handleChange} >
        Submit
    </Button>
    
    </form>
  )
}

export default Create