export const searchIngredientsFromInput = (ingredients, input) => {
  if (!input.length) return [];

  const filteredIngredientsByInput = Object.entries(ingredients).filter(
    ingredient => {
      const [, ingredientData] = ingredient;
      const { name } = ingredientData;
      return name.toLowerCase().includes(input.toLowerCase());
    }
  );

  // return only the ids of the ingredients
  return filteredIngredientsByInput.map(([id]) => id);
};
