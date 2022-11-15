import React from "react";
import ReservationModal from "../modals/ReservationModal";
import { useState } from "react";
import RestaurantGrid from "../table/RestaurantGrid";
import { Button } from "@mui/material";

function RestaurantCard({user, restaurant, error, isLoading, isSuccess}){

    const [favorites, setFavorites] = useState(restaurant.favorite)

   function handleClick(){
    fetch(`/favorites`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            user_id: user.id,
            restaurant_id: restaurant.id
        }),
    })
        .then(r =>r.json())
        .then(data => {
            setFavorites(data)
        })
   }

    return(
        <>
            <div>
                {isLoading && <h2>...loading</h2>}
                {error && <h2>Something went wrong</h2>}
                {isSuccess &&
                <div>
                    {restaurant.name}
                    <br></br>
                    {restaurant.address}
                    <br></br>
                    <ReservationModal restaurant = {restaurant} user = {user} />
                    <Button className = "add-favorites-button" size = "small" variant = "contained" onClick={handleClick}>Add {restaurant.name} to favorites</Button>
                    <br></br><br></br>
                </div>}
            </div>
        </>
    )
}

export default RestaurantCard;


// /restaurants/${restaurant.id}