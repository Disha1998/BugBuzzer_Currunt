import { Typography , Button, Container,Grid} from '@mui/material';
import { Box } from '@mui/system';
import React from 'react'


const QandAList = () => {
  return (
      <>
<Container>

        <Typography  fontWeight='bold' variant='h4' mt={10} style={{ marginLeft:'-16px'}} mb={-4} >
Recently  <span style={{color:'#D82148'}}>Asked Questions</span>       

    </Typography>
  <Grid item>

<Box

display="flex"
justifyContent="flex-end"
>
  <Button style ={{color:'#D82148',borderColor:'#D82148', fontWeight:'bold', textTransform:'capitalize'}} size = "medium" variant="outlined"  sx={{borderRadius:2,mr:1}} >
View all
</Button>

<Button style ={{color:'#ffffff',background:'#D82148',borderColor:'#D82148', fontWeight:'bold',textTransform:'capitalize'}} size = "medium" variant="outlined"  sx={{borderRadius:2}}>
Answers</Button>
</Box>
</Grid>

<Box mt={5}>
<Box sx={{ borderBottom: 1, width: 1150, color: "#E5E5E5" }} mb={4} ml={-2}>
    
  <Typography color='black'>  
  <span style={{fontWeight:'bold'}}>    Facing error in writing smart contracts and integrating in Hardhat   </span> <br />
  <span>upvote Downvote Answers(5) </span>
<span style={{marginLeft:'713px'}}>12 March 2022  by Alex Patel</span>
    </Typography>
  
   </Box> 
   <Box sx={{ borderBottom: 1, width: 1150, color: "#E5E5E5"  }} mb={4} ml={-2}>
    
  <Typography color='black'>  
  <span style={{fontWeight:'bold'}}>    Facing error in writing smart contracts and integrating in Hardhat   </span> <br />
  <span>upvote Downvote Answers(5) </span>
<span style={{marginLeft:'713px'}}>12 March 2022  by Alex Patel</span>
    </Typography>
  
   </Box> 
   <Box sx={{ borderBottom: 1, width: 1150, color: "#E5E5E5"  }} mb={4} ml={-2}>
    
  <Typography color='black'>  
  <span style={{fontWeight:'bold'}}>    Facing error in writing smart contracts and integrating in Hardhat   </span> <br />
  <span>upvote Downvote Answers(5) </span>
<span style={{marginLeft:'713px'}}>12 March 2022  by Alex Patel</span>
    </Typography>
  
   </Box> 
   <Box sx={{ borderBottom: 1, width: 1150, color: "#E5E5E5"  }} mb={4} ml={-2}>
    
  <Typography color='black'>  
  <span style={{fontWeight:'bold'}}>    Facing error in writing smart contracts and integrating in Hardhat   </span> <br />
  <span>upvote Downvote Answers(5) </span>
<span style={{marginLeft:'713px'}}>12 March 2022  by Alex Patel</span>
    </Typography>
  
   </Box> 
   <Box sx={{ borderBottom: 1, width: 1150, color: "#E5E5E5"  }} mb={4} ml={-2}>
    
  <Typography color='black'>  
  <span style={{fontWeight:'bold'}}>    Facing error in writing smart contracts and integrating in Hardhat   </span> <br />
  <span>upvote Downvote Answers(5) </span>
<span style={{marginLeft:'713px'}}>12 March 2022  by Alex Patel</span>
    </Typography>
  
   </Box> 


</Box>
  
</Container>

  
      </>
  
    )
}

export default QandAList
