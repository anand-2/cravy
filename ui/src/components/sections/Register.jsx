import React, { useState } from "react";
import RegisterDialog from "./RegisterDialog";
import Container from "@mui/material/Container";
import { Box, Grid } from "@mui/material";
import Floater from "./Floater";
import apple from "../../img/apple.png"
import cherries from "../../img/cherries.png"
import straw from "../../img/strawberry.png"
import orange from "../../img/orange.png"
import watermelon from "../../img/watermelon.png"
import "./Register.css"
import logo from "../../img/logo.png"








function Register() {

   
    return <div style={{height:'100vh'}}>
    <Box  justifyContent='center' pt='0.5rem' display='flex'>
    <Box component='img' src={logo} width='100px' height='100px'></Box>
    </Box>    

    <Floater top='70px' left='100px'  img={apple}></Floater>
    <Floater top='150px' right='150px' img={orange}></Floater>
    <Floater bottom='150px' left='350px' img={watermelon}></Floater>
    <Floater bottom='300px' left='100px' img={cherries}></Floater>
    <Floater bottom='100px' right='170px'  img={apple}></Floater>
    <Floater bottom='150px' left='50px' img={orange}></Floater>
    <Floater top='70px' right='300px' img={watermelon}></Floater>
    <Floater top='300px' right='60px' img={cherries}></Floater>

        
        <Grid container justifyContent='center'>
            <Grid item >
                <RegisterDialog></RegisterDialog>
            </Grid>
        </Grid>
    
</div>

}

export default Register;