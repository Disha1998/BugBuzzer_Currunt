import { Grid, Paper, Typography, Button} from '@mui/material'
import React from 'react'
import TextField from '@mui/material/TextField';
import "./Style.scss";
const ParticipateForm = () => {
const paperStyle={height:'64vh', width:500, marginTop:"127px"}
let tagInput;
    const [tags, setTags] = React.useState([
      'UI/Ux function',
      'Smart contract'
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

    <Grid align="center">
    <Paper elevation={10} style={paperStyle}>

<Typography variant='h5' sx={{ pt: 6, fontWeight:'bold'}}>
Join BugBounty Compaigns
</Typography>

<TextField style={{ marginTop:'30px', width:'500px'}} id="outlined-basic" label="BugTitle" variant="outlined" required />
<Typography textAlign='left' style={{ fontWeight:'bold', fontSize:'20px', marginTop:'5px'}}>Categories</Typography>
<div className="input-tag" style={{marginTop:'10px'}}>
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
    <TextField style={{ marginTop:'30px', width:'500px'}} id="outlined-basic" label="Description" variant="outlined" required />

    <Button variant="contained" size='small' style={{backgroundColor:"#D82148",textTransform:'capitalize',border:'2px solid #D82148', marginRight:'18px', fontWeight:'bold', marginTop:'14px'}} sx={{borderRadius:2, mt:5}}>Submit</Button>

</Paper>
</Grid>
    )
}

export default ParticipateForm