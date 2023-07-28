import React from 'react'
import {tokens} from "../../theme";
import { useTheme } from "@mui/material";
import { LineData }from "../../data/mockData";
import { Box} from "@mui/material";
import Header from "../../components/Header";
import Sidebar from '../global/Sidebar';
import { useState, useEffect } from 'react';
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

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);


const Linegraph = () => {

  const [lineData, setLineData] = useState([]);


  useEffect(() => {
    // get user id
    const dataString = localStorage.getItem('data');
    const data = JSON.parse(dataString);
    const userdto = data.userdto;

    LineData(userdto.id).then((res) => {
      setLineData(res);
    });
    
  }, []);

  console.log("main data",lineData);


  console.log(lineData);

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [Completed, setCompleted] = useState([]);
  const [notCompleted, setnotCompleted] = useState([]);
  const [Total, setTotal] = useState([]);

  useEffect(() => {
    // get user id
    const dataString = localStorage.getItem('data');
    const data = JSON.parse(dataString);
    const userdto = data.userdto;
    const id = userdto.id;


    getcompletedarray(id).then((data) => {
      setCompleted(data);

    console.log(Completed);
    }
    );
    getnotcompletedarray(id).then((data) => {
      setnotCompleted(data);
    }
    );
    getotalarray(id).then((data) => {
      setTotal(data);
      console.log(data);
    }
    );
  }, []);

  return (
    <div className="app">
      <Sidebar/>
     <main className="content">
     <Box m="20px">
    <Header title="Line Graph" subtitle="overview of workouts " />
    <Box height="75vh">
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
    </Box>
      </Box>
        </main>
        </div>

    
  )
}

export default Linegraph