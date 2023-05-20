import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Recipes from './pages/Recipes'
import WelcomePage from './pages/WelcomePage'

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path='/' element={<Recipes />} /> */}
        <Route path='/' element={<WelcomePage />} />
      </Routes>
    </Router>
  )
}

export default App
