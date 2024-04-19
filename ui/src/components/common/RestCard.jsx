import React,{useState} from "react"
import { Card,Grid, Rating} from "@mui/material"
import { styled } from '@mui/material/styles';
import "../sections/Restaurant.css"
import axios from "axios";
import { useHistory } from "react-router-dom";

function RestCard({restaurants}) {
    const [hovered, setHovered] = useState(false);
    const history = useHistory()
    const StyledRating = styled(Rating)({
        '& .MuiRating-iconFilled': {
          color: '#FFB000',
        }
      });
 


    return   <Card className='resCard'
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                onClick={()=>{history.push({
                 pathname: '/resHome',
                state: {name : restaurants.name}
              })}}
                style={{
                  transform: hovered ? 'scale(1.05)' : null,
                  transition: 'transform 0.3s ease'
            }}>
    <Grid container flexDirection='column'>
        <Grid item height='220px' style={{backgroundImage: `url(${restaurants.image})`,backgroundPosition: 'center',backgroundSize: 'cover'}}>
           
        </Grid>
        <Grid item >
            <div className='resCardBody'>
                    <span className='resName'>{restaurants.name}</span>
                    <span className='resDesc'>{restaurants.description}</span>
                    <span className='resDesc'>{restaurants.address}</span>
                    <StyledRating size='medium' name="read-only" value={restaurants.rating} readOnly />
            </div>
        </Grid>
    </Grid>
    
</Card>
}

export default RestCard;