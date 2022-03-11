import './App.css';
import React from 'react';
//import { useSelector, useDispatch } from './react-redux'
import { loginUser, logoutUser } from './features/userSlice'
import LoginForm from './features/LoginForm';


//set up with Redux

function App() {


    return (
      <div className="App">
        <h1>App</h1>
        <LoginForm />
      </div>
    );
}

export default App;
