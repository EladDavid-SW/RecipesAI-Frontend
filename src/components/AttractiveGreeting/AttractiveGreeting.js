import React from 'react'
import { Box, Typography, Button } from '@mui/material'
import recipeImage from '../../images/recipe.png'
import theme from '../../services/theme'
import { Link } from 'react-router-dom'

const AttractiveGreeting = () => {
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
          Create Your Own Recipe
        </Typography>
        <Typography variant='body1' gutterBottom sx={{ color: theme.palette.secondary.main }}>
          Have a list of groceries and don't know what to make? <br/>Start creating your own recipe now and discover amazing meals you can prepare!
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
            marginTop: '1rem', // Change the top margin to adjust the button's vertical position
            width: '100%', // Set the button's width to occupy the full width of its container
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
          width: '60%',
          height: '100%',
        }}
      />
    </Box>
  )
}

export default AttractiveGreeting
