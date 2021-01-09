import React from "react";
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Avatar from '@material-ui/core/Avatar';
import img from './Avatar.png';
import img1 from './Ellipse.png';
import img2 from './Ellipse1.png';
import img3 from './Ellipse2.png';
import img4 from './Ellipse3.png';
import img5 from './Ellipse4.png';

const states = [
    [img,  "Design name 1", "DM-08"],
    [img1, "Design name 2", "DM-09"],
    [img2, "Design name 3", "GQ-24"],
    [img3, "Design name 4", "PD-34"],
    [img4, "Design name 5", "FC-09"],
    [img5, "Design name 6", "RK-07"],
    [img2, "Design name 7", "KT-01"],
];

const DropDown = ({ label, ...others }) => (
  <>
    <TextField 
        {...others} id="outlined-select-currency"
        select
        size="small"
        variant="outlined">
        {states.map(([img, value, name]) => (
            <MenuItem key={name} value={value}>
                <Avatar 
                    style={{
                        margin: "0px 10px", 
                        height: "40px", 
                        width: "40px", 
                        float: "left"
                    }} 
                    alt="Remy Sharp" 
                    src={img}  
                />
                <div>
                    <div>{value}</div>
                    <div>{name}</div>
                </div>
            </MenuItem>
      ))}
    </TextField>
  </>
);

export default DropDown;
