import React, { useEffect, useState } from "react";
import { useGetAllFavoritesQuery } from "../slices/restaurantSlice";

import Nav from "./tools/Nav";
import FavoriteCard from './cards/FavoriteCard'

function Favorites(){
    const [favorites, setFavorites] = useState([])

    const { data, error, isLoading, isSuccess } = useGetAllFavoritesQuery();
    console.log(data)

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
        <FavoriteCard/>
        </>
    )
}

export default Favorites;

// {favorites?.map((d) => 
//     <FavoriteCard key = {d.id} favorites = {d} />
//     )}