import React from 'react'
import { Box, Typography, Button } from '@mui/material'
import recipeImage from '../../../images/recipe.png'; // import the image

const AttractiveGreeting = () => {
  return (
    <Box 
      sx={{ 
        display: 'flex', 
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'space-between', 
        position: 'relative', 
        backgroundColor: '#f6f4ee', 
        padding: '2rem', 
        minHeight: '400px', 
        width: '100%',
      }}
    >
      <Box 
        sx={{ 
          p: 2, 
          backgroundColor: (theme) => theme.palette.grey[800] + 'cc',
          borderRadius: 1,
          maxWidth: '40%',
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom sx={{ color: 'white' }}>
          Create Your Own Recipe
        </Typography>
        <Typography variant="body1" gutterBottom sx={{ color: 'white' }}>
          Have a list of groceries and don't know what to make? Start creating your own recipe now and discover amazing meals you can prepare!
        </Typography>
        <Button variant="contained" color="primary">
          Start Creating
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
