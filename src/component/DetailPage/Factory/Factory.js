import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import DropDown from "./DropDown";

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

const Factory = ({ setForm, formData }) => {
    const classes = useStyles();
  
  const { factor } = formData;
  return (
        <div style={{height: "100%"}}>
            <form className={classes.root} noValidate autoComplete="off">
                <h6 
                    style={{
                        margin: "5px 5px 0px 10px", 
                        fontSize: "14px", 
                        fontWeight: "500"
                    }}>
                        Factory*
                </h6>
                <DropDown 
                    label="factory" 
                    name="factor" 
                    value={factor} 
                    onChange={setForm} 
                />
            </form>
        </div>
  );
};

export default Factory;
