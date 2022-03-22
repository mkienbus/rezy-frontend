import React from "react";
import { useSelector, useDispatch } from "react-redux";

function RestaurantCard({restaurant}){
    // const restaurants = useSelector((state) => state.restaurant)
    // const dispatch = useDispatch()



    //render each restaurant

    return(
        <>
            <div>
                <h3>{restaurant.name}</h3>
                <h3>{restaurant.address}</h3>
            </div>
        </>
    )
}

export default RestaurantCard;