package com.example.springapp.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.springapp.model.Workout;


public interface WorkoutRepository extends JpaRepository<Workout,Long>{

    @Query(value = "select *from workout where user_id =:userId",nativeQuery = true)
    List<Workout> getWorkOutByUserId(@Param("userId") long userId);
    
}
