import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// import CloseIcon from '@mui/icons-material/Close';
// import ArrowBackIcon from '@mui/icons-material/ArrowBack';
// import TimerIcon from '@mui/icons-material/Timer';
// import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
// import TimesOneMobiledataIcon from '@mui/icons-material/TimesOneMobiledata';
import Swal from 'sweetalert2';
import { postSet } from '../../services/user-service';
import { getEidonWid } from '../../services/user-service';
import { getWorkoutIdbasedOnUserId } from '../../services/user-service';
import {getWorkoutNamesbasedonUserId} from '../../services/user-service';
import {getExercisenamebasedonWid} from '../../services/user-service';
import './addsets.css';
import './AddWorkouts.css';
import '../../index.css';
import '../../components/css/signUp.css';

const Addsets = () => {

  const navigate = useNavigate();
  const [selectedExercise, setSelectedExercise] = useState('');
  const [setsReps, setSetsReps] = useState('');
  const [setsWeight, setSetsWeight] = useState('');
  const [setsDuration, setSetsDuration] = useState('');
  const [setsList, setSetsList] = useState([]);
  const [wid, setWid] = useState([]);
  const [selectedWorkoutDate, setSelectedWorkoutDate] = useState('');
  const [dependentOptions, setDependentOptions] = useState([]);
  const [wdate, setWdate] = useState([]);
  const [ename, setEname] = useState([]);
  

  const handleExerciseChange = (e) => {
    setSelectedExercise(e.target.value);
  };
  useEffect(() => {
    const dataString = localStorage.getItem('data');
    const data = JSON.parse(dataString);
    const userdto = data.userdto;
    getWorkoutIdbasedOnUserId(userdto.id).then((resp) => { setWid(resp); })
    getWorkoutNamesbasedonUserId(userdto.id).then((resp) => { setWdate(resp); })
  }, []);


  const handleFirstDropdownChange = (e) => {
    const sol = e.target.value;
    setSelectedWorkoutDate(sol)

    getEidonWid(sol).then((resp) => { setDependentOptions(resp); });
    getExercisenamebasedonWid(sol).then((resp) => { setEname(resp); });
    console.log(dependentOptions);
  }

  const handleAddSets = () => {
    if (setsReps && setsWeight && selectedExercise) {
      const newSets = {
        reps: setsReps,
        weight: setsWeight,
        duration: setsDuration,
        exerciseName: selectedExercise
      };

      setSetsList([...setsList, newSets]);

      console.log(newSets);

      // pass exercise id 
      postSet(selectedExercise, newSets)
        .then((resp) => {
          Swal.fire({
            icon: "success",
            title: "Set Added Successfully",
            text: "Set is added successfully!",
            showConfirmButton: false,
            timer: 1500,
          })
          navigate("/user/addsets");
          setSetsReps('');
          setSetsWeight('');
          setSetsDuration('');
        }
        )
        .catch((err) => {
          console.log(err);
          console.log(newSets)
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
            showConfirmButton: false,
            timer: 1500,
          });
        }
        );
      setSetsReps('');
      setSetsWeight('');
      setSetsDuration('');
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Fields are Required',
        text: 'Please provide data for all required fields.',
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <div className="sets">
      <div className="sets-container">
        <div className="sets-section">
        <div className='heading-back-close'>
            <div onClick={() => navigate("/user/addexercises")}>
               🔙
            </div>
            <div className="workout-section-title">
              <h2>Add Sets</h2>
            </div>
            <div onClick={() => navigate("/user/workoutsplan")}>
              ❌  
            </div>
          </div>

          <div className="sets-form-group">
            <div className="sets-input-container">
              <select
                className="input-icon"
                value={selectedWorkoutDate}
                onChange={handleFirstDropdownChange}
              >
                <option value="">Select Workout Id</option>
                {wid.map((wid,index) => (
                  <option key={wid} value={wid}>
                    Date : {wdate[index]}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="sets-form-group">
            <div className="sets-input-container">
              <select
                className="input-icon"
                value={selectedExercise} 
                onChange={handleExerciseChange}>
                <option value="">Select Exercise Id</option>
                {dependentOptions.map((option, index) => (
                  <option key={index} value={option}>
                    Exercise Name : {ename[index]}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="sets-form-group">
            <div className="sets-input-container">
            
              <input
                type="number"
                placeholder="Enter Reps"
                className="input-icon"
                value={setsReps}
                onChange={(e) => setSetsReps(e.target.value)}
              />
            </div>
          </div>

          <div className="sets-form-group">
            <div className="sets-input-container">
              
              <input
                type="number"
                placeholder="Enter Weight"
                className="input-icon"
                value={setsWeight}
                onChange={(e) => setSetsWeight(e.target.value)}
              />
            </div>
          </div>

          <div className="sets-form-group">
            <div className="sets-input-container">
              
              <input
                type="number"
                placeholder="Enter Duration"
                className="input-icon"
                value={setsDuration}
                onChange={(e) => setSetsDuration(e.target.value)}
              />
            </div>
          </div>

          <div className="registration-form">
            <button className="add-sets-button" onClick={handleAddSets}>
              Add Set
            </button>
            <button className="next-button" onClick={() => navigate("/user/viewworkouts")}>
              Done
            </button>
          </div>

         
        </div>
      </div>
    </div>
  )
}

export default Addsets