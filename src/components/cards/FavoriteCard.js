import React from "react";

function FavoriteCard({favorite, error, isLoading, isSuccess}){

console.log(favorite)
    return(
        <>
        <div>
                {isLoading && <h2>...loading</h2>}
                {error && <h2>Something went wrong</h2>}
                {isSuccess &&
                <div>
                    {favorite.restaurant.name}
                    <br></br>
                    {favorite.restaurant.address}
                    <br></br><br></br>
                </div>}
            </div>
        </>
    )
}

export default FavoriteCard;