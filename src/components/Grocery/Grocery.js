import React, { useState, useEffect } from 'react'
import './Grocery.css'
import CloseIcon from '@mui/icons-material/Close'
import { Grid, IconButton } from '@mui/material'

function Grocery({ name, src, onGroceryClick, onDelete }) {
  const [isMarked, setIsMarked] = useState(false)

  function handleClick() {
    setIsMarked(!isMarked)
  }

  function handleDelete(event) {
    event.stopPropagation()
    onDelete(name)
  }

  useEffect(() => {
    onGroceryClick({ name, src, isMarked })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMarked])

  return (
    <Grid onClick={handleClick} className='grocery-container'>
      <Grid className={`grocery-item ${isMarked ? 'marked-grocery' : ''}`}>
        <img src={src} alt={name} style={{ width: '100%', height: '100%' }} />
        <Grid className='hover-text'>{name.replace(/_/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())}</Grid>
        <IconButton edge='end' onClick={handleDelete} aria-label='close' className='grocery-close' size='large'>
          <CloseIcon />
        </IconButton>
      </Grid>
    </Grid>
  )
}

export default Grocery
