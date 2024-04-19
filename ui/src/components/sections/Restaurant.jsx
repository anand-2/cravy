import React,{useEffect,useState} from 'react'
import axios from 'axios'
import NavbarComponent from "../common/NavbarComponent"
import { Box, Card, Grid, Rating } from '@mui/material'
import RestCard from '../common/RestCard'
import "./Restaurant.css"



function Restaurant() {

       const [restaurants, setRestaurants] = useState([])




    useEffect(() => {
        axios.get("https://cravy.onrender.com/users/restaurant")
            .then((res) => {
                let data = res.data.data

                setRestaurants(data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

 
  return (
    <div style={{overflowX:'hidden',backgroundColor:'#FEFAF6'}}>
        <NavbarComponent></NavbarComponent>
        <span className='secTitle'><Box color='#FF3C00'>Popular</Box> Restaurants</span>
        <div style={{justifyContent:'center',display:'flex'}}>
            
            <Box className='popularCard'>
          
            {restaurants.slice(4,7).map((one_res) => {
                        return <Grid item xs='3'>
                            <RestCard restaurants = {one_res}></RestCard>
                    </Grid>

                    })}
            </Box>
        </div>

        <span className='secTitle'><Box color='#FF3C00'>Nearby</Box> Restaurants</span>
        <div style={{justifyContent:'center',display:'flex'}}>
            <Box className='popularCard'>   
            <div>    
                <Grid container gap='1rem' justifyContent='center' display='flex'>
                    
                    {restaurants.map((one_res) => {
                        return <Grid item xs='3'>
                            <RestCard restaurants = {one_res}></RestCard>
                    </Grid>

                    })}
                    </Grid>           
              
            </div>

            </Box>

        </div>
    </div>
  )
}

export default Restaurant