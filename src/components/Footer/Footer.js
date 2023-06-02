import React from 'react'
import { Grid, Typography, TextField, Button, IconButton } from '@mui/material'
import { Facebook, Twitter, Instagram, Phone } from '@mui/icons-material'
import theme from '../../services/theme'

const Footer = () => {
  return (
    <Grid container sx={{ backgroundColor: theme.palette.info.main, color: theme.palette.secondary.main, padding: '2rem' }}>
      <Grid item xs={12} sm={4}>
        <Typography variant='h3' component='div' sx={{ fontWeight: 'bold', fontFamily: 'Roboto Condensed', margin: theme.spacing(2) }}>
          FlavorIt
        </Typography>

        <Typography variant='body1' sx={{ margin: theme.spacing(2) }}>
          Best recipes for your groceries <br /> Let us help you
        </Typography>
      </Grid>
      <Grid item xs={12} sm={4} container direction='column' alignItems='center'>
        <Typography variant='h5' gutterBottom>
          Subscribe
        </Typography>
        <TextField
          variant='outlined'
          placeholder='Your email'
          InputProps={{
            style: {
              backgroundColor: theme.palette.primary.main,
              color: theme.palette.secondary.main,
            },
          }}
          sx={{ width: '60%' }}
        />
        <Button variant='contained' sx={{ backgroundColor: theme.palette.success.main, color: theme.palette.secondary.main, width: '60%', margin: '2%' }}>
          Subscribe
        </Button>
      </Grid>
      <Grid item xs={12} sm={4} container>
        <Grid item xs={6} container direction='column' alignItems='center'>
          <Typography variant='h5' gutterBottom>
            Follow Us
          </Typography>
          <IconButton sx={{ color: theme.palette.secondary.main }}>
            <Facebook />
          </IconButton>
          <IconButton sx={{ color: theme.palette.secondary.main }}>
            <Twitter />
          </IconButton>
          <IconButton sx={{ color: theme.palette.secondary.main }}>
            <Instagram />
          </IconButton>
        </Grid>
        <Grid item xs={6} container direction='column' alignItems='center'>
          <Typography variant='h5' gutterBottom>
            Contact Us
          </Typography>
          <IconButton sx={{ color: theme.palette.secondary.main }}>
            <Phone />
          </IconButton>
          <Typography variant='body1'>+972-528-642-364</Typography>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Footer
