import React, { useEffect, useState } from "react";
import { useGetAllFavoritesQuery } from "../slices/restaurantSlice";

import Nav from "./tools/Nav";
import FavoriteCard from './cards/FavoriteCard'

function Favorites(){
    const [favorites, setFavorites] = useState([])

    const { data, error, isLoading, isSuccess } = useGetAllFavoritesQuery();

    // useEffect(() => {
    //     fetch('/favorites').then((r) => {
    //       if (r.ok) {
    //         r.json().then((data) => setFavorites(data));
    //       }
    //     })
    //   }, []);

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

// {favorites?.map((d) => 
//     <FavoriteCard key = {d.id} favorites = {d} />
//     )}