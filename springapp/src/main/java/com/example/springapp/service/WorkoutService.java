package com.example.springapp.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.springapp.model.User;
import com.example.springapp.model.Workout;
import com.example.springapp.model.WorkoutDetails;
import com.example.springapp.model.WorkoutDto;
import com.example.springapp.repository.UserRepository;
import com.example.springapp.repository.WorkoutRepository;

@Service
public class WorkoutService implements WorkoutServiceInterface{

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private WorkoutRepository workoutRepository;

    @Override
    public String postWorkout(Workout workout) {
        User user = this.userRepository.findById(workout.getUser().getId())
        .orElseThrow(()-> new RuntimeException("user not found"));
        workout.setUser(user);
        this.workoutRepository.save(workout);
        return "Workout Created";
    }

    @Override
    public List<Workout> getAllWorkout() {
        // List<WorkoutDetails> workoutDetails = new ArrayList<>();
        // WorkoutDetails workoutDto = new WorkoutDetails();
        // WorkoutDetails.User userDetails = new WorkoutDetails.User();
        List<Workout> workouts = this.workoutRepository.findAll();
        // for (int i = 0; i < workouts.size(); i++) {
        //     workoutDto.setId(workouts.get(i).getId());
        //     User users = this.userRepository.findById(workouts.get(i).getUser().getId())
        //     .orElseThrow(()-> new RuntimeException("User not found"));
        //     userDetails.setId(users.getId());
        //     userDetails.setAge(users.getAge());
        //     userDetails.setEmail(users.getEmail());
        //     userDetails.setGender(users.getGender());
        //     userDetails.setGoals(users.getGoals());
        //     userDetails.setHeight(users.getHeight());
        //     userDetails.setName(users.getName());
        //     userDetails.setPassword(users.getPassword());
        //     userDetails.setRole(users.getRole());
        //     userDetails.setWeight(users.getWeight());
        //     workoutDto.setUser(userDetails);
        //     workoutDto.setDate(workouts.get(i).getDate());
        //     workoutDto.setDuration(workouts.get(i).getDuration());
        //     workoutDto.setNotes(workouts.get(i).getNotes());
        //     workoutDetails.add(workoutDto);
        // }
        // return List.of((Workout) workoutDetails);

        return workouts;
    }

    @Override
    public Workout getWorkoutById(long id) {
        Workout workout = this.workoutRepository.findById(id)
        .orElseThrow(()-> new RuntimeException("Workout id not found"));
        // WorkoutDto workoutDto = new WorkoutDto();
        // WorkoutDto.User userDto = new WorkoutDto.User();
        // workoutDto.setId(workout.getId());
        // userDto.setId(workout.getUser().getId());
        // workoutDto.setUser(userDto);
        // workoutDto.setDate(workout.getDate());
        // workoutDto.setDuration(workout.getDuration());
        // workoutDto.setNotes(workout.getNotes());
        return workout;
    }

    @Override
    public List<Workout> getWorkOutByUserId(long userId) {
        //List<WorkoutDto> workoutDtos = new ArrayList<>();
        List<Workout> workout = this.workoutRepository.getWorkOutByUserId(userId);
        // WorkoutDto workoutDto = new WorkoutDto();
        // WorkoutDto.User userDto = new WorkoutDto.User();
        // for (int i = 0; i < workout.size(); i++) {
        //     workoutDto.setId(workout.get(i).getId());
        //     userDto.setId(workout.get(i).getUser().getId());
        //     workoutDto.setUser(userDto);
        //     workoutDto.setDate(workout.get(i).getDate());
        //     workoutDto.setDuration(workout.get(i).getDuration());
        //     workoutDto.setNotes(workout.get(i).getNotes());
        //     workoutDtos.add(workoutDto);
        // }
        // return List.of((Workout) workoutDtos);
        return workout;
    }

    @Override
    public String updateWorkout(Workout workout) {
        Workout workoutsWorkout = this.workoutRepository.findById(workout.getId())
        .orElseThrow(()-> new RuntimeException("User id not found"));
        if(workout.getDate()!=null) workoutsWorkout.setDate(workout.getDate());
        if(workout.getDuration()!=null) workoutsWorkout.setDuration(workout.getDuration());
        if(workout.getNotes()!=null) workoutsWorkout.setNotes(workout.getNotes());
        this.workoutRepository.save(workoutsWorkout);
        return "workout Updated";
    }

    @Override
    public String deleteWorkoutById(long id) {
        this.workoutRepository.deleteById(id);
        return "workout deleted";
    }
    
}