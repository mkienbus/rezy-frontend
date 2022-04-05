import React from "react";
import { Button } from '@mui/material';

function ReservationCard({reservation, resetDomRemove}){

    function handleRemove(reservation){
            fetch(`/reservations/${reservation.id}`, {
              method: 'DELETE'
            })
            .then(r => {resetDomRemove(reservation)})
          }

    return(
        <>
        <div>
            {console.log(reservation)}
            <b>{reservation.restaurant.name}</b>
            <br></br>
            {reservation.restaurant.address}
            <br></br>
            {reservation.reservation_date}
            <br></br>
            <Button onClick = {() => handleRemove(reservation)} variant = "contained" size = "medium">Remove reservation at {reservation.restaurant.name}</Button>
            <br></br>
            <br></br>
        </div>
        </>
    )
}

export default ReservationCard;