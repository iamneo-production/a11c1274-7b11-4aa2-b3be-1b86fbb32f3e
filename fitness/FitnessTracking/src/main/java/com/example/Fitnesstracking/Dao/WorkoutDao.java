package com.example.Fitnesstracking.Dao;


import com.example.Fitnesstracking.entities.Workout;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface WorkoutDao extends JpaRepository<Workout,Integer> {

   @Query(value="select *from workout where user_id =:userid and is_completed='Not completed'", nativeQuery = true)
   List<Workout> getWorkoutsByUserId(@Param("userid") int userid);

   @Query("SELECT w.id FROM Workout w WHERE w.user.id = :userId and w.is_completed='Not completed'")
   List<Integer> findWorkoutIdsByUserId(@Param("userId") int userId);



   @Query("SELECT w.notes FROM Workout w WHERE w.user.id = :userId and w.is_completed='Not completed'")
   List<String> findWorkoutnamesbyuserid(@Param("userId") int userId);


   @Query("SELECT w.date FROM Workout w WHERE w.user.id = :userId")
   List<String> findWorkoutdatessbyuserid(@Param("userId") int userId);

   @Query(value = "select *from workout where workout_id =:id and user_id =:uid", nativeQuery = true)
   Workout getWorkoutByUserId(@Param("uid") int uid,@Param("id") int id);

  @Query(value = "select coalesce(avg(duration), 0) from workout", nativeQuery = true)
   int getAvgWorkoutDuration();

  @Query(value = "select count(*) from workout",nativeQuery = true)
  int getTotalWorkouts();


    @Query(value="select *from workout where user_id =:id and is_completed='completed'", nativeQuery = true)
    List<Workout> getCompletedWorkoutsByUserId(@Param("id") int id);

    @Query(value="select *from workout where user_id =:id", nativeQuery = true)
    List<Workout> getWorkoutsGraphByUserId(@Param("id") int id);

    
}
