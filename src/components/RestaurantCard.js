import React from "react";
import ReservationModal from "./ReservationModal";
//import Button from '@mui/material/Button';

function RestaurantCard({restaurant, error, isLoading, isSuccess}){
    //console.log(restaurant)

function handleReservation(){


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
                    <ReservationModal restaurant = {restaurant} />
                    {/* <Button size = "small" variant = "contained" onClick = {ReservationModal}>Make a reservation at {restaurant.name}</Button> */}
                    <br></br><br></br>
                </div>}
            </div>
        </>
    )
}

export default RestaurantCard;

{/* {data?.map(
                        restaurant => {
                            return <div className = "data" key = {restaurant.id}>
                                <span>{restaurant.name}</span>
                                <br></br>
                                <span>{restaurant.address}</span>
                                <br></br><br></br>
                            </div>
                        }
                    )} */}