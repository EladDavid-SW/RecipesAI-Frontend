import React from 'react'
import { AppBar, Toolbar, Typography, Button, styled, Box } from '@mui/material'
import { useTheme } from '@mui/material/styles'

const StyledButton = styled(Button)({
  fontWeight: 'bold',
})

const Navbar = () => {
  const theme = useTheme()

  return (
    <AppBar position='static' sx={{ borderBottom: '0.1px solid black', backgroundColor: '#f6f4ee', color: 'black' }}>
      <Toolbar sx={{ paddingBottom: theme.spacing(1) }}>
      <Box sx={{ flexGrow: 0.02}} /> {/* This box will take up space pushing the title and buttons more to the right */}
        <Typography variant='h6' component='div' sx={{ fontWeight: 'bold', fontFamily: 'Roboto Condensed', fontSize: '33px', margin: theme.spacing(2) }}>
          FlavorIt
        </Typography>
        <Box sx={{ flexGrow: 0.9 }} /> {/* This box will take up the remaining space pushing the buttons more to the left */}
        <StyledButton color='inherit' sx={{ margin: theme.spacing(0, 7) }}>Home</StyledButton>
        <StyledButton color='inherit' sx={{ margin: theme.spacing(0, 7) }}>Recipes</StyledButton>
        <StyledButton color='inherit' sx={{ margin: theme.spacing(0, 7) }}>About</StyledButton>
        {/* Add more buttons for other navigation items */}
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
