import { Box, TextField, styled, Button } from '@mui/material';
import { Colors } from './theme';

export const IndexContainer = styled(Box)({
  display:'flex',
  flexDirection:"column",
  alignItems:"center",
  maxWidth:"600px",
  margin:"10px auto",
  padding:"22px",
  border:"1px solid #ccc",
  background: Colors.dove_gray,
  borderRadius:"4px"
});

export const IndexText = styled(Box)({
  //   width: '300px',
  //   height: '100px',
  margin: '15px',
  display: 'flex',
  alignItems: 'center',
  justifyItems: 'center',
  // backgroundColor: 'lightblue',
});

export const TextFieldStyled = styled(TextField)({
  fontSize:'20px',
  margin:'10px',
  '&:focus': {
    outline: 'none',
    boxShadow: '0px 0px 2px Colors.primary',
  },
});

export const IndexSection = styled(Box)({
  width: '450px',
  height: '150px',
  background: Colors.border,
  display:'flex',
  flexDirection:'row',
  alignItems: 'center',
  justifyContent:'center',
  margin: '15px',
});

export const IndexSubSection = styled(Box)({
  width: '450px',
  height: '150px',
  // background: Colors.border,
  display:'flex',
  flexDirection:'row',
  alignItems: 'center',
  justifyContent: 'space-around',
  margin: '5px',
});
export const IndexButton = styled(Button)({
  border:'1px solid grey',
  padding: "10px",
  margin: '15px',
  cursor:'pointer',
  '&:hover': {
    outline: 'none',
    boxShadow: '0px 0px 2px Colors.primary',
    background: Colors.success,
    color: Colors.white
  },
})
