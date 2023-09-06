import React from 'react';
import { Box, Typography, Button, useMediaQuery } from '@mui/material';
import recipeImage from '../../images/recipe.png';
import theme from '../../services/theme';
import { Link } from 'react-router-dom';

const AboutUs = () => {
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
          maxWidth: isSmallScreen ? '100%' : '37%',
          textAlign: 'left',
          marginBottom: isSmallScreen ? '1rem' : 0,
        }}
      >
        <Typography variant='h4' component='h1' gutterBottom sx={{ color: theme.palette.secondary.main, fontSize: '2.5rem' }}>
          About FlavorIt
        </Typography>
        <Typography variant='body1' gutterBottom sx={{ color: theme.palette.secondary.main, fontSize: '1.4rem' }}>
          FlavorIt empowers you to create delicious meals from ingredients you have at home while promoting sustainability.
        </Typography>
        <Typography variant='body1' gutterBottom sx={{ color: theme.palette.secondary.main, fontSize: '1.5rem' }}>
          <strong>Our Mission: Transforming Everyday Ingredients</strong>
        </Typography>
        <Typography variant='body1' gutterBottom sx={{ color: theme.palette.secondary.main, fontSize: '1.4rem' }}>
          At FlavorIt, we turn your ingredients into extraordinary meals, reduce food waste, and make cooking accessible.
        </Typography>
        <Typography variant='body1' gutterBottom sx={{ color: theme.palette.secondary.main, fontSize: '1.5rem' }}>
          <strong>What We Stand For:</strong>
        </Typography>
        <Typography variant='body1' gutterBottom sx={{ color: theme.palette.secondary.main, fontSize: '1.4rem' }}>
          <strong>Sustainability:</strong> We encourage eco-friendly cooking practices using what's in your pantry.
        </Typography>
        <Typography variant='body1' gutterBottom sx={{ color: theme.palette.secondary.main, fontSize: '1.4rem' }}>
          <strong>Creativity:</strong> FlavorIt is your canvas for culinary exploration and skill enhancement.
        </Typography>
        <Typography variant='body1' gutterBottom sx={{ color: theme.palette.secondary.main, fontSize: '1.4rem' }}>
          <strong>Accessibility:</strong> No last-minute grocery runs needed. Your kitchen is full of inspiration.
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

export default AboutUs;
