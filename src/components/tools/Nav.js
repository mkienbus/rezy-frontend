import React, { useState }from "react";

import { Link } from "react-router-dom";
import { Button } from "@mui/material";

function Nav(){
    
    

    return(

        <nav id="navbar">
            <Link to = "/">HOME  |</Link>
            {/* <Link to = "/restaurants">  RESTAURANTS  |</Link> */}
            <Link to = "/reservations">  RESERVATIONS  |</Link>
            <Link to = "/favorites">  FAVORITES</Link>
            <br></br>
        </nav>
    )
}


export default Nav;