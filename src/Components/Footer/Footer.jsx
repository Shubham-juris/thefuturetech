import * as React from 'react';
import { Box, Container, Typography, Link, IconButton, Grid } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#1a1a1a', 
        color: '#fff',
        py: { xs: 4, md: 6 },
        mt: 'auto',
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={4}>
          {/* Company Info */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
               The Future Tech
            </Typography>
            <Typography variant="body2" sx={{ color: '#b0b0b0', lineHeight: 1.8 }}>
              Providing innovative technology solutions to transform your business. Let's shape the future together.
            </Typography>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
              Quick Links
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Link
                href="#"
                color="inherit"
                underline="hover"
                sx={{ color: '#b0b0b0', '&:hover': { color: '#fff' } }}
              >
                Home
              </Link>
              <Link
                href="#"
                color="inherit"
                underline="hover"
                sx={{ color: '#b0b0b0', '&:hover': { color: '#fff' } }}
              >
                Services
              </Link>
              <Link
                href="#"
                color="inherit"
                underline="hover"
                sx={{ color: '#b0b0b0', '&:hover': { color: '#fff' } }}
              >
                About Us
              </Link>
              <Link
                href="#"
                color="inherit"
                underline="hover"
                sx={{ color: '#b0b0b0', '&:hover': { color: '#fff' } }}
              >
                Contact
              </Link>
            </Box>
          </Grid>

          {/* Contact Info */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
              Contact Us
            </Typography>
            <Typography variant="body2" sx={{ color: '#b0b0b0', mb: 1 }}>
              Email: support@thefuturetech.ca
            </Typography>
            <Typography variant="body2" sx={{ color: '#b0b0b0', mb: 1 }}>
              Phone: +1 587-432-5466
            </Typography>
            <Typography variant="body2" sx={{ color: '#b0b0b0' }}>
              {/* Address: 123 Tech Street, Innovation City */}
            </Typography>
          </Grid>

          {/* Social Media */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
              Follow Us
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <IconButton
                href="https://www.facebook.com/people/FutureTech-Solutions/100094671232437/"
                target="_blank"
                sx={{ color: '#b0b0b0', '&:hover': { color: '#fff' } }}
              >
                <Facebook />
              </IconButton>
              <IconButton
                href="https://twitter.com"
                target="_blank"
                sx={{ color: '#b0b0b0', '&:hover': { color: '#fff' } }}
              >
                <Twitter />
              </IconButton>
              <IconButton
                href="https://www.instagram.com/futuretechsolutionss/"
                target="_blank"
                sx={{ color: '#b0b0b0', '&:hover': { color: '#fff' } }}
              >
                <Instagram />
              </IconButton>
              <IconButton
                href="https://linkedin.com"
                target="_blank"
                sx={{ color: '#b0b0b0', '&:hover': { color: '#fff' } }}
              >
                <LinkedIn />
              </IconButton>
            </Box>
          </Grid>
        </Grid>

        {/* Bottom Bar */}
        <Box
          sx={{
            borderTop: '1px solid #333',
            mt: 4,
            pt: 2,
            textAlign: 'center',
          }}
        >
          <Typography variant="body2" sx={{ color: '#b0b0b0' }}>
            © {new Date().getFullYear()} Future Tech. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;