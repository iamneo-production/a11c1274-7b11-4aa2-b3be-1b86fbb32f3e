package com.example.Fitnesstracking.Dao;

import com.example.Fitnesstracking.entities.Goals;
import com.example.Fitnesstracking.entities.Sets;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface GoalsDao extends JpaRepository<Goals,Integer> {
    @Query(value = "select * from goals where user_id =:id",nativeQuery = true)
    List<Goals> getGoalsByUserId(@Param("id") int id);

    @Query(value = "select count(*) from goals",nativeQuery = true)
    int getTotalGoals();


}
