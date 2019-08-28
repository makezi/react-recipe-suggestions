export const searchIngredientsFromInput = (ingredients, input) => {
  const filteredIngredientsByInput = Object.entries(ingredients).filter(
    ingredient => {
      const [, ingredientData] = ingredient;
      const { name } = ingredientData;
      return name.toLowerCase().includes(input);
    }
  );

  // return only the ids of the ingredients
  return filteredIngredientsByInput.map(([id]) => id);
};
