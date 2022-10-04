import React, { useEffect, useState } from "react";
import { useGetAllFavoritesQuery } from "../slices/restaurantSlice";

import Nav from "./tools/Nav";
import FavoriteCard from './cards/FavoriteCard'

function Favorites(){

    // const { data, error, isLoading, isSuccess } = useGetAllFavoritesQuery();

    const [favorites, setFavorites] = useState([])

    useEffect(() => {
        fetch('/favorites').then((r) => r.json())
            .then((data) => {
                setFavorites(data)
            })
    },[]);


    function resetDomRemove(favorite){
        setFavorites((favorites) => favorites.filter(r => r.id !== favorite.id))
      }

    return(
        <>
        <div id = "favoritesContainer">
            <Nav />
            <h3>Your favorite restaurants:</h3>
            {favorites.map((d) => 
            <FavoriteCard key = {d.id} favorites = {d} resetDomRemove = {resetDomRemove}/>
            )}
        </div>
        </>
    )
}

export default Favorites;