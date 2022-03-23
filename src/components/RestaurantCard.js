import React from "react";
import Button from "./Button"

function RestaurantCard({restaurant, error, isLoading, isSuccess}){
    console.log(restaurant)


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
                    <Button variant = "contained">Make a reservation</Button>
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