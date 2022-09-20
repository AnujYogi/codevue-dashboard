import React, { useState } from 'react';
import { Box } from '@mui/material';
import { Header, HomeLink, HeaderWrapper } from "./NavbarElement";
import { AppDrawer } from '../Drawer';

export const Navbar = () => {

  const companyName = "Yogi's World"
  const buttonName = "explore";
  const openFrom = "left";

  return (
    <Box>
      <HeaderWrapper position='static'>
        <Header>
          <HomeLink to={"/"}>{companyName}</HomeLink>
          <AppDrawer buttonName = {buttonName} openFrom = {openFrom} />
        </Header>
      </HeaderWrapper>
    </Box>
  )
}
