import React from 'react'
import './NavBar.css';


import { NavLink } from 'react-router-dom';
import SettingsIcon from '@material-ui/icons/Settings';
import { ThemeContext } from '../../Context/ThemeContext';

 

const NavBar = () => {

  const {color} = React.useContext(ThemeContext);

  

  return (
    
        <nav style={{background: color}}>
      <input type="checkbox" id="check"/>
      <label htmlFor="check" class="checkbtn">
          <SettingsIcon className='iconlogo'/>
      </label>
      <label class="logo">TasksX</label>
      <ul className={color==='#000' ? 'dark' : 'light'}>
        <li><NavLink exact to="/" className='alink'>Home</NavLink></li>
        <li><NavLink to="/create" className='alink'>Add Task</NavLink></li>
      </ul>
    </nav>
    
      
    
  )
}

export default NavBar