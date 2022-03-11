import React from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { loginUser } from './userSlice'

function LoginForm(){
    const userState = useSelector(state => state)
    console.log(userState)

    const dispatch = useDispatch()

    function handleClick(){
        dispatch(loginUser())
        console.log("clicked")
    }

    return(
       <div>
           <button onClick = {handleClick}>Click</button>
       </div>
    )
}


export default LoginForm