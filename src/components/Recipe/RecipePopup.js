import './RecipePopup.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
const backendURL = process.env.REACT_APP_BACKEND_URL

function RecipePopup({ groceries, onClose }) {
  const [recipeDetails, setRecipeDetails] = useState(null)
  let generateRecipe = false

  useEffect(() => {
    async function fetchData() {
      const response = await axios.post(`${backendURL}/chatGPT`, {
        message:
          `make me a recipe from this ingredients: ` +
          groceries
            .map((grocery) => {
              return grocery.name
            })
            .join(', ') +
          `. give me the answer in json format:{"title": "", "ingredients": "[]", "instructions": "[]"}. make sure to not add Bad control character for js json parser in the string literal`,
      })
      console.log(response.data.message)
      setRecipeDetails(JSON.parse(response.data.message))
      console.log(recipeDetails)
    }
    if (!generateRecipe) {
      generateRecipe = true
      fetchData()
    }
  }, [])

  return (
    <div className='popup-overlay'>
      <div className='popup'>
        {recipeDetails !== null ? (
          <div>
            <h1>{recipeDetails.title}</h1>
            <h2>Ingredients:</h2>
            <p style={{ whiteSpace: 'pre-line' }}>{recipeDetails.ingredients.join('\n')}</p>
            <h2>instructions:</h2>
            <p style={{ whiteSpace: 'pre-line' }}>{recipeDetails.instructions.join('\n')}</p>
          </div>
        ) : (
          <p>Loading recipe details...</p>
        )}
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  )
}

export default RecipePopup
