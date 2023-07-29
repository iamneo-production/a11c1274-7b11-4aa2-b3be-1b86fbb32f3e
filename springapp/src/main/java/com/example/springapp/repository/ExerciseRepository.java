package com.example.springapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.springapp.model.Exercise;

public interface ExerciseRepository extends JpaRepository<Exercise,Long>{

    @Query(value = "select *from exercise where workout_id =:workoutId", nativeQuery = true)
    Exercise getExerciseByWorkoutId(@Param("workoutId") long workoutId);
    
}
