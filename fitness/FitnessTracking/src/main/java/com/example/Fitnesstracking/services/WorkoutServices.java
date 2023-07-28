package com.example.Fitnesstracking.services;

import com.example.Fitnesstracking.entities.Workout;
import com.example.Fitnesstracking.payloads.CompletedWorkout;
import com.example.Fitnesstracking.payloads.Dashboardata;

import java.util.List;

public interface WorkoutServices {
    Workout addWorkouts(int id, Workout workouts);

    List<Workout> getWorkoutsByUserId(int userId);

    Workout getWorkoutsById(int id);

    Workout updateWorkoutsById(int id,Workout workouts);

    void deleteWorkoutById(int id);
    
    long getTotalNumberOfWorkouts();
    
    List<Integer> findWorkoutIdsByUserId(int userId);
    
    List<Dashboardata> getDashBoard(int userid);

	long gettotalworkouts(int id);

	List<CompletedWorkout> getCompleted(int id);
    
    List<Workout> getCompletedWorkoutsByUserId(int id);


}
