import React from "react";
import Recipe from "../../components/Recipe";
import FavoriteButton from "../../components/FavoriteButton";
import "../../styles/AllRecipes.css";

export const AllRecipes = (props) => {
  const allRecipes = props.allRecipes;

  return (
    <div className="recipes-container">
      {allRecipes.map((recipe) => (
        <Recipe recipe={recipe} key={recipe.id}>
          <FavoriteButton></FavoriteButton>
        </Recipe>
      ))}
    </div>
  );
};
