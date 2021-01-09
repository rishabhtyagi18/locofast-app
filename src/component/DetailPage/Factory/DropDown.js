import React from "react";
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

const states = [
    "Amaya Creations",
    "Amaya Creations",
    "Amaya Creations",
    "Amaya Creations",
    "Amaya Creations",
    "Amaya Creations"
];

const DropDown = ({ label, ...others }) => (
  <>
    <TextField  
        {...others} 
        id="outlined-select-currency"
        select
        size="small"
        placeholder="Select Factory"
        variant="outlined"
    >
      {states.map((value) => (
        <MenuItem key={value} value={value}>
              {value}
        </MenuItem>
      ))}
    </TextField>
  </>
);

export default DropDown;
