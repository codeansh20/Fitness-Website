import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/download.png';

const Footer = () => (
  <Box mt="80px" bgcolor="wheat">
    <Stack gap="40px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" pt="24px">
      <img src={Logo} alt="logo" style={{ width: '150px' }} />
    </Stack>
    <Typography variant="h6" sx={{ fontSize: { lg: '28px', xs: '20px' },fontFamily:'Arial' }} mt="41px" textAlign="center" pb="40px">Ansh's <span style={{color:"red",fontWeight:'bold'}}>Fitness</span> Club</Typography>
  </Box>
);

export default Footer;