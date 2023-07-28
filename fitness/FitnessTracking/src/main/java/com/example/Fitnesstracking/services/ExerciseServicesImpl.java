package com.example.Fitnesstracking.services;

import com.example.Fitnesstracking.Dao.ExerciseDao;
import com.example.Fitnesstracking.Dao.WorkoutDao;
import com.example.Fitnesstracking.entities.Exercise;
import com.example.Fitnesstracking.entities.Workout;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

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
       if (exercise.getIs_completed()!=null){exercises.setIs_completed(exercise.getIs_completed());}
        return this.exerciseDao.save(exercises);
    }

    @Override
    public void deleteExerciseById(int id){
        Exercise exercise = exerciseDao.findById(id)
                .orElseThrow(()->new RuntimeException("id not found"));
        exerciseDao.delete(exercise);
    }

    @Override
    public long getTotalNumberOfExercises() {
        return exerciseDao.count();
    }

	@Override
	public List<Integer> findEIdsByWId(int id) {
		return exerciseDao.findEIdsByWId(id);
	}

    @Override
    public List<Exercise> getExerciseByUserId(int id) {
        return this.exerciseDao.getExerciseByUserId(id);
    }

    @Override
    public Map<String, Integer> getTotalExercisesByWorkoutId(int id) {
        Map<String,Integer> mapList = new HashMap<>();
        int totalExercises = this.exerciseDao.getTotalExercisesByWorkoutId(id);
        String status = "completed";
        int completedExercises = this.exerciseDao.getTotalCompletedExercisesByWorkoutId(id,status);
        mapList.put("completedCount",completedExercises);
        mapList.put("totalCount",totalExercises);
        return mapList;
    }

	@Override
	public List<Exercise> getAllExercisesByWorkoutId(int uid, int id) {
        Workout workout = this.workoutDao.getWorkoutByUserId(uid,id);
        List<Exercise> exerciseList = new ArrayList<>();
        if (workout !=null){
            exerciseList = this.exerciseDao.getExerciseByWorkoutId(id);
        }
        else {
            throw new RuntimeException("Workout id is not found");
        }
        return exerciseList;

	}

    @Override
    public String getExerciseStatus(int id) {
        String status = "completed";
        int totalExercises = this.exerciseDao.getTotalExercisesByWorkoutId(id);
        int completedExercises = this.exerciseDao.getTotalCompletedExercisesByWorkoutId(id,status);
        if(totalExercises==completedExercises){
            return "yes";
        }
        return "No";
    }


}
