import React from "react";

import { Link } from "react-router-dom";
import { Button } from "@mui/material";

function Nav({handleLogoutClick}){
    

    return(

        <nav>
            <Link to = "/">HOME  |</Link>
            {/* <Link to = "/restaurants">  RESTAURANTS  |</Link> */}
            <Link to = "/reservations">  RESERVATIONS  |</Link>
            <Link to = "/favorites">  FAVORITES</Link>
            <br></br>
            <Button onClick = {handleLogoutClick} variant = "contained" size = "medium" color = "error">Logout</Button>
        </nav>
    )
}


export default Nav;