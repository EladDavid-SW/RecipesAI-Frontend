import React from 'react'
import { Grid } from '@mui/material'
import AttractiveGreeting from '../components/AttractiveGreeting/AttractiveGreeting.js'
import Footer from '../components/Footer/Footer.js'

const WelcomePage = () => {
  return (
    <Grid container sx={{ height: '100vh' }}>
      <AttractiveGreeting />
      <Footer />
    </Grid>
  )
}

export default WelcomePage
