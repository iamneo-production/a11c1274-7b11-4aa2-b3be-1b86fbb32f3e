package com.example.springapp.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.springapp.model.Exercise;
// import com.example.springapp.model.Workout;
import com.example.springapp.repository.ExerciseRepository;
// import com.example.springapp.repository.WorkoutRepository;

@Service
public class ExerciseService implements ExerciseServiceInterface{

    @Autowired
    private ExerciseRepository exerciseRepository;

    // @Autowired
    // private WorkoutRepository workoutRepository;

    @Override
    public String addExercises(Exercise exercise) {
        this.exerciseRepository.save(exercise);
        return "exercise Created";
    }

    @Override
    public List<Exercise> getAllExercise() {
        return this.exerciseRepository.findAll();
    }

    @Override
    public Exercise getExerciseById(long id) {
        return this.exerciseRepository.findById(id)
        .orElseThrow(()-> new RuntimeException("Exercise id not found"));
    }

    @Override
    public List<Exercise> getExerciseByWorkoutId(long workoutId) {
        return List.of(this.exerciseRepository.getExerciseByWorkoutId(workoutId));
    }

    @Override
    public String updateExercise(Exercise exercise) {
        Exercise exercisesExercise = this.exerciseRepository.findById(exercise.getId())
        .orElseThrow(()-> new RuntimeException("Exercise id not found"));
        if(exercise.getName()!=null) exercisesExercise.setName(exercise.getName());
        if(exercise.getDescription()!=null) exercisesExercise.setDescription(exercise.getDescription());
        if(exercise.getWorkoutId()!=0) exercisesExercise.setWorkoutId(exercise.getWorkoutId());
        this.exerciseRepository.save(exercisesExercise);
        return "exercise Updated";
    }

    @Override
    public String deleteExerciseById(long id) {
        this.exerciseRepository.deleteById(id);
        return "Exercise deleted";
    }
    
}
