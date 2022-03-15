import React from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useState } from "react";
import { loginUser } from './userSlice';
//import { logoutUser } from './userSlice';
import SignUpForm from "./SignupForm";

function LoginForm(){
    //fetch to /login route, method POST to create a user session existing on login
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    //const userState = useSelector((state) => state.user.username)

    const dispatch = useDispatch()

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
            r.json().then(dispatch(loginUser(username)))
            }
            else {
                r.json().then(error => setError(error.error))
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
                    <button type = "submit" >Login</button>
                </form>
                <h4>Need to create an account?</h4>
                <SignUpForm />
            </div>
        </div>
        </>
    )
}


export default LoginForm