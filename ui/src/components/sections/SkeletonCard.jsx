import { Card, Grid, Skeleton } from '@mui/material'
import React from 'react'

function SkeletonCard() {
  return (
    <div> <Card className='resCard'>
<Grid container flexDirection='column'>
<Grid item height='220px'>
 <Skeleton height='220px' variant='rectangular'></Skeleton>
</Grid>
<Grid item >
<div className='resCardBody'>
        <span className='resName'><Skeleton width='50%'></Skeleton></span>
        <span className='resDesc'><Skeleton  width='80%'></Skeleton></span>
        <span className='resDesc'><Skeleton  width='80%'></Skeleton></span>
</div>
</Grid>
</Grid>

</Card></div>
  )
}

export default SkeletonCard