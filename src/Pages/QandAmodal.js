import React, {useState} from 'react';
import { Formik, Form, useField } from "formik";
import * as Yup from 'yup';
import {  Button} from '@mui/material'
import { Field } from 'formik';
import TextField from '@mui/material/TextField';
import { Grid, Container} from '@mui/material'
import Tags from './Tags';
import './Style.css';
const QandAmodal = ({fieldName}) => {
  const formStyle = { height: '60vh', marginTop:'200px'}
  return(
<Container>

  <div style={formStyle}>
      <Formik
        initialValues={{
          Question: "", 
        }}
      
         validationSchema={Yup.object({
         
          Question: Yup.string()
            .max(70, "Must be 20 characters or less")
            .required("Required"),
    
                   })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
 <Form>
 <TextField fullWidth style={{ marginTop:'100px', border:'1px solid #D82148'}} id="outlined-basic" label="Ask your question here!" variant="outlined" />

         
            </Form>

        </Formik>
        <Tags />

    <Grid align='center'>

       <Button variant="contained" size='small' type="submit" style={{backgroundColor:"#D82148",textTransform:'capitalize',border:'2px solid #D82148', fontWeight:'bold'}} sx={{borderRadius:2, mt:20}}>Submit</Button>
       </Grid>

    </div>
    </Container>

  );
};

export default QandAmodal;