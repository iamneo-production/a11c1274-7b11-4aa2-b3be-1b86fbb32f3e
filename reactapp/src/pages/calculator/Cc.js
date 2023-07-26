// DailyCaloriesPage.js
import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import './CcCalculator.css'; 

const DailyCaloriesPage = () => {
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [gender, setGender] = useState('male'); 
  const [activityLevel, setActivityLevel] = useState('sedentary'); 
  const [caloriesResult, setCaloriesResult] = useState(null);

  const navigate = useNavigate();

  const calculateCalories = () => {
    const ageYears = parseFloat(age);
    const weightKg = parseFloat(weight);
    const heightCm = parseFloat(height);
    let bmr = 0;

    // Calculate Basal Metabolic Rate (BMR) based on Mifflin-St Jeor Equation
    if (gender === 'male') {
      bmr = 10 * weightKg + 6.25 * heightCm - 5 * ageYears + 5;
    } else {
      bmr = 10 * weightKg + 6.25 * heightCm - 5 * ageYears - 161;
    }
    let activityFactor = 1;
    if (activityLevel === 'sedentary') {
      activityFactor = 1.2;
    } else if (activityLevel === 'lightlyActive') {
      activityFactor = 1.375;
    } else if (activityLevel === 'moderatelyActive') {
      activityFactor = 1.55;
    } else if (activityLevel === 'veryActive') {
      activityFactor = 1.725;
    } else if (activityLevel === 'extraActive') {
      activityFactor = 1.9;
    }

    const dailyCalories = bmr * activityFactor;

   

    setCaloriesResult(dailyCalories.toFixed(2));
  };

  return (
    <div className='main'>
    <div className="daily-calories-calculator-container">
    
      <h1>Daily Calories Calculator</h1>
      <div>
        <label>Age (years):</label>
        <input type="number" placeholder="Enter your age" value={age} onChange={(e) => setAge(e.target.value)} />
      </div>
      <div>
        <label>Weight (kg):</label>
        <input type="number" placeholder="Enter your weight" value={weight} onChange={(e) => setWeight(e.target.value)} />
      </div>
      <div>
        <label>Height (cm):</label>
        <input type="number" placeholder="Enter your height" value={height} onChange={(e) => setHeight(e.target.value)} />
      </div>
      <div>
        <label>Gender:</label>
        <select value={gender} onChange={(e) => setGender(e.target.value)}>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>
      <div>
        <label>Activity Level:</label>
        <select value={activityLevel} onChange={(e) => setActivityLevel(e.target.value)}>
          <option value="sedentary">Sedentary (little or no exercise)</option>
          <option value="lightlyActive">Lightly Active (light exercise/sports 1-3 days/week)</option>
          <option value="moderatelyActive">Moderately Active (moderate exercise/sports 3-5 days/week)</option>
          <option value="veryActive">Very Active (hard exercise/sports 6-7 days/week)</option>
          <option value="extraActive">Extra Active (very hard exercise/sports and a physical job)</option>
        </select>
      </div>
      <button className="calculate-button-4" onClick={calculateCalories}>
        Calculate Daily Calories
      </button>

      {caloriesResult !== null && (
        <div className="calories-result">
          <h3>Your Recommended Daily Calories:</h3>
          <p>{caloriesResult} calories per day</p>
        </div>
      )}
      <div className='button-container'>
      <button className='back-3' onClick={() => navigate("/user/calculators")}>Back</button>
      </div>

    </div>
     </div>
  );
};

export default DailyCaloriesPage;
