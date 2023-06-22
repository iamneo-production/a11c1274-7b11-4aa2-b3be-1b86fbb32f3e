package com.example.Fitnesstracking.Dao;

import com.example.Fitnesstracking.entities.Exercise;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ExerciseDao extends JpaRepository<Exercise, Integer> {

    @Query(value = "select *from exercise where workout_workout_id =:id", nativeQuery = true)
    List<Exercise> getExerciseByWorkoutId(@Param("id") int id);
}