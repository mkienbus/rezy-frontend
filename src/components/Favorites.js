import React from "react";

import Nav from "./tools/Nav";
import FavoriteCard from './cards/FavoriteCard'

function Favorites(){

//fetch to backend /favorites or restaurants favorite=true and, send index as prop to favecard
    return(
        <>
        <Nav />
        <div><FavoriteCard /></div>
        </>
    )
}

export default Favorites;