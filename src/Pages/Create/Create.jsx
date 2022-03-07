import './Create.css'

import React, { useState } from 'react'

//MATERIAL UI
import TextField from "@material-ui/core/TextField";
import { FormControl } from '@material-ui/core';
import { FormLabel } from '@material-ui/core';

import { Button, Paper } from "@material-ui/core";

const Create = () => {
  const [title, setTitle] = useState('');
  const [summery, setSummery] = useState('');
  const [time, setTime] = useState('');

  const handleChange =(e)=>{
    e.preventDefault();

    console.log(title, summery, time)
  }


  return (
    <form onSubmit={handleChange} style={{display: 'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', marginTop: '1rem'}}>
    

      
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

        <TextField
          id="outlined-full-width"
          label="Summery"
          style={{ margin: 8 }}
          placeholder="Enter Summery"
          helperText=""
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          onChange={e=> setSummery(e.target.value)} value={summery}
          required
        />

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
        
        
    
    <Button variant="contained" color="primary" onClick={handleChange}>
        Add
    </Button>
    </form>
  )
}

export default Create