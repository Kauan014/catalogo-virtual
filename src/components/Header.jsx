import { AppBar, Avatar, Box, Container, IconButton, Menu, MenuItem, Toolbar, Tooltip, Typography,Button, Link } from '@mui/material'
import React from 'react';
import { useState } from 'react';
import Style from "./header.module.css"
import foto from"./logo.png"
import MenuIcon from "@mui/icons-material/Menu";


function Header() {



  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <AppBar position="static">
      <Container maxWidth="xl"  className={Style.header}>
        <Toolbar disableGutters>
          <Typography variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
             
            }}>
              
              
            <img src={foto} height={80} />
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit">
              <MenuIcon />

            </IconButton>
            <Menu id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}>
               
                <MenuItem   onClick={handleCloseNavMenu}>
                  <Typography textAlign="center"><Link href="/livros" sx={{  color: 'black',textDecoration: 'none'}}>Cadastrar livros</Link></Typography>
                </MenuItem>
                <MenuItem   onClick={handleCloseNavMenu}>
                  <Typography textAlign="center"><Link href="/" sx={{  color: 'black',textDecoration: 'none'}}> livros</Link></Typography>
                </MenuItem>
                

            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          
              <Button
               
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
               <Link href="/livros" sx={{  color: 'white',textDecoration: 'none'}}>Cadastrar livros</Link>
              </Button>
              <Button
               
               onClick={handleCloseNavMenu}
               sx={{ my: 2, color: 'white', display: 'block' }}

             >
            <Link href="/" sx={{  color: 'white',textDecoration: 'none'}}> livros</Link>
             </Button>
         
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>

            </Tooltip>
            <Menu sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
             
                <MenuItem  onClick={handleCloseUserMenu}>
                <Link href={"/login"} sx={{  textDecoration: 'none'}}>Login</Link>
                </MenuItem>
                <MenuItem  onClick={handleCloseUserMenu}>
                <Link href={"/cadastro"} sx={{  textDecoration: 'none'}}>Cadastrar-se</Link>
                </MenuItem>

            
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;