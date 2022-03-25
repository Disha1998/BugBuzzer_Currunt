import React from 'react'
import { Typography } from '@mui/material';
import { Box } from "@mui/system";

const Footer = () => {
  return (
      <>
<Box 
              sx={{
                height: '60px',
                width:'100%',
                background:'#4B4B4B',
                
              
}}>
  <Typography color='white' fontWeight='bold' align='center'mt={8} pt={2}>
Made with ❤️ for the community

  </Typography>
              </Box>
              

      
     
      </>
    )
}

export default Footer
