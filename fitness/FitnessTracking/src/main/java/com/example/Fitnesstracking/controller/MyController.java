package com.example.Fitnesstracking.controller;

import com.example.Fitnesstracking.entities.*;
import com.example.Fitnesstracking.services.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
public class MyController {

    // objects for all interfaces of services
    @Autowired
    private UsersServices usersServices;

    @Autowired
    private WorkoutServices workoutServices;

    @Autowired
    private ExerciseServices exerciseServices;

    @Autowired
    private SetsServices setsServices;

    @Autowired
    private GoalsServices goalsServices;


    @GetMapping("/home")
    public String home(){
        return " welcome to FitnessTracking Portal";
    }


//    users get put post and delete operations
    //creating users
    @PostMapping("/users")
    public Users createUsers(@RequestBody Users user){
               return this.usersServices.addUser(user);
    }

    //displaying users
    @GetMapping("/users")
    public List<Users> retrieveUsers(){
        return this.usersServices.getUsers();
    }

    //displaying user based on Id
    @PreAuthorize("hasRole('ADMIN')")
    @GetMapping("/users/{id}")
    public Users getUserById(@PathVariable("id") int id){
        return usersServices.getUserById(id);
    }

    //updating user details based on id
    @PutMapping("/users/{id}")
    public Users updateUsers(@PathVariable int id, @RequestBody Users user){
        return this.usersServices.updateUser(id, user);
    }

    //Delete users based on id
    @DeleteMapping("/users/{id}")
    public void deletingUsers(@PathVariable int id){
        this.usersServices.deleteUsers(id);
    }


//    workouts get,put,delete and post operations

    //creating a new workout for a specific user
    @PostMapping("/users/{id}/workouts")
    public Workout addWorkoutByUserId(@PathVariable int id,@RequestBody Workout workouts){
        return this.workoutServices.addWorkouts(id,workouts);
    }

    //get all workouts of a specific user
    @GetMapping("/users/{id}/workouts")
    public List<Workout> getWorkoutsByUserId(@PathVariable int id){
        return this.workoutServices.getWorkoutsByUserId(id);
    }

    //retrieving specific workout by its id
    @GetMapping("/workouts/{id}")
    public Workout getWorkoutById(@PathVariable int id){
        return this.workoutServices.getWorkoutsById(id);
    }

    //updating specific workout by its id
    @PutMapping("/workouts/{id}")
    public Workout updateWorkoutById(@PathVariable int id,@RequestBody Workout workouts){
        return this.workoutServices.updateWorkoutsById(id, workouts);
    }

    //deleting specific workout
    @DeleteMapping("/workouts/{id}")
    public void deleteWorkoutById(@PathVariable int id){
        this.workoutServices.deleteWorkoutById(id);
    }

    //   exercises get,put,delete and post operations

    //Create a new exercise for a specific workout
    @PostMapping("/workouts/{id}/exercises")
    public Exercise addExerciseByWorkoutId(@PathVariable int id, @RequestBody Exercise exercise){
        return this.exerciseServices.addExerciseByWorkoutId(id,exercise);
    }

//    Retrieve all exercises for a specific workout
    @GetMapping("/workouts/{id}/exercises")
    public List<Exercise> getExerciseByWorkoutId(@PathVariable int id){
        return exerciseServices.getExerciseByWorkoutId(id);
    }
//    Retrieve a specific exercise
    @GetMapping("/exercises/{id}")
    public Exercise getExerciseById(@PathVariable int id){
        return exerciseServices.getExerciseById(id);
    }

//    Update a specific exercise
    @PutMapping("/exercises/{id}")
    public Exercise updateExerciseById(@PathVariable int id, @RequestBody Exercise exercise){
        return this.exerciseServices.updateExerciseById(id,exercise);
    }

//    Delete a specific exercise
    @DeleteMapping("/exercises/{id}")
    public void deleteExerciseById(@PathVariable int id){
        this.exerciseServices.deleteExerciseById(id);
    }

    //   Sets get,put,delete and post operations

    //    Create a new set for a specific exercise
    @PostMapping("/exercises/{id}/sets")
    public Sets addSetsByExerciseId(@PathVariable int id, @RequestBody Sets sets){
        return setsServices.addSetsByExerciseId(id,sets);
    }

//    Retrieve all sets for a specific exercise
    @GetMapping("/exercises/{id}/sets")
    public List<Sets> getSetsByExerciseId(@PathVariable int id){
        return this.setsServices.getSetsByExerciseId(id);
    }


//    Retrieve a specific set
    @GetMapping("/sets/{id}")
    public Sets getSetsById(@PathVariable int id){
        return setsServices.getSetsById(id);
    }

//    Update a specific set
    @PutMapping("/sets/{id}")
    public Sets updateSetsById(@PathVariable int id,@RequestBody Sets sets){
        return this.setsServices.updateSetsById(id,sets);
    }

//    Delete a specific set
    @DeleteMapping("/sets/{id}")
    public void deleteSetsById(@PathVariable int id){
         this.setsServices.deleteSetsById(id);
    }


    //1. Create a new goal for a specific user
    @PostMapping("/users/{id}/goals")
    public Goals goalsCreation(@PathVariable int id, @RequestBody Goals goals){
        return this.goalsServices.goalsCreation(id,goals);
    }

    //2. Update a specific goal using goal_id
    @PutMapping("/goals/{id}")
    public Goals updateGoalsById(@PathVariable int id, @RequestBody Goals goals){
        return this.goalsServices.updateGoalsById(id,goals);
    }

    //3. Retrieve all goals for a specific user
    @GetMapping("users/{id}/goals")
    public List<Goals> getGoalsByUserId(@PathVariable int id){
        return this.goalsServices.getGoalsUserById(id);
    }
    

    //4. retrieve specific goal using goal_id
    @GetMapping("/goals/{id}")
    public Goals getGoalsById(@PathVariable int id){
        return this.goalsServices.getGoalsById(id);
    }

    //5. delete goal using goal_id
    @DeleteMapping("/goals/{id}")
    public void deleteGoalsById(@PathVariable int id){
         this.goalsServices.deleteGoalsById(id);
    }


}