package com.example.springapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.springapp.model.Set;

public interface SetRepository extends JpaRepository<Set,Long>{
    @Query(value = "select *from sets where exercise_id =:exerciseId", nativeQuery = true)
    Set getSetByExerciseId(@Param("exerciseId") long exerciseId);
    
}
