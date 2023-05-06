// import './RecipePopup.css'
// import { useEffect, useState } from 'react'
// import axios from 'axios'
// const backendURL = process.env.REACT_APP_BACKEND_URL

// function RecipePopup({ groceries, onClose }) {
//   const [recipeDetails, setRecipeDetails] = useState(null)
//   const [image, setImage] = useState('')
//   const [imageLoaded, setImageLoaded] = useState(false)

//   let generateRecipe = false

//   useEffect(() => {
//     async function fetchData() {
//       const response = await axios.post(`${backendURL}/chatGPT`, {
//         message:
//           `make me a recipe from this ingredients: ` +
//           groceries
//             .map((grocery) => {
//               return grocery.name
//             })
//             .join(', ') +
//           `.  give me the answer in json format:{"title": "", "ingredients": ["",""], "instructions": ["",""]} and make sure to not add Bad control character for js json parser in the string literal`,
//       })
//       console.log(response.data.message)
//       console.log(JSON.parse(response.data.message))
//       let json = JSON.parse(response.data.message)
//       setRecipeDetails(json)

//       const responseDaliE = await axios.post(`${backendURL}/images/`, {
//         images: [json.title],
//       })
//       let image_url = responseDaliE.data.images[0]
//       setImage(image_url.url)
//       setImageLoaded(true)
//     }

//     if (!generateRecipe) {
//       generateRecipe = true
//       fetchData()
//     }
//   }, [])

//   const popupStyle = {
//     backgroundImage: `url(${image})`,
//     backgroundSize: 'cover',
//   }

//   return (
//     <div className='popup-overlay' >
//       <div className='popup' style={popupStyle}>
//         {recipeDetails !== null ? (
//           <div>
//             <h1>{recipeDetails.title}</h1>
//             <h2>Ingredients:</h2>
//             <p style={{ whiteSpace: 'pre-line' }}>{recipeDetails.ingredients.join('\n')}</p>
//             <h2>instructions:</h2>
//             <p style={{ whiteSpace: 'pre-line' }}>{recipeDetails.instructions.join('\n')}</p>
//             <img src={image} key={image} alt="recipe" />

//           </div>
//         ) : (
//           <img src={`https://media.giphy.com/media/xUPGcz2H1TXdCz4suY/giphy.gif`} alt="Chef cooking" />
//           // <p>Loading recipe details...</p>
//         )}
//         <button onClick={onClose}>Close</button>
//       </div>
//     </div>
//   )
// }

// export default RecipePopup

import './RecipePopup.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';

const backendURL = process.env.REACT_APP_BACKEND_URL;


const useStyles = makeStyles(() => ({
  popup: {
    padding: 20,
    borderRadius: 5,
    width: 500,
    maxWidth: '100%',
    textAlign: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    backgroundImage: (props) => `url(${props.image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  },
}))

function RecipePopup({ groceries, onClose }) {
  const [recipeDetails, setRecipeDetails] = useState(null)
  const [image, setImage] = useState('')
  const [imageLoaded, setImageLoaded] = useState(false)

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
          `.  give me the answer in json format:{"title": "", "ingredients": ["",""], "instructions": ["",""]} and make sure to not add Bad control character for js json parser in the string literal`,
      })
      console.log(response.data.message)
      console.log(JSON.parse(response.data.message))
      let json = JSON.parse(response.data.message)
      setRecipeDetails(json)

      const responseDaliE = await axios.post(`${backendURL}/images/`, {
        images: [json.title],
      })
      let image_url = responseDaliE.data.images[0]
      setImage(image_url.url)
      console.log(image_url.url);
      setImageLoaded(true)

    }

    if (!generateRecipe) {
      generateRecipe = true
      fetchData()
    }
  }, [])

  const popupStyle = {
    backgroundImage: image,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  }
  let classes = useStyles({ image })

  return (
    <div className='popup-overlay'>
      <div className={classes.popup}>
        {recipeDetails !== null && imageLoaded ? (
          <div>
            <h1>{recipeDetails.title}</h1>
            <h2>Ingredients:</h2>
            <p style={{ whiteSpace: 'pre-line' }}>{recipeDetails.ingredients.join('\n')}</p>
            <h2>Instructions:</h2>
            <p style={{ whiteSpace: 'pre-line' }}>{recipeDetails.instructions.join('\n')}</p>
          </div>
        ) : (
          <img src={`https://media.giphy.com/media/xUPGcz2H1TXdCz4suY/giphy.gif`} alt='Chef cooking' onLoad={() => setImageLoaded(true)} />
        )}
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  )
}
export default RecipePopup
