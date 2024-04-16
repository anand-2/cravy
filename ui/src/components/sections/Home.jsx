import React, { useState, useEffect } from "react";
import NavbarComponent from "../common/NavbarComponent"
import "./Home.css"
import axios from "axios";
import RestCard from "../common/RestCard";
import { Button, Grid } from "@mui/material";
import Lottie from 'react-lottie';
import easyOrder from "../../lotties/easyOrder.json"
import delivery from "../../lotties/delivery.json"
import care from "../../lotties/care.json"





function Home() {

    const phoneAni = {
        loop: true,
        autoplay: true,
        animationData: easyOrder,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };

      const deliveryAni = {
        loop: true,
        autoplay: true,
        animationData: delivery,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
      const customerAni = {
        loop: true,
        autoplay: true,
        animationData: care,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };


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
    return <div style={{overflowX:'hidden'}} className="container">

        <div >
        <section className="containerOne">
        <NavbarComponent></NavbarComponent>
            <Grid container justifyContent='center'>
            <Grid item xs={7}  marginTop='5rem'>
              <div className="containerOneHeading"><h1 style={{marginBottom:'0px'}}>Ordering Made</h1><h1 style={{color:'#EEC84B',marginBottom:'0px'}}>EASY</h1></div>
                <p className="containerOneBody" style={{padding:'0 7rem 0 7rem'}}>Experience the convenience of effortless dining with our user-friendly website, where ordering your favorite dishes is just a click away.</p></Grid>
            <Grid item xs={5} >
            <Lottie 
                options={phoneAni}                
                height={500}
                width={500}
                style={{margin:'0 1rem 0rem 0rem'}}
                 />
            </Grid>
            </Grid>
          
           
        </section>
        <section  className="containerTwo">
        <Grid container justifyContent='center'>
        <Grid item xs={5} >
            <Lottie 
                options={deliveryAni}                
                height={500}                
                width={500}
                style={{margin:'2rem'}}
                 />
            </Grid>
            <Grid item xs={7}  marginTop='9rem'>
              <div className="containerOneHeading"><h1 style={{marginBottom:'0px'}}>Super Fast</h1><h1 style={{color:'#FF3C00',marginBottom:'0px'}}>Delivery</h1></div>
                <p className="containerOneBody" style={{padding:'0 7rem 0 8rem'}}>Lightning-fast delivery like never before, ensuring your cravings are satisfied in record time..</p>
                <Button style={{margin:'0 7rem 0 9rem',backgroundColor:'#FF3C00'}}  variant="contained">Order NOW</Button>

                </Grid>
            </Grid>
          
           
        </section>
        <section className="containerThree">
        <Grid container justifyContent='center'>
        
            <Grid item xs={6.8}  marginTop='9rem'>
              <div className="containerOneHeading"><h1 style={{color:'#1F47B7',marginBottom:'0px'}}>Your</h1><h1 style={{marginBottom:'0px'}}>Support System</h1></div>
                <p className="containerOneBody" style={{padding:'0 7rem 0 6.8rem'}}>Our team is here day and night to assist you, ensuring a seamless ordering experience from start to finish.</p>
                <Button style={{margin:'0 7rem 0 8rem',backgroundColor:'#1F47B7'}}  variant="contained">Contact</Button>
                </Grid>

                <Grid item xs={5.2}>
            <Lottie 
                options={customerAni}                
                height={500}                
                width={500}
                style={{margin:'2rem'}}
                 />
            </Grid>
           
            </Grid>
            
          
          
           
        </section>

        </div>

    </div >
}

export default Home;









 // eslint-disable-next-line no-lone-blocks
 {/* <Grid container>
                {
                    restaurants.map((one_res) => {
                        return <Grid item key={one_res.id}>
                            <RestCard name={one_res.name} description={one_res.description} image={one_res.image}></RestCard>
                        </Grid>
                    })
                }
            </Grid> */}