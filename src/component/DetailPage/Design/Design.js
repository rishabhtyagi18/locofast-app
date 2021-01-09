import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import DropDown from "./DropDown"
import FactoryDropDown from "../Factory/DropDown";

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '100%',
    },
  },
  input: {
    display: 'none',
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
}));

const Design = ({ setForm, formData }) => {
    const classes = useStyles();
     
  const { factor, desig } = formData;

  return (
       <form className={classes.root} noValidate autoComplete="off">
          <h6 style={{
                margin: "5px 5px 0px 10px", 
                fontSize: "14px", 
                fontWeight: "500"
              }}>
                Factory*
          </h6>

          <FactoryDropDown 
            label="design" 
            name="factor" 
            value={factor} 
            onChange={setForm} 
          />

          <h6 style={{
                margin: "5px 5px 0px 10px", 
                fontSize: "14px", 
                fontWeight: "500"
              }}>
                Assign for Design*
          </h6>

          <DropDown 
            label="design" 
            name="desig" 
            value={desig} 
            onChange={setForm} 
          />
       </form>
    
  );
};

export default Design;
