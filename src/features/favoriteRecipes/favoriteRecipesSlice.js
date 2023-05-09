import { createSlice } from "@reduxjs/toolkit";

export const favoriteRecipesSlice = createSlice({
  name: "favoriteRecipes",
  initialState: [],
  reducers: {
    addFavoriteRecipe: (state, action) => {
      const isInFav = state.some((recipe) => recipe.id === action.payload.id);
      if (!isInFav) {
        state.push(action.payload);
      }
    },
    removeFavoriteRecipe: (state, action) => {
      return state.filter((recipe) => recipe.name !== action.payload.name);
    },
  },
});

export const { addFavoriteRecipe, removeFavoriteRecipe } =
  favoriteRecipesSlice.actions;

export const selectFavoriteRecipes = (state) => state.favoriteRecipes;

export default favoriteRecipesSlice.reducer;
