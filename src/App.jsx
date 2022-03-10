import React, { useState } from 'react';
//martial ui
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Fab from '@material-ui/core/Fab';
import ColorLensIcon from '@material-ui/icons/ColorLens';


import Home from './Pages/Home/Home';
import Create from './Pages/Create/Create'
import Search from './Pages/Search/Search'
import Tasks from './Pages/Tasks/Tasks';
import NavBar from './Components/NavBar/NavBar';

import './App.css'

import { BrowserRouter } from 'react-router-dom';
import {Route, Switch} from 'react-router-dom';
import { ThemeContext } from './Context/ThemeContext';

//material ui


  

const App = () => {
  const [themeBool, setThemeBool] = useState(false);


  const prefersDarkMode = useMediaQuery(`(prefers-color-scheme: ${themeBool ? 'dark': 'light'})`);

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          type: prefersDarkMode ? 'dark' : 'light',
        },
      }),
    [prefersDarkMode],
  );

  const handleClick = e=>{
    e.preventDefault();

    themeBool===false ? setThemeBool(true) : setThemeBool(false);
    themeBool=== false ? changeColor('#000') : changeColor('#01C8B7');
  }

  const {changeColor} = React.useContext(ThemeContext);

  return (
    <div className='App' style={{position: 'relative'}}>

      <BrowserRouter>
      <ThemeProvider theme={theme}>
      <CssBaseline/>
      <Fab color={themeBool ? 'primary' : 'secondary'} onClick={handleClick} aria-label="add" style={{position: 'absolute', top: '6rem', left: '1rem'}}><ColorLensIcon/></Fab>
      <NavBar/>
      <Switch>
        <Route exact path='/'>
        <Home/>  
        </Route>

        <Route path='/create'>
        <Create/>  
        </Route>

        <Route path='/search'>
        <Search/>  
        </Route>

        <Route path='/tasks/:id'>
        <Tasks/>  
        </Route>
      </Switch>
      </ThemeProvider>
      </BrowserRouter>
      
    </div>
  )
}

export default App;