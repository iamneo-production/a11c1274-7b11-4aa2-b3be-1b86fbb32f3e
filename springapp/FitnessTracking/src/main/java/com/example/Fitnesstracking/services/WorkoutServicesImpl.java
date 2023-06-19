package com.example.Fitnesstracking.services;


import com.example.Fitnesstracking.Dao.UsersDao;
import com.example.Fitnesstracking.Dao.WorkoutDao;
import com.example.Fitnesstracking.entities.Users;
import com.example.Fitnesstracking.entities.Workout;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class WorkoutServicesImpl implements WorkoutServices{

    @Autowired
    private UsersDao usersDao;

    @Autowired
    private WorkoutDao workoutDao;
    @Override
    public Workout addWorkouts(int id, Workout workouts){
        Users user = usersDao.findById(id)
                .orElseThrow(()->new RuntimeException("workout is not found"));
        workouts.setUser(user);
        return this.workoutDao.save(workouts);
    }

    @Override
    public List<Workout> getWorkoutsByUserId(int userid){
        return workoutDao.getWorkoutsByUserId(userid);
    }

    @Override
    public Workout getWorkoutsById(int id){
        return this.workoutDao.findById(id)
                .orElseThrow(()-> new RuntimeException("Workouts Id is not found"));
    }

    @Override
    public Workout updateWorkoutsById(int id,Workout workouts){
        Workout workout = workoutDao.findById(id)
                .orElseThrow(()-> new RuntimeException("Workout id not found"));
        if (workouts.getDate()!=null){workout.setDate(workouts.getDate());}
        if (workouts.getDuration()!=0){workout.setDuration(workouts.getDuration());}
        if (workouts.getNotes()!=null){workout.setNotes(workouts.getNotes());}
//        workout.setIs_completed(workouts.getIs_completed());

        return this.workoutDao.save(workout);
    }

    @Override
    public void deleteWorkoutById(int id){
        Workout workouts = workoutDao.findById(id)
                .orElseThrow(()->new RuntimeException("workout id not found"));
        workoutDao.delete(workouts);
    }

}


