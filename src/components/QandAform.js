import { Container, Typography, Box, Button, Stack , Card,CardContent,CardActions} from '@mui/material'
import React from 'react'
import Avatar from '@mui/material/Avatar';
import TextareaAutosize from '@mui/material/TextareaAutosize';

import ArrowCircleUpRoundedIcon from '@mui/icons-material/ArrowCircleUpRounded';
import ArrowCircleDownRoundedIcon from '@mui/icons-material/ArrowCircleDownRounded';
import ModeCommentRoundedIcon from '@mui/icons-material/ModeCommentRounded';
const QandAform = () => {
  return (
    <Container>
      <Typography fontWeight='bold' variant='h4' mt={6} style={{ marginLeft: '-16px' }} mb={-4} >
        Question  <span style={{ color: '#D82148' }}>Detail page</span>

      </Typography>

      <Box sx={{ height: '193px', width: '700px', border: '1px solid #D82148',  background: '#FFFFFF', mt: "60px", mb: "20px" }}>
        {/* <Stack direction="row" spacing={2}> */}
          <Avatar alt="Remy Sharp" sx={{ width: "150px", height: "150px", mt: "15px", ml: "5px" }} src="/static/images/avatar/1.jpg" />
        {/* </Stack> */}
        <Typography variant="h6" ml={50}mt={-20}>UserName</Typography>
          <Typography variant="subtitle1" ml={50} mt={10}>Question Title</Typography>
          <Typography variant="subtitle1" ml={50}>Description of Question</Typography>

      </Box>
      <Button variant='contained' size="small" sx={{ml:"50%",background:'#D82148'}}>Write Answer</Button>


<Typography variant='h4'fontWeight="bold" mt={5} mb={3}>Answers</Typography>
<Box sx={{ height: '70px', width: '700px', border: '1px solid #D82148', background: '#FFFFFF', mb: "20px" }}>
<Typography variant="subtitle1" ml={2}>Answer 1</Typography>
<ArrowCircleUpRoundedIcon sx={{color:"#D82148",ml:"10px",fontSize:"25px",mt:"10px",mb:"2px", mr:"12px"}} />
        <ArrowCircleDownRoundedIcon sx={{color:"#D82148",fontSize:"25px",mt:"10px",mb:"2px", mr:"12px"}}/>
       < ModeCommentRoundedIcon sx={{color:"#D82148",fontSize:"25px",mt:"10px",mb:"2px", mr:"12px"}}/>
<Button variant='contained' size='small' sx={{ml:"70%",mt:"-30px", background:'#D82148'}}>Support</Button>
</Box>
<Box>

</Box>

<Card sx={{ width: 500, height:200 , mb:"30px" , border:"black" }}>
      {/* <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="div">
          benevoent
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent> */}
      <TextareaAutosize aria-label="empty textarea" placeholder="Ask a Questions" style={{ width: 200 }}
/>
      <CardActions>
        <Button variant='contained' size="small" sx={{backgroundColor:"#D82148"}}>Submit</Button>
      </CardActions>
    </Card>






      
    </Container>
  )
}

export default QandAform