import React from "react";
import Grid from '@material-ui/core/Grid';
import MiniBar from '../MiniBar/MiniBar';
import DetailPage from '../DetailPage/DetailPage';

function Home() {

  return (
    <>
     <Grid container spacing={1}>
        <MiniBar />
     </Grid>
     
     <Grid container spacing={1}>
         <DetailPage />
     </Grid>
    </>
  );
}

export default Home;
