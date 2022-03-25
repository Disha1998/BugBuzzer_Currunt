import React from 'react'
import { AppBar, Toolbar, Button, Typography} from '@mui/material'
import { Box } from '@mui/system'
// import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
   
<AppBar color='inherit' position='fixed' sx={{ height:'70px'}}>
    <Toolbar >
      <Typography flexGrow={1}>
      <img src="BugBuzzer-Logo-Web.png" alt="logo"/>
      </Typography>
      
<Box m = {1} p ={2}>
  {/* <Link to = "/reportbug"> */}
  <Button style={{color:'black', fontWeight:'bold' ,textTransform:'capitalize'}} size='medium' variant='text'>
Report Bug
  </Button>
  {/* </Link> */}
{/* <Link to="/Q&A"> */}
  <Button style={{color:'black', fontWeight:'bold' ,textTransform:'capitalize'}} size='medium' variant='text'>
  Q&A
  </Button>
  {/* </Link> */}
{/* <Link to="bountycompaigns"> */}
  <Button style={{color:'black', fontWeight:'bold' ,textTransform:'capitalize'}} size='medium' variant='text'>
  Bounty Campaign
  </Button>
  {/* </Link> */}
{/* <Link to="hireexperts"> */}
  <Button style={{color:'black', fontWeight:'bold' ,textTransform:'capitalize'}} size='medium' variant='text'>
  Hire Experts  </Button>
  {/* </Link> */}

<Button style ={{color:'#D82148', fontWeight:'bold', textTransform:'capitalize',border:'1px solid #D82148'}} size = "small" variant="outlined"  sx={{borderRadius:2}}>
Connect
</Button>

</Box>
       
      </Toolbar>
</AppBar>



    )
}

export default Navbar
