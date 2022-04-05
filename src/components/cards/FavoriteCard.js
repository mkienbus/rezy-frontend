import React, { useState } from "react";

import { Button } from "@mui/material";

function FavoriteCard({favorites, resetDomRemove}){
    console.log(favorites)

    function handleRemove(favorite){
        fetch(`/favorites/${favorite.id}`, {
        method: 'DELETE'
        })
        .then(r => {resetDomRemove(favorite)})
    }

    return(
        <>
        <div>
                <div>
                    {favorites.restaurant.name}
                    <br></br>
                    {favorites.restaurant.address}
                    <br></br>
                </div>
                <Button onClick = {() => handleRemove(favorites)} variant = "contained" size = "medium">Remove "{favorites.restaurant.name}" from favorites</Button>
                <br></br><br></br>
            </div>
        </>
    )
}

export default FavoriteCard;