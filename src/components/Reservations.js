import React from "react";
import Nav from "./Nav";
import { useState, useEffect } from "react"


function Reservations(){
    const [reservations, setReservations] = useState([])

    useEffect(() => {
        fetch('/reservations')
            .then(r => r.json())
            .then(data => console.log(data));
    },[]);

    return(
        <>
            <Nav />
            <h3>Reservations</h3>
            <h4>{reservations}</h4>
        </>
    )
}

export default Reservations;