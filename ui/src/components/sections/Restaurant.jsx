import React,{useEffect,useState} from 'react'
import axios from 'axios'
import NavbarComponent from "../common/NavbarComponent"
import { Box, Card, Grid, Rating } from '@mui/material'
import "./Restaurant.css"



function Restaurant() {

       const [restaurants, setRestaurants] = useState([])

    useEffect(() => {
        axios.get("http://localhost:5000/users/restaurant")
            .then((res) => {
                let data = res.data.data

                setRestaurants(data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])
    console.log("res",restaurants)


  return (
    <div style={{overflowX:'auto'}}>
        <NavbarComponent></NavbarComponent>
        <span className='secTitle'><Box color='#FF3C00'>Popular</Box> Restaurant</span>
        <div style={{justifyContent:'center',display:'flex'}}>
            
            <Box className='popularCard'>
          
                { restaurants.slice(4,7).map((one_res) => {
                        return <Card className='resCard'>
                        <Grid container flexDirection='column'>
                            <Grid item height='220px'>
                                <div>
                                <Box sx={{
                                     maxHeight:'100%',
                                     maxWidth:'100%'                                                                    
                                 }} component='img' src={one_res.image}></Box>
                                </div>
                                
                            </Grid>
                            <Grid item >
                                <div className='resCardBody'>
                                        <span className='resName'>{one_res.name}</span>
                                        <span className='resDesc'>{one_res.description}</span>
                                        <span className='resDesc'>{one_res.address}</span>
                                        <Rating size='medium' name="read-only" value={one_res.rating} readOnly />
                                </div>
                            </Grid>
                        </Grid>
                    </Card>
                        
                    })}
            </Box>
        </div>

        <span className='secTitle'><Box color='#FF3C00'>Nearby</Box> Restaurant</span>
        <div style={{justifyContent:'center',display:'flex'}}>
            <Box className='popularCard'>   
            <div sx={{width:'300px'}}>
                {restaurants.map((one_res) => {
                        return <Card className='resCard'>
                        <Grid container flexDirection='column'>
                            <Grid item height='220px'>
                                <div>
                                <Box sx={{
                                     maxHeight:'400px',
                                     maxWidth:'100%'                                                                    
                                 }} component='img' src={one_res.image}></Box>
                                </div>
                                
                            </Grid>
                            <Grid item >
                                <div className='resCardBody'>
                                        <span className='resName'>{one_res.name}</span>
                                        <span className='resDesc'>{one_res.description}</span>
                                        <span className='resDesc'>{one_res.address}</span>
                                        <Rating size='medium' name="read-only" value={one_res.rating} readOnly />
                                </div>
                            </Grid>
                        </Grid>
                    </Card>
                    })}
            </div>

            </Box>

        </div>
    </div>
  )
}

export default Restaurant