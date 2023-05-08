import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Recipes from './pages/Recipes';



import  { useState, useEffect } from 'react'
import io from 'socket.io-client';


function App() {

  // useEffect(() => {
  //   const socket = io('ws://localhost:3001', {
  //     transports: ['websocket']
  //   });
  
  //   socket.on('connect', () => {
  //     console.log('Socket connected:', socket.id);
  //   });
  
  //   socket.on('disconnect', () => {
  //     console.log('Socket disconnected');
  //   });
  
  //   socket.on('connect_error', (error) => {
  //     console.log(`Socket connection error: ${error}`);
  //   });
  
  //   socket.on('greeting', (data) => {
  //     console.log('Received greeting:', data);
  //   });
  
  //   return () => {
  //     socket.disconnect();
  //   };
  // }, []);
  
  
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Recipes />} />
      </Routes>
    </Router>
  );
}


export default App;