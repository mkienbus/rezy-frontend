import React from "react";
import RestaurantCard from "./cards/RestaurantCard";
import { useGetAllRestaurantsQuery } from "../slices/restaurantSlice";

function Restaurants({user}){

    const { data, error, isLoading, isSuccess } = useGetAllRestaurantsQuery();
    //console.log(data)

    return(
        <>
            <div>
                
                <h3>Select a restaurant to make a reservation:</h3>
                <h3>Add filter or search function here</h3>
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