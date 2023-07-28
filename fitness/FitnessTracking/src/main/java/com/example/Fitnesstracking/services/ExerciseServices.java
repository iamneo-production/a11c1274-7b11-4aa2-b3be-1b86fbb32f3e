package com.example.Fitnesstracking.services;

import com.example.Fitnesstracking.entities.Exercise;

import java.util.List;
import java.util.Map;

public interface ExerciseServices {

    Exercise addExerciseByWorkoutId(int id, Exercise exercise);

    List<Exercise> getExerciseByWorkoutId(int id);

    Exercise getExerciseById(int id);

    Exercise updateExerciseById(int id, Exercise exercise);

    void deleteExerciseById(int id);

	long getTotalNumberOfExercises();

	List<Integer> findEIdsByWId(int id);


    List<Exercise> getExerciseByUserId(int id);
    Map<String, Integer> getTotalExercisesByWorkoutId(int id);

	List<Exercise> getAllExercisesByWorkoutId(int uid, int id);

    String getExerciseStatus(int id);
}
