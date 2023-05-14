import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Recipes from './pages/Recipes'

import { useState, useEffect } from 'react'
import io from 'socket.io-client'

function App() {
  // useEffect(() => {
  //   const socket = io('ws://localhost:3001', {
  //     transports: ['websocket', 'polling'],
  //   })

  //   socket.on('connect', () => {
  //     console.log('Socket connected:', socket.id)

  //     // Example: Send an image upload request
  //     const imageData = {
  //       images: ['yellow peach'],
  //     }
  //     console.log(imageData)
  //     socket.emit('uploadImage', imageData, (error) => {
  //       if (error) {
  //         console.log('Error sending uploadImage event:', error)
  //       }
  //     })
  //   })

  //   socket.on('disconnect', () => {
  //     console.log('Socket disconnected')
  //   })

  //   socket.on('connect_error', (error) => {
  //     console.log(`Socket connection error: ${error}`)
  //   })

  //   socket.on('greeting', (data) => {
  //     console.log('Received greeting:', data)
  //   })

  //   socket.on('newImage', (imageUrl) => {
  //     console.log('Received new image URL:', imageUrl)
  //   })

  //   return () => {
  //     socket.disconnect()
  //   }
  // }, [])

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Recipes />} />
      </Routes>
    </Router>
  )
}

export default App
