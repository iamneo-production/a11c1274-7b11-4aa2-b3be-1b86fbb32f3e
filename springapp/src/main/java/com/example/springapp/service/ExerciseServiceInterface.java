package com.example.springapp.service;

import java.util.List;

import com.example.springapp.model.Exercise;

public interface ExerciseServiceInterface {

    String addExercises(Exercise exercise);

    List<Exercise> getAllExercise();

    Exercise getExerciseById(long id);

    List<Exercise> getExerciseByWorkoutId(long workoutId);

    String updateExercise(Exercise exercise);

    String deleteExerciseById(long id);
    
}
