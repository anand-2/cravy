import React from "react";
import Banner from "../common/Banner";
import LoginDialog from "./LoginDialog";
import Container from '@mui/material/Container'

import Floater from "./Floater";
import apple from "../../img/apple.png"
import cherries from "../../img/cherries.png"
import straw from "../../img/strawberry.png"
import orange from "../../img/orange.png"
import watermelon from "../../img/watermelon.png"
import { Grid,Box } from "@mui/material";
import logo from "../../img/logo.png"


function Login() {
    return <div style={{height:'100vh'}}>
   <Box  justifyContent='center' pt='0.5rem' display='flex'>
    <Box component='img' src={logo} width='100px' height='100px'></Box>
    </Box>  
        <Floater top='70px' left='100px'  img={apple}></Floater>
        <Floater top='350px' right='400px' img={straw}></Floater>
        <Floater top='150px' right='150px' img={orange}></Floater>
        <Floater bottom='150px' left='350px' img={watermelon}></Floater>
        <Floater bottom='300px' left='100px' img={cherries}></Floater>

        <Floater bottom='100px' right='170px'  img={apple}></Floater>
        <Floater bottom='400px' left='300px' img={straw}></Floater>
        <Floater bottom='150px' left='50px' img={orange}></Floater>
        <Floater top='70px' right='300px' img={watermelon}></Floater>
        <Floater top='300px' right='60px' img={cherries}></Floater>

            <Container className="LoginCard" >
            <Grid container justifyContent='center'>
                <Grid >
                    <LoginDialog></LoginDialog>
                </Grid>
            </Grid>
        </Container>
    </div>
}


export default Login;