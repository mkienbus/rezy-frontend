import React, { useState } from 'react';
import { Box, Button, Modal, Alert }from '@mui/material';
import ReservationChildModal from './ReservationChildModal';
import ReservationCalendar from '../tools/ReservationCalendar';
import MUIDateTimePicker from '../tools/DateTimePicker';

//parent component to the nested modal, calendar, and select tools
//sends callback functions to children, holds state information for them here

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
  };
  
function ReservationModal({user, restaurant}) {
    const [open, setOpen] = useState(false);
    const [dateTime, setDateTime] = useState("");
    // const [clickedDate, setClickedDate] = useState("")
    // const [time, setTime] = useState("")
    const [error, setError] = useState("");

    // const reservationDate = `${clickedDate} ${time}`

    const handleOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };

    function handleConfirmation(){

      handleClose();

    }

    function callBackDateTime(dataFromDatePicker){
      setDateTime(dataFromDatePicker);
      console.log(dataFromDatePicker);
    }

    function postReservation(){
      fetch('/reservations',{
          method: "POST", 
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify({
            user_id: user.id,
            restaurant_id: restaurant.id,
            reservation_date: dateTime
          })
      }).then(r => {
        if(r.ok){
        r.json().then(alert(`Your reservation is confirmed at ${restaurant.name} on ${dateTime}!`))
        }
        else {
            r.json().then(error => setError(error.error))
        }
      }).then(
          setDateTime("")
      )
  }

  
    return (
      <div>
        {error ? <span>{error}</span> : <span></span>}
        <Button size = "small" variant = "contained" onClick={handleOpen}>Make a reservation at {restaurant.name}</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="parent-modal-title"
          aria-describedby="parent-modal-description"
        >
          <Box sx={{ ...style, width: 400 }}>
            <h2 id="parent-modal-title">Select a date to make a reservation:</h2>
            {/* <ReservationCalendar callBackClickedDate={callBackClickedDate}/> */}
            <MUIDateTimePicker callBackDateTime = {callBackDateTime}/>
            <Button onClick = {postReservation}>Confirm selection</Button>
            <Button onClick = {handleClose}>Close window</Button>
            {/* <ReservationChildModal  callBackTime = {callBackTime} clickedDate = {clickedDate} handleConfirmedTimeAndDate = {handleConfirmedTimeAndDate} style = {style}/> */}
          </Box>
        </Modal>
      </div>
    );
  }


export default ReservationModal;