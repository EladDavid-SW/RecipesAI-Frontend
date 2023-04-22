import React, { useState, useEffect } from 'react'
import Grocery from '../Grocery/Grocery'
import './Grid.css'
import axios from 'axios'
import { Box, Grid, TextField, Typography } from '@material-ui/core'

const groceryList = ['apple', 'mango','pineapple']

function GridComponent(props) {
  const [markedGroceries, setMarkedGroceries] = useState([])
  const [photos, setPhotos] = useState([])

  useEffect(() => {
    async function fetchPhotos() {
      const response = await axios.post('http://localhost:3001/dali_e/', { prompts: groceryList })
      console.log(response.data);
      setPhotos(response.data.images)
    }
    fetchPhotos()
  }, [])

  function handleGroceryClick(grocery) {
    if (grocery.isMarked) setMarkedGroceries([...markedGroceries, grocery])
    else {
      // create a new array that excludes the grocery you want to remove
      const newMarkedGroceries = markedGroceries.filter((groceryItem) => groceryItem.name !== grocery.name)
      setMarkedGroceries(newMarkedGroceries)
    }
  }

  async function handleMakeSmoothie() {
    try {
      if (markedGroceries.length === 0) alert('Please select groceries!')
      else {
        const response = await axios.post('http://localhost:3001/chatGPT', {
          message:
            'give me a recipe that from this groceries:' +
            markedGroceries
              .map((grocery) => {
                return grocery.name
              })
              .join(', '),
        })
        console.log(response.data)
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div>
      <Grid container spacing={2} justifyContent='center'>
        <Grid item xs={12}>
          <Grid container justifyContent='center'>
            <Typography variant='h4' sx={{ color: 'text.secondary', fontWeight: 'bold', marginBottom: '1rem', fontFamily: 'Helvetica Neue, sans-serif' }}>
              Delicious Recipes
            </Typography>
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <Grid container justifyContent='center'>
            {photos.map((photo) => (
              <Grid item xs={12} sm={6} md={4} lg={3} className='grid-item'>
                <Grocery src={photo.url} name={photo.prompt} onGroceryClick={handleGroceryClick} />
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item xs={12} className='grid-item'>
          <h1>My Food Photos</h1>
        </Grid>

        <h2>Marked Groceries:</h2>
        <ul>
          {markedGroceries.map((item, index) => {
            return <li key={index}>{item.name}</li>
          })}
        </ul>
      </Grid>
      <div className='container'>
        <button className='button' onClick={handleMakeSmoothie}>
          Make me a smoothie!
        </button>
      </div>
    </div>
  )
}

export default GridComponent
