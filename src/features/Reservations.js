import React from "react";
import RestaurantCard from "./RestaurantCard";

function Reservations(){

    //render all restaurants (within RestaurantCard)
    //select which one you want to make a reservation for
        //add a filter or search bar to search by name? or address?


    return(
        <>
            <div>
                <h3>Make a reservation:</h3>
                <RestaurantCard />
            </div>
        </>

    )
}


export default Reservations;