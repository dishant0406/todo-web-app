import React from 'react';
import Home from './Pages/Home/Home';
import Create from './Pages/Create/Create'
import Search from './Pages/Search/Search'
import Tasks from './Pages/Tasks/Tasks';
import NavBar from './Components/NavBar/NavBar';

import './App.css'

import { BrowserRouter } from 'react-router-dom';
import {Route, Switch} from 'react-router-dom';

const App = () => {
  return (
    <div className='App'>
      
      <BrowserRouter>
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
      
      </BrowserRouter>
    </div>
  )
}

export default App