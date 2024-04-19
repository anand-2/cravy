import { Grid,Skeleton,Box } from '@mui/material'
import React from 'react'


function SkeletonRestHome() {
  return (
    <div><Grid container justifyContent='center'>
    <Grid item xs={7}  marginTop='0rem'>
      <div className="resHeading"><h1 style={{marginBottom:'0px'}}><Skeleton variant='rounded' width='400px'></Skeleton></h1></div>
        <p className="resSubHeading" style={{padding:'0 7rem 0 7rem'}}><Skeleton width='200px'></Skeleton></p>
        <p className="resSubHeading" style={{padding:'0 7rem 0 7rem'}}><Skeleton width='200px'></Skeleton></p>
        <p className="resSubHeading" style={{padding:'0 7rem 0 7rem'}} ><Skeleton  variant='circular' height='20px' width='20px'></Skeleton><Skeleton variant='circular' height='20px' width='20px'></Skeleton><Skeleton variant='circular' height='20px' width='20px'></Skeleton><Skeleton variant='circular' height='20px' width='20px'></Skeleton><Skeleton variant='circular' height='20px' width='20px'></Skeleton></p>

        </Grid>
    <Grid item xs={5} >
    <Box justifyContent='right' display='flex'>
<Box  height='300px'  >
    <Skeleton width='500px' height='300px' variant='rounded' style={{ borderRadius:'50% 0% 0% 50%'}}></Skeleton>
</Box>
</Box >

    </Grid>
    </Grid></div>
  )
}

export default SkeletonRestHome