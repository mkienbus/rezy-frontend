import React, { useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
//import { fetchRestaurants, restaurantList } from "./restaurantSlice";
import { useSelector, useDispatch } from 'react-redux';
import { useGetAllRestaurantsQuery } from "../slices/restaurantSlice";

function Reservations(){

    const { data, error, isLoading, isSuccess }= useGetAllRestaurantsQuery();

    return(
        <>
            <div>
                
                <h3>Select a restaurant to make a reservation:</h3>
                {isLoading && <h2>...loading</h2>}
                {error && <h2>Something went wrong</h2>}
                {data?.map((d) => 
                <RestaurantCard key = {d.id} restaurant = {d} isSuccess = {isSuccess}/>
                )}
            </div>
        </>

    )
}


export default Reservations;