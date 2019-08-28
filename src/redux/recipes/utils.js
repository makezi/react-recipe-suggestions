export const searchRecipesWithSelectedIngredients = (recipes, ingredients) => {
  if (!ingredients.length) return recipes;

  const recipesWithSelectedIngredient = Object.values(recipes)
    .filter(recipe => {
      // Obtain only the ingredients' ids from the recipe
      const recipeIngredientIds = recipe.ingredients.reduce(
        (ingredientIds, ingredient) => {
          return [...ingredientIds, ingredient.ingredientId];
        },
        []
      );

      // True if any ingredient exists in the recipes' ingredients
      return ingredients.some(ingredient =>
        recipeIngredientIds.includes(ingredient.ingredientId)
      );
    })
    .map(recipe => recipe.recipeId);

  return recipesWithSelectedIngredient;
};
