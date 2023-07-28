package com.example.springapp.service;



import java.util.List;

import com.example.springapp.model.Workout;
import com.example.springapp.model.WorkoutDetails;
import com.example.springapp.model.WorkoutDto;

public interface WorkoutServiceInterface {

    String postWorkout(Workout workout);

    List<Workout> getAllWorkout();

    Workout getWorkoutById(long id);

    List<Workout> getWorkOutByUserId(long userId);

    String updateWorkout(Workout workout);

    String deleteWorkoutById(long id);


}
