import React, { useState } from 'react';
import { Box, Button, Modal, Alert }from '@mui/material';
import ReservationChildModal from './ReservationChildModal';
import ReservationCalendar from '../ReservationCalendar';

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
  
function ReservationModal({restaurant}) {
    const [open, setOpen] = useState(false);
    const [clickedDate, setClickedDate] = useState("")
    const [time, setTime] = useState("")

    const handleOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };


    //stretch goal, use redux to save time and date state to avoid all these callback functions
    function callBackClickedDate(dateFromReservationCalendar){
      setClickedDate(dateFromReservationCalendar)
      console.log(dateFromReservationCalendar)
    }

    function callBackTime(timeFromSelect){
      setTime(timeFromSelect)
      console.log(timeFromSelect)
    }

    function handleConfirmedTimeAndDate(){
      console.log(clickedDate)
      console.log(time)
      setOpen(false)
      alert(`Your reservation is confirmed for ${restaurant.name} on ${clickedDate} at ${time}!`)
    }
  
    return (
      <div>
        <Button size = "small" variant = "contained" onClick={handleOpen}>Make a reservation at {restaurant.name}</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="parent-modal-title"
          aria-describedby="parent-modal-description"
        >
          <Box sx={{ ...style, width: 400 }}>
            <h2 id="parent-modal-title">Select a date to make a reservation:</h2>
            <ReservationCalendar callBackClickedDate={callBackClickedDate}/>
            <Button onClick = {handleClose}>Close window</Button>
            <ReservationChildModal  callBackTime = {callBackTime} clickedDate = {clickedDate} handleConfirmedTimeAndDate = {handleConfirmedTimeAndDate} style = {style}/>
          </Box>
        </Modal>
      </div>
    );
  }


export default ReservationModal;




// function ReservationModal({restaurant}) {
//   const [open, setOpen] = useState(false);
//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);

//   return (
//     <div>
//       <Button size = "small" variant = "contained" onClick={handleOpen}>Make reservation at {restaurant.name}</Button>
//       <Modal
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="modal-modal-title"
//         aria-describedby="modal-modal-description"
//       >
//         <Box sx={style}>
//           <Typography id="modal-modal-title" variant="h6" component="h2">
//             Confirmed!
//           </Typography>
//           <Typography id="modal-modal-description" sx={{ mt: 2 }}>
//             You have successfully booked a reservation at {restaurant.name}
//           </Typography>
//         </Box>
//       </Modal>
//     </div>
//   );
// }