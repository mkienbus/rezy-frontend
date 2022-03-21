import './App.css';
import React from 'react';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import LoginForm from './features/LoginForm';
import { loginUser, logoutUser } from './features/userSlice';


function App() {
  const userState = useSelector((state) => state.user.username)
  const dispatch = useDispatch()


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
      .then(r => dispatch(logoutUser))
  }

  // if (!userState) return <LoginForm />

    return (
      <div className="App">
        <h1>App</h1>
        <LoginForm />
        <button id = "logout" onClick = {handleLogoutClick}>Logout</button>
      </div>
    );
}

export default App;
