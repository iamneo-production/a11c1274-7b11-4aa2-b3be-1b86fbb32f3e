package com.examly.FitnessTracking.Controller;
import org.springframework.web.bind.annotation.RestController;
import com.examly.FitnessTracking.entities.Users;
import com.examly.FitnessTracking.services.UsersService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;

@RestController
public class MyController {
	
	@Autowired
	private UsersService usersservice;

	@GetMapping("/home")
	public String home() {
		return "This is Home page";
	}
	
	// Get all users
	@GetMapping("/users")
	public List<Users> users() {
	return this.usersservice.users();
	}
	
	// Save a user
	@PostMapping("/saveUser")
	public Users saveUser(@RequestBody Users user ) {
		return this.usersservice.addUser(user);
	}
	
	
	// Get user by ID
	@GetMapping("/users/{id}")
	public Users getUser(@PathVariable int id) {
		return this.usersservice.getUser(id);
	}
	
	// Delete user by ID
	@DeleteMapping("/deleteUser/{id}")
	public void delete(@PathVariable int id) {
		this.usersservice.deleteUser(id);
	}
	
	// Update user Info
	@PostMapping("/changeUserInfo")
	public Users changeUserInfo(@RequestBody Users user ) {
		return this.usersservice.changeUserInfo(user);
	
	}
	
}

