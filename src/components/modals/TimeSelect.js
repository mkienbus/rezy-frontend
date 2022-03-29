import React, { useState }from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
//Select imported from MUI
import Select from '@mui/material/Select';

function TimeSelect() {
  const [time, setTime] = useState('');

  const handleChange = (e) => {
    setTime(e.target.value);
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
          <MenuItem value={1600}>4:00 PM</MenuItem>
          <MenuItem value={1700}>5:00 PM</MenuItem>
          <MenuItem value={1800}>6:00 PM</MenuItem>
          <MenuItem value={1900}>7:00 PM</MenuItem>
          <MenuItem value={2000}>8:00 PM</MenuItem>
          <MenuItem value={2100}>9:00 PM</MenuItem>
        </Select>
      </FormControl>
    </Box>
    </>
  );
}

export default TimeSelect;