package com.example.Fitnesstracking.Dao;

import com.example.Fitnesstracking.entities.Sets;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SetsDao extends JpaRepository<Sets,Integer> {
    @Query(value = "select *from sets where exercise_id =:id",nativeQuery = true)
    List<Sets> getSetsByExerciseId(@Param("id") int id);
}

