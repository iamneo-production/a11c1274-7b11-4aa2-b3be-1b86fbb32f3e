import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getGoalsById,updateGoalsById } from "../../services/user-service";
import Swal from "sweetalert2";

const UpdateGoals = () =>{

    const navigate = useNavigate();

    const { id } = useParams();
    console.log(id);

    const [goalsData,setGoalsData] = useState({
        goalType : "",
        goalMetric: "",
        targetValue :"",
        timeFrame :"",
        additionalNotes :"",
        is_completed: "",
    });

    const handleChange = (event, property) =>{
        setGoalsData(
            {
                ...goalsData,
                [property]:event.target.value
            }
        )
    }
    
    useEffect(() => {
        getGoalsById(id).then((data) => {
          setGoalsData(data);
        });
      }, []);

      

    const handleCancel = (e) =>{
        e.preventDefault();
        navigate('/user/goalsetting');
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        updateGoalsById(id,goalsData)
        .then((response)=>{
            Swal.fire({
                icon: "success",
                title: "updation Successful",
                text: "goal is updated successfully!",
                showConfirmButton: false,
                timer: 1500,
              });

              setGoalsData({
                goalType : "",
                goalMetric: "",
                targetValue :"",
                timeFrame :"",
                additionalNotes :"",
                is_completed: "",
            });

              navigate("/user/goalsetting");
        })

    }
    const otherGoalTypes = [
        "Weight Loss",
        "Strength Improvement",
        "Endurance Enhancement",
        "Muscle Gain"
      ];
      const otherGoalsStatus = [
        "completed",
        "Not completed"
      ]
      
      const updatedOtherGoalsStatus = [
        goalsData.is_completed,
        ...otherGoalsStatus.filter((is_completed)=> is_completed !== goalsData.is_completed)
      ];

      const updatedOtherGoalTypes = [
        goalsData.goalType,
        ...otherGoalTypes.filter((goalType) => goalType !== goalsData.goalType)
      ];

    return (
        <div className="registration-card">
            <div className="signup-form">
                <div className='goals-card'>
                    <div className='add-goals'>
                        <h1>Edit Goals</h1>
                    </div>
                    <form onSubmit={handleSubmit}>
                    <div className='goals-styles'>
                        <div className='goals-details'>
                            <label htmlFor="goalType">Select Goal Type</label>
                            <br />
                            <select
                                value={goalsData.goalType}
                                type="text"
                                onChange={(e) => handleChange(e, "goalType")}
                                required>
                                <option value="">Select Goal Type</option>
                                {updatedOtherGoalTypes.map((goalType) => (
                                <option key={goalType} value={goalType}>
                                {goalType}
                                </option>
                                ))}
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
                            <label htmlFor="is_completed">Select Goal Completion Status</label>
                            <br />
                            <select
                                value={goalsData.is_completed}
                                type="text"
                                onChange={(e) => handleChange(e, "is_completed")}
                                required>
                                {/* <option value="">choose Goal Status</option> */}
                                {updatedOtherGoalsStatus.map((is_completed) => (
                                <option key={is_completed} value={is_completed}>
                                    {is_completed}
                                </option>
                                ))}
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

export default UpdateGoals;