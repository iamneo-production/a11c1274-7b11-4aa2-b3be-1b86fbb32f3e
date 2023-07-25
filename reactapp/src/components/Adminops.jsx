import React, { useState } from "react";
//import { useRef, useEffect } from "react";

import "./Adminops.css"; // CSS path
import Sidebar from "../pages/global/Sidebar";
import { getAllusersdata,deleteUsers } from "../services/user-service";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Adminops = () => {

  const navigate = useNavigate();
  const [users, setUsers] = useState([])
  // get users 

   useEffect(() => {
    const dataString = localStorage.getItem('data');
    const data = JSON.parse(dataString);
    const userdto = data.userdto;

    
    getAllusersdata(userdto.id).then((data) => {
      console.log("data", data);
      setUsers(data);
    });
  }, []); 


  const [selectedUser, setSelectedUser] = useState(null);
  const [displayWorkouts, setDisplayWorkouts] = useState(false);
  const [displayGoals, setDisplayGoals] = useState(false);
  const [showAllUsers, setShowAllUsers] = useState(true);
  const [selectedWorkout, setSelectedWorkout] = useState(null);
  const [selectedExercise, setSelectedExercise] = useState(null);
  const [searchValue, setSearchValue] = useState("");
  // const [pageTarget, setPageTarget] = useState(""); // Added pageTarget state variable


  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchValue.toLowerCase())
  );


  const deleteUser = (userId) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this user?"
    );
    if (confirmDelete) {

      // delete user by id
      deleteUsers(userId).then((data) => {
        console.log("data", data);
      });

      // const updatedUsers = users.filter((user) => user.user_id !== userId);

      // const updatedUsers = users.filter((user) => user.user_id !== userId);
      // setUsers(updatedUsers);
      // console.log("Updated users:", updatedUsers);
    }
  };

  const viewUserDetails = (user) => {
    setSelectedUser(user);
    setDisplayWorkouts(false);
    setDisplayGoals(false);
    setShowAllUsers(false);
  };

  const viewWorkouts = (user) => {
    setSelectedUser(user);
    setDisplayWorkouts(true);
    setDisplayGoals(false);
    setShowAllUsers(false);
    setSelectedWorkout(null);
    setSelectedExercise(null);
    // setPageTarget("Workouts");


    setTimeout(() => {
      const workoutsTable = document.getElementById("workouts-table");
      if (workoutsTable) {
        workoutsTable.scrollIntoView({ behavior: "smooth" });
      }
    }, 0);
  };

  const viewGoals = (user) => {
    setSelectedUser(user);
    setDisplayWorkouts(false);
    setDisplayGoals(true);
    setShowAllUsers(false);
    setSelectedWorkout(null);
    setSelectedExercise(null);
    //setPageTarget("Goals");

    setTimeout(() => {
      const goalsTable = document.getElementById("goals-table");
      if (goalsTable) {
        goalsTable.scrollIntoView({ behavior: "smooth" });
      }
    }, 0);
  };

  const viewExercises = (workout) => {
    setSelectedWorkout(workout);
    setSelectedExercise(null);
    setTimeout(() => {
      const exercisesTable = document.getElementById("exercises-table");
      if (exercisesTable) {
        exercisesTable.scrollIntoView({ behavior: "smooth" });
      }
    }, 0);
  };

  const viewSets = (exercise) => {
    setSelectedExercise(exercise);
    setTimeout(() => {
      const setsTable = document.getElementById("sets-table");
      if (setsTable) {
        setsTable.scrollIntoView({ behavior: "smooth" });
      }
    }, 0);
  };

  const backToDashboard = () => {
    setSelectedUser(null);
    setDisplayWorkouts(false);
    setDisplayGoals(false);
    setShowAllUsers(true);
    setSelectedWorkout(null);
    setSelectedExercise(null);
  };

  return (
    <div className="app">
      <div className="sidebar-wrapper">
        <Sidebar />
      </div>
      <div className="content-wrapper">
        <div className="navbar-wrapper">
          <nav className="navbar navbar-light bg-light">
            <h1 className="navbar-brand">ADMIN OPERATIONS</h1>
          </nav>
          {showAllUsers && (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <h4 className="navbar-brand">Search Users :</h4>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <form className="form-inline my-2 my-lg-0">
                  <div className="d-flex">
                    <input
                      className="form-control mr-sm-2"
                      type="text"
                      placeholder="Search User"
                      aria-label="Search"
                      value={searchValue}
                      onChange={(e) => setSearchValue(e.target.value)}
                    />
                  </div>
                </form>
              </div>
            </nav>
          )}
        </div>
        <div className="main-content-wrapper">
          {showAllUsers ? (
            <div>
              <div className="table-wrapper">
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th scope="col">S.No</th>
                      {/* <th scope="col">User Id</th> */}
                      <th scope="col">Name</th>
                      <th scope="col">Email ID</th>
                      <th scope="col">Gender</th>
                      <th scope="col">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredUsers.map((user, index) => (
                      <tr key={user.user_id}>
                        <td>{index + 1}</td>
                        {/* <td>{user.user_id}</td> */}
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.gender}</td>
                        <td>
                          <button
                            onClick={() => viewUserDetails(user)}
                            type="button"
                            className="btn btn-success"
                          >
                            View User Details
                          </button>
                          {/* <button
                            onClick={() => deleteUser(user.id)}
                            type="button"
                            className="btn btn-danger"
                          >
                            Delete User
                          </button> */}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ) : (
            <div>
              <div className="user-details">
                <div className="back-to-dashboard">
                  <button onClick={backToDashboard}>Back to Dashboard</button>
                </div>
                <div className="user-details-container">
                  <table className="user-details-table">
                    <tbody>
                      <tr>
                        <td>Name:</td>
                        <td>{selectedUser.name}</td>
                      </tr>
                      <tr>
                        <td>Email:</td>
                        <td>{selectedUser.email}</td>
                      </tr>
                      <tr>
                        <td>Height:</td>
                        <td>{selectedUser.height}</td>
                      </tr>
                      <tr>
                        <td>Weight:</td>
                        <td>{selectedUser.weight}</td>
                      </tr>
                      <tr>
                        <td>Age:</td>
                        <td>{selectedUser.age}</td>
                      </tr>
                      <tr>
                        <td>Gender:</td>
                        <td>{selectedUser.gender}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="workouts-goals-buttons">
                  <button onClick={() => viewWorkouts(selectedUser)}>
                    View Workouts
                  </button>
                  <button onClick={() => viewGoals(selectedUser)}>
                    View Goals
                  </button>
                </div>
              </div>
            </div>
          )}

          {displayWorkouts && (
            <div id="workouts-table" className="workouts-table-wrapper">
              <h4>Workouts</h4>
              <table>
                <thead>
                  <tr>
                    <th>Workout ID</th>
                    <th>Date</th>
                    <th>Duration</th>
                    <th>Notes</th>
                    <th>Completion Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {selectedUser.workouts.map((workout) => (
                    <tr key={workout.workoutId}>
                      <td>{workout.workoutId}</td>
                      <td>{workout.date}</td>
                      <td>{workout.duration}</td>
                      <td>{workout.notes}</td>
                      <td>{workout.is_completed}</td>
                      <td>
                        <button onClick={() => viewExercises(workout)}>
                          View Exercises
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {displayGoals && (
            <div id="goals-table" className="goals-table-wrapper">
              <h4>Goals</h4>
              <table>
                <thead>
                  <tr>
                    <th>Goal Type</th>
                    <th>Metric</th>
                    <th>Target Value</th>
                    <th>Time Frame</th>
                    <th>Additional Notes</th>
                    <th>Completion Status</th>
                  </tr>
                </thead>
                <tbody>
                  {selectedUser.goals.map((goal) => (
                    <tr key={goal.goal_id}>
                      <td>{goal.goalType}</td>
                      <td>{goal.goalMetric}</td>
                      <td>{goal.targetValue}</td>
                      <td>{goal.timeFrame}</td>
                      <td>{goal.additionalNotes}</td>
                      <td>{goal.is_completed}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {selectedWorkout && (
            <div id="exercises-table" className="exercises-table-wrapper">
              <h4>Exercises</h4>
              <table>
                <thead>
                  <tr>
                    <th>Exercise ID</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Completion Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {selectedWorkout.exercises.map((exercise) => (
                    <tr key={exercise.exerciseId}>
                      <td>{exercise.exerciseId}</td>
                      <td>{exercise.name}</td>
                      <td>{exercise.description}</td>
                      <td>{exercise.is_completed}</td>
                      <td>
                        <button onClick={() => viewSets(exercise)}>
                          View Sets
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {selectedExercise && (
            <div id="sets-table" className="sets-table-wrapper">
              <h4>Sets</h4>
              <table className="sub-table">
                <thead>
                  <tr>
                    <th>Set Id</th>
                    <th>Reps</th>
                    <th>Weight</th>
                    <th>Duration</th>
                    {/* <th>Completion Status</th> */}
                  </tr>
                </thead>
                <tbody>
                  {selectedExercise.sets.map((set) => (
                    <tr key={set.setId}>
                      <td>{set.setId}</td>
                      <td>{set.reps}</td>
                      <td>{set.weight}</td>
                      <td>{set.duration}</td>
                      {/* <td>{set.is_completed}</td> */}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Adminops;
