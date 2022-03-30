import { Typography, Stack, Grid } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { Circle } from '@mui/icons-material'


const BountyWinners = () => {
  return (
    <>
      <Grid item xs={12} sm={6}>
        <Typography fontWeight='bold' variant='h4' m={5} pl={4} style={{ marginLeft: '-27px', marginTop: '77px' }}>

          Top <span style={{ color: '#D82148' }}>Contributors</span> {" "}
        </Typography>
        <Stack  direction="row"  justifyContent="space-evenly" flexWrap="wrap">
          <Box sx={{ width: '285px', height: '230px', mb: 4, border: '2px solid #C4C4C4', }}>
            <Circle sx={{ width: "150px", height: "150px", ml: "25%", color: "#C4C4C4", borderRadius: "50%" }} ></Circle>

            <Typography variant='subtitle1' align="center" mt={1}>Answers: 220  Questions: 5 </Typography>
            <Typography variant='subtitle1' align="center">Skills: Flutter | React Native</Typography>

          </Box>
          <Box sx={{ width: '285px', height: '230px', mb: 4, border: '2px solid #C4C4C4', }}>
            <Circle sx={{ width: "150px", height: "150px", ml: "25%", color: "#C4C4C4", borderRadius: "50%" }} ></Circle>

            <Typography variant='subtitle1' align="center" mt={1}>Answers: 220  Questions: 5 </Typography>
            <Typography variant='subtitle1' align="center">Skills: Flutter | React Native</Typography>

          </Box>
          <Box sx={{ width: '285px', height: '230px', mb: 4, border: '2px solid #C4C4C4', }}>
            <Circle sx={{ width: "150px", height: "150px", ml: "25%", color: "#C4C4C4", borderRadius: "50%" }} ></Circle>

            <Typography variant='subtitle1' align="center" mt={1}>Answers: 220  Questions: 5 </Typography>
            <Typography variant='subtitle1' align="center">Skills: Flutter | React Native</Typography>

          </Box>
          <Box sx={{ width: '285px', height: '230px', mb: 4, border: '2px solid #C4C4C4', }}>
            <Circle sx={{ width: "150px", height: "150px", ml: "25%", color: "#C4C4C4", borderRadius: "50%" }} ></Circle>

            <Typography variant='subtitle1' align="center" mt={1}>Answers: 220  Questions: 5 </Typography>
            <Typography variant='subtitle1' align="center">Skills: Flutter | React Native</Typography>

          </Box>
          <Box sx={{ width: '285px', height: '230px', mb: 4, border: '2px solid #C4C4C4', }}>
            <Circle sx={{ width: "150px", height: "150px", ml: "25%", color: "#C4C4C4", borderRadius: "50%" }} ></Circle>

            <Typography variant='subtitle1' align="center" mt={1}>Answers: 220  Questions: 5 </Typography>
            <Typography variant='subtitle1' align="center">Skills: Flutter | React Native</Typography>

          </Box>
          <Box sx={{ width: '285px', height: '230px', mb: 4, border: '2px solid #C4C4C4', }}>
            <Circle sx={{ width: "150px", height: "150px", ml: "25%", color: "#C4C4C4", borderRadius: "50%" }} ></Circle>

            <Typography variant='subtitle1' align="center" mt={1}>Answers: 220  Questions: 5 </Typography>
            <Typography variant='subtitle1' align="center">Skills: Flutter | React Native</Typography>

          </Box>


          {/* <Box sx={{ width: 250, height: 230,mb:4, border: '1px solid #E5E5E5 ' }}>
          <Circle sx={{ width: "100px", height: "100px",  ml:"30%", color: "#C4C4C4", borderRadius: "50%" }} ></Circle>
          <Typography variant='subtitle1' fontWeight="bold" align='center'>Alex Pandit</Typography>
          <Typography variant='subtitle2' align='center'>Buzz : 500</Typography>
          <Typography variant='subtitle2' align="center" mt={1}>Answers: 220  Questions: 5 </Typography>
          <Typography variant='subtitle2' align="center">Skills: Flutter | React Native</Typography>
        </Box>
        
        <Box sx={{ width: 250, height: 230,mb:4, border: '1px solid #E5E5E5 ' }}>
          <Circle sx={{ width: "100px", height: "100px",  ml:"30%", color: "#C4C4C4", borderRadius: "50%" }} ></Circle>
          <Typography variant='subtitle1' fontWeight="bold" align='center'>Alex Pandit</Typography>
          <Typography variant='subtitle2' align='center'>Buzz : 500</Typography>
          <Typography variant='subtitle2' align="center" mt={1}>Answers: 220  Questions: 5 </Typography>
          <Typography variant='subtitle2' align="center">Skills: Flutter | React Native</Typography>
        </Box> */}
        </Stack>










        {/* <Stack direction='row' flexWrap='wrap' spacing={10} >


          <Box
            sx={{
              height: '190px',
              width: '230px',
              border: '2px solid #C4C4C4',
              background: '#FFFFFF',
              padding: '20px',
              ml: 10,
              mb: "2%"
            }}
          >
            <Box sx={{
              height: '94px',
              width: '97px',
              border: '2px solid #ffffff',
              borderRadius: '50%',
              background: '#C4C4C4',
              p: 1,
              m: 1,
              ml: 6.6,

            }}></Box>
            <Typography variant="subtitle1" ml={1} mb={1} mt={1}>Answers: 220 Question: 220</Typography>
            <Typography variant="subtitle1" ml={1} mb={1} mt={1}>Skills: Flutter | React Native </Typography>

          </Box>
          <Box
            sx={{
              height: '190px',
              width: '230px',
              border: '2px solid #C4C4C4',
              background: '#FFFFFF',
              padding: '20px',
              mb: "2%"
            }}
          >
            <Box sx={{
              height: '94px',
              width: '97px',
              border: '2px solid #ffffff',
              borderRadius: '50%',
              background: '#C4C4C4',
              p: 1,
              m: 1,
              ml: 6.6,

            }}></Box>
            <Typography variant="subtitle1" ml={1} mb={1} mt={1}>Answers: 220 Question: 220</Typography>
            <Typography variant="subtitle1" ml={1} mb={1} mt={1}>Skills: Flutter | React Native </Typography>

          </Box>
          <Box
            sx={{
              height: '190px',
              width: '230px',
              border: '2px solid #C4C4C4',
              background: '#FFFFFF',
              padding: '20px',
              mb: "2%"

            }}
          >
            <Box sx={{
              height: '94px',
              width: '97px',
              border: '2px solid #ffffff',
              borderRadius: '50%',
              background: '#C4C4C4',
              p: 1,
              m: 1,
              ml: 6.6,


            }}></Box>
            <Typography variant="subtitle1" ml={1} mb={1} mt={1}>Answers: 220 Question: 220</Typography>
            <Typography variant="subtitle1" ml={1} mb={1} mt={1}>Skills: Flutter | React Native </Typography>

          </Box>
          <Box
            sx={{
              height: '190px',
              width: '230px',
              border: '2px solid #C4C4C4',
              background: '#FFFFFF',
              padding: '20px',
              mt: 5,
              mb: "2%"

            }}
          >
            <Box sx={{
              height: '94px',
              width: '97px',
              border: '2px solid #ffffff',
              borderRadius: '50%',
              background: '#C4C4C4',
              p: 1,
              m: 1,
              ml: 6.6,

            }}></Box>
            <Typography variant="subtitle1" ml={1} mb={1} mt={1}>Answers: 220 Question: 220</Typography>
            <Typography variant="subtitle1" ml={1} mb={1} mt={1}>Skills: Flutter | React Native </Typography>

          </Box>
          <Box
            sx={{
              height: '190px',
              width: '230px',
              border: '2px solid #C4C4C4',
              background: '#FFFFFF',
              padding: '20px',
              mb: "2%"


            }}
          >
            <Box sx={{
              height: '94px',
              width: '97px',
              border: '2px solid #ffffff',
              borderRadius: '50%',
              background: '#C4C4C4',
              p: 1,
              m: 1,
              ml: 6.6,

            }}></Box>
            <Typography variant="subtitle1" ml={1} mb={1} mt={1}>Answers: 220 Question: 220</Typography>
            <Typography variant="subtitle1" ml={1} mb={1} mt={1}>Skills: Flutter | React Native </Typography>

          </Box>
          <Box
            sx={{
              height: '190px',
              width: '230px',
              border: '2px solid #C4C4C4',
              background: '#FFFFFF',
              padding: '20px',
              mb: "2%"

            }}
          >
            <Box sx={{
              height: '94px',
              width: '97px',
              border: '2px solid #ffffff',
              borderRadius: '50%',
              background: '#C4C4C4',
              p: 1,
              m: 1,
              ml: 6.6,

            }}></Box>
            <Typography variant="subtitle1" ml={1} mb={1} mt={1}>Answers: 220 Question: 220</Typography>
            <Typography variant="subtitle1" ml={1} mb={1} mt={1}>Skills: Flutter | React Native </Typography>

          </Box>

        </Stack> */}
      </Grid>


    </>

  )
}


export default BountyWinners
