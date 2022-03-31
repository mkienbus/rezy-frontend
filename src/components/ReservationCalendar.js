import React, { useState } from "react";
//imported Calendar from tool
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';

//calendar resource and info on customizing CSS
//https://blog.logrocket.com/react-calendar-tutorial-build-customize-calendar/

//exported Component to be rendered by ReservationModal
function ReservationCalendar({callBackClickedDate}){
    const [date, setDate] = useState(new Date());

    //moment library or JS
    //callback to ReservationModal for date information that was selected

    return(
    <>
        <div className='app'>
            <div className='calendar-container'>
                <Calendar onChange={setDate} onClickDay = {callBackClickedDate} value={date} />
            </div>
            <p className='text-center'>
                <span className='bold'>Selected Date:</span>{' '}
                {date.toDateString()}
            </p>
        </div>
    </>
    )
}

export default ReservationCalendar;