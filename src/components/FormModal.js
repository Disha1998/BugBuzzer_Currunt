import React from 'react';
import { Grid, Paper, Typography, Button} from '@mui/material';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import "./Style.scss";
const FormModal = () => {
    const paperStyle={height:'64vh', width:500, marginTop:"127px"}
let tagInput;
    const [tags, setTags] = React.useState([
      'Tags',
      'Input'
    ]);
    
    const removeTag = (i) => {
      const newTags = [ ...tags ];
      newTags.splice(i, 1);
  
      // Call the defined function setTags which will replace tags with the new value.
      setTags(newTags);
    };
  
    const inputKeyDown = (e) => {
      const val = e.target.value;
      if (e.key === 'Enter' && val) {
        if (tags.find(tag => tag.toLowerCase() === val.toLowerCase())) {
          return;
        }
        setTags([...tags, val]);
        tagInput.value = null;
      } else if (e.key === 'Backspace' && !val) {
        removeTag(tags.length - 1);
      }
    };
  
  
    
  return (
    <>


      <Grid align="center">
        <Paper elevation={10} style={paperStyle}>

<Typography variant='h5' sx={{ pt: 6, fontWeight:'bold'}}>
  Ask Question 
</Typography>
 
<TextareaAutosize
      aria-label="empty textarea"
      placeholder="Enter a question"
      style={{ width: 400, height: 20, marginTop:'50px' }}
    />
 
    <div className="input-tag">
      <ul className="input-tag__tags">
        { tags.map((tag, i) => (
          <li key={tag}>
            {tag}
            <button type="button" onClick={() => { removeTag(i); }}>+</button>
          </li>
        ))}
        <li className="input-tag__tags__input"><input type="text" onKeyDown={inputKeyDown} ref={c => { tagInput = c; }} /></li>
      </ul>
    </div>

    <Button variant="contained" size='small' style={{backgroundColor:"#D82148",textTransform:'capitalize',border:'2px solid #D82148', marginRight:'18px', fontWeight:'bold'}} sx={{borderRadius:2, mt:5}}>Submit</Button>


</Paper>

      </Grid>
      </>


    )
}


export default FormModal
