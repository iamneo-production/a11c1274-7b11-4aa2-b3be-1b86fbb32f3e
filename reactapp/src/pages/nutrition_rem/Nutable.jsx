import React from 'react';
import "./Nrem.css";
const Nutable = ({ data }) => {
  return (
    <div >
      <h2>Meals</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Ready in Minutes</th>
            
            <th>Source URL</th>
          </tr>
        </thead>
        <tbody>
          {data.meals.map((meal) => (
            <tr key={meal.id}>
              <td>{meal.id}</td>
              <td>{meal.title}</td>
              <td>{meal.readyInMinutes}</td>
           
              <td>
                <a href={meal.sourceUrl} target="_blank" rel="noopener noreferrer">
                  {meal.sourceUrl}
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Nutrients</h2>
      <table>
        <thead>
          <tr>
            <th>Calories</th>
            <th>Protein</th>
            <th>Fat</th>
            <th>Carbohydrates</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{data.nutrients.calories}</td>
            <td>{data.nutrients.protein}</td>
            <td>{data.nutrients.fat}</td>
            <td>{data.nutrients.carbohydrates}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Nutable;