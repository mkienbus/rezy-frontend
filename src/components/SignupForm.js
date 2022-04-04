import React, {useState} from 'react';
import { Button } from '@mui/material';

function SignUpForm({setUser}){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [error, setError] = useState("");

    function handleSubmit(e){
        e.preventDefault()
        fetch('/users',{
            method: "POST", 
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({username, password, password_confirmation: passwordConfirmation})
        }).then(r => {
            if(r.ok){
                r.json().then(user => setUser(user))
                }
                else {
                    r.json().then(error => setError(error.error))
                }
            }).then(
                setUsername(""),
                setPassword(""),
                setPasswordConfirmation("")
            )

    }

    return(
        <>
            <div>
            <form onSubmit = {handleSubmit}>
                {error ? <span>{error}</span> : <span></span>}
                <label>Username:</label>
                <input 
                type = "text" 
                id = "signupUsername" 
                value = {username} 
                onChange = {e => setUsername(e.target.value)}/>
                <br></br>
                <label htmlFor="password">Password: </label>
                <input
                type="password"
                id="password2"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
                />
                <br></br>
                <label htmlFor="password">Password{<br></br>}Confirmation:</label>
                <input
                type="password"
                id="password_confirmation"
                value={passwordConfirmation}
                onChange={(e) => setPasswordConfirmation(e.target.value)}
                autoComplete="current-password"
                />
                <br></br>
                <Button type = "submit" variant = "contained" size = "small">Create</Button>
                <h2>Mismatch passwords allow login for signup</h2>
            </form>
            </div>
        </>
    )
}

export default SignUpForm;