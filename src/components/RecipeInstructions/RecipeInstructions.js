import React from 'react';

import {
  RecipeInstructionsContainer,
  InstructionsListContainer
} from './RecipeInstructions.styles';

const RecipeInstructions = ({ instructions }) => (
  <RecipeInstructionsContainer>
    <h3>Instructions</h3>
    <InstructionsListContainer>
      {instructions.map((instruction, index) => (
        <li key={index}>{instruction}</li>
      ))}
    </InstructionsListContainer>
  </RecipeInstructionsContainer>
);

export default RecipeInstructions;
