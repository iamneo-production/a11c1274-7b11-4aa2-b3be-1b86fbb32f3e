package com.example.Fitnesstracking.services;

import com.example.Fitnesstracking.Dao.ExerciseDao;
import com.example.Fitnesstracking.Dao.WorkoutDao;
import com.example.Fitnesstracking.entities.Exercise;
import com.example.Fitnesstracking.entities.Workout;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ExerciseServicesImpl implements ExerciseServices{

    @Autowired
    private WorkoutDao workoutDao;

    @Autowired
    private ExerciseDao exerciseDao;

    @Override
    public Exercise addExerciseByWorkoutId(int id, Exercise exercise){
        Workout workout = workoutDao.findById(id)
                .orElseThrow(()-> new RuntimeException("id not found"));
        exercise.setWorkouts(workout);
        return exerciseDao.save(exercise);
    }

    @Override
    public List<Exercise> getExerciseByWorkoutId(int id){
        return exerciseDao.getExerciseByWorkoutId(id);
    }

    @Override
    public Exercise getExerciseById(int id){
        return this.exerciseDao.findById(id)
                .orElseThrow(()->new RuntimeException("Exercise Id is not found"));
    }

    @Override
    public Exercise updateExerciseById(int id, Exercise exercise){
        Exercise exercises = exerciseDao.findById(id)
                .orElseThrow(()-> new RuntimeException("Id not found"));
       if (exercise.getName()!=null){exercises.setName(exercise.getName());}
       if (exercise.getDescription()!=null){exercises.setDescription(exercise.getDescription());}
//        exercises.setIs_completed(exercise.getIs_completed());
        return this.exerciseDao.save(exercises);
    }

    @Override
    public void deleteExerciseById(int id){
        Exercise exercise = exerciseDao.findById(id)
                .orElseThrow(()->new RuntimeException("id not found"));
        exerciseDao.delete(exercise);
    }

}
