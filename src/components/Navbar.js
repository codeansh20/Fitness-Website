import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';
import Logo from '../assets/images/nav.png';

import styled from 'styled-components';

const HoverText = styled.p`
	color: #FFFAFB;
	:hover {
		color: #AD974F;
		cursor: pointer;
    font-weight:bold;
	}
`;
const Navbar = () => (
  <Stack direction="row" display="flex" justifyContent="space-around" sx={{ gap: { sm: '120px', xs: '40px' }, mt: { sm: '32px', xs: '20px' }, justifyContent: 'none' }} px="20px">
    <Link to="/">
      <img src={Logo} alt="logo" style={{ width: '100px', margin: '0px 5px' }} />
    </Link>
    <Stack
      direction="row"
      gap="40px"
      fontFamily="Alegreya"
      fontSize="24px"
      alignItems="flex-end"
    >
      <Link to="/" style={{ textDecoration: 'none', color: '#FFFAFB', borderBottom: '2px solid #FF4545' }} ><HoverText>Home</HoverText></Link>
      <a href="#exercises" style={{ textDecoration: 'none', color: '#FFFAFB', borderBottom:'2px solid #FF4545' }}><HoverText>Exercises</HoverText></a>
    </Stack>
  </Stack>
);

export default Navbar;