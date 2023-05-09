import { configureStore } from "@reduxjs/toolkit";

import allRecipesReducer from "../features/allRecipes/allRecipesSlice";
import favoriteRecipesReducer from "../features/favoriteRecipes/favoriteRecipesSlice";
import searchTermReducer from "../features/searchTerm/searchTermSlice";

export default configureStore({
  reducer: {
    allRecipes: allRecipesReducer,
    favoriteRecipes: favoriteRecipesReducer,
    searchTerm: searchTermReducer,
  },
});
