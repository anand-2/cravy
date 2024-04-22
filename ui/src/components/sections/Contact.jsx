import React from 'react'
import NavbarComponent from '../common/NavbarComponent'
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Box, Grid, Link } from '@mui/material';

function Contact() {
  return (
    <div style={{backgroundColor:'#DBDFEA',height:'100vh',overflow:'hidden'}}><NavbarComponent></NavbarComponent>
                      <div className="resHeading"><h1 style={{marginBottom:'0px'}}>Contact Us</h1></div>
                      <Grid container>
                        <Grid item xs='5'>
                      <div  style={{display:'flex',flexDirection:'column'}}>
                      <span className="contactInfoTitle">CALL US</span>
                      <span className="contactInfo"> +91 9483842045</span>
                      <span className="contactInfoTitle">SENT MAIL</span>
                      <span className="contactInfo">anand.blr2000@gmail.com</span>
                      <span className="contactInfoTitle">VISIT US</span>
                      <span className="contactInfo">Anjana Nagar , Bengaluru</span>   
                                
                      </div>
                     <div  style={{display:'flex',flexDirection:'row',gap:'1rem',margin:'1rem 0 0 5rem'}}>
                      
                      <Link rel="noopener noreferrer" href="https://www.linkedin.com/in/anand-b/" target="_blank">
                                 <LinkedInIcon sx={{color:'#0A66C2',fontSize:'30px',cursor:'pointer'}}></LinkedInIcon>     
                            </Link>  

                         <Link rel="noopener noreferrer" href="https://github.com/anand-2" target="_blank">
                            <GitHubIcon sx={{color:'black',fontSize:'30px',cursor:'pointer'}}></GitHubIcon> 
                         </Link>
                           
                            <Link rel="noopener noreferrer" href="https://www.instagram.com/_anand_b/" target="_blank"> 
                         <InstagramIcon sx={{color:'black',fontSize:'30px',cursor:'pointer'}}></InstagramIcon>
                         </Link>
                                    
                         </div></Grid>
                        <Grid item  >
                        <div class="mapouter">
                            <div class="gmap_canvas">
                                <iframe title='map' style={{marginTop:'4rem'}} width="700" height="200" id="gmap_canvas" src="https://maps.google.com/maps?q=anjana+nagar&t=&z=12&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                               
                                </div>
                                </div>
                        </Grid>
                      </Grid>
                      
                        
    </div>
  )
}

export default Contact