import React from 'react'
import { AppBar, Toolbar, Button, Typography} from '@mui/material'
import { Box } from '@mui/system'
import { Link } from 'react-router-dom'

const DashboardNav = () => {
  return (

<AppBar color='inherit' position='fixed' sx={{ height:'70px'}}>
<Toolbar >
<Typography flexGrow={1}>
<Link to="/">
  {/* <Typography flexGrow={1}> */}
  <img src="BugBuzzer-Logo-Web.png" alt="logo"/>
  {/* </Typography> */}
  </Link>
  </Typography>


<Box m = {1} p ={2}>
{/* <Link to = "/reportbug"> */}
<Button style={{color:'black', fontWeight:'bold' ,textTransform:'capitalize'}} size='medium' variant='text'>
Report Bug
</Button>
{/* </Link> */}

<Button href="/Q&A" style={{color:'black', fontWeight:'bold' ,textTransform:'capitalize'}} size='medium' variant='text'>
Q&A
</Button>

<Button  href="/Compaigns" style={{color:'black', fontWeight:'bold' ,textTransform:'capitalize'}} size='medium' variant='text'>
Bounty Campaign
</Button>
{/* <Link to="hireexperts"> */}
<Button style={{color:'black', fontWeight:'bold' ,textTransform:'capitalize'}} size='medium' variant='text'>
Hire Experts  </Button>
{/* </Link> */}

</Box>
   
  </Toolbar>
</AppBar>    )
}

export default DashboardNav