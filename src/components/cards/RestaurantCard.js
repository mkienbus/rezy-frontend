import React from "react";
import ReservationModal from "../modals/ReservationModal";
import { useState } from "react";
import RestaurantGrid from "../table/RestaurantGrid";

function RestaurantCard({user, restaurant, error, isLoading, isSuccess}){

    const [favorite, setFavorite] = useState(restaurant.favorite)

    function handleChange(){
        fetch(`/restaurants/${restaurant.id}`, {
            method: "PATCH",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                favorite,
                user_id: user.id
            }),
        })
            .then(r =>r.json())
            .then(r => {
                {setFavorite(!favorite)};
                console.log(r)
            })
    }
    
    return(
        <>
            <div>
                {isLoading && <h2>...loading</h2>}
                {error && <h2>Something went wrong</h2>}
                {isSuccess &&
                <div>
                    {/* <RestaurantGrid user = {user} restaurant = {restaurant}/> */}
                    {console.log(restaurant)}
                    {restaurant.name}
                    <br></br>
                    {restaurant.address}
                    <br></br>
                    <p>Favorite? {restaurant.favorite ? "Yes" : "No"} </p>
                    <input type = "checkbox" className = "favorite" value = {favorite} checked = {favorite} onChange = {handleChange}/>
                    <ReservationModal restaurant = {restaurant} user = {user} />
                    <br></br><br></br>
                </div>}
            </div>
        </>
    )
}

export default RestaurantCard;