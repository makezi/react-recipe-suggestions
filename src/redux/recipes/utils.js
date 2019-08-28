export const searchRecipesWithIngredients = (recipes, ingredients) => {
  if (!ingredients.length) return recipes;

  // const test = ingredients.reduce(
  //   (acum, ingredient) =>
  //     Object.values(recipes).filter(recipe => {
  //       console.log(recipe.ingredients);
  //       return recipe.ingredients.find(
  //         ({ ingredientId }) => ingredientId === ingredient.ingredientId
  //       );
  //     }),
  //   {}
  // );

  return [];
};
