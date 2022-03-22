import React, { useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
//import { fetchRestaurants, restaurantList } from "./restaurantSlice";
import { useSelector, useDispatch } from 'react-redux';
import { useGetAllRestaurantsQuery } from "./restaurantSlice";

function Reservations(){
//const [restaurant, setRestaurant] = useState([])
// const dispatch = useDispatch()
    //render all restaurants (within RestaurantCard)
    //select which one you want to make a reservation for
        //add a filter or search bar to search by name? or address?

    //dispatch to asyncThunk
    // useEffect(() => {
    //     dispatch(fetchRestaurants()) 
    // }, [dispatch])

    // let content 

    // const restaurants = useSelector(restaurantList)
    // console.log(restaurants)

    // if (restaurants) content = restaurants.map(restaurant => {
    //     <RestaurantCard restaurant = {restaurant} />
    // })

    const { data }= useGetAllRestaurantsQuery();

        // , error, isLoading}

    return(
        <>
            <div>
                <h3>Make a reservation:</h3>
                <div>
                    {data?.map(
                        restaurant => {
                            return <div className = "data" key = {restaurant.id}>
                                <span>{restaurant.name}</span>
                                <span>{restaurant.address}</span>
                            </div>
                        }
                    )}
                </div>
            </div>
        </>

    )
}


export default Reservations;