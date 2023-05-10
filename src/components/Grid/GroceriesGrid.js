import React, { useState, useEffect } from 'react'
import Grocery from '../Grocery/Grocery'
import './Grid.css'
import axios from 'axios'
import { Grid, Typography, IconButton, TextField, Button } from '@material-ui/core'
import RecipePopup from '../Recipe/Recipe'
import Popup from '../Popup/Popup'
import AddIcon from '@material-ui/icons/Add'

// const groceryList = ['pineapple', 'yogurt', 'melon', 'mango', 'kiwi']
const backendURL = process.env.REACT_APP_BACKEND_URL

function GroceriesGrid(props) {
  const [markedGroceries, setMarkedGroceries] = useState([])
  const [images, setImages] = useState([])
  const [showRecipe, setShowRecipe] = useState(false)
  const [showAddGrocery, setShowAddGrocery] = useState(false)
  const [newGrocery, setNewGrocery] = useState('')
  const [groceryList, setGroceryList] = useState(['pineapple', 'yogurt', 'melon', 'mango', 'kiwi'])

  useEffect(() => {
    async function fetchImages() {
      const response = await axios.post(`${backendURL}/images/`, { images: groceryList })
      let imagesList = response.data.images
      setImages(imagesList)
    }
    fetchImages()
  }, [groceryList])

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
      if (!showRecipe) setShowRecipe(true)
    } catch (error) {
      console.error(error)
    }
  }

  function handleAddGrocery() {
    setShowAddGrocery(true)
  }

  function handleNewGroceryChange(event) {
    setNewGrocery(event.target.value)
  }

  function handleNewGrocerySubmit() {
    const newGroceryItem = { name: newGrocery }
    setMarkedGroceries([...markedGroceries, newGroceryItem])
    console.log(newGroceryItem)
    setGroceryList([...groceryList, newGroceryItem.name])
    setShowAddGrocery(false)
    setNewGrocery('')
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
            <Grid key={200} item xs={12} sm={6} md={4} lg={3} className='grid-item'>
              <Grocery src={'https://icon-library.com/images/white-plus-icon/white-plus-icon-3.jpg'} name={'plus'} onGroceryClick={handleAddGrocery} />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Grid container justifyContent='center'>
                <IconButton style={{ color: 'white', fontSize: 800 }} onClick={handleAddGrocery}>
                  <AddIcon />
                </IconButton>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Popup show={showAddGrocery} onClose={() => setShowAddGrocery(false)}>
        <Typography variant='h5' sx={{ color: 'text.secondary', fontWeight: 'bold', marginBottom: '1rem' }}>
          Add Grocery
        </Typography>
        <TextField label='Grocery Name' value={newGrocery} onChange={handleNewGroceryChange} sx={{ marginBottom: '1rem' }} />
        <Button variant='contained' onClick={handleNewGrocerySubmit} sx={{ backgroundColor: 'green', color: 'white' }}>
          Add
        </Button>
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
