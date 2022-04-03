import React from "react";
import { useState, useEffect } from "react";


function ReservationCard({restaurantName, reservationDate}){

    const [reservationData, setReservationData] = useState([])

    useEffect(() => {
        combineArrays()
    },[restaurantName, reservationDate])

    function combineArrays(){
        // console.log(restaurantName)
        // console.log(reservationDate)
        const combinedArray = []
            for(var i = 0; i < restaurantName.length ; i++){
                combinedArray.push(`${restaurantName[i]} ${reservationDate[i]} `);
                setReservationData(combinedArray)
            }
}

    return(
        <>
            <h3>Reservation card</h3>
            <h5>{reservationData}</h5>

        </>
    )
}

export default ReservationCard;

