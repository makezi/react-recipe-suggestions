import React from 'react';
import {
  FaThermometerHalf,
  FaUserClock,
  FaClock,
  FaUserFriends
} from 'react-icons/fa';

import {
  RecipeStatsContainer,
  StatContainer,
  StatIcon,
  StatLabel
} from './RecipeStats.styles';

const RecipeStats = ({ recipe }) => {
  const { difficulty, prepTime, cookTime, makes } = recipe;

  const prepTimeHours = Math.floor(prepTime / 60);
  const prepTimeMinutes = prepTime % 60;

  const cookTimeHours = Math.floor(cookTime / 60);
  const cookTimeMinutes = cookTime % 60;

  return (
    <RecipeStatsContainer>
      <StatContainer>
        <StatIcon>
          <FaThermometerHalf></FaThermometerHalf>
        </StatIcon>
        <StatLabel>Difficulty</StatLabel>
        {difficulty}
      </StatContainer>

      <StatContainer>
        <StatIcon>
          <FaUserClock></FaUserClock>
        </StatIcon>
        <StatLabel>Prep Time</StatLabel>
        {prepTimeHours ? `${prepTimeHours} hour` : null} {prepTimeMinutes}mins
      </StatContainer>

      <StatContainer>
        <StatIcon>
          <FaClock></FaClock>
        </StatIcon>
        <StatLabel>Cook Time</StatLabel>
        {cookTimeHours ? `${cookTimeHours} hour` : null} {cookTimeMinutes}mins
      </StatContainer>

      <StatContainer>
        <StatIcon>
          <FaUserFriends></FaUserFriends>
        </StatIcon>
        <StatLabel>Makes</StatLabel>
        {makes} serves
      </StatContainer>
    </RecipeStatsContainer>
  );
};

export default RecipeStats;
