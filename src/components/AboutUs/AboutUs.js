import React from 'react'
import { Box, Typography, Button, Grid } from '@mui/material'
import theme from '../../services/theme'
import { Link } from 'react-router-dom'
import recipeImage from '../../images/recipe.png'

const AboutUs = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
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
          maxWidth: '40%',
        }}
      >
        <Typography variant='h4' component='h1' gutterBottom sx={{ color: theme.palette.secondary.main }}>
          About FlavorIt
        </Typography>
        <Typography variant='body1' gutterBottom sx={{ color: theme.palette.secondary.main }}>
          FlavorIt is a website that helps the environment by providing you with delicious recipes that you can create using the groceries you have at home. We believe in sustainable cooking and
          reducing food waste.
        </Typography>
        <Typography variant='body1' gutterBottom sx={{ color: theme.palette.secondary.main }}>
          Our mission is to inspire and empower people to make creative and healthy meals using ingredients they already have. With FlavorIt, you can turn everyday groceries into amazing dishes and
          contribute to a more sustainable world.
        </Typography>
        <Button component={Link} to='/recipe' variant='contained' sx={{ backgroundColor: theme.palette.success.main, color: theme.palette.secondary.main }}>
          Get Started
        </Button>
      </Box>
      <Box
        sx={{
          backgroundImage: `url(${recipeImage})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          width: '60%',
          height: '100%',
        }}
      />
    </Box>
  )
}

export default AboutUs
