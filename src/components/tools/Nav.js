import React from "react";

import { Link } from "react-router-dom";
import { Button } from "@mui/material";

function Nav(){
    
    

    return(

        <nav id="navbar">
            <Link to = "/"><Button variant = "contained" size = "small">HOME</Button> </Link>
            {/* <Link to = "/restaurants">  RESTAURANTS  |</Link> */}
            <Link to = "/reservations">  <Button variant = "contained" size = "small">RESERVATIONS</Button> </Link>
            <Link to = "/favorites">  <Button variant = "contained" size = "small">FAVORITES</Button></Link>
            {/* add LOGOUT button to Nav component, and CSS justify right? */}
            <br></br>
        </nav>
    )
}


export default Nav;