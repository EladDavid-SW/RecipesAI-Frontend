import React, { useState } from 'react'
import Grocery from '../Grocery/Grocery'
import './Grid.css'
import axios from 'axios'
import { Box, Grid, TextField, Typography } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  ltr_input: {
    width: '20%',
    padding: '0px',
    direction: 'ltr',
  },
  textField: {
    width: '20%',
    padding: '0px',
  },

  select_element: {
    width: '220px',
    padding: '0px',
  },
  title_type: {
    textAlign: 'center',
  },
}))

function GridComponent(props) {
  const classes = useStyles()

  const [markedGroceries, setMarkedGroceries] = useState([])

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
            <Typography variant='h4' sx={{ color: 'text.secondary' }}>
              {'dddd'}
            </Typography>
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <Grid container justifyContent='center'>
            {props.photos.map((photo) => (
              <Grid item key={photo.id} xs={12} sm={6} md={4} lg={3} className='grid-item'>
                <Grocery src={photo.src} name={photo.name} onGroceryClick={handleGroceryClick} />
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
