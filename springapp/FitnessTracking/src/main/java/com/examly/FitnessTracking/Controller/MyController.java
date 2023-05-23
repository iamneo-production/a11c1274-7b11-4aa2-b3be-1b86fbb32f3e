package com.example.Fitnesstracking.controller;
import com.example.Fitnesstracking.entities.Exercise;
import com.example.Fitnesstracking.entities.Sets;
import com.example.Fitnesstracking.entities.Users;
import com.example.Fitnesstracking.entities.Workout;
import com.example.Fitnesstracking.services.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class MyController {

	@Autowired
	private UsersService usersservice;

    @GetMapping("/")
	public String landing() {
		return "This is Landing  page";
	}

	@GetMapping("/home")
	public String home() {
		return "This is Home page";
	}
	// Delete user by ID
	@DeleteMapping("/deleteUser/{id}")
	public void delete(@PathVariable int id) {
		this.usersservice.deleteUser(id);
	}
	//    Create a new set for a specific exercise
    @PostMapping("/exercises/{id}/sets")
    public Sets addSetsByExerciseId(@PathVariable int id, @RequestBody Sets sets){
        return setsServices.addSetsByExerciseId(id,sets);
    }
}
