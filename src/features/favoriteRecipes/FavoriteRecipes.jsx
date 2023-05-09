import { useSelector, useDispatch } from "react-redux";

import {
  selectFavoriteRecipes,
  removeFavoriteRecipe,
} from "./favoriteRecipesSlice.js";
import { selectSearchTerm } from "../searchTerm/searchTermSlice.js";

import FavoriteButton from "../../components/FavoriteButton";
import Recipe from "../../components/Recipe";

import "../../styles/AllRecipes.css";

const FavoriteRecipes = () => {
  const dispatch = useDispatch();
  const favoriteRecipes = useSelector(selectFavoriteRecipes);
  const searchTerm = useSelector(selectSearchTerm);

  const removeFromFavorites = (recipe) => {
    dispatch(removeFavoriteRecipe(recipe));
  };

  const filteredFavoriteRecipes = favoriteRecipes?.filter((recipe) =>
    recipe.name.toLowerCase().includes(searchTerm?.toLowerCase())
  );

  return (
    <div className="recipes-container">
      {filteredFavoriteRecipes.map((recipe) => (
        <Recipe recipe={recipe} key={recipe.id}>
          <FavoriteButton
            onClickHandler={() => removeFromFavorites(recipe)}
            icon={<i className="fa-solid fa-heart-crack heart-icon"></i>}
          >
            Remove Favorite
          </FavoriteButton>
        </Recipe>
      ))}
    </div>
  );
};

export default FavoriteRecipes;
