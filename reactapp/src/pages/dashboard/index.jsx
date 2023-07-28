import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography, useTheme} from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import Sidebar from '../global/Sidebar';
import '../../../src/index.css';
// import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
// import SportsGymnasticsIcon from '@mui/icons-material/SportsGymnastics';
// import SportsMartialArtsIcon from '@mui/icons-material/SportsMartialArts';
// import StarPurple500Icon from '@mui/icons-material/StarPurple500';
import StatBox from './StatBox';
import {getnotcompletedexercisesbyuserid, getnotcompletedgoalsbyuserid, getnotcompletedsetsbyuserid, getnotcompletedworkoutsbyuserid, getotalworkoutsforuserid, gettotalexercisesforuserid, gettotalgoalsforuserid, gettotalsetsforuserid} from "../../data/mockData";
import Linecode from './Linecode';
import { useEffect } from 'react';
import { mockTransactions } from '../../data/mockData';;


const Dashboard = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [MockTransactionsdata, setMockTransactionsdata] = React.useState([]);
  const [totalWorkouts, setTotalWorkouts] = React.useState(0);
  const [notCompletedWorkouts, setNotCompletedWorkouts] = React.useState(0);
  const [totalExercises, setTotalExercises] = React.useState(0);
  const [notCompletedExercises, setNotCompletedExercises] = React.useState(0);
  const [totalSets, setTotalSets] = React.useState(0);
  const [notCompletedSets, setNotCompletedSets] = React.useState(0);
  const [totalGoals, setTotalGoals] = React.useState(0);
  const [notCompletedGoals, setNotCompletedGoals] = React.useState(0);



  





  useEffect(() => {
    const dataString = localStorage.getItem('data');
    const data = JSON.parse(dataString);
    const userdto = data.userdto;

    mockTransactions(userdto.id).then((data) => {
      setMockTransactionsdata(data);

    });

    // get total workouts count for user id
    getotalworkoutsforuserid(userdto.id).then((data) => {
      setTotalWorkouts(data);
    });


    // get not completed workouts count by user id 
    getnotcompletedworkoutsbyuserid(userdto.id).then((data) => {
      setNotCompletedWorkouts(data);
    });


    // get total exercises count for user id
    gettotalexercisesforuserid(userdto.id).then((data) => {
      setTotalExercises(data);
    });


    // get not completed exercises count by user id
    getnotcompletedexercisesbyuserid(userdto.id).then((data) => {
      setNotCompletedExercises(data);
    });


    // get sets count by user id
    gettotalsetsforuserid(userdto.id).then((data) => {
      setTotalSets(data);
    });


    // get not completed sets count by user id
    getnotcompletedsetsbyuserid(userdto.id).then((data) => {
      setNotCompletedSets(data);
    });


    // get goals count by user id
    gettotalgoalsforuserid(userdto.id).then((data) => {
      setTotalGoals(data);
    });


    // get not completed goals count by user id
    getnotcompletedgoalsbyuserid(userdto.id).then((data) => {
      setNotCompletedGoals(data);
    }
    );


  }, []);


  useEffect(() => {
    // Push a new state to the history stack when the component mounts
    window.history.pushState(null, document.title, window.location.href);
    
    // Add a popstate event listener to handle the back button
    const handlePopstate = () => {
      // Push the new state again to prevent the user from navigating back
      window.history.pushState(null, document.title, window.location.href);
    };

    window.addEventListener('popstate', handlePopstate);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('popstate', handlePopstate);
    };
  }, []);

  
  return (
    <div className="app">
      <main >
          <Sidebar/>
      </main>
        <Box m="20px">
          <Box display="flex" justifyContent="space-between" alignItems="left">
            <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
          </Box>
          {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        <Box
          gridColumn="span 12"
          display="flex"
          backgroundColor={colors.primary[400]}
        >
        <Box
            mt="25px"
            p="0 30px"
            display="flex "
            justifyContent="space-between"
            alignItems="center"
            gap="10px"
          > 
          
            <Typography
            
            variant="h4"
            fontWeight="bold"
            sx={{ color: colors.grey[100] }}
          >
            They say discipline and respect are the key factors, but 
            patience is a virtue that is absolutely essential!
          </Typography>
          <Box  display="flex" justifyContent="center" alignItems="center">
                <img
                  alt="profile-user"
                  width="100%"
                  height="80%"
                  src={`../../assets/fitness-pictures.png`}
                  style={{ cursor: "pointer", borderRadius: "10%" }}
                />
              </Box>
          </Box>
          
          
        </Box>
        
        {/* ROW 1 */}
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="Workouts"
            subtitle="pending workouts- "
            progress={(notCompletedWorkouts / totalWorkouts)*0.1} // (not done/ total)
            increase={notCompletedWorkouts} //not done workouts 
            // icon={
            //   <FitnessCenterIcon
            //     sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
            //   />
            // }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="Exercises"
            subtitle="Pending exercises -"
            progress={(notCompletedExercises / totalExercises)*0.1}
            increase={notCompletedExercises}
            // icon={
            //   <SportsGymnasticsIcon
            //     sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
            //   />
            // }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="Sets"
            subtitle="Ppending sets - "
            progress={(notCompletedSets / totalSets)*0.1}
            increase={notCompletedSets}
            // icon={
            //   <SportsMartialArtsIcon
            //     sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
            //   />
            // }
          />
        </Box>
        <Box
          gridColumn="span 3"
         
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="Goals"
            subtitle="pending goals -"
            progress={(notCompletedGoals / totalGoals)*0.1}
            increase={notCompletedGoals}
            // icon={
            //   < StarPurple500Icon
            //     sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
            //   />
            // }
          />
        </Box>
            {/* ROW 2 */}
        <Box
          gridColumn="span 8"
          gridRow="span 3"
          backgroundColor={colors.primary[400]}
        >
        <Box
            mt="25px"
            p="0 30px"
            display="flex "
            justifyContent="space-between"
            alignItems="center"
          >
            
            <Box>
              
            </Box>
          </Box>
          <Box >
            <Linecode isDashboard={true} />
           
          </Box>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 3"
          backgroundColor={colors.primary[400]}
          overflow="auto"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.primary[500]}`}
            colors={colors.grey[100]}
            p="15px"
          >
            <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
              Pending workouts
            </Typography>
          </Box>
          {MockTransactionsdata.map((transaction, i) => (
            <Box
              key={`${transaction.txId}-${i}`}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`4px solid ${colors.primary[500]}`}
              p="15px"
            >
              <Box>
                <Typography
                  color={colors.greenAccent[500]}
                  variant="h5"
                  fontWeight="600"
                >
                  {transaction.txId}
                </Typography>
                
              </Box>
              <Box color={colors.grey[100]}>{transaction.date}</Box>
              
            </Box>
          ))}
        </Box>


        </Box>



         </Box>
       
    </div> 
  );
};

export default Dashboard;
