import * as React from 'react';
import { Box, Typography, Container } from '@mui/material';
import futuretech from '../../assets/Services/futuretech.webp';
import futuretech1 from '../../assets/Services/futuretech1.webp';
import futuretech2 from '../../assets/Services/futuretech2.webp';

function Services() {
  return (
    <Container maxWidth="xl">
      <Box sx={{ padding: { xs: '1rem', sm: '2rem 1rem', md: '4rem 2rem' }, backgroundColor: '#fff' }}>
        <Typography
          variant="h2"
          sx={{
            textAlign: 'center',
            color: '#5a6d7e',
            marginBottom: { xs: '1rem', md: '2rem' },
            fontWeight: '600',
            textTransform: 'capitalize',
            fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
          }}
        >
          Services
        </Typography>

        {/* IT Services Section */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            justifyContent: 'center',
            gap: { xs: '1rem', md: '2rem' },
            marginBottom: { xs: '1rem', md: '4rem' },
          }}
        >
          <Box sx={{ flex: '1', maxWidth: { xs: '100%', md: '50%' } }}>
            <Box
              component="img"
              src={futuretech}
              alt="IT Services"
              sx={{
                width: '100%',
                maxWidth: { xs: '100%', sm: '500px', md: '600px' },
                height: { xs: '150px', sm: '250px', md: '350px' },
                borderRadius: '10px',
                objectFit: 'cover',
              }}
            />
          </Box>
          <Box sx={{ flex: '1', maxWidth: { xs: '100%', md: '50%' }, px: { xs: 0.5, md: 0 } }}>
            <Typography
              variant="h4"
              sx={{
                color: '#333',
                fontWeight: 'bold',
                marginBottom: '0.5rem',
                fontSize: { xs: '1.2rem', sm: '1.5rem', md: '2rem' },
              }}
            >
              IT Services
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: '#5a6d7e',
                marginBottom: '0.5rem',
                fontSize: { xs: '0.9rem', sm: '1rem', md: '1.25rem' },
              }}
            >
              SUPPORT | PROJECTS | INFRASTRUCTURE
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: '#777',
                lineHeight: '1.6',
                fontSize: { xs: '0.8rem', sm: '0.9rem', md: '1rem' },
              }}
            >
              Are you unhappy with your current level of IT support? Whether we helped build your
              applications or not, we’re here to help maintain them. We provide desktop support,
              software support, maintenance, network infrastructure, and project management.
            </Typography>
          </Box>
        </Box>

        {/* Marketing Section */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row-reverse' },
            alignItems: 'center',
            justifyContent: 'center',
            gap: { xs: '1rem', md: '2rem' },
            marginBottom: { xs: '1rem', md: '4rem' },
          }}
        >
          <Box sx={{ flex: '1', maxWidth: { xs: '100%', md: '50%' } }}>
            <Box
              component="img"
              src={futuretech1}
              alt="Marketing"
              sx={{
                width: '100%',
                maxWidth: { xs: '100%', sm: '500px', md: '600px' },
                height: { xs: '150px', sm: '250px', md: '350px' },
                borderRadius: '10px',
                objectFit: 'cover',
              }}
            />
          </Box>
          <Box sx={{ flex: '1', maxWidth: { xs: '100%', md: '50%' }, px: { xs: 0.5, md: 0 } }}>
            <Typography
              variant="h4"
              sx={{
                color: '#333',
                fontWeight: 'bold',
                marginBottom: '0.5rem',
                fontSize: { xs: '1.2rem', sm: '1.5rem', md: '2rem' },
              }}
            >
              Marketing
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: '#5a6d7e',
                marginBottom: '0.5rem',
                fontSize: { xs: '0.9rem', sm: '1rem', md: '1.25rem' },
              }}
            >
              SOCIAL | DIGITAL ADS | DESIGN
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: '#777',
                lineHeight: '1.6',
                fontSize: { xs: '0.8rem', sm: '0.9rem', md: '1rem' },
              }}
            >
              If you have to coordinate between your web programmers and your marketing team, then
              you’re probably missing out on great features that a single integrated solution can
              provide. We don’t just create a web site, we provide a complete digital solution for
              your brand.
            </Typography>
          </Box>
        </Box>

        {/* Development Section */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            justifyContent: 'center',
            gap: { xs: '1rem', md: '2rem' },
            marginBottom: { xs: '1rem', md: '4rem' },
          }}
        >
          <Box sx={{ flex: '1', maxWidth: { xs: '100%', md: '50%' } }}>
            <Box
              component="img"
              src={futuretech2}
              alt="Development"
              sx={{
                width: '100%',
                maxWidth: { xs: '100%', sm: '500px', md: '600px' },
                height: { xs: '150px', sm: '250px', md: '350px' },
                borderRadius: '10px',
                objectFit: 'cover',
              }}
            />
          </Box>
          <Box sx={{ flex: '1', maxWidth: { xs: '100%', md: '50%' }, px: { xs: 0.5, md: 0 } }}>
            <Typography
              variant="h4"
              sx={{
                color: '#333',
                fontWeight: 'bold',
                marginBottom: '0.5rem',
                fontSize: { xs: '1.2rem', sm: '1.5rem', md: '2rem' },
              }}
            >
              Development
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: '#5a6d7e',
                marginBottom: '0.5rem',
                fontSize: { xs: '0.9rem', sm: '1rem', md: '1.25rem' },
              }}
            >
              CUSTOM APPS | AUTOMATION | SOLUTIONS
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: '#777',
                lineHeight: '1.6',
                fontSize: { xs: '0.8rem', sm: '0.9rem', md: '1rem' },
              }}
            >
              Applications should make everyone's life easier. Our goal is to create quality solutions
              that simplify and automate your business. There isn't always an app for that, but we can
              create one.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}

export default Services;