import React from 'react'
import Footer from '../components/Footer/Footer.js'
import AboutUs from '../components/AboutUs/AboutUs.js'
import { Grid } from '@mui/material'

const AboutMePage = () => {
  return (
    <Grid container sx={{ height: '100vh' }}>
      <AboutUs />
      <Footer />
    </Grid>
  )
}

export default AboutMePage
