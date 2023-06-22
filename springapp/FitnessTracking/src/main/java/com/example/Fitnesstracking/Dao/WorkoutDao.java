package com.example.Fitnesstracking.Dao;


import com.example.Fitnesstracking.entities.Workout;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface WorkoutDao extends JpaRepository<Workout,Integer> {

   @Query(value="select *from workout where user_id =:userid", nativeQuery = true)
   List<Workout> getWorkoutsByUserId(@Param("userid") int userid);


}

