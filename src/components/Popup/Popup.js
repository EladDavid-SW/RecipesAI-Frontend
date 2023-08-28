import React from 'react'
import { Grid, IconButton, Paper, Box } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import './Popup.css'

const Popup = ({ children, show, onClose }) => {
  if (!show) {
    return null
  }

  return (
    <Grid container justifyContent='center' alignItems='center' className='popup'>
      <Grid item xs={11} sm={8} md={6}>
        <div className='popup-scroll-container'>
          <Paper className='popup-content' sx={{ backgroundColor: 'rgb(40, 44, 52)', color: 'white' }}>
            <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center' minHeight='100%'>
              <IconButton
                edge='end'
                color='inherit'
                onClick={onClose}
                aria-label='close'
                className='popup-close'
                size="large">
                <CloseIcon />
              </IconButton>
              {children}
            </Box>
          </Paper>
        </div>
      </Grid>
    </Grid>
  );
}

export default Popup
