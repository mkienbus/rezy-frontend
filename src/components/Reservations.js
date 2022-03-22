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
                {data?.map((data) => 
                <RestaurantCard key = {data.id} data = {data} error = {error} isLoading = {isLoading} isSuccess = {isSuccess}/>
                )}
            </div>
        </>

    )
}


export default Reservations;