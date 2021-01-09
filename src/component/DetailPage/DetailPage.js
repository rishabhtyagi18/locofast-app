import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SwapHorizIcon from '@material-ui/icons/SwapHoriz';
import DetailForm from "./DetailForm";

const Styles = {
    mainstylecss: {
        marginTop: "70px",
        width: "100%",
        marginLeft: "78px"
    },
    TopTabContainer:{
        height: "56px",
        borderBottom: "1px solid #e0e0e0",
    },
    SideSpaceCss: {
        height: "100%",
        borderRight: "1px solid #e0e0e0",
        marginTop: "5px",
    },
    btnCss1: {
        margin: "10px",
        marginLeft: "30px",
        background: "#E5F1FF",
        height: "32px",
        color: "#0067E2",
        textTransform: "capitalize",
        fontWeight: "bold",
        fontSize: "14px"
    },
    btnCss2: {
        margin: "10px",
        marginLeft: "10px",
        height: "32px",
        color: "#000",
        textTransform: "capitalize",
        fontWeight: "bold",
        fontSize: "14px"
    },
    btnCss3: {
        margin: "10px",
        marginLeft: "30px",
        height: "32px",
        color: "black",
        textTransform: "capitalize",
        fontWeight: "bold",
        fontSize: "14px",
        border: "1px solid #d2d2d2"
    },
    btnCss4: {
        margin: "10px",
        marginLeft: "10px",
        background: "#0067E2",
        height: "32px",
        color: "#fff",
        textTransform: "capitalize",
        fontWeight: "bold",
        fontSize: "14px"
    },
    ItemOuterGridCss: {
        padding: "20px 20px 20px 20px",
    },
    
    ItemPaperCss:{
        height: "358px",
    },
    ImgCss: {
        width: "100%",
        height: "260px",
        objectFit: "cover",
        borderRadius: "5px 5px 0px 0px",
    },
    TextCss: {
        fontSize: "14px",
        maxHeight: "45px",
        margin: "5px 5px 3px 10px",
        LineHeight: "20px",
        fontWeight: "600",
        overflow: "hidden"
    },
    SmallTextCss: {
        fontSize: "12px",
        LineHeightn: "17px",
        maxHeight: "20px",
        margin: "10px 5px 3px 10px",
        color: "#676773",
    }
}

const numrows = [1,2,3,4,5,6,7,8,9,10,11,12];

function DetailPage() {

    return (
    <>
        <main style={Styles.mainstylecss}>
            <Grid container spacing={1} style={Styles.TopTabContainer}>
                <Grid container item xs={12} spacing={1}>
                     <Grid item xs={3} style={{padding: "0px", margin: "0px"}}>
                        <Button style={Styles.btnCss1}>fabric (928)</Button>
                        <Button style={Styles.btnCss2}>Trims (540)</Button>  
                    </Grid>
                     <Grid item xs={6}></Grid>
                     <Grid item xs={3} style={{padding: "0px", margin: "0px"}}>
                        <Button style={Styles.btnCss3}><SwapHorizIcon/> Stock I/O</Button>
                        <Button style={Styles.btnCss4}>Add New <ExpandMoreIcon/></Button>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container spacing={1}>
                <Grid container item xs={12} spacing={1}>
                    <Grid item xs={3} style={Styles.SideSpaceCss}></Grid>
                    <Grid item xs={9} style={Styles.ItemOuterGridCss}>
                        <Grid container item xs={12} spacing={1}>
                             { numrows.map((item, index) => {
                                return  <DetailForm/>;})} 
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </main>  
    </>
    )
}

export default DetailPage;