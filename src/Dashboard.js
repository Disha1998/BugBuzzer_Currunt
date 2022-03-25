import React from 'react'
import Intro from './components/Intro'
import Bugs from './components/Bugs'
import BountyWinners from './components/BountyWinners'
import Compaigns from './components/Compaigns'
import QandAList from './components/QandAList'
import { AppBar, Toolbar, Button, Typography} from '@mui/material'
import { Box } from '@mui/system'
import { Link } from 'react-router-dom'
import Detailbutton from './components/Detailbutton'

const Dashboard = () => {
  return (
      <>
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

      <Link to="/Q&A">
        <Button style={{color:'black', fontWeight:'bold' ,textTransform:'capitalize'}} size='medium' variant='text'>
        Q&A
        </Button>
        </Link>

      <Link to="/Compaigns">
        <Button style={{color:'black', fontWeight:'bold' ,textTransform:'capitalize'}} size='medium' variant='text'>
        Bounty Campaign
        </Button>
        </Link>
      {/* <Link to="hireexperts"> */}
        <Button style={{color:'black', fontWeight:'bold' ,textTransform:'capitalize'}} size='medium' variant='text'>
        Hire Experts  </Button>
        {/* </Link> */}
      
      </Box>
             
            </Toolbar>
      </AppBar>
     <Intro />
     <Bugs />
     <Compaigns />
     <QandAList />
     <BountyWinners />
      </>   
 
    )
}

export default Dashboard