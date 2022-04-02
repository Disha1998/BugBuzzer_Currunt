import { Typography, Stack, Grid, Container } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
// import { Container } from "@mui/material";
import { Circle } from '@mui/icons-material'

const Leaderboard = () => {
  return (
    <>
      <Container style={{marginTop:"12%"}}>
        <Grid item xs={12} sm={6}>
        <Stack  direction="row" justifyContent="space-evenly" flexWrap="wrap">
          <Box sx={{ width: '285px', height: '230px', mb: 4, border: '2px solid #C4C4C4' }}>
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
          </Stack>
         
        </Grid>
      </Container>
    </>
  );
};

export default Leaderboard;

