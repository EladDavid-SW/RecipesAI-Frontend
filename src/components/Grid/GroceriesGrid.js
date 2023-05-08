import React, { useState, useEffect } from 'react'
import Grocery from '../Grocery/Grocery'
import './Grid.css'
import axios from 'axios'
import { Grid, Typography } from '@material-ui/core'
import RecipePopup from '../Recipe/Recipe'
import Popup from '../Popup/Popup'
// import socket from '../../../sockets/index';
import io from 'socket.io-client';



// const groceryList = ['mango', 'pineapple', 'apple', 'banana', 'tomato', 'beet', 'onion', 'orange', 'watermelon', 'rise', 'eggplant', 'yogurt']
const groceryList = ['pineapple', 'yogurt','melon','mango','kiwi']
const backendURL = process.env.REACT_APP_BACKEND_URL

function GroceriesGrid(props) {
  const [markedGroceries, setMarkedGroceries] = useState([])
  const [images, setImages] = useState([])
  const [showRecipe, setShowRecipe] = useState(false)

  useEffect(() => {
    const socket = io('http://localhost:3000');
    socket.on('connect', () => {
      console.log('Socket connected');
    });
    socket.on('disconnect', () => {
      console.log('Socket disconnected');
    });
    socket.on('connect_error', (error) => {
      console.log(`Socket connection error: ${error}`);
    });
    socket.on('greeting', (data) => {
      alert(data); // prints "Hello, client!"
    });
  
    return () => {
      socket.disconnect();
    };
  }, []);
  

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
        <Popup show={showRecipe} onClose={() => setShowRecipe(false)}>
          {/* <h2>please  me</h2> */}
        {markedGroceries.length === 0 ? <h2>Select groceries first :)</h2> : <RecipePopup groceries={markedGroceries} onClose={() => setShowRecipe(false)} />}
        </Popup>
      </div>
    </div>
  )
}

export default GroceriesGrid







