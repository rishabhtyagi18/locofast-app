import React from "react";
import TextField from '@material-ui/core/TextField';

const Inventory = ({ label, children, type = "text", ...otherProps }) => (

  <div style={{width: "100%", float: "left"}}>
    <div  style={{width: "50%", float: "left"}}>
        <TextField 
          size="small"
          style={{ margin: 8 }}
          placeholder="Enter Quantity"
          margin="normal"
          variant="outlined" 
          type={type} 
          {...otherProps} 
        >
        </TextField>
    </div>

    <div 
      style={{width: "40%", 
        float: "left", 
        margin: "-20px 10px 5px 20px" 
      }}>
      <h6 
        style={{margin: "5px 5px 0px 10px", 
          fontSize: "14px", 
          fontWeight: "500"
        }}>
          Available Inventory
      </h6>
      
      <h6 
        style={{margin: "5px 5px 0px 10px", 
        fontSize: "14px", 
        fontWeight: "500"
      }}>
        1,650 meters
      </h6>
    </div>
  </div>
);

export default Inventory;
