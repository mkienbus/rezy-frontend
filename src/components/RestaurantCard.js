import React from "react";
import { useSelector, useDispatch } from "react-redux";

function RestaurantCard({data, error, isLoading, isSuccess}){

    //render each restaurant
    //button
    return(
        <>
            <div>
                {isLoading && <h2>...loading</h2>}
                {error && <h2>Something went wrong</h2>}
                {isSuccess &&
                <div>
                    {data.name}
                    <br></br>
                    {data.address}
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