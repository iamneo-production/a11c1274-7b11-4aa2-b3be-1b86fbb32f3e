import React, { useState,useEffect } from 'react' 
import Nutable from './Nutable';
import Sidebar from '../global/Sidebar';
const Nutritionrem = () => {
    
    
    
const [data, setData] = useState(null);
const [tables, setTables] = useState([]);
const [mealCount, setMealCount] = useState(1);
const [clickCount, setClickCount] = useState(0);

const generateData = async () => {

  if (clickCount >= 3) {
      alert('You have reached the maximum limit of clicks.');
      return;
    }

  try {
    const response = await fetch("https://api.spoonacular.com/mealplanner/generate?apiKey=f1959661f9fb468a84f96745c601a448&timeFrame=night&targetCalories=100");
    const jsonData = await response.json();


          // Generate a new ID for each meal
          const mealsWithId = jsonData.meals.map((meal, index) => ({
              ...meal,
              id: mealCount + index,
            }));
      
            const newTable = <Nutable key={tables.length} data={{ ...jsonData, meals: mealsWithId }} />;
   
    setTables([...tables, newTable]);
    console.log(jsonData);
    setData(jsonData);
    setClickCount(clickCount + 1);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

return (

  <div className="app">
     <Sidebar/>
     <main className="content">
     <div>
    <h1>Meal Data</h1>
    {tables.length > 0 ? (
      tables.map((table) => table)
    ) : (
      <p>No data available</p>
    )}
    <br></br>
    <center>{clickCount < 3 && (
      
      <button type="button" onClick={generateData}>Generate More!</button>
    )}</center>
    
  </div>
     </main>
  </div>

  
);
};


export default Nutritionrem
