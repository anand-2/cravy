import React,{useState} from "react"
import { Box,Button,Card,Grid, Rating} from "@mui/material"
import { styled } from '@mui/material/styles';
import "../sections/Restaurant.css"
import axios from "axios";
import { useHistory } from "react-router-dom";

function DishCard({dish}) {

    const [hovered, setHovered] = useState(false);
    const history = useHistory()
    const StyledRating = styled(Rating)({
        '& .MuiRating-iconFilled': {
          color: '#FFB000',
        }
      });

  return (
    <div style={{paddingLeft:'0rem'}}>
        <span className='secTitle'><Box color='#FF3C00'>Popular</Box> Dishes</span>
        <div style={{justifyContent:'center',display:'flex'}}>
        <Box className='popularCard'>
        <Grid container gap='3rem' justifyContent='center' display='flex'>
        {dish.map((item,index)=>{
            return   <Card className='dishCard'>
            <Grid container flexDirection='column'>
                <Grid padding='7.5rem 6rem 3rem 6rem' item height='150px' style={{backgroundImage: `url(${item?.image})`,backgroundRepeat:'no-repeat',backgroundPosition: 'center',backgroundSize: '180px 150px'}}>
                
                </Grid>
                <Grid item >
                    <div className='dishCardBody'>
                            <span className='dishName'>{item?.name}</span>
                            <div style={{padding:'0.5rem',display:'flex',justifyContent:'center'}}>
                            <StyledRating size='medium'  name="read-only" value={item?.rating} readOnly />
                            </div>               
                            <span  className='dishDesc'>{item?.description}</span>
                            <Grid  container justifyContent='space-between'>
                                <Grid item  className='dishPrice'>₹{item?.price}</Grid>
                                <Grid item>
                                     <Button onMouseEnter={() => setHovered(index)}
                                        onMouseLeave={() => setHovered(null)}           
                                        style={{
                                            backgroundColor:hovered === index ?  '#F2BD57' : '',
                                            borderColor:'#F2BD57'
                                        }}  variant="outlined" sx={{borderRadius:'20px',color:'black',textTransform:'capitalize',fontSize:'12px',fontWeight:'600',borderColor:'#F2BD57'}}>Add to Cart</Button></Grid>
                            </Grid>
                    </div>
                </Grid>
            </Grid>

            </Card>
        })}
        </Grid>
        </Box>
        </div>
    </div>
  )
}

export default DishCard