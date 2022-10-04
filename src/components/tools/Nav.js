import React, { useState }from "react";

import { Link } from "react-router-dom";
import { Button } from "@mui/material";

function Nav(){
    
    

    return(

        <nav id="navbar">
            <Link to = "/"><Button>HOME</Button> </Link>
            {/* <Link to = "/restaurants">  RESTAURANTS  |</Link> */}
            <Link to = "/reservations">  <Button>RESERVATIONS</Button> </Link>
            <Link to = "/favorites">  <Button>FAVORITES</Button></Link>
            <br></br>
        </nav>
    )
}


export default Nav;