import React from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { loginUser } from './userSlice';
import { logoutUser } from './userSlice';

function LoginForm(){
    //fetch to /login route, method POST to create a user session existing on login

    const userState = useSelector(state => state)
    console.log(userState)

    const dispatch = useDispatch()

    function handleSubmit(e){
        e.preventDefault()
        //dispatch(loginUser(e))
        console.log("clicked")
        fetch('/login',{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                //username
                // password
            })
        }).then(r => {
            if(r.ok){
            r.json().then(user => dispatch(loginUser(user)))
            }
            // else {
            //     r.json().then(error => setError(error.error))
            // }
        })
    }

    return(
        <>
        <div id = "welcomeContainer">
            <h1 id="welcome">Welcome to Rezy</h1>
            <div id = "login">
                <h4>Login to your account</h4>
                <form onSubmit = {handleSubmit}>
                    {/* {error ? <span>{error}</span> : <span></span>} */}
                    <br></br>
                    <label>Username:</label>
                    <input 
                    type = "text" 
                    id = "username" />
                    <br></br>
                    {/* <label>Password: </label>
                    <input
                    type = "password"
                    id = "password1"
                    value = {password}/> */}
                    <button type = "submit" >Login</button>
                </form>
                <h4>Need to create an account?</h4>
                {/* <SignUpForm setUser = {setUser}/> */}
            </div>
        </div>
        </>
    )
}


export default LoginForm