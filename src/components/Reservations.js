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

// {reservationData.map((r) => 
//     <RestaurantCard restaurant = {r} key = {r.id} user = {user} resetDomRemove = {resetDomRemove} handleEdit = {handleEdit}/>)
//     }

// var array1 = [1,2,3,4];
// var array2 = [5,-6,7,8.5];

// const concatArr = (arr1, arr2, sep) => arr1.map(function (num, idx) {
//   return num.toString().concat(sep,(arr2[idx]).toString())
// });

// console.log(concatArr(array1,array2,"#"))// ["1#5", "2#-6", "3#7", "4#8.5"]

// const fullnames = names.map((name, index) => {
//     `${name} ${lastnames[index]}`
//   });