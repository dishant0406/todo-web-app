import React from 'react'
import './NavBar.css';

import { NavLink } from 'react-router-dom';
import SettingsIcon from '@material-ui/icons/Settings';

const NavBar = () => {
  return (
    
        <nav>
      <input type="checkbox" id="check"/>
      <label htmlFor="check" class="checkbtn">
          <SettingsIcon className='iconlogo'/>
      </label>
      <label class="logo">TasksX</label>
      <ul>
        <li><NavLink exact to="/" className='alink'>Home</NavLink></li>
        <li><NavLink to="/create" className='alink'>Add Task</NavLink></li>
      </ul>
    </nav>
    
      
    
  )
}

export default NavBar