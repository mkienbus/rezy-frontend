import React, { useState } from 'react';
import { Box, Button } from '@mui/material';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';


function ReservationChildModal({style}) {
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };
  
    return (
      <>
        <Button onClick={handleOpen}>confirm date</Button>
        <Modal
          hideBackdrop
          open={open}
          onClose={handleClose}
          aria-labelledby="child-modal-title"
          aria-describedby="child-modal-description"
        >
          <Box sx={{ ...style, width: 200 }}>
            <h2 id="child-modal-title">Selected date from parent modal</h2>
            <p id="child-modal-description">
                list of radial dials with times
            </p>
            <Button onClick={handleClose}>Confirm time</Button>
          </Box>
        </Modal>
      </>
    );
  }

  export default ReservationChildModal;