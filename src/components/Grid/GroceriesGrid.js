import React, { useState, useEffect } from 'react'
import Grocery from '../Grocery/Grocery'
import './Grid.css'
import axios from 'axios'
import { Grid, Typography, IconButton, TextField, Button } from '@material-ui/core'
import RecipePopup from '../Recipe/Recipe'
import Popup from '../Popup/Popup'
import AddGrocery from '../AddGrocery/AddGrocery'
import AddIcon from '@material-ui/icons/Add'

const backendURL = process.env.REACT_APP_BACKEND_URL

function GroceriesGrid(props) {
  const [markedGroceries, setMarkedGroceries] = useState([])
  const [images, setImages] = useState([])
  const [showRecipe, setShowRecipe] = useState(false)
  const [showAddGrocery, setShowAddGrocery] = useState(false)

  useEffect(() => {
    async function fetchImages() {
      const response = await axios.get(`${backendURL}/image/`)
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
   
      if (!showRecipe) setShowRecipe(true)
  
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
            {/* <Grid key={200} item xs={12} sm={6} md={4} lg={3} className='grid-item'>
              <Grocery src={'https://icon-library.com/images/white-plus-icon/white-plus-icon-3.jpg'} name={'plus'} onGroceryClick={handleAddGrocery} />
            </Grid> */}
            <Grid key={-1} item xs={12} sm={6} md={4} lg={3}>
              <Grid container justifyContent='center'>
                <IconButton style={{ color: 'white', fontSize: 800 }} onClick={() => setShowAddGrocery(true)}>
                  <AddIcon />
                </IconButton>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Popup show={showAddGrocery} onClose={() => setShowAddGrocery(false)}>
        <AddGrocery onSubmit={() => setShowAddGrocery(false)}></AddGrocery>
      </Popup>

      <div className='container'>
        <button className='button' onClick={handleMakeRecipe}>
          Recipe Me!
        </button>
        <Popup show={showRecipe} onClose={() => setShowRecipe(false)}>
          {markedGroceries.length === 0 ? <h2>Select groceries first :)</h2> : <RecipePopup groceries={markedGroceries} onClose={() => setShowRecipe(false)} />}
        </Popup>
      </div>
    </div>
  )
}

export default GroceriesGrid
