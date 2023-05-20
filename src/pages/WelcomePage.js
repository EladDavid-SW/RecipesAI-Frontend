import React from 'react'
import { Grid } from '@mui/material'
import Navbar from '../components/Navbar/Navbar.js'

const WelcomePage = () => {
  return (
    <Grid container>
      <Navbar />

      <Grid item xs={12} style={{ backgroundColor: '#f6f4ee', minHeight: '100vh' }}>
        {/* Content for the page */}
      </Grid>
    </Grid>
  )
}

export default WelcomePage
