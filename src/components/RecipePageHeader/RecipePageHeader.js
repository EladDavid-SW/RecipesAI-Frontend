import React from 'react'
import { Paper, Grid, Typography } from '@mui/material'

const steps = ['Explore Your Ingredient Collection', 'Select Recipe Ingredients', 'Generate Your Unique Recipe']

const styles = {
  container: {
    maxWidth: '60%',
    margin: '0 auto',
    padding: '16px',
  },
  step: {
    padding: '20px',
    border: '1px solid #fff',
    borderRadius: '16px', 
    minHeight: '180px',
    position: 'relative',
    display: 'flex', 
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  stepIndex: {
    position: 'absolute',
    top: '-30px', 
    left: '50%',
    transform: 'translateX(-50%)',
    width: '60px',
    height: '60px',
    backgroundColor: '#4caf50', 
    color: '#fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '50%', 
    fontWeight: 'bold',
    fontSize: '36px', 
  },
  stepText: {
    fontSize: '24px', 
  },
  title: {
    color: '#f0f0f0',
    fontWeight: 'bold',
    fontFamily: 'Courier New, monospace',
    textShadow: '2px 2px 8px rgba(0, 0, 0, 0.5)',
    textTransform: 'uppercase',
    letterSpacing: '2px',
    fontSize: '46px',
    marginTop: '5%',
    textAlign: 'center',
  },
}

function RecipePageHeader() {
  return (
    <Grid container justifyContent='center' spacing={2}>
      <Grid item xs={12}>
        <h1 style={styles.title}>your AI-Chef is at Home</h1>
      </Grid>
      <Grid container spacing={2} justifyContent='center' style={styles.container}>
        {steps.map((step, index) => (
          <Grid key={index} item xs={12} sm={6} md={4} lg={4}>
            <Paper elevation={3} style={styles.step}>
              <div style={styles.stepIndex}>{index + 1}</div>
              <Typography variant='body1' style={styles.stepText}>
                {step}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Grid>
  )
}

export default RecipePageHeader
