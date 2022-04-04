import React from "react";
import Nav from "./Nav";
import { useState, useEffect } from "react"

import ReservationCard from "./ReservationCard";


function Reservations(){
    const [reservation, setReservation] = useState([])

    // const [restaurantName, setRestaurantName] = useState([])
    // const [reservationDate, setReservationDate] = useState([])


    //.map over response 
    useEffect(() => {
        fetch('/reservations').then((r) => r.json())
            .then((data) => {
                // console.log(data)
                setReservation(data)
                // setRestaurantName(data.map((d) => d.restaurant.name))
                // setReservationDate(data.map((d) => d.reservation_date))
            })
    },[]);

    return(
        <>
            <Nav />
            <h3>Your reservations:</h3>
            {reservation.map((data => 
            <ReservationCard key = {data.id} reservation = {data}/>))
            }
        </>
    )
}

export default Reservations;