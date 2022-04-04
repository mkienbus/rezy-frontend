import React from "react";
import { Link } from "react-router-dom";

function Nav(){


    return(

        <nav>
            <Link to = "/">HOME  |</Link>
            {/* <Link to = "/restaurants">  RESTAURANTS  |</Link> */}
            <Link to = "/reservations">  RESERVATIONS  |</Link>
            <Link to = "/favorites">  FAVORITES</Link>
        </nav>
    )
}


export default Nav;