
import React from 'react'

import { Box} from "@mui/material";

import { useState, useEffect } from 'react';
import './../../index.css';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { getcompletedarray, getnotcompletedarray, getotalarray } from '../../services/user-service';
import { useNavigate } from 'react-router-dom';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);


const Linecode = () => {
  const [Completed, setCompleted] = useState([]);
  const [notCompleted, setnotCompleted] = useState([]);
  const [Total, setTotal] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    // get user id
    const dataString = localStorage.getItem('data');
    const data = JSON.parse(dataString);
    const userdto = data.userdto;
    const id = userdto.id;


    getcompletedarray(id).then((data) => {
      setCompleted(data);

    console.log("Completed",data);
    }
    );
    getnotcompletedarray(id).then((data) => {
      setnotCompleted(data);
      console.log('Not completed array',data);
    }
    );
    getotalarray(id).then((data) => {
      setTotal(data);
      console.log("data",data);
    }
    );
  }, []);

  const handleClickOnGraph = ()=>{
      navigate("/user/linegraph");
  }



  return (
    <div className="app">
    <main className="content">
    <Box m="10px">
    
    <Box>
    <div className='element' onClick={handleClickOnGraph}>
      <Line 

        data ={ {
      labels:['Workouts','Exercises','Goals'],
      datasets: [
        {
          label: 'Completed',
          data: Completed,
          borderColor: 'rgb(255, 99, 132)',
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
          tension:0.5
        },
        {
          label: 'Not Completed',
          data: notCompleted,
          borderColor: 'rgb(53, 162, 235)',
          backgroundColor: 'rgba(53, 162, 235, 0.5)',
          tension:0.5
        },
        {
          label: 'Total ',
          data:Total,
          borderColor: 'rgba(239, 233, 105, 0.8)',
          backgroundColor: 'rgba(239, 233, 105, 0.8)',
          tension:0.5
        },
      ],
    }}
     
    options={
      {
        responsive: true,
        plugins: {
          legend: {
            display:true,
            position: 'bottom' ,
          }
        }, 
      }
    }
      />
      </div>

</Box>
  </Box>
  </main>
  </div>
  )
}

export default Linecode

