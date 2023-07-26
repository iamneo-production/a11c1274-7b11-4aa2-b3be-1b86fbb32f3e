import React, { useState } from 'react';
import './BfpCalculator.css'; 
import {useNavigate} from 'react-router-dom';

const BodyFatPercentagePage = () => {
  const [weight, setWeight] = useState('');
  const [waist, setWaist] = useState('');
  const [gender, setGender] = useState('male'); 
  const [bfpResult, setBfpResult] = useState(null);

  const calculateBFP = () => {
    const weightKg = parseFloat(weight);
    const waistCm = parseFloat(waist);
    let bodyFatPercentage = 0;

    // Calculate body fat percentage using YMCA formula
    if (gender === 'male') {
      bodyFatPercentage = 0.29288 * weightKg + 0.00255 * waistCm - 32.020;
    } else {
      bodyFatPercentage = 0.29669 * weightKg + 0.00332 * waistCm - 29.533;
    }

    setBfpResult(bodyFatPercentage.toFixed(2));
  };

  const navigate = useNavigate();

 
  return (
    <div className='main'>
    <div className="bfp-calculator-container">
      <h1>Body Fat Percentage (BFP) Calculator</h1>
      <div className="input-container">
        <label className="input-label">Weight (kg):</label>
        <input type="number" placeholder="Enter your weight" value={weight} onChange={(e) => setWeight(e.target.value)} />
      </div>
      <div className="input-container">
        <label className="input-label">Waist Circumference (cm):</label>
        <input type="number" placeholder="Enter your waist circumference" value={waist} onChange={(e) => setWaist(e.target.value)} />
      </div>
      <div className="input-container">
        <label className="input-label">Gender:</label>
        <select value={gender} onChange={(e) => setGender(e.target.value)}>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>
      <button className="calculate-button-3" onClick={calculateBFP}>
        Calculate BFP
      </button>

      {bfpResult !== null && (
        <div className="bfp-result">
          <h3>Your Body Fat Percentage (BFP):</h3>
          <p>{bfpResult}%</p>
        </div>
      )}
      <div className='button-container'>
      <button className='back-2' onClick={() => navigate("/user/calculators")}>Back</button>
    </div>

    </div>
     </div> 
    
  );
};

export default BodyFatPercentagePage;
