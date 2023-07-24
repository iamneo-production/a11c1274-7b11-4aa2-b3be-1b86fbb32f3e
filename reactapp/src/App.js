import { ColorModeContent, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import React from 'react';
import Login from './components/Login';
import Forgotpass from './components/forgotpass';
import SignUp from './components/SignUp';
import Goalsetting from './pages/goalsetting/goalsetting';
import Workoutplancre from "./pages/workout_plan_cre/workoutplancre";
import WorkoutsPage from "./pages/workout_history/WorkoutsPage";
import Nutritionrem from "./pages/nutrition_rem/nutritionrem";
import Barchart from './pages/charts&graph/barchart';
import Linegraph from "./pages/charts&graph/linegraph";
import Piechart from "./pages/charts&graph/Piechart.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import Privateroute from "./components/Privateroute";
import About from "./components/About";
import Setpassword from "./components/Setpass";
import Land from "./components/Land";
import Profile from "./components/Profile";
import Ops from "./components/Ops";
import Swal from "sweetalert2";
import Updateuser from './components/Updateuser';
import AddGoals from './pages/goalsetting/AddGoals';
import UpdateGoals from "./pages/goalsetting/UpdateGoals";
import Addworkouts from "./pages/workout_plan_cre/Addworkouts";
import Addexercises from "./pages/workout_plan_cre/Addexercises";
import Addsets from "./pages/workout_plan_cre/Addsets";
import { DateProvider } from "./pages/workout_plan_cre/dateContext";
import { ExerciseProvider } from "./pages/workout_plan_cre/exerciseContext";
import NotFoundPage from "./pages/global/NotFoundPage";
import Admindashboard from "./components/Adminops";
import { useEffect, useState } from "react";
import Radar from "./pages/charts&graph/Radar";
import Trackexercise from "./pages/trackexr/Trackexercise";
import ViewExercises from "./pages/workout_plan_cre/ViewExercises";
import ViewWorkouts from "./pages/workout_plan_cre/ViewWorkouts";
import UpdateWorkouts from "./pages/workout_plan_cre/UpdateWorkouts";
import UpdateExercises from "./pages/workout_plan_cre/UpdateExercises";
// import ExerciseHistory from "./pages/workout_history/WorkoutsPage";
import Admindash from "./pages/dashboard/Admindash";
import Sidebar from "./pages/global/Sidebar";
import Adminops from "./components/Adminops";


import Tutorial from './pages/workout_tutorial/Tutorial';
import FullBody from './pages/workout_tutorial/FullBody';
import BellyFat from './pages/workout_tutorial/BellyFat';
import Arm from './pages/workout_tutorial/Arm';
import Leg from './pages/workout_tutorial/Leg';
import Abs from './pages/workout_tutorial/Abs';
import Chest from './pages/workout_tutorial/Chest';
import Warmup from './pages/workout_tutorial/Warmup';
import Pomodoro from './pages/workout_tutorial/Pomodoro';

import Main from './pages/calculator/Main';
import Bmi from './pages/calculator/Bmi';
import Bmr from './pages/calculator/Bmr';
import Bfp from './pages/calculator/Bfp';
import Cc from './pages/calculator/Cc';


import TakeChallengesPage from "./pages/take_challenges/TakeChallengesPage";


function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);





  const showAlert = (title, text, icon) => {
    Swal.fire({
      title: title,
      text: text,
      icon: icon,
      showCancelButton: false,
      confirmButtonColor: "#3085d6",
      confirmButtonText: "OK",
    });
  };

  return (

    <ColorModeContent.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          {/* <Sidebar isSidebar={isSidebar}/> */}
          <main className="content">
            <DateProvider>
              <ExerciseProvider>
                <Routes>
                  <Route path='/' element={<Land />} />
                  <Route path='/login' element={<Login showAlert={showAlert} />} />
                  <Route path='/signup' element={<SignUp showAlert={showAlert} />} />
                  <Route path="/about" element={<About showAlert={showAlert} />} />
                  <Route path="/forgotpass" element={<Forgotpass showAlert={showAlert} />} />
                  <Route path="/setpass" element={<Setpassword showAlert={showAlert} />} />




                  <Route path="/user" element={<Privateroute />}>
                    <Route path="admindashboard" element={<Admindash />} />
                    <Route path="dashboard" element={<Dashboard showAlert={showAlert} />} />
                    <Route path="ops" element={<Adminops showAlert={showAlert} />} />
                    <Route path="goalsetting" element={<Goalsetting showAlert={showAlert} />} />
                    <Route path="workoutsplan" element={<Workoutplancre showAlert={showAlert} />} />
                    <Route path="trackexercises" element={<Trackexercise />} />
                    <Route path="workoutshistory" element={<WorkoutsPage />} />
                    <Route path="nutritionrecommendation" element={<Nutritionrem showAlert={showAlert} />} />
                    <Route path="addworkouts" element={<Addworkouts />} />
                    <Route path="addexercises" element={<Addexercises />} />
                    <Route path="addsets" element={<Addsets />} />
                    {/* <Route path="barchart" element={<Barchart showAlert={showAlert} />} /> */}
                    <Route path="linegraph" element={<Linegraph showAlert={showAlert} />} />
                    <Route path="piechart" element={<Piechart showAlert={showAlert} />} />
                    {/* <Route path="radar" element={<Radar showAlert={showAlert} />} /> */}
                    <Route path="profile" element={<Profile showAlert={showAlert} />} />
                    {/* <Route path="ops" element={<Ops showAlert={showAlert} />} /> */}
                    <Route path="update/:id" element={<Updateuser />} />
                    <Route path="addgoals" element={<AddGoals />} />
                    <Route path="editgoals/:id" element={<UpdateGoals />} />
                    <Route path="viewexercises" element={<ViewExercises />} />
                    <Route path="viewworkouts" element={<ViewWorkouts />} />
                    <Route path="update-workout/:id" element={<UpdateWorkouts />} />
                    <Route path="update-exercise/:id" element={<UpdateExercises />} />
                    <Route path="tutorial" element={<Tutorial/>}/>
                    <Route path="tutorial/full-body" element={<FullBody/>}/>
                    <Route path="tutorial/belly-fat" element={<BellyFat/>}/>
                    <Route path="tutorial/arm-workout" element={<Arm/>}/>
                    <Route path="tutorial/leg-workout" element={<Leg/>}/>
                    <Route path="tutorial/abs-workout" element={<Abs/>}/>
                    <Route path="tutorial/chest-workout" element={<Chest/>}/>
                    <Route path="tutorial/warm-ups" element={<Warmup/>}/>

                    <Route path="calculators" element={<Main/>}/>
                    <Route path="calculators/Bmi" element={<Bmi/>}/>
                    <Route path="calculators/Bmr" element={<Bmr/>}/>
                    <Route path="calculators/Bfp" element={<Bfp/>}/>
                    <Route path="calculators/Cc" element={<Cc/>}/> 

                    <Route path="take-challenge" element={<TakeChallengesPage/>}/>
                    {/* <Route path="*" element={<NotFoundPage/>} /> */}
                  </Route>



                </Routes>
              </ExerciseProvider>
            </DateProvider>

          </main>
        </div>
      </ThemeProvider>
    </ColorModeContent.Provider>
  );
}

export default App;
