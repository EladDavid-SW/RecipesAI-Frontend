import React, { useState, useEffect } from 'react'
import { Grid, Typography, TextField, Button, CircularProgress } from '@mui/material'
import io from 'socket.io-client'
import './AddGrocery.css'
import GreenVIconImage from '../../images/checked.png'

const backendURL = process.env.REACT_APP_BACKEND_URL

const AddGrocery = ({ onSubmit }) => {
  const [newGrocery, setNewGrocery] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [showGreenIcon, setShowGreenIcon] = useState(false)

  useEffect(() => {
    const errorTimeout = setTimeout(() => {
      setErrorMessage('')
    }, 3000)

    return () => {
      clearTimeout(errorTimeout)
    }
  }, [errorMessage])

  function uploadImage(imageUrl) {
    const socket = io(backendURL, {
      transports: ['websocket', 'polling'],
    })

    socket.on('connect', () => {
      console.log('Socket connected:', socket.id)

      const imageData = {
        images: [imageUrl],
      }
      console.log(imageData)
      socket.emit('uploadImage', imageData, (error) => {
        if (error) {
          console.log('Error sending uploadImage event:', error)
        }

        setIsLoading(false)
      })

      setTimeout(() => {
        socket.disconnect()
        setShowGreenIcon(true)
        setTimeout(() => {
          setShowGreenIcon(false)
          onSubmit(false)
        }, 2000)
      }, 6000)
    })

    socket.on('disconnect', () => {
      console.log('Socket disconnected')
    })

    socket.on('connect_error', (error) => {
      console.log(`Socket connection error: ${error}`)
    })

    socket.on('greeting', (data) => {
      console.log('Received greeting:', data)
    })
  }

  function handleNewGroceryChange(event) {
    setNewGrocery(event.target.value)
  }

  async function handleNewGrocerySubmit() {
    if (newGrocery.trim() === '') {
      setErrorMessage('Please enter a grocery item name before clicking Add.')
      return
    }
    setIsLoading(true)
    const newGroceryItem = { name: newGrocery }
    console.log(newGroceryItem)
    setNewGrocery('')

    await uploadImage(newGrocery)
  }

  return (
    <Grid container justifyContent='center' alignItems='center' style={{ margin: '1rem' }}>
      <Typography variant='h5' style={{ marginRight: '1rem' }}>
        Add Grocery
      </Typography>
      <TextField label='Grocery Name' value={newGrocery} onChange={handleNewGroceryChange} variant='outlined' className={errorMessage ? 'error-input' : ''} style={{ marginRight: '1rem' }} />

      {isLoading ? (
        showGreenIcon ? (
          <img src={GreenVIconImage} alt='Green V Icon' style={{ width: '32px', height: '32px', marginLeft: '1rem' }} />
        ) : (
          <CircularProgress style={{ marginRight: '1rem' }} />
        )
      ) : (
        <Button variant='contained' color='primary' onClick={handleNewGrocerySubmit}>
          Add
        </Button>
      )}
      {/* {errorMessage && (
        <Typography variant='body2' color='error' style={{ margin: '0', marginTop: '8px' }}>
          {errorMessage}
        </Typography>
      )} */}
    </Grid>
  )
}
export default AddGrocery
