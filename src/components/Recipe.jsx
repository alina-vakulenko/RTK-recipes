import React from "react";

export default function Recipe({ recipe, children }) {
  const pathToImage = `/${recipe.img}`;
  return (
    <div key={recipe.id} className="recipe" tabIndex={0}>
      <span className="recipe-container">
        <h3 className="recipe-name">{recipe.name}</h3>
        <div className="image-container">
          <img src={pathToImage} alt="" className="recipe-image" />
        </div>
      </span>
      {children}
    </div>
  );
}
