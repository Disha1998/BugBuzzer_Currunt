import React, { useState } from 'react'
import Intro from './components/Intro'
import Bugs from './components/Bugs'
import BountyWinners from './components/BountyWinners'
import Compaigns from './components/Compaigns'
import QandAList from './components/QandAList'
import { AppBar, Toolbar, Button, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { Link } from 'react-router-dom'
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Hidden } from '@mui/material';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import { Divider } from '@mui/material'
import { ListItem } from '@mui/material'

const Dashboard = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <AppBar color='inherit' position='fixed' sx={{ height: '70px' }}>
        <Toolbar >
          <Typography flexGrow={1}>
            <img src="BugBuzzer-Logo-Web.png" alt="logo" />
          </Typography>
          <Hidden smDown>


            <Box m={1} p={2}>
            <Button style={{ color: 'black', fontWeight: 'bold', textTransform: 'capitalize' }} size='medium' variant='text'>
                  Report bug
                </Button>
              
                <Button href="/Q&A" style={{ color: 'black', fontWeight: 'bold', textTransform: 'capitalize' }} size='medium' variant='text'>
                  Q&A
                </Button>
              

              <Button href='/Compaigns' style={{ color: 'black', fontWeight: 'bold', textTransform: 'capitalize' }} size='medium' variant='text'>
                Bounty Campaign
              </Button>
              <Button style={{ color: 'black', fontWeight: 'bold', textTransform: 'capitalize' }} size='medium' variant='text'>
                Hire Experts  </Button>

            </Box>
          </Hidden>

          <Hidden smUp>
            <IconButton>
              <MenuIcon onClick={() => setOpen(true)} />
            </IconButton>
          </Hidden>


        </Toolbar>
        <SwipeableDrawer anchor='left' open={open} onOpen={() => setOpen(true)} onClose={() => setOpen(false)}>
          <Box textAlign="center" p={4} sx={{width:"180px", height:"150px", color:"#D82148"}}>
          <ListItem Button style={{fontSize:"18px", color: 'black', fontWeight: 'bold', textTransform: 'capitalize', borderBottom:"1.5px solid #D82148",marginBottom:"5px" }} size='medium' variant='text'>
               Report Bug
              </ListItem>
           
              <ListItem Button href="/Q&A" style={{fontSize:"18px", color: 'black', fontWeight: 'bold', textTransform: 'capitalize', borderBottom:"1.5px solid #D82148",marginBottom:"5px" }} size='medium' variant='text'>
                Q&A
              </ListItem>
           
            <ListItem Button style={{fontSize:"18px", color: 'black', fontWeight: 'bold', textTransform: 'capitalize',borderBottom:"1.5px solid #D82148", marginBottom:"5px" }} size='medium' variant='text'>
              Bounty Campaign
            </ListItem>
            
            <ListItem Button style={{fontSize:"18px", color: 'black', fontWeight: 'bold', textTransform: 'capitalize',borderBottom:"1.5px solid #D82148", marginBottom:"5px"  }} size='medium' variant='text'>
              Hire Experts 
               </ListItem>
          </Box>
        </SwipeableDrawer>

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