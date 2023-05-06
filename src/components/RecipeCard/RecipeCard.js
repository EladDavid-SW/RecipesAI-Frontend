import React from 'react';
import './RecipeCard.css';

const RecipeCard = ({ title, imageUrl, ingredients, instructions }) => {
  return (
    <div className="recipe-card">
      <div className="image-container" style={{ backgroundImage: `url(${imageUrl})` }}>
        <div className="overlay">
          <h2 className="title">{title}</h2>
        </div>
      </div>
      <div className="content">
        <h3>Ingredients</h3>
        <ul>
          {ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
        <h3>Instructions</h3>
        <p>{instructions}</p>
      </div>
    </div>
  );
};

export default RecipeCard;
