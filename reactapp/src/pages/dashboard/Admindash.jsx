import React from 'react'
import Sidebar from '../global/Sidebar'
import './../../index.css';
import { Box, useTheme} from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/Header";
// import PersonIcon from '@mui/icons-material/Person';
// import AccessTimeIcon from '@mui/icons-material/AccessTime';
import StatBox from './StatBox';
import APieChart from './APieChart';
import { useEffect } from 'react';
import {getStatusDetails} from '../../services/user-service';

const Admindash = () => {
    const [totalusers, setTotalusers] = React.useState('0');
    const [avgtimeperiod, setAvgtimeperiod] = React.useState('0');

    
    useEffect(()=>{
        getStatusDetails()
        .then((data)=>{
            console.log("data graph",data);
            setAvgtimeperiod(data.avgWorkoutDuration);
            setTotalusers(data.totalUsers);
        })

    },[])


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


    const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
          <div className='app'>
            <Sidebar/>
            <main className='content'>
            <Box m="20px">
                <Box display="flex" justifyContent="space-between" alignItems="left">
                     <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
                 </Box>
                 <Box
                         display="grid"
                         gridTemplateColumns="repeat(12, 1fr)"
                         gridAutoRows="140px"
                         gap="20px">
                       <Box
                            gridColumn="span 6"
                            backgroundColor={colors.primary[400]}
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            >
                                    <StatBox
                                    title="Users"
                                    subtitle="Total number of users- "
                                    increase={totalusers} //not done workouts 
                                    // icon={
                                    // <PersonIcon
                                    //     sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                                    // />
                                    // }
                                />
             
                            </Box>  
                            <Box
                            gridColumn="span 6"
                            backgroundColor={colors.primary[400]}
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            >
                                    <StatBox
                                    title="Average time period"
                                    subtitle="average time spend on workouts- "
                                    increase={avgtimeperiod} //not done workouts 
                                    // icon={
                                    // <AccessTimeIcon
                                    //     sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                                    // />
                                    // }
                                />
             
                            </Box>

                       </Box> 
                       <APieChart/>        
                                      
                    </Box>
            </main>
        </div>
        
      
    
  )
}

export default Admindash