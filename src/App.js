import React from 'react'
import Grid from './components/Grid/Grid'
function App() {
  const photos = [
    { id: 1, src: 'https://spoonacular.com/cdn/ingredients_100x100/apple.jpg', name: 'Apple' },
    { id: 2, src: 'https://spoonacular.com/cdn/ingredients_100x100/bananas.jpg', name: 'Bananas' },
    { id: 3, src: 'https://spoonacular.com/cdn/ingredients_100x100/orange.jpg', name: 'Orange' },
    { id: 4, src: 'https://spoonacular.com/cdn/ingredients_100x100/lemon.jpg', name: 'Lemon' },
    { id: 5, src: 'https://spoonacular.com/cdn/ingredients_100x100/pineapple.jpg', name: 'Pineapple' },
    { id: 6, src: 'https://spoonacular.com/cdn/ingredients_100x100/strawberries.jpg', name: 'Strawberries' },
  ]

  return (
    <div className='app-container'>
      <Grid photos={photos}></Grid>
    </div>
  )
}

export default App
