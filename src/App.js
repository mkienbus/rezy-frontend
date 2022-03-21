import './App.css';
import React from 'react';
import { useEffect, useState } from 'react';
import Reservations from './features/Reservations';
import LoginForm from './features/LoginForm';
//import { useSelector, useDispatch } from 'react-redux';
//import { loginUser, logoutUser } from './features/userSlice';


function App() {
  //const userState = useSelector((state) => state.user.username)
  //const dispatch = useDispatch()
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
        <h1>App</h1>
        {/* <LoginForm /> */}
        <Reservations />
        <button id = "logout" onClick = {handleLogoutClick}>Logout</button>
      </div>
    );
}

export default App;
