import React from "react";
import Nav from "./Nav";
import { useState, useEffect } from "react"


function Reservations(){
    const [reservationName, setReservationName] = useState([])
    const [reservationDate, setReservationDate] = useState([])

    //.map over response 
    useEffect(() => {
        fetch('/reservations')
            .then(r => r.json())
            .then((data) => {
                setReservationName(data.map((d) => d.restaurant.name))
                setReservationDate(data.map((d) => d.reservation_date))
            })
    },[]);

    return(
        <>
            <Nav />
            <h3>Reservations</h3>
            <h4>{reservationName}</h4>
            <br></br>
            <h4>{reservationDate}</h4>
        </>
    )
}

export default Reservations;

// const GetData = [];
//   useEffect(() => {
//     fetch(API_URL)
//       .then((res) => res.json())
//       .then((data) => {
//         GetModesData.push(...data);
//         setDataState(GetData.map((d) => d.modeName));
//       });
//   }, []);