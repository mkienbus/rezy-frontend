import React from "react";
//import { useSelector } from 'react-redux';
//import { useDispatch } from 'react-redux';
import { useState } from "react";
//import { loginUser } from './userSlice';
//import { logoutUser } from './userSlice';
import SignUpForm from "./SignupForm";
import { Button } from "@mui/material";

function LoginForm({setUser}){
    //fetch to /login route, method POST to create a user session existing on login
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    function handleSubmit(e){
        e.preventDefault()
        fetch('/login',{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username,
                password
            })
        }).then(r => {
            if(r.ok){
                r.json().then(user => setUser(user))
            }
            else {
                r.json().then(error => setError(error.error)).then(setUsername(''),setPassword(''))
            }
        })
    }


    return(
        <>
        <div id = "welcomeContainer">
            <h1 id="welcome">Welcome to Rezy</h1>
            <div id = "login">
                <h4>Login to your account</h4>
                <form onSubmit = {handleSubmit}>
                    {error ? <span>{error}</span> : <span></span>}
                    <br></br>
                    <label>Username:</label>
                    <input 
                    type = "text" 
                    id = "username"
                    value = {username}
                    onChange = {e => setUsername(e.target.value)}/>
                    <br></br>
                    <label>Password: </label>
                    <input
                    type = "password"
                    value = {password}
                    onChange = {e => setPassword(e.target.value)}/>
                    <br></br>
                    <Button type = "submit" variant = "contained" size = "small">Login</Button>
                </form>
                <h4>Need to create an account?</h4>
                <SignUpForm setUser = {setUser}/>
            </div>
        </div>
        </>
    )
}


export default LoginForm