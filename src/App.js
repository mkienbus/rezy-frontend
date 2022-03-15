import './App.css';
import React from 'react';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import LoginForm from './features/LoginForm';
import { loginUser, logoutUser } from './features/userSlice';


function App() {
  const userState = useSelector((state) => state.user.username)
  const dispatch = useDispatch()

  //can i just use userState in Redux instead of fetch call to backend?

  //const [user, setUser] = useState("")

  // useEffect(() => {
    
  // }, [userState]);

  function handleLogoutClick(){
    fetch('/logout', {
      method: 'DELETE'
    })
      .then(r => dispatch(logoutUser))
  }

  //not sure if this is working right
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
