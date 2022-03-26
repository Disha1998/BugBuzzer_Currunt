import React from 'react'
import { Card, CardContent , Typography, Container, Button, Stack} from '@mui/material';
import { Box } from '@mui/system';
import HomeIcon from '@mui/icons-material/Home';
const DetailPage = () => {
  return (
   <div style={{background:"#f3f3f3"}}>

<Container>
<Stack direction='row' spacing={10} justifyContent='center'>

    <Card sx={{ width:'45%', height: '52vh', backgroundColor:"#FFFFFF" }}>
    <CardContent>
      <Typography variant="h6" style={{ 
    width: '100%',
    float: 'left',
    color: '#D82148',
    borderBottom:'2px solid #D82148'}}>
      An atlas of love
  </Typography>
  <Typography color='black'>
      On sell <span style={{float:'right', fontWeight:'bold',color: '#D82148'}}>Price: $79</span>
  </Typography >
  <Typography color='black' style={{     borderBottom:'2px solid #D82148'}}>
  Book condition:Used
  </Typography>
 <Typography mt={2}>
<span>Posted on:</span>  <span style={{marginLeft:'175px'}}>Category:</span>
  <br /> 
  1, Dec  <span style={{marginLeft:'206px', fontSize:'18px'}}>Romance & Short Stories</span>
  </Typography>
  <Typography mt={2}>
      <span>Posted From:</span> <span style={{marginLeft:'154px'}}>Views on post</span><br />
      <span style={{ fontSize:'18px',float:'left',}}>
      Naran Lala School Of <br />
      Industrial Management<br />
      & Computer
      </span>

      <span  style={{marginLeft:'70px'}}>23144</span>
  </Typography>
  <br />
  <br />
  <br />
  
  <Button  size="medium" style={{fontSize:"15px", fontWeight:"bold", backgroundColor:"#D82148" ,color:'white',textTransform:'capitalize', marginTop:'15px', marginLeft:'-160px', padding:'10px', paddingLeft:'50px', paddingRight:'50px' }}>Buy this book</Button>
  <Button  size="medium" style={{fontSize:"15px", fontWeight:"bold", backgroundColor:"#D82148" ,color:'white',textTransform:'capitalize', marginTop:'15px', marginLeft:'20px', padding:'10px', paddingLeft:'30px', paddingRight:'40px', textAlign:'center' }}>Get for Exchange</Button>

    </CardContent>

  </Card>
  <Box 
            sx={{
              height: '270px',
              width: '210px',
              border: '2px solid #ffffff',
              background: '#FFFFFF',
              padding: '20px',
              paddingBottom:'70px'
            }}
          >
            <Box sx={{
              height: '94px',
              width: '97px',
              border: '2px solid #ffffff',
              borderRadius: '50%',
              background: '#C4C4C4',
              mt:4,
              p: 1,
              m: 1,
              ml: 6,

            }}></Box>
            <Typography variant="subtitle1" textAlign='center' mb={1} mt={5} color='#D82148' fontWeight='bold'>Jill thakkar</Typography>
            <Typography variant="subtitle1"  align='center' fontSize='14px' mt={4}> <HomeIcon />Navsari</Typography>
            <Button variant="contained" size='small' style={{backgroundColor:"#D82148",textTransform:'capitalize',border:'2px solid #D82148', marginLeft:'40px', fontWeight:'bold', marginTop:'40px'}} sx={{borderRadius:1, mt:5}}>View all books</Button>

          </Box>
</Stack>
</Container>

  </div>

  )
}

export default DetailPage