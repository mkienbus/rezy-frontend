import React from "react";
import Nav from "./Nav";
import { useState, useEffect } from "react"

import ReservationCard from "./ReservationCard";


function Reservations(){
    const [restaurantName, setRestaurantName] = useState([])
    const [reservationDate, setReservationDate] = useState([])


    //.map over response 
    useEffect(() => {
        fetch('/reservations').then((r) => r.json())
            .then((data) => {
                setRestaurantName(data.map((d) => d.restaurant.name))
                setReservationDate(data.map((d) => d.reservation_date))
            })
    },[]);

    return(
        <>
            <Nav />
            <h3>Your reservations:</h3>
            <ReservationCard restaurantName = {restaurantName} reservationDate = {reservationDate}/>
        </>
    )
}

export default Reservations;