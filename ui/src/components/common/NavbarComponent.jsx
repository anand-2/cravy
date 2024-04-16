import react from "react"
import { useHistory } from "react-router-dom";
import Lottie from 'react-lottie';
import titleAnimation from "../../lotties/titleAni.json"
import { Box, Card, Grid, Link } from "@mui/material";
import logo from "../../img/logo.png"




function NavbarComponent() {
  const history = useHistory();


   

    return    <>
    <Grid  alignItems='center' gap='3rem' container className="title" style={{boxShadow:'none',borderRadius:'20px',color:'#676275'}}>
               
                {/* <Lottie 
                options={defaultOptions}
                height={50}
                width={50}
                style={{margin:'0 1rem 0rem 0rem'}}
                 /> */}
                 <Grid item xs={4}>
                 <Box component='img' src={logo} width={80} height={80}></Box>

                 </Grid>
                 <Grid item>
                 <div style={{cursor:'pointer'}} onClick={()=>{history.push('/')}}>Home</div>
                    
                 </Grid>
                 <Grid item>
                 <div style={{cursor:'pointer'}} onClick={()=>{history.push('/dish')}}>Dishes</div>                    
                 </Grid>
                 <Grid item>
                 <div style={{cursor:'pointer'}} onClick={()=>{history.push('/restaurant')}}>Restaurants</div>       
                  
                 </Grid>
                 <Grid item>
                 <div style={{cursor:'pointer'}} onClick={()=>{history.push('/contact')}}>Contact</div>       
                 </Grid>
                 <Grid item>
                 <div style={{cursor:'pointer'}} onClick={()=>{history.push('/login')}}>Login</div>       
                 </Grid>
    </Grid>

   
        </>
}

export default NavbarComponent;