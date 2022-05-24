import React from 'react';
import { useState } from 'react';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import TextField from '@mui/material/TextField';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';


function MUIDateTimePicker({callBackDateTime}){
    const [value, setValue] = useState(new Date());

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DateTimePicker
                renderInput={(props) => <TextField {...props} />}
                label="Select calendar, or edit"
                value={value}
                onChange={(newValue) => {
                setValue(newValue);
                callBackDateTime(newValue)
                }}
                format="MM-DD-YYYY"
            />
    </LocalizationProvider>
    );
}

export default MUIDateTimePicker;