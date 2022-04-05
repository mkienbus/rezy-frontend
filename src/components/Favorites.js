import React, { useEffect, useState } from "react";

import Nav from "./tools/Nav";
import FavoriteCard from './cards/FavoriteCard'

function Favorites(){
    const [favorites, setFavorites] = useState([])

    useEffect(() => {
        fetch('/favorites').then((r) => {
          if (r.ok) {
            r.json().then((r) => console.log(r));
          }
        })
      }, []);


    return(
        <>
        <Nav />
        <div><FavoriteCard /></div>
        </>
    )
}

export default Favorites;

// (data) => setFavorites(data)