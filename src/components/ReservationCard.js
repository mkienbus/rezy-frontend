import React from "react";
import { useState, useEffect } from "react";

function ReservationCard({reservation}){

    // const [reservationData, setReservationData] = useState([])

//     useEffect(() => {
//         combineArrays();
//     },[restaurantName, reservationDate])

//     function combineArrays(){
//         // console.log(restaurantName)
//         // console.log(reservationDate)
//         const combinedArray = []
//             for(var i = 0; i < restaurantName.length ; i++){
//                 combinedArray.push(`${restaurantName[i]} ${reservationDate[i]}.`);
//                 setReservationData(combinedArray);
//                 console.log(reservationData)
//             }
// }

    return(
        <>
            {console.log(reservation)}
            {reservation.restaurant.name}
            <br></br>
            {reservation.reservation_date}
            <br></br>
        </>
    )
}

export default ReservationCard;