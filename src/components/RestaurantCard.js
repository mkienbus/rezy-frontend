import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { showReservations } from "../slices/reservationSlice";

function RestaurantCard({restaurant, error, isLoading, isSuccess}){
    console.log(restaurant)

    function handleReservationClick(){
        console.log('clicked')
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
                    <button onClick ={handleReservationClick}>Make reservation</button>
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