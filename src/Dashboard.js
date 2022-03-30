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
              <Link to="/Q&A">
                <Button style={{ color: 'black', fontWeight: 'bold', textTransform: 'capitalize' }} size='medium' variant='text'>
                  Q&A
                </Button>
              </Link>

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
        <SwipeableDrawer anchor='top' open={open} onOpen={() => setOpen(true)} onClose={() => setOpen(false)}>
          <Box p={3} sx={{display:"inline-list"}}>
            <Link to="/Q&A">
              <Button style={{ color: 'black', fontWeight: 'bold', textTransform: 'capitalize' }} size='medium' variant='text'>
                Q&A
              </Button>
            </Link>
            <Button style={{ color: 'black', fontWeight: 'bold', textTransform: 'capitalize' }} size='medium' variant='text'>
              Bounty Campaign
            </Button>
            <Button style={{ color: 'black', fontWeight: 'bold', textTransform: 'capitalize' }} size='medium' variant='text'>
              Hire Experts  </Button>
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