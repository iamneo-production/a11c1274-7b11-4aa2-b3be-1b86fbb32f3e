import React, { useState } from 'react';
import './BmrCalculator.css'; 
import {useNavigate} from 'react-router-dom';

const BmrPage = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('male'); 
  const [bmrResult, setBmrResult] = useState(null);

  const calculateBMR = () => {
    const weightKg = parseFloat(weight);
    const heightCm = parseFloat(height);
    const ageYears = parseFloat(age);
    let bmr = 0;

    if (gender === 'male') {
      bmr = 88.362 + 13.397 * weightKg + 4.799 * heightCm - 5.677 * ageYears;
    } else {
      bmr = 447.593 + 9.247 * weightKg + 3.098 * heightCm - 4.330 * ageYears;
    }

    setBmrResult(bmr.toFixed(2));
  };

  const navigate = useNavigate();

  return (
    <div className='main'>
    <div className="bmr-calculator-container">
      <h1>BMR Calculator</h1>
      <div>
        <label>Weight (kg):</label>
        <input type="number" placeholder="Enter your weight" value={weight} onChange={(e) => setWeight(e.target.value)} />
      </div>
      <div>
        <label>Height (cm):</label>
        <input type="number" placeholder="Enter your height" value={height} onChange={(e) => setHeight(e.target.value)} />
      </div>
      <div>
        <label>Age (years):</label>
        <input type="number" placeholder="Enter your age" value={age} onChange={(e) => setAge(e.target.value)} />
      </div>
      <div className='gender'>
        <label>Gender:</label>
        <select value={gender} onChange={(e) => setGender(e.target.value)}>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>
      <button className="calculate-button-2" onClick={calculateBMR}>
        Calculate BMR
      </button>

      {bmrResult !== null && (
        <div className="bmr-result">
          <h3>Your BMR:</h3>
          <p>{bmrResult} Calories/day</p>
        </div>
      )}

      <div className='button-container'>
      <button className='back-1' onClick={() => navigate("/user/calculators")}>Back</button>
    </div>
    </div>
     </div>
  );
};

export default BmrPage;
