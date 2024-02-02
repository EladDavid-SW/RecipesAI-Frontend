import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Grid from '@mui/material/Grid'
import CircularProgress from '@mui/material/CircularProgress'

const backendURL = process.env.REACT_APP_BACKEND_URL

function Recipe({ groceries }) {
  const [recipeDetails, setRecipeDetails] = useState(null)
  const [image, setImage] = useState('')
  const [imageLoaded, setImageLoaded] = useState(false)

  async function fetchRecipe() {
    try {
      setRecipeDetails(null)
      setImage('')
      setImageLoaded(false)
      const ingredients = groceries.map((grocery) => grocery.name).join(', ')
      const response = await axios.post(`${backendURL}/chatGPT`, {
        message:
          `make me a recipe from this only this ingredients: ` +
          ingredients +
          `.  give me the answer in json format:{"title": "", "ingredients": ["",""], "instructions": ["",""]} and make sure to not add Bad control character for js json parser in the string literal`,
      })

      console.log(response.data.message)
      let json = JSON.parse(response.data.message)
      console.log(json)
      setRecipeDetails(json)

      const responseDaliE = await axios.post(`${backendURL}/dali_e/`, {
        prompts: [{ prompt: `bright warm white background with an image of ${json.title} `, name: 'name' }],
      })
      console.log(responseDaliE.data)
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

  useEffect(() => {
    fetchRecipe()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Grid container justifyContent='center' alignItems='center'>
      {recipeDetails === null ? (
        <CircularProgress />
      ) : (
        <Grid item xs={12}>
          <Grid container spacing={3} alignItems='center'>
            <Grid item xs={12} md={6}>
              <h1>{recipeDetails.title}</h1>
              <h2>Ingredients:</h2>
              <p style={{ whiteSpace: 'pre-line' }}>{recipeDetails.ingredients.join('\n')}</p>
              <h2>Instructions:</h2>
              <p style={{ whiteSpace: 'pre-line' }}>{recipeDetails.instructions.join('\n')}</p>
            </Grid>
            <Grid item xs={12} md={6}>
              {imageLoaded ? (
                <img src={image} alt='Recipe' style={{ width: '100%', height: '100%', marginTop: '8%' }} />
              ) : (
               
                  <Grid item xs={12}>
                    <Grid container justifyContent='center'>
                      <img src={'https://media.tenor.com/n1GNGQYlVJ8AAAAi/kakaotalk-emoticon.gif'} alt='Recipe' style={{ width: '80%', height: '80%', marginTop: '8%' }} />
                      <h3 style={{ marginLeft: '17%', marginTop:'7%' }}>Generating recipe image</h3>
                    </Grid>
                  </Grid>
            
              )}
            </Grid>
            <Grid item xs={12}>
              <Grid container justifyContent='center'>
                <button className='button' style={{ width: '40%', marginTop: '3%' }} onClick={fetchRecipe}>
                  Regenerate Recipe
                </button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      )}
    </Grid>
  )
}

export default Recipe
