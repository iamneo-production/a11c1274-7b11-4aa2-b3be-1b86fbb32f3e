package com.example.springapp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.MediaType;
import com.example.springapp.model.Exercise;
import com.example.springapp.model.Set;
import com.example.springapp.model.User;
import com.example.springapp.model.Workout;
import com.example.springapp.model.WorkoutDetails;
import com.example.springapp.model.WorkoutDto;
import com.example.springapp.service.ExerciseServiceInterface;
import com.example.springapp.service.SetServiceInterface;
import com.example.springapp.service.UserServiceInterface;
import com.example.springapp.service.WorkoutServiceInterface;

import org.springframework.web.bind.annotation.RequestParam;



@RestController
public class UserController {

    @Autowired
    private UserServiceInterface userService;

    @Autowired
    private WorkoutServiceInterface workoutService;

    @Autowired
    private ExerciseServiceInterface exerciseService;

    @Autowired
    private SetServiceInterface setService;

    // Create a new user
    @PostMapping("/user/register")
    public String registerUser(@RequestBody User user){
        return this.userService.createUser(user);
    }

    //Retrieve all users

    @GetMapping("/user")
    public List<User> getAllUsers(){
        return this.userService.getAllUsers();

    }

    //Retrieve a specific user

    @GetMapping("/user/id")
    public User getUserByUserId(@RequestParam long id) {
        return this.userService.getUserByUserId(id);
    }

    //Update a specific user
    @PutMapping("/user")
    public String updateUser(@RequestBody User user){
        return this.userService.updateUser(user);
    }

    // Delete specific user
    @DeleteMapping("/user")
    public String deleteSpecificUser(@RequestParam long id){
        return this.userService.deleteSpecificUser(id);
    }
    

    // workout api endpoints



    // Retrieve all workout
    @GetMapping(value = "/workout", produces = MediaType.APPLICATION_JSON_VALUE)
    public List<Workout> getAllWorkout(){
        return this.workoutService.getAllWorkout();
    }

    // Create a new workout
    @PostMapping("/workout")
    public String postWorkout(@RequestBody Workout workout){
        return this.workoutService.postWorkout(workout);
    }

    // Retrieve specific workout
    @GetMapping("/workout/id")
    public Workout getWorkoutById(@RequestParam("id") long id){
        return this.workoutService.getWorkoutById(id);
    }

    // Retrieve a specific workout by userId
    @GetMapping("/workout/userId")
    public List<Workout> getWorkOutByUserId(@RequestParam("userId") long userId){
        return this.workoutService.getWorkOutByUserId(userId);
    }

    // Update a specific workout
    @PutMapping("/user/workout")
    public String updateWorkout(@RequestBody Workout workout){
        return this.workoutService.updateWorkout(workout);
    }

    // Delete a specific workout
    @DeleteMapping("user/workout/id")
    public String deleteWorkoutById(@RequestParam long id){
        return this.workoutService.deleteWorkoutById(id);
    }

    // All Exercise API endpoints

    //Create a new exercise
    @PostMapping("/exercise")
    public String addExercises(@RequestBody Exercise exercise){
        return this.exerciseService.addExercises(exercise);
    }

    // Retrieve all exercise
    @GetMapping("/exercise")
    public List<Exercise> getAllExercise(){
        return this.exerciseService.getAllExercise();
    }

    // Retrieve a specific exercise
    @GetMapping("/exercise/id")
    public Exercise getExerciseById(@RequestParam long id){
        return this.exerciseService.getExerciseById(id);
    }

    // retrieve exercise by workoutId
    @GetMapping("/exercise/workout")
    public List<Exercise> getExerciseByWorkoutId(@RequestParam long workoutId){
        return this.exerciseService.getExerciseByWorkoutId(workoutId);
    }

    //  Update a specific exercise
    @PutMapping("/exercise")
    public String updateExercise(@RequestBody Exercise exercise){
        return this.exerciseService.updateExercise(exercise);
    }
    
    //Delete a specific exercise
    @DeleteMapping("/exercise/id")
    public String deleteExerciseById(@RequestParam long id){
        return this.exerciseService.deleteExerciseById(id);
    }

    // Set Api endpoints

    // create a new Set
    @PostMapping("/set")
    public String addNewSet(@RequestBody Set sets){
        return this.setService.addNewSet(sets);
    }

    //Retrieve all set
    @GetMapping("/set")
    public List<Set> getAllSet(){
        return this.setService.getAllSet();
    }

    //Retrieve a specific SetById
    @GetMapping("/set/id")
    public Set getSetById(@RequestParam long id){
        return this.setService.getSetById(id);
    }

    //Retrieve a specific set by exerciseId
    @GetMapping("/set/exerciseId")
    public List<Set> getSetByExerciseId(@RequestParam long exerciseId){
        return this.setService.getSetByExerciseId(exerciseId);
    }

    //Update a specific Set
    @PutMapping("/set")
    public String updateSet(@RequestBody Set sets){
        return this.setService.updateSet(sets);
    }

     //Delete a specific Set
    @DeleteMapping("/set")
    public void deleteSetById(@RequestParam long id){
        this.setService.deleteSetById(id);
    }

}