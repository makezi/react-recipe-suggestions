export const searchRecipesWithSelectedIngredients = (recipes, ingredients) => {
  if (!ingredients.length) return recipes;

  const recipesWithSelectedIngredients = Object.values(recipes)
    .filter(recipe => {
      const recipeIngredients = recipe.ingredients;
      let recipeHasIngredients = false;

      ingredients.forEach(ingredient => {
        recipeHasIngredients = recipeIngredients.find(
          recipeIngredient =>
            recipeIngredient.ingredientId === ingredient.ingredientId
        );
      });

      return recipeHasIngredients;
    })
    .map(recipe => recipe.recipeId);

  return recipesWithSelectedIngredients;
};
