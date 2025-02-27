import * as React from 'react';
import { useState } from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  MenuItem,
  Button,
  Container,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import thefuturetech from '../../assets/Navbar/thefuturetech.png';

const pages = ['HOME', 'HARDWARE', 'MANAGED SERVICES', 'MARKETING', 'DEVELOPMENT', 'MORE'];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <Box sx={{ flexGrow: 1, position: 'relative' }}>
      <AppBar
        position="absolute"
        sx={{
          top: 0,
          left: 0,
          right: 0,
          marginTop: { xs: '1rem', md: '2.5rem' },
          boxShadow: 'none',
          backgroundColor: 'transparent',
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box
              component="img"
              src={thefuturetech}
              alt="Future Tech Logo"
              sx={{
                display: { xs: 'none', md: 'flex' },
                height: { md: 60, xs: 40 },
                mr: 2,
              }}
            />

            <Box sx={{ display: { xs: 'flex', md: 'none' }, flexGrow: 1 }}>
              <IconButton
                size="large"
                aria-label="open navigation menu"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                sx={{ color: 'black', ml: 1 }}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                keepMounted
                transformOrigin={{ vertical: 'top', horizontal: 'left' }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{ display: { xs: 'block', md: 'none' } }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography
                      sx={{
                        textAlign: 'center',
                        color: 'black',
                        fontSize: { xs: '1.2rem', md: '2rem' },
                        '&:hover': { color: 'red' },
                      }}
                    >
                      {page}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <Box sx={{ flexGrow: 1 }} />

            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 0,
                    color: 'white',
                    display: 'block',
                    fontSize: { md: '0.7rem', lg: '0.9rem' },
                    padding: { xs: '0.5rem', md: '0.5rem 1rem' },
                    position: 'relative',
                    textTransform: 'none',
                    '&:hover': {
                      color: 'red',
                      backgroundColor: 'transparent',
                    },
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      width: '0%',
                      height: '2.7px',
                      bottom: '4px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      backgroundColor: 'red',
                      transition: 'width 0.4s ease-in-out',
                    },
                    '&:hover::after': {
                      width: '70%',
                    },
                  }}
                >
                  {page}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}

export default Navbar;