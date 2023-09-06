import React from 'react';
import { Box, Typography, Button, useMediaQuery } from '@mui/material';
import recipeImage from '../../images/recipe.png';
import theme from '../../services/theme';
import { Link } from 'react-router-dom';

const AttractiveGreeting = () => {
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: isSmallScreen ? 'column' : 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'relative',
        backgroundColor: theme.palette.primary.main,
        padding: '2rem',
        minHeight: '500px',
        width: '100%',
      }}
    >
      <Box
        sx={{
          p: 2,
          backgroundColor: theme.palette.info.main,
          borderRadius: 1,
          maxWidth: isSmallScreen ? '100%' : '40%',
          marginBottom: isSmallScreen ? '1rem' : 0,
        }}
      >
        <Typography variant='h4' component='h1' gutterBottom sx={{ color: theme.palette.secondary.main, fontSize: '2.1rem' }}>
          Explore Culinary Delights with FlavorIt
        </Typography>
        <Typography variant='body1' gutterBottom sx={{ color: theme.palette.secondary.main, fontSize: '1.4rem' }}>
          Don't know what to cook with the ingredients you have? 
        </Typography>
        <Typography variant='body1' gutterBottom sx={{ color: theme.palette.secondary.main, fontSize: '1.4rem' }}>
          Craft unique FlavorIt recipes and unlock a world of culinary creativity!
        </Typography>
        <Button
          component={Link}
          to='/recipe'
          variant='contained'
          sx={{
            backgroundColor: theme.palette.success.main,
            color: theme.palette.secondary.main,
            '&:hover': {
              backgroundColor: theme.palette.success.dark,
            },
            marginTop: '1rem',
            width: '100%',
            fontSize: '1.5rem',
          }}
        >
          Get Started
        </Button>
      </Box>
      <Box
        sx={{
          backgroundImage: `url(${recipeImage})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          width: isSmallScreen ? '100%' : '60%',
          height: '100%',
        }}
      />
    </Box>
  );
};

export default AttractiveGreeting;
