import React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

function Alerts() {
  return (
    // <Stack sx={{ width: '100%' }} spacing={2}>
    //   <Alert severity="error">This is an error alert — check it out!</Alert>
    //   <Alert severity="warning">This is a warning alert — check it out!</Alert>
    //   <Alert severity="info">This is an info alert — check it out!</Alert>
    //   <Alert severity="success" onClose = {()=>{}}>This is a success alert — check it out!</Alert>
    // </Stack>

    <Alert severity="success" onClose = {() => {}}>This is a success alert — check it out!</Alert>   
  );
}

export default Alerts;