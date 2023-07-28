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


    @Query(value = "SELECT  exercise_id  FROM exercise e WHERE workout_workout_id = :id",nativeQuery = true)
    List<Integer> findEIdsByWId(@Param("id") int id);


    @Query(value = "select *from exercise e where e.workout_workout_id in (select workout_id from workout where " +
            "user_id =:id) and e.is_completed='Not completed'", nativeQuery = true)
    List<Exercise> getExerciseByUserId(@Param("id") int id);


    @Query(value = "select count(exercise_id) from exercise where workout_workout_id =:id",nativeQuery = true)
    int getTotalExercisesByWorkoutId(@Param("id") int id);

    @Query(value = "select count(exercise_id) from exercise where workout_workout_id =:id and is_completed=:status"
            ,nativeQuery = true)
    int getTotalCompletedExercisesByWorkoutId(@Param("id") int id,@Param("status") String status);

    @Query(value = "select count(*) from exercise",nativeQuery = true)
    int getTotalExercises();



}
