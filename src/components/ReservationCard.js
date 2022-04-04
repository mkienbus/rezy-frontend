import React from "react";
import { useState, useEffect } from "react";

import DisplayCard from "./DisplayCard";


function ReservationCard({restaurantName, reservationDate}){

    const [reservationData, setReservationData] = useState([])

    useEffect(() => {
        combineArrays();
    },[restaurantName, reservationDate])

    function combineArrays(){
        // console.log(restaurantName)
        // console.log(reservationDate)
        const combinedArray = []
            for(var i = 0; i < restaurantName.length ; i++){
                combinedArray.push(`${restaurantName[i]} ${reservationDate[i]}.`);
                setReservationData(combinedArray);
                console.log(reservationData)
            }
}

    return(
        <>
            {reservationData.map((data) => 
                <DisplayCard data = {data}/>)
            }
            <br></br>
        </>
    )
}

export default ReservationCard;