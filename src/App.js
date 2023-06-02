import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Recipes from './pages/Recipes'
import WelcomePage from './pages/WelcomePage'
import AboutMePage from './pages/AboutMePage'
import { ThemeProvider } from '@mui/material/styles'
import theme from './services/theme'
import Navbar from './components/Navbar/Navbar'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<WelcomePage />} />
          <Route path='/recipe' element={<Recipes />} />
          <Route path="/about" element={<AboutMePage />} />

        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App
