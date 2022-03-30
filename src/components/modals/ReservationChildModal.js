import React, { useState } from 'react';
import { Box, Button } from '@mui/material';
import TimeSelect from './TimeSelect';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';


function ReservationChildModal({style, clickedDate, callBackTime}) {
    const [open, setOpen] = useState(false);

    function handleOpen(){
        setOpen(true)
    }
    function handleClose(){
      setOpen(false);
    };

    //to print onto nested modal for user to see what they selected
    const confirmedDate = clickedDate.toString()

    return (
      <>
        <Button onClick={handleOpen} >Confirm date</Button>
        <Modal
          hideBackdrop
          open={open}
          onClose={handleClose}
          aria-labelledby="child-modal-title"
          aria-describedby="child-modal-description"
        >
          <Box sx={{ ...style, width: 200 }}>
            <h2 id="child-modal-title">Reservation on:</h2>
            <br></br>
            {/* JS Date() method includes hours, timezone, etc. try to get it to just
            Weekday, Month/Date/Year format */}
            <h4>{confirmedDate}</h4>
            <p id="child-modal-description">
            </p>
            <TimeSelect callBackTime = {callBackTime}/>
            <Button onClick={handleClose}>Confirm time</Button>
            <Button onClick = {handleClose}>Close window</Button>
          </Box>
        </Modal>
      </>
    );
  }

  export default ReservationChildModal;