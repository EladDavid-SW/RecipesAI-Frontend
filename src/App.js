import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Recipes from './pages/Recipes';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Recipes />} />
      </Routes>
    </Router>
  );
}


export default App;