import React, { useState } from "react";

import { Button } from "@mui/material";

function FavoriteCard({favorite, error, isLoading, isSuccess, resetDomRemove}){
    const [favorites, setFavorites] = useState([])

    console.log(favorite)

    function handleRemove(favorite){
        fetch(`/favorites/${favorite.id}`, {
        method: 'DELETE'
        })
        .then(r => {setFavorites(r)})
    }

    // function resetDomRemove(favorite){
    //     setFavorites((favorites) => favorites.filter(r => r.id !== favorite.id))
    //   }

    return(
        <>
        <div>
                {isLoading && <h2>...loading</h2>}
                {error && <h2>Something went wrong</h2>}
                {isSuccess &&
                <div>
                    {favorite.restaurant.name}
                    <br></br>
                    {favorite.restaurant.address}
                    <br></br>
                </div>}
                <Button onClick = {() => handleRemove(favorite)} variant = "contained" size = "medium">Remove "{favorite.restaurant.name}" from favorites</Button>
                <br></br><br></br>
            </div>
        </>
    )
}

export default FavoriteCard;