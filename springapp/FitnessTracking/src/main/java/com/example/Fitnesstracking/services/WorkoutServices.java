package com.example.Fitnesstracking.services;

import com.example.Fitnesstracking.entities.Workout;

import java.util.List;

public interface WorkoutServices {
    Workout addWorkouts(int id, Workout workouts);

    List<Workout> getWorkoutsByUserId(int userId);

    Workout getWorkoutsById(int id);

    Workout updateWorkoutsById(int id,Workout workouts);

    void deleteWorkoutById(int id);


}

