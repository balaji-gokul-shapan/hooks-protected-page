import { Box, TextField, styled, Button } from '@mui/material';
import { Colors } from './theme';
import { Link } from 'react-router-dom';

export const LinkSection = styled(Link)({
    listStyle:'none',
    textDecoration:'none',
    color: Colors.secondary,
    fontWeight:'bold',
    '&:hover': {
        color: Colors.success,
      },
})