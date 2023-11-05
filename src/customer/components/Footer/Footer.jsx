import { Button, Grid, Link, Typography } from '@mui/material'
import React from 'react'

const Footer = () => {
  return (
    <div>
        <Grid className='bg-black text-white text-center mt-10' container sx={{bgcolor:"black", color:"white", py:3}}>
           <Grid item xs={12} sm={6} md={3}>
            <Typography className='pb-5' variant='h6'>Company</Typography>
            <div>
            <Button className='pb-5' variant='h6' gutterButtom>About</Button>
            </div>
            <div>
            <Button className='pb-5' variant='h6' gutterButtom>Blog</Button>
            </div>
            <div>
            <Button className='pb-5' variant='h6' gutterButtom>Press</Button>
            </div>
            <div>
            <Button className='pb-5' variant='h6' gutterButtom>Partner</Button>
            </div>
            </Grid> 
            <Grid item xs={12} sm={6} md={3}>
            <Typography className='pb-5' variant='h6'>Company</Typography>
            <div>
            <Button className='pb-5' variant='h6' gutterButtom>About</Button>
            </div>
            <div>
            <Button className='pb-5' variant='h6' gutterButtom>Blog</Button>
            </div>
            <div>
            <Button className='pb-5' variant='h6' gutterButtom>Press</Button>
            </div>
            <div>
            <Button className='pb-5' variant='h6' gutterButtom>Partner</Button>
            </div>
            </Grid> 
            <Grid item xs={12} sm={6} md={3}>
            <Typography className='pb-5' variant='h6'>Company</Typography>
            <div>
            <Button className='pb-5' variant='h6' gutterButtom>About</Button>
            </div>
            <div>
            <Button className='pb-5' variant='h6' gutterButtom>Blog</Button>
            </div>
            <div>
            <Button className='pb-5' variant='h6' gutterButtom>Press</Button>
            </div>
            <div>
            <Button className='pb-5' variant='h6' gutterButtom>Partner</Button>
            </div>
            </Grid> 
            <Grid item xs={12} sm={6} md={3}>
            <Typography className='pb-5' variant='h6'>Company</Typography>
            <div>
            <Button className='pb-5' variant='h6' gutterButtom>About</Button>
            </div>
            <div>
            <Button className='pb-5' variant='h6' gutterButtom>Blog</Button>
            </div>
            <div>
            <Button className='pb-5' variant='h6' gutterButtom>Press</Button>
            </div>
            <div>
            <Button className='pb-5' variant='h6' gutterButtom>Partner</Button>
            </div>
            </Grid> 
            <Grid className='pt-10' item xs={12}>
<Typography variant='body2' component="p" align='center'> 
    &copy; 2023 AmazoAA. All Rights Reserved</Typography>
    <Typography variant='body2' component="p" align='center'> 
   Icons made by {' '}
   <Link href="" color="inherit" underline='always'>FreePick</Link>{' '} from {' '}<Link href="" color="inherit" underline='always'>FreePick.com</Link>
   </Typography>
            </Grid>
        </Grid>
    </div>
  )
}

export default Footer