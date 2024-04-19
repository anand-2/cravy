import React, { useEffect, useState } from "react";
import NavbarComponent from "../common/NavbarComponent";
import { useLocation } from 'react-router-dom';
import { styled } from '@mui/material/styles';

import axios from "axios";

import "./Dish.css"
import { Box, Grid,Rating } from "@mui/material";
import SkeletonCard from "./SkeletonCard";
import SkeletonRestHome from "./SkeletonRestHome";


function RestHome() {
    const location = useLocation();
    const [restaurant,setRestaurants] = useState()
    const [dishes,setDishes] = useState()
    const [loading,setLoading] = useState(false)

    const StyledRating = styled(Rating)({
        '& .MuiRating-iconFilled': {
          color: '#FFB000',
        }
      });

    const data = location.state?.name


    useEffect(()=>{
        setLoading(true)
            axios.post("https://cravy.onrender.com/users/resHome",{name : data})
            .then((res) => {
                let data = res.data.data
                setRestaurants(data[0])
                setLoading(false)
                }
        )
            .catch((err) => {
                console.log("error",err)
                setLoading(false)
            })
            
    },[data])

    
    useEffect(() => {
        setLoading(true)
        axios.get("https://cravy.onrender.com/users/dish")
            .then((res) => {
                let data = res.data.data
                setDishes(data)
                setLoading(false)
            })
            .catch((err) => {
                console.log(err)
                setLoading(false)
            })
    }, [])


console.log("dish ",dishes)
    return <div style={{overflowX:'hidden'}}><NavbarComponent />

{loading === false ? <Grid container justifyContent='center'>
            <Grid item xs={7}  marginTop='0rem'>
              <div className="resHeading"><h1 style={{marginBottom:'0px'}}>{restaurant?.name}</h1></div>
                <p className="resSubHeading" style={{padding:'0 7rem 0 7rem'}}>{restaurant?.description}</p>
                <p className="resSubHeading" style={{padding:'0 7rem 0 7rem'}}>{restaurant?.address}</p>
                <StyledRating size='medium' sx={{paddingLeft:'55vh'}} name="read-only" value={restaurant?.rating} readOnly />


                </Grid>
            <Grid item xs={5} >
            <Box justifyContent='right' display='flex'>
       <Box sx={{backgroundImage:`url(${restaurant?.image})`,width:'500px',backgroundPosition:'center',backgroundSize:'cover',backgroundRepeat:'no-repeat'}} height='300px' borderRadius= '50% 0% 0% 50%'  ></Box>
        </Box >

            </Grid>
            </Grid> : <SkeletonRestHome></SkeletonRestHome>}
       

    </div >

}

export default RestHome;