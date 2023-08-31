import React, { useState, useEffect } from 'react'
import './Grocery.css'
import CloseIcon from '@mui/icons-material/Close'
import { Grid, IconButton } from '@mui/material'
import DeleteAlert from '../DeleteAlert/DeleteAlert'

function Grocery({ name, src, onGroceryClick, onDelete }) {
  const [isMarked, setIsMarked] = useState(false)
  const [deleteIsConfirmed, setDeleteIsConfirmed] = useState(false)
  const [showDeleteGrocery, setShowDeleteGrocery] = useState(false)

  function handleClick() {
    setIsMarked(!isMarked)
  }

  useEffect(() => {
    if (deleteIsConfirmed) {
      onDelete(name)
      setDeleteIsConfirmed(false)
      console.log('Delete Me from Grocery')
    }
  }, [deleteIsConfirmed])

  function handleDelete(event) {
    setShowDeleteGrocery(true)
    event.stopPropagation()
  }

  function handleConfirmDelete() {
    setDeleteIsConfirmed(true)
    setShowDeleteGrocery(false)
  }

  useEffect(() => {
    onGroceryClick({ name, src, isMarked })
  }, [isMarked])

  return (
    <Grid container justifyContent='center' alignItems='center'>
      {showDeleteGrocery ? (
        <Grid className={`grocery-container`}>
          <Grid className={`grocery-item`}>
            <img src={src} alt={name} style={{ width: '100%', height: '100%' }} />
            <DeleteAlert name={name} onConfirmDelete={handleConfirmDelete} onCancelDelete={() => setShowDeleteGrocery(false)} />
          </Grid>
        </Grid>
      ) : (
        <Grid onClick={handleClick} className={`grocery-container`}>
          <Grid className={`grocery-item ${isMarked ? 'marked-grocery' : ''}`}>
            <img src={src} alt={name} style={{ width: '100%', height: '100%' }} />
            <Grid className={`hover-text`}>{name.replace(/_/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())}</Grid>
            <IconButton edge='end' onClick={handleDelete} aria-label='close' className='grocery-close' size='large'>
              <CloseIcon />
            </IconButton>
          </Grid>
        </Grid>
      )}
    </Grid>
  )
}

export default Grocery
