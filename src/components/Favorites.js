import React, { useEffect, useState } from "react";
import { useGetAllFavoritesQuery } from "../slices/restaurantSlice";

import Nav from "./tools/Nav";
import FavoriteCard from './cards/FavoriteCard'

function Favorites(){

    const { data, error, isLoading, isSuccess } = useGetAllFavoritesQuery();


    // function resetDomRemove(favorite){
    //     setFavorites((favorites) => favorites.filter(r => r.id !== favorite.id))
    //   }

    return(
        <>
        <Nav />
        <h3>Your favorite restaurants:</h3>
        {isLoading && <h2>...loading</h2>}
        {error && <h2>Something went wrong</h2>}
        {data?.map((d) => 
        <FavoriteCard key = {d.id} favorite = {d} isSuccess = {isSuccess}/>
        )}
        </>
    )
}

export default Favorites;