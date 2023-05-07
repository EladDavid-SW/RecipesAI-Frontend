import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Grid from '@mui/material/Grid'
import CircularProgress from '@mui/material/CircularProgress'

const backendURL = process.env.REACT_APP_BACKEND_URL

function Recipe({ groceries }) {
  let isRecipe = false

  const [recipeDetails, setRecipeDetails] = useState(null)
  const [image, setImage] = useState('')
  const [imageLoaded, setImageLoaded] = useState(false)

  useEffect(() => {
    async function fetchRecipe() {
      const ingredients = groceries.map((grocery) => grocery.name).join(', ')
      const response = await axios.post(`${backendURL}/chatGPT`, {
        message:
          `make me a recipe from this ingredients: ` +
          ingredients +
          `.  give me the answer in json format:{"title": "", "ingredients": ["",""], "instructions": ["",""]} and make sure to not add Bad control character for js json parser in the string literal`,
      })

      try {
        console.log(response.data.message)
        let json = JSON.parse(response.data.message)
        console.log(json)
        setRecipeDetails(json)

        const responseDaliE = await axios.post(`${backendURL}/dali_e/`, {
          prompts: [{prompt:json.title + 'in a minimal way, it should be a background', name:"name"}],
        })
        console.log( responseDaliE.data);
        let image_url = responseDaliE.data.images[0]
        setImage(image_url.url)
        console.log(image_url.url)
        setImageLoaded(true)
      } catch (error) {
        console.error('Error:', error)
        if (error.message.includes('JSON')) {
          fetchRecipe()
        } else {
          throw error
        }
      }
    }

    if (!isRecipe) {
      fetchRecipe()
      isRecipe = true
    }
  }, [groceries])

  return (
    <div>
      <Grid container justifyContent="center" alignItems="center">
        {recipeDetails !== null && imageLoaded ? (
          <>
            <Grid item xs={12} md={6}>
              <h1>{recipeDetails.title}</h1>
              <h2>Ingredients:</h2>
              <p style={{ whiteSpace: 'pre-line' }}>{recipeDetails.ingredients.join('\n')}</p>
              <h2>Instructions:</h2>
              <p style={{ whiteSpace: 'pre-line' }}>{recipeDetails.instructions.join('\n')}</p>
            </Grid>
            <Grid item xs={12} md={6}>
              <img src={image} alt="Recipe" style={{ width: '100%', height: 'auto' }} />
            </Grid>
          </>
        ) : (
          <Grid item xs={12}>
            <CircularProgress />
          </Grid>
        )}
      </Grid>
    </div>
  );
}

export default Recipe;