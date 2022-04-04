import React from "react";
import Nav from "./tools/Nav";
import { useState, useEffect } from "react"

import ReservationCard from "./cards/ReservationCard";


function Reservations(){
    const [reservation, setReservation] = useState([])

    //.map over response 
    useEffect(() => {
        fetch('/reservations').then((r) => r.json())
            .then((data) => {
                setReservation(data)
            })
    },[]);

    function resetDomRemove(reservation){
        setReservation((reservations) => reservations.filter(r => r.id !== reservation.id))
      }

    return(
        <>
        <div>
            <Nav />
            <h3>Your reservations:</h3>
            {reservation.map((data => 
            <ReservationCard key = {data.id} reservation = {data} resetDomRemove = {resetDomRemove}/>))
            }
        </div>
        </>
    )
}

export default Reservations;