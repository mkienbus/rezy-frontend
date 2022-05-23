import React, { useState } from "react";
//imported Calendar from tool
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';

//calendar resource and info on customizing CSS
//https://blog.logrocket.com/react-calendar-tutorial-build-customize-calendar/

//stretch different calendar? can't change data type with current Calendar
//https://mui.com/components/date-picker/

//exported Component to be rendered by ReservationModal
function ReservationCalendar({callBackClickedDate}){

    // let formattedDate = (moment(new Date()).format("MMM Do YY"))
    
    const [date, setDate] = useState(new Date())

    // moment().format("MMM Do YY"); 

    //callback to ReservationModal for date information that was selected

    let formattedDate = date.toDateString();

    return(
    <>
        <div className='app'>
            <div className='calendar-container'>
                <Calendar onChange={setDate} onClickDay = {callBackClickedDate} value={date} />
            </div>
            <p className='text-center'>
                <span className='bold'>Selected Date:</span>{' '}
                {date.toLocaleDateString()}
            </p>
        </div>
    </>
    )
}

export default ReservationCalendar;