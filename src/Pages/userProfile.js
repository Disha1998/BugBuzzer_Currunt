import React from "react";
import { Box, Paper,Container, Grid, Button, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}
export default function UserProfile() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const mailStyle = { textAlign:'left'}
  const sfStyle = { textAlign:'left'}
  const FollowStyle = { textAlign:'left'}

  return (
    <>
    <Container maxWidth='xl' >
      <Grid align='center' mt={20}>
        {/* <Paper elevation={10} style={paperStyle} spacing={2}> */}

          <Box 
            sx={{
              height: "25vh",
              width: '90vw',
              border: "2px solid #ffffff",
              background: "#C4C4C4",
              borderRadius: '13px',
              
            }}
          >
           
            <Box
              sx={{
                height: "14vh",
                width: 100,
                borderTop: '3px solid #FFFFFF',
                background: "#C4C4C4",
                borderRadius: '50%',
                marginTop: '130px',
                float: 'left',
                ml: 3,
              }}
            >

              <Typography mt={4}>100 x 100</Typography>
            </Box>
            <Typography mr={15} variant="h4" mt={5}>100 x 100</Typography>
          </Box>
          <Grid  item>

          <Box sx={{float:'left', mt:1, ml:4}}>

          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Typography variant="subtitle1"  fontWeight="bold">EoKCWV9PLGLN5KjicoPAhh10q</Typography>
<Typography style={mailStyle} variant="subtitle2" color="#C4C4C4">  @EoKCWV9PLGLN5KjicoPAhh10q            </Typography>
 <Typography style={sfStyle} variant="subtitle1"  fontWeight="bold" >SuperFun.Social Points :</Typography>
 <Typography style={FollowStyle} fontSize='14px'  color='GrayText'> 200 <span style={{ color: '#D82148' }}> Followers</span> 200 <span style={{ color: '#D82148' }}>Following</span></Typography> 

                        </Box>          </Grid>

          {/* <Typography fontSize='18px' fontWeight='bold' mr={100} mt={2}> EokCWV9PLGLN5kjicoPAhh10q</Typography>
          <Typography fontSize='14px' color='GrayText' mr={107}> @EokCWV9PLGLN5kjicoPAhh10q</Typography>
          <Typography fontSize='18px' fontWeight='bold' mr={88} mt={1}>SuperFun.Social Points:</Typography>
          <Typography mr={92} fontSize='14px' color='GrayText'> 200 <span style={{ color: '#D82148' }}> Followers</span> 200 <span style={{ color: '#D82148' }}>Following</span></Typography> */}
<Grid  item mb={{sm:10, xs:40, lg:0}}>

<Button
            variant="contained"
            size="small"
            style={{
              backgroundColor: "#D82148",
              border: "2px solid #D82148",
              fontWeight: "bold",
            }}             sx={{ float: 'right', mr: 5,}}
          >
            Follow
          </Button>
          </Grid>


          <Box sx={{ width: '90%', mt:20 }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value}  onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Question" {...a11yProps(0)} />
          <Tab label="Bounty" {...a11yProps(1)} />
          <Tab label="Rewards" {...a11yProps(2)} />
          <Tab label="Leader Board" {...a11yProps(2)} />

        </Tabs>
      </Box>

      <TabPanel value={value} index={0}>
      Question
      </TabPanel>
      <TabPanel value={value} index={1}>
      Bounty      </TabPanel>
      <TabPanel value={value} index={2}>
      Rewards      </TabPanel>
      <TabPanel value={value} index={3}>
      Leader Board      </TabPanel>

    </Box>

    </Grid>

        {/* </Paper> */}
        </Container>

    </>
  )
}