import React, { useState } from 'react';
import { Grid, Typography, TextField, Button } from '@material-ui/core';
import io from 'socket.io-client';
import './AddGrocery.css';

const AddGrocery = ({ onSubmit }) => {
  const [newGrocery, setNewGrocery] = useState('');

  function uploadImage(imageUrl) {
    const socket = io('ws://localhost:3001', {
      transports: ['websocket', 'polling'],
    });

    socket.on('connect', () => {
      console.log('Socket connected:', socket.id);

      const imageData = {
        images: [imageUrl],
      };
      console.log(imageData);
      socket.emit('uploadImage', imageData, (error) => {
        if (error) {
          console.log('Error sending uploadImage event:', error);
        }
      });
    });

    socket.on('disconnect', () => {
      console.log('Socket disconnected');
    });

    socket.on('connect_error', (error) => {
      console.log(`Socket connection error: ${error}`);
    });

    socket.on('greeting', (data) => {
      console.log('Received greeting:', data);
    });

    socket.on('newImage', (imageUrl) => {
      console.log('Received new image URL:', imageUrl);
    });

    return () => {
      socket.disconnect();
    };
  }

  function handleNewGroceryChange(event) {
    setNewGrocery(event.target.value);
  }

  function handleNewGrocerySubmit() {
    const newGroceryItem = { name: newGrocery };
    console.log(newGroceryItem);
    setNewGrocery('');
    uploadImage(newGrocery);
    onSubmit(false);
  }

  return (
    <Grid container justifyContent="center" alignItems="center" style={{ margin: '1rem' }}>
      <Typography variant="h5" style={{ marginRight: '1rem' }}>
        Add Grocery
      </Typography>
      <TextField
        label="Grocery Name"
        value={newGrocery}
        onChange={handleNewGroceryChange}
        variant="outlined"
        style={{ marginRight: '1rem' }}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleNewGrocerySubmit}
      >
        Add
      </Button>
    </Grid>
  );
};

export default AddGrocery;