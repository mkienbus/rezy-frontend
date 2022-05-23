import React from "react";
import { useGetAllRestaurantsQuery } from "../slices/restaurantSlice";

import RestaurantCard from "./cards/RestaurantCard";


function Restaurants({user}){

    const { data, error, isLoading, isSuccess } = useGetAllRestaurantsQuery();

    return(
        <>
            <div>
                <h3>Select a restaurant to make a reservation:</h3>
                {isLoading && <h2>...loading</h2>}
                {error && <h2>Something went wrong</h2>}
                {data?.map((d) => 
                <RestaurantCard key = {d.id} restaurant = {d} isSuccess = {isSuccess} user = {user}/>
                )}
            </div>
        </>

    )
}


export default Restaurants;