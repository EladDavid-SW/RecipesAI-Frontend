import React, { useState, useEffect } from 'react'
import Grocery from '../Grocery/Grocery'
import './Grid.css'
import axios from 'axios'
import { Grid, Typography, IconButton, TextField, Button } from '@mui/material'
import RecipePopup from '../Recipe/Recipe'
import Popup from '../Popup/Popup'
import AddGrocery from '../AddGrocery/AddGrocery'
import AddIcon from '@mui/icons-material/Add'
import createSocket from '../../services/sockets'

const backendURL = process.env.REACT_APP_BACKEND_URL

function GroceriesGrid(props) {
  const [markedGroceries, setMarkedGroceries] = useState([])
  const [images, setImages] = useState([])
  const [showRecipe, setShowRecipe] = useState(false)
  const [showAddGrocery, setShowAddGrocery] = useState(false)
  const [socket, setSocket] = useState(null);


  useEffect(() => {
    const newSocket = createSocket((image) => {
      setImages((prevImages) => [...prevImages, image[0]]);
    });
    setSocket(newSocket);
  
    return () => {
      newSocket.disconnect();
    };
  }, []);
  

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

  const handleDeleteImage = (imageName) => {
    if (socket) {
      socket.emit('deleteImage', imageName);
    }
  };  

  return (
    <Grid container justifyContent='center'>
      <Grid container spacing={2} justifyContent='center'>
        <Grid item xs={12}>
          <Grid container justifyContent='center' spacing={2}>
            <h1
              style={{
                color: '#f0f0f0',
                fontWeight: 'bold',
                fontFamily: 'Courier New, monospace',
                textAlign: 'center',
                textShadow: '2px 2px 8px rgba(0, 0, 0, 0.5)',
                textTransform: 'uppercase',
                letterSpacing: '2px',
              }}
            >
              Delicious Recipes
            </h1>
          </Grid>
          <Grid container justifyContent='center'>
            <div style={{ border: '1px solid #888', padding: '16px', marginTop: '16px' }}>
              <p style={{ textAlign: 'center', color: '#888' }}>
                Select the groceries you have from the list below.
                <br /> Click the 'Add' button to include additional groceries.
                <br /> Once you've made your selection, scroll down and click the 'Recipe Me' button.
              </p>
            </div>
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <Grid container justifyContent='center'>
            {images.map((image, index) => (
              <Grid key={index} item xs={12} sm={6} md={4} lg={3} className='grid-item'>
                <Grocery
                  src={image.url}
                  name={image.name}
                  onGroceryClick={handleGroceryClick}
                  onDelete={handleDeleteImage}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>

      <Popup show={showAddGrocery} onClose={() => setShowAddGrocery(false)}>
        <AddGrocery onSubmit={() => setShowAddGrocery(false)}></AddGrocery>
      </Popup>

      <Grid item xs={12}>
        <Grid item xs={12}>
          <Grid container justifyContent='center'>
            <button style={{ backgroundColor: 'transparent', border: 'none', cursor: 'pointer' }} onClick={() => setShowAddGrocery(true)}>
              <AddIcon style={{ color: '#4caf50', fontSize: 150 }} />
            </button>
          </Grid>
          <Grid container justifyContent='center'>
            <h4 style={{ color: '#4caf50', fontWeight: 'bold', marginTop: '-10px' }}>Add Grocery</h4>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container justifyContent='center'>
            <button className='button' style={{ width: '40%', marginTop: '20px' }} onClick={handleMakeRecipe}>
              Recipe Me!
            </button>
          </Grid>
          <Popup show={showRecipe} onClose={() => setShowRecipe(false)}>
            {markedGroceries.length === 0 ? <h2>Select groceries first :)</h2> : <RecipePopup groceries={markedGroceries} onClose={() => setShowRecipe(false)} />}
          </Popup>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default GroceriesGrid