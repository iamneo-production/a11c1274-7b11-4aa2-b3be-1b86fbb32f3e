import React, { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import { Line } from 'react-chartjs-2';
import './BMICalculator.css'; 

const BMICalculator = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmiData, setBmiData] = useState([]);
  useEffect(() => {
    const storedBmiData = localStorage.getItem('bmiData');
    if (storedBmiData) {
      setBmiData(JSON.parse(storedBmiData));
    }
  }, []);

  const calculateBMI = () => {
    const weightKg = parseFloat(weight);
    const heightM = parseFloat(height) / 100;
    const bmi = weightKg / (heightM * heightM);
    const newBmiData = [...bmiData, { x: new Date().toLocaleString(), y: bmi.toFixed(2) }];
    setBmiData(newBmiData);
    localStorage.setItem('bmiData', JSON.stringify(newBmiData));
  };

  const getBmiCategory = (bmi) => {
    if (bmi < 16) {
      return "Severely Underweight";
    } else if (bmi >= 16 && bmi < 17) {
      return "Moderately Underweight";
    } else if (bmi >= 17 && bmi < 18.5) {
      return "Mildly Underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
      return "Normal";
    } else if (bmi >= 25 && bmi < 29.9) {
      return "Overweight";
    } else if (bmi >= 30 && bmi < 34.9) {
      return "Obese (Class 1)";
    } else if (bmi >= 35 && bmi < 39.9) {
      return "Obese (Class 2)";
    } else {
      return "Give proper input fields";
    }
  };

  const bmiCategory = getBmiCategory(parseFloat(bmiData[bmiData.length - 1]?.y));

  const navigate = useNavigate();

  const bmiChartData = {
    datasets: [
      {
        label: 'BMI',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: bmiData,
      },
    ],
  };

  return (
    <div className='main'>
      <div>
      <button className='back-next' onClick={() => navigate("/user/calculators")}>Back</button>
    </div>
    <div className="bmi-calculator-container">
    
      <div>
      <h1>BMI Calculator</h1>
      <div>
        <label>Weight (kg):</label>
      
        <  input type="number"  placeholder="Enter your weight" value={weight} onChange={(e) => setWeight(e.target.value)}  />
      
      </div>
      <div>
        <label>Height (cm):</label>
        <input type="number" placeholder="Enter your height" value={height} onChange={(e) => setHeight(e.target.value)} />
      </div>
      <button className="calculate-button-1" onClick={calculateBMI}>Calculate BMI</button>

      {bmiData.length > 0 && (
          <div className="result-container">
            <p>
              <b>Your BMI: <span>{parseFloat(bmiData[bmiData.length - 1]?.y)}</span></b>
            </p>
            <p>
              <b>Category: <span>{bmiCategory}</span></b>
            </p>
          </div>
        )}
   
    </div>
      <div className="chart-container">
        <Line data={bmiChartData} />
        </div>

       
      </div>
      
</div>



  );
};

export default BMICalculator;
