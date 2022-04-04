import React from "react";
import ReservationModal from "../modals/ReservationModal";
//import Button from '@mui/material/Button';

function RestaurantCard({user, restaurant, error, isLoading, isSuccess}){

    return(
        <>
            <div>
                {isLoading && <h2>...loading</h2>}
                {error && <h2>Something went wrong</h2>}
                {isSuccess &&
                <div>
                    {console.log(restaurant)}
                    {restaurant.name}
                    <br></br>
                    {restaurant.address}
                    <br></br>
                    <ReservationModal restaurant = {restaurant} user = {user} />
                    <br></br><br></br>
                </div>}
            </div>
        </>
    )
}

export default RestaurantCard;