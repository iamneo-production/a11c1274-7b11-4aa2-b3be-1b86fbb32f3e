import React, { useContext } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import userContext from '../../context/userContext';
import { addGoals } from '../../services/user-service';
import Swal from "sweetalert2";
import '../../components/css/signUp.css';
import './goalsetting.css';

const AddGoals = () =>{

    const navigate = useNavigate();
    const obj = useContext(userContext);

    const [goalsData,setGoalsData] = useState({
        goalType : "",
        goalMetric: "",
        targetValue :"",
        timeFrame :"",
        additionalNotes :"",
        is_completed: "",
    })

    const handleChange = (event, property) =>{
        setGoalsData(
            {
                ...goalsData,
                [property]:event.target.value
            }
        )
    }

    const handleCancel = () =>{
        navigate('/user/goalsetting');
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        addGoals(obj.user.data.id , goalsData)
        .then((data)=>{
            console.log(`response goalsdata${data}`);
            Swal.fire({
                icon: "success",
                title: "Registration Successful",
                text: "User is registered successfully!",
                showConfirmButton: false,
                timer: 1500,
              });
              setGoalsData({
                goalType : "",
                goalMetric: "",
                targetValue :"",
                timeFrame :"",
                additionalNotes :"",
                is_completed : "",
            });
              navigate("/user/goalsetting");
        })
    }

    

    return(
        <div className="registration-card">
            <div className="signup-form">
                <div className='goals-card'>
                    <div className='add-goals'>
                        <h1>Add Goals</h1>
                    </div>
                    <form onSubmit={handleSubmit}>
                    <div className='goals-styles'>
                        <div className='goals-details'>
                            <label htmlFor='goalType'>Select Goal Type</label><br/>
                            <select value={goalsData.goalType} type="text"
                                onChange={(e)=> handleChange(e,"goalType")} required>
                                <option></option>
                                <option value= "Weight Loss">Weight Loss</option>
                                <option value="Strength Improvement">Strength Improvement</option>
                                <option value="Endurance Enhancement">Endurance Enhancement</option>
                                <option value="Muscle Gain">Muscle Gain</option>
                            </select>
                        </div>
                    <div className='goals-details'>
                    <label htmlFor='goalMetric'>Enter Goal Metric</label><br/>
                    <input type='text' 
                    placeholder={(goalsData.goalType ==="Weight Loss")?"Ex: Pounds / Kgs":
                (goalsData.goalType === "Strength Improvement")?"Ex: Bench Press Repetitions":
                (goalsData.goalType === "Endurance Enhancement")?"Ex: Running Distance":
                (goalsData.goalType === "Muscle Gain")?"Ex: Increase in muscle mass and strength":""}
                id='goalMetric'
                value={goalsData.goalMetric}
                onChange={(e)=>handleChange(e,"goalMetric")}
                required
                    />
                </div>
                <div className='goals-details'>
                    <label htmlFor='targetValue'>Enter targetValue </label><br/>
                    <input type='number' 
                    placeholder={(goalsData.goalType ==="Weight Loss")?"Ex: 10 Pounds/Kgs":
                (goalsData.goalType === "Strength Improvement")?"Ex: Increase 8 to 12 reps":
                (goalsData.goalType === "Endurance Enhancement")?"Ex: Run 5 miles without stopping":
                (goalsData.goalType === "Muscle Gain")?"Ex: Gain 5 kilograms of lean muscle mass":""}
                id='targetValue'
                value={goalsData.targetValue}
                onChange={(e)=>handleChange(e,"targetValue")}
                required
                    />
                </div>
                <div className='goals-details'>
                    <label htmlFor='timeFrame'>Enter timeFrame </label><br/>
                    <input type='text' 
                    placeholder={(goalsData.goalType ==="Weight Loss")?"Ex: 3 months":
                (goalsData.goalType === "Strength Improvement")?"Ex: 1 year":
                (goalsData.goalType === "Endurance Enhancement")?"Ex: 20 days":
                (goalsData.goalType === "Muscle Gain")?"Ex: 12 weeks":""}
                id='timeFrame'
                value={goalsData.timeFrame}
                onChange={(e)=>handleChange(e,"timeFrame")}
                required
                    />
                </div>
                <div className='goals-details'>
                    <label htmlFor='additionalNotes'>Enter additionalNotes </label><br/>
                    <input type='text' 
                    placeholder={(goalsData.goalType ==="Weight Loss")?"Ex: xyz":
                (goalsData.goalType === "Strength Improvement")?"Ex: xyz":
                (goalsData.goalType === "Endurance Enhancement")?"Ex: xyz":
                (goalsData.goalType === "Muscle Gain")?"Ex: xyz":""}
                id='additionalNotes'
                value={goalsData.additionalNotes}
                onChange={(e)=>handleChange(e,"additionalNotes")}
                required
                    />
                </div>
                <div className='goals-details'>
                    <label htmlFor='is_completed'>Select Goal Completion Status</label><br/>
                    <select value={goalsData.is_completed} type="text"
                    onChange={(e)=> handleChange(e,"is_completed")} required>
                        <option value="">select status</option>
                        <option value="Not completed">Not completed</option>
                        <option value= "completed">completed</option>
                    </select>
                </div>
            </div>
            <div className='registration-form'>
              <button type="submit">Save</button>
              <button onClick={handleCancel}>
                Cancel
              </button>
          </div>
        </form>    
    </div>
    </div>
    </div>
        
    )
}

export default AddGoals;

