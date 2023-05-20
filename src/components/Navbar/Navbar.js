import React from 'react'
import { AppBar, Toolbar, Typography, Button, styled } from '@mui/material'
import { useTheme } from '@mui/material/styles'

const StyledButton = styled(Button)({
  fontWeight: 'bold',
  margin: (theme) => theme.spacing(0, 1),
})

const Navbar = () => {
  const theme = useTheme()

  return (
    <AppBar position='static' sx={{ borderBottom: '0.1px solid black', backgroundColor: '#f6f4ee', color: 'black' }}>
      <Toolbar sx={{ paddingBottom: theme.spacing(1) }}>
        <Typography variant='h6' component='div' sx={{ flexGrow: 1, fontWeight: 'bold', fontFamily: 'Roboto Condensed', fontSize: '36px', margin: theme.spacing(1) }}>
          FlavorIt
        </Typography>
        <StyledButton color='inherit'>Home</StyledButton>
        <StyledButton color='inherit'>Recipes</StyledButton>
        <StyledButton color='inherit'>About</StyledButton>
        {/* Add more buttons for other navigation items */}
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
