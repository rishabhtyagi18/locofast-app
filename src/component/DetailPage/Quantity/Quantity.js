import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Inventory from "./Inventory";
import FactoryDropDown from "../Factory/DropDown";
import DesignDropDown from "../Design/DropDown";
import Button from '@material-ui/core/Button';
import AttachFileIcon from '@material-ui/icons/AttachFile';

const Styles = {
    UploadBtnCss: {
        margin: "5px 5px 5px 10px",
        border: "1px dashed grey",
        maxWidth: "300px",
        textTranform: "capitalize"
    }
}

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

const Qunatity = ({ setForm, formData }) => {
    const classes = useStyles();
  
    const { factor, desig, quanti, file } = formData;

    return (
    <>
        <form className={classes.root} noValidate autoComplete="off">
            <h6 
                style={{
                    margin: "5px 5px 0px 10px", 
                    fontSize: "14px", 
                    fontWeight: "500"
                }}
            >
                Factory*
            </h6>

            <FactoryDropDown 
                label="design" 
                name="factor" 
                value={factor} 
                onChange={setForm} 
            />

            <h6 
                style={{
                    margin: "5px 5px 0px 10px", 
                    fontSize: "14px", 
                    fontWeight: "500"
                }}
            >
                Assign a Design*
            </h6>

            <DesignDropDown 
                label="design" 
                name="desig" 
                value={desig} 
                onChange={setForm} 
            />

            <h6 
                style={{
                    margin: "5px 5px 0px 10px", 
                    fontSize: "14px", 
                    fontWeight: "500"
            }}>
                Assign Quantity*
            </h6>

            <Inventory
                name="quanti"
                value={quanti}
                onChange={setForm}
            />

            <div className={classes.root}>
                <h6 style={{
                        margin: "5px 5px 0px 10px", 
                        fontSize: "14px", 
                        fontWeight: "500"
                    }}>
                        Attach Challen*
                </h6>

                <input
                    accept="*"
                    className={classes.input}
                    id="contained-button-file"
                    multiple
                    type="file"
                    name="file"
                    value={file}
                    onChange={setForm}
                />
                <label htmlFor="contained-button-file">
                    <Button style={Styles.UploadBtnCss} component="span">
                        Select File 
                        <AttachFileIcon 
                            style={{color: "black", 
                            marginLeft: "20px", 
                            flot: "right"}}
                        />
                    </Button>
                    {file}
                </label>           
            </div>
       </form>
    </>
    );
};

export default Qunatity;
