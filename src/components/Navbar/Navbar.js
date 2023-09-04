import React from 'react'
import { AppBar, Toolbar, Typography, Button, styled, Box } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { Link } from 'react-router-dom'

const StyledButton = styled(Button)({
  fontWeight: 'bold',
})

const Navbar = () => {
  const theme = useTheme()

  return (
    <AppBar position='static' sx={{ borderBottom: '1px solid #474747', backgroundColor: '#212121', color: '#f6f4ee' }}>
      <Toolbar>
        <Box sx={{ flexGrow: 0.02 }} />
        <Typography
          variant='h3'
          component={Link}
          to='/'
          sx={{
            fontWeight: 'bold',
            fontFamily: 'Roboto Condensed',
            margin: theme.spacing(2),
            textDecoration: 'none',
            color: 'inherit',
          }}
        >
          FlavorIt
        </Typography>
        <Box sx={{ flexGrow: 1 }} />
        <StyledButton component={Link} to='/' color='inherit' sx={{ margin: theme.spacing(0, 2) }}>
          Home
        </StyledButton>
        <StyledButton component={Link} to='/recipe' color='inherit' sx={{ margin: theme.spacing(0, 2) }}>
          Recipes
        </StyledButton>
        <StyledButton component={Link} to='/about' color='inherit' sx={{ margin: theme.spacing(0, 2) }}>
          About
        </StyledButton>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
