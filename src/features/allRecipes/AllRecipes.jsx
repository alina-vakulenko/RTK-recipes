import { useSelector, useDispatch } from "react-redux";

import { addFavoriteRecipe } from "../favoriteRecipes/favoriteRecipesSlice.js";
import {
  selectAllRecipes,
  selectIsLoading,
  selectHasError,
} from "./allRecipesSlice.js";
import { selectSearchTerm } from "../searchTerm/searchTermSlice.js";

import FavoriteButton from "../../components/FavoriteButton";
import Recipe from "../../components/Recipe";
import Spinner from "../../components/Spinner";

import "../../styles/AllRecipes.css";

export const AllRecipes = () => {
  const dispatch = useDispatch();
  const allRecipes = useSelector(selectAllRecipes);
  const isLoading = useSelector(selectIsLoading);
  const hasError = useSelector(selectHasError);
  const searchTerm = useSelector(selectSearchTerm);

  const addToFavorites = (recipe) => {
    dispatch(addFavoriteRecipe(recipe));
  };

  const filteredAllRecipes = allRecipes?.filter((recipe) =>
    recipe.name.toLowerCase().includes(searchTerm?.toLowerCase())
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (hasError) {
    return <h1>Error occured while loading recipes</h1>;
  }

  return (
    <div className="recipes-container">
      {filteredAllRecipes.map((recipe) => (
        <Recipe recipe={recipe} key={recipe.id}>
          <FavoriteButton
            onClickHandler={() => addToFavorites(recipe)}
            icon={<i className="fa-solid fa-heart heart-icon"></i>}
          >
            Add to Favorites
          </FavoriteButton>
        </Recipe>
      ))}
    </div>
  );
};

export default AllRecipes;
