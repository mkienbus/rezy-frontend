import React, { useState } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';

//calendar resource and info on customizing CSS
//https://blog.logrocket.com/react-calendar-tutorial-build-customize-calendar/

function ReservationCalendar(){
    const [date, setDate] = useState(new Date());

    function handleDayClick(){
        console.log('day clicked')
        //do i need to pass state 'date' up to ChildModal w/ callback function?
    }

    return(
    <>
        <div className='app'>
            <div className='calendar-container'>
                <Calendar onChange={setDate} onClickDay = {handleDayClick} value={date} />
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