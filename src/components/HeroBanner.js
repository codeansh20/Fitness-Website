import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

import HeroBannerImage from '../assets/images/banner.png';

const HeroBanner = () => (
  <Box sx={{ mt: { lg: '230px', xs: '70px' }, ml: { sm: '70px' } }} position="relative" p="10px">
    <Typography color="#FFAFB" fontWeight="600" fontSize="35px" sx={{ mt: { lg: '-35px'},mb:{lg:'-10px'}}}>Train Here</Typography>
    <Typography color="white" fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '40px' } }} mb="23px" mt="30px">
      Sweat, Eat <br />
      <Typography  p="5px" color="red" fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '40px' }}}>@nd</Typography> Repeat
    </Typography>
    <Typography fontSize="22px" fontFamily="Alegreya" lineHeight="35px" color="whitesmoke">
      Check out the most effective exercises here...
    </Typography>
    <Stack>
      <a href="#exercises" style={{ marginTop: '45px', textDecoration: 'none', width: '200px', textAlign: 'center', background: '#AD974F', padding: '14px', fontSize: '22px', textTransform: 'none', color:"#000", borderRadius: '4px'}}>Explore Exercises</a>
    </Stack>
    <Typography fontWeight={700} color="#FF2625" sx={{mt:{lg:'-7px',xs:'2px'}, opacity: '0.2', display: { lg: 'block', xs: 'none' }, fontSize: '220px' }}>Exercise</Typography>
    <img src={HeroBannerImage} alt="hero-banner" className="hero-banner-img"  />
  </Box>
);

export default HeroBanner;