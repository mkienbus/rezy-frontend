import './App.css';
import React from 'react';
import { useEffect, useState } from 'react';
import { Button } from '@mui/material';
import { Outlet, Link } from 'react-router-dom';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

import Nav from './components/tools/Nav';
import Restaurants from './components/Restaurants';
import LoginForm from './components/LoginForm';


function App() {

  const [user, setUser] = useState(null)

  useEffect(() => {
    fetch('/me').then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    })
  }, []);
  
  function handleLogoutClick(){
    fetch('/logout', {
      method: 'DELETE'
    })
      .then(r => setUser(null))
  }


  if (!user) return <LoginForm setUser = {setUser}/>

    return (
      <div className="App">
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <Nav user = {user}/>
          <Button onClick = {handleLogoutClick} variant = "contained" size = "medium" color = "error">Logout</Button>
          <h1>Rezy</h1>
          <Restaurants user = {user}/>
          <Link to="/about">ABOUT</Link>
        </LocalizationProvider>
      </div>
    );
}

export default App;
