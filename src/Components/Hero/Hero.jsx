import * as React from 'react';
import { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import future1 from '../../assets/Hero/future2.png';
import future2 from '../../assets/Hero/future4.png';
import future3 from '../../assets/Hero/future13.png';
import future4 from '../../assets/Hero/future31.png';

function Hero() {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [future1, future2, future3, future4];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <Box
      sx={{
        height: { xs: '500px', md: '700px' },
        backgroundImage: `url(${images[currentImage]})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        position: 'relative',
        px: { xs: 2, md: 0 },
      }}
    >
      <Box sx={{ width: { xs: '90%', sm: '700px' }, maxWidth: '100%' }}>
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: '2.5rem', sm: '3rem', md: '4rem' },
            fontWeight: 'bold',
            marginBottom: '1rem',
            textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
          }}
        >
          Professional Tech For Your Business
        </Typography>
        <Typography
          variant="h6"
          sx={{
            fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' },
            textShadow: '1px 1px 3px rgba(0,0,0,0.5)',
          }}
        >
          Technology is the most effective way to change the world.
        </Typography>
      </Box>
    </Box>
  );
}

export default Hero;