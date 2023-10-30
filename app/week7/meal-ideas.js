// meal-ideas.js
import React, { useState, useEffect } from 'react';

function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  function fetchMealIdeas(ingredient) {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`)
      .then((response) => response.json())
      .then((data) => setMeals(data.meals))
      .catch((error) => console.error(error));
  }

  function loadMealIdeas() {
    fetchMealIdeas(ingredient);
  }

  useEffect(() => {
    loadMealIdeas();
  }, [ingredient]);

  return (
    <div>
      <h2>Meal Ideas</h2>
      <ul>
        {meals.map((meal) => (
          <li key={meal.idMeal}>{meal.strMeal}</li>
        ))}
      </ul>
    </div>
  );
}

export default MealIdeas;
