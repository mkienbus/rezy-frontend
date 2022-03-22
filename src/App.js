import './App.css';
import React from 'react';
import { useEffect, useState } from 'react';
import Restaurants from './components/Restaurants';
import LoginForm from './components/LoginForm';
import { useSelector, useDispatch } from 'react-redux';
//import { loginUser, logoutUser } from './features/userSlice';


function App() {
  //const userState = useSelector((state) => state.user.username)
  const dispatch = useDispatch()
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
        <button id = "logout" onClick = {handleLogoutClick}>Logout</button>
        <h1>Rezy</h1>
        <Restaurants />
      </div>
    );
}

export default App;
