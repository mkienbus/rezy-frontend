import React, { useState }from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
//Select imported from MUI
import Select from '@mui/material/Select';

function TimeSelect({callBackTime}) {
  const [time, setTime] = useState('');
  //time state isn't really used, it's passed up through target.value w/ callback

  //callback to ReservationModal component
  const handleChange = (e) => {
    setTime(e.target.value);
    callBackTime(e.target.value);
  };


  return (
    <>
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="time select label">Time</InputLabel>
        <Select
          labelId="select label"
          id="time select"
          value={time}
          label="Time"
          onChange={handleChange}
        >
          <MenuItem value={"4:00 PM"}>4:00 PM</MenuItem>
          <MenuItem value={"5:00 PM"}>5:00 PM</MenuItem>
          <MenuItem value={"6:00 PM"}>6:00 PM</MenuItem>
          <MenuItem value={"7:00 PM"}>7:00 PM</MenuItem>
          <MenuItem value={"8:00 PM"}>8:00 PM</MenuItem>
          <MenuItem value={"9:00 PM"}>9:00 PM</MenuItem>
        </Select>
      </FormControl>
    </Box>
    </>
  );
}

export default TimeSelect;