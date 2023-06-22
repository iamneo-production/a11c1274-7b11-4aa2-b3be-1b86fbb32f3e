package com.example.Fitnesstracking.services;

import com.example.Fitnesstracking.entities.Exercise;

import java.util.List;

public interface ExerciseServices {

    Exercise addExerciseByWorkoutId(int id, Exercise exercise);

    List<Exercise> getExerciseByWorkoutId(int id);

    Exercise getExerciseById(int id);

    Exercise updateExerciseById(int id, Exercise exercise);

    void deleteExerciseById(int id);
}
