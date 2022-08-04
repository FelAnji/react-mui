import { useState } from 'react';
import { Money, Mail, Notifications } from '@mui/icons-material';
import { AppBar, Toolbar, styled, Typography, Box, InputBase, Badge, Avatar, Menu, MenuItem } from '@mui/material';
import { borderRadius } from '@mui/system';
import React from 'react';
import './images/reece.jpg';

const StyledToolbar = styled(Toolbar) ({
  display: 'flex',
  justifyContent: 'space-between'
});

const Search = styled('div')(({ theme }) => ({
  backgroundColor: 'white',
  padding: '0 10px',
  borderRadius: theme.shape.borderRadius,
  width: '40%'
}))

const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  gap: "20px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]:{
    display: "flex"
  }
}))

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "10px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]:{
    display: "none"
  }
}))

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <AppBar position='sticky'>
      <StyledToolbar>
        <Typography variant='h6' sx={{display:{xs:'none', sm:'block'}}}>ANJI</Typography>
        <Money  sx={{display:{xs:'block', sm:'none'}}} />
        <Search><InputBase placeholder='Search...'/></Search>
        <Icons>
          <Badge badgeContent={2} color="error">
            <Notifications />
          </Badge>
          <Badge badgeContent={4} color="error">
            <Mail />
          </Badge>
          <Avatar sx={{ width: 30, height: 30 }} src='./images.reece.jpg' onClick={e=>setOpen(true)} />
        </Icons>
        <UserBox onClick={e=>setOpen(true)}>
          <Avatar sx={{ width: 30, height: 30 }}  src='./images.reece.jpg' />
          <Typography variant="span">Anji</Typography>
        </UserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        
        open={open}
        onClose={e=>setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem ><a href="emperora.com">Profile</a></MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
    </AppBar>
  )
}

export default Navbar

//if you set the position to sticky, even if you scroll, the navbar will still be showin. if you set it to static, it shifts to the top and not overwritten
//theme.breakpoints.up means("sm") any value that is higher than small