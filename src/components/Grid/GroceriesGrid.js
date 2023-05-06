import React, { useState, useEffect } from 'react'
import Grocery from '../Grocery/Grocery'
import './Grid.css'
import axios from 'axios'
import { Grid, Typography } from '@material-ui/core'
import RecipePopup from '../Recipe/RecipePopup'

// const groceryList = ['mango', 'pineapple', 'apple', 'banana', 'tomato', 'beet', 'onion', 'orange', 'watermelon', 'rise', 'eggplant', 'yogurt']
const groceryList = ['pineapple', 'yogurt']
const backendURL = process.env.REACT_APP_BACKEND_URL

function GroceriesGrid(props) {
  const [markedGroceries, setMarkedGroceries] = useState([])
  const [images, setImages] = useState([])
  const [showRecipe, setShowRecipe] = useState(false)

  useEffect(() => {
    async function fetchImages() {
      const response = await axios.post(`${backendURL}/images/`, { images: groceryList })
      let imagesList = response.data.images
      setImages(imagesList)
    }
    fetchImages()
  }, [])

  function handleGroceryClick(grocery) {
    if (grocery.isMarked) setMarkedGroceries([...markedGroceries, grocery])
    else {
      // excludes the unmarked grocery
      const newMarkedGroceries = markedGroceries.filter((groceryItem) => groceryItem.name !== grocery.name)
      setMarkedGroceries(newMarkedGroceries)
    }
  }

  async function handleMakeRecipe() {
    try {
      if (markedGroceries.length === 0) {
        alert('Please select groceries!')
        return
      }
      if (!showRecipe) setShowRecipe(true)
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
            {images.map((image, index) => (
              <Grid key={index} item xs={12} sm={6} md={4} lg={3} className='grid-item'>
                <Grocery src={image.url} name={image.name} onGroceryClick={handleGroceryClick} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
      <div className='container'>
        <button className='button' onClick={handleMakeRecipe}>
          Recipe Me!
        </button>
        {showRecipe && <RecipePopup groceries={markedGroceries} onClose={() => setShowRecipe(false)} />}
      </div>
    </div>
  )
}

export default GroceriesGrid
