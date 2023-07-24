package com.example.Fitnesstracking.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.Fitnesstracking.Dao.UsersDao;
import com.example.Fitnesstracking.entities.Exercise;
import com.example.Fitnesstracking.entities.Goals;
import com.example.Fitnesstracking.entities.Sets;
import com.example.Fitnesstracking.entities.Users;
import com.example.Fitnesstracking.entities.Workout;
import com.example.Fitnesstracking.payloads.Allusers;
import com.example.Fitnesstracking.payloads.AnalyticsData;
import com.example.Fitnesstracking.payloads.CompletedWorkout;
import com.example.Fitnesstracking.payloads.Dashboardata;
import com.example.Fitnesstracking.payloads.DataItem;
import com.example.Fitnesstracking.payloads.LineData;
import com.example.Fitnesstracking.payloads.PieItem;
import com.example.Fitnesstracking.payloads.RadarItem;
import com.example.Fitnesstracking.payloads.UserDto;
import com.example.Fitnesstracking.payloads.Userbyid;
import com.example.Fitnesstracking.services.ExerciseServices;
import com.example.Fitnesstracking.services.GoalsServices;
import com.example.Fitnesstracking.services.SetsServices;
import com.example.Fitnesstracking.services.UsersServices;
import com.example.Fitnesstracking.services.WorkoutServices;

@RestController
@CrossOrigin(origins = "*")
public class MyController {

	// objects for all interfaces of services


	@Autowired
	private UsersDao userdao;
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

	@Autowired
	private ModelMapper modelMapper;

	@GetMapping("/home")
	public String home() {
		return " welcome to FitnessTracking Portal";
	}

//    users get put post and delete operations
	// creating users
	@PostMapping("/users")
	public Users createUsers(@RequestBody Users user) {
		return this.usersServices.addUser(user);
	}

	@GetMapping("api/v1/auth/usersdata")
	public List<UserDto> retrieveUsersalldata() {


    	List<Users> allusers = this.userdao.findAllUser();

    	List<UserDto> allreq =  new ArrayList<>();

    	for(int i=0; i<allusers.size(); i++) {
    	allreq.add(this.modelMapper.map(allusers.get(i), UserDto.class));
    	}
    	return allreq;

    }


	// displaying users
	@GetMapping("api/v1/auth/users")
	public List<Allusers> retrieveUsers() {
		return this.usersServices.getUsers();
	}

	// displaying user based on Id
//    @PreAuthorize("hasRole('ADMIN')")
	@GetMapping("api/v1/auth/users/{id}")
	public Userbyid getUserById(@PathVariable("id") int id) {
		return usersServices.getUserById(id);
	}

	// updating user details based on id
	@PutMapping("api/v1/auth/users/{id}")
	public String updateUsers(@PathVariable int id, @RequestBody Users user) {
		this.usersServices.updateUser(id, user);
		return "Success";
	}

	// Delete users based on id
	@DeleteMapping("api/v1/auth/users/{id}")
	public String deletingUsers(@PathVariable int id) {
		this.usersServices.deleteUsers(id);
		return "Success";
	}

//    workouts get,put,delete and post operations

	// creating a new workout for a specific user
	@PostMapping("api/v1/users/{id}/workouts")
	public Workout addWorkoutByUserId(@PathVariable int id, @RequestBody Workout workouts) {
		return this.workoutServices.addWorkouts(id, workouts);
	}

	// get all workouts of a specific user
	@GetMapping("api/v1/users/{id}/workouts")
	public List<Workout> getWorkoutsByUserId(@PathVariable int id) {
		return this.workoutServices.getWorkoutsByUserId(id);
	}

	@GetMapping("api/v1/users/{id}/completedworkouts")
	public List<Workout> getcompletedworkoutsbyuserid(@PathVariable int id) {

		return this.workoutServices.getCompletedWorkoutsByUserId(id);

	}


	// retrieving specific workout by its id
	@GetMapping("api/v1/workouts/{id}")
	public Workout getWorkoutById(@PathVariable int id) {
		return this.workoutServices.getWorkoutsById(id);
	}

	// updating specific workout by its id
	@PutMapping("api/v1/workouts/{id}")
	public Workout updateWorkoutById(@PathVariable int id, @RequestBody Workout workouts) {
		return this.workoutServices.updateWorkoutsById(id, workouts);
	}

	// deleting specific workout
	@DeleteMapping("api/v1/workouts/{id}")
	public void deleteWorkoutById(@PathVariable int id) {
		this.workoutServices.deleteWorkoutById(id);
	}

	// exercises get,put,delete and post operations

	// Create a new exercise for a specific workout
	@PostMapping("api/v1/workouts/{id}/exercises")
	public Exercise addExerciseByWorkoutId(@PathVariable int id, @RequestBody Exercise exercise) {
		return this.exerciseServices.addExerciseByWorkoutId(id, exercise);
	}

//    Retrieve all exercises for a specific workout
	@GetMapping("api/v1/workouts/{id}/exercises")
	public List<Exercise> getExerciseByWorkoutId(@PathVariable int id) {
		return exerciseServices.getExerciseByWorkoutId(id);
	}

	@GetMapping("api/v1/users/{id}/exercises")
	public List<Exercise> getExerciseByUserId(@PathVariable int id){
		return this.exerciseServices.getExerciseByUserId(id);
	}


//    Retrieve a specific exercise
	@GetMapping("api/v1/exercises/{id}")
	public Exercise getExerciseById(@PathVariable int id) {
		return exerciseServices.getExerciseById(id);
	}

//    Update a specific exercise
	@PutMapping("api/v1/exercises/{id}")
	public Exercise updateExerciseById(@PathVariable int id, @RequestBody Exercise exercise) {
		return this.exerciseServices.updateExerciseById(id, exercise);
	}

//    Delete a specific exercise
	@DeleteMapping("api/v1/exercises/{id}")
	public void deleteExerciseById(@PathVariable int id) {
		this.exerciseServices.deleteExerciseById(id);
	}

	// Sets get,put,delete and post operations

	// Create a new set for a specific exercise
	@PostMapping("api/v1/exercises/{id}/sets")
	public Sets addSetsByExerciseId(@PathVariable int id, @RequestBody Sets sets) {
		return setsServices.addSetsByExerciseId(id, sets);
	}

//    Retrieve all sets for a specific exercise
	@GetMapping("/exercises/{id}/sets")
	public List<Sets> getSetsByExerciseId(@PathVariable int id) {
		return this.setsServices.getSetsByExerciseId(id);
	}

//    Retrieve a specific set
	@GetMapping("/sets/{id}")
	public Sets getSetsById(@PathVariable int id) {
		return setsServices.getSetsById(id);
	}

//    Update a specific set
	@PutMapping("/sets/{id}")
	public Sets updateSetsById(@PathVariable int id, @RequestBody Sets sets) {
		return this.setsServices.updateSetsById(id, sets);
	}

//    Delete a specific set
	@DeleteMapping("/sets/{id}")
	public void deleteSetsById(@PathVariable int id) {
		this.setsServices.deleteSetsById(id);
	}

	// 1. Create a new goal for a specific user
	@PostMapping("/api/v1/users/{id}/goals")
	public Goals goalsCreation(@PathVariable int id, @RequestBody Goals goals) {
		return this.goalsServices.goalsCreation(id, goals);
	}

	// 2. Update a specific goal using goal_id
	@PutMapping("/api/v1/goals/{id}")
	public Goals updateGoalsById(@PathVariable int id, @RequestBody Goals goals) {
		return this.goalsServices.updateGoalsById(id, goals);
	}

	// 3. Retrieve all goals for a specific user
	@GetMapping("/api/v1/users/{id}/goals")
	public List<Goals> getGoalsByUserId(@PathVariable int id) {
		return this.goalsServices.getGoalsUserById(id);
	}

	// 4. retrieve specific goal using goal_id
	@GetMapping("/api/v1/goals/{id}")
	public Goals getGoalsById(@PathVariable int id) {
		return this.goalsServices.getGoalsById(id);
	}

	// 5. delete goal using goal_id
	@DeleteMapping("/api/v1/goals/{id}")
	public void deleteGoalsById(@PathVariable int id) {
		this.goalsServices.deleteGoalsById(id);
	}

//	@GetMapping("/api/v1/chart/bar/{id}")
//	public List<DataItem> getBarcharts(@PathVariable int id) {
//		return this.usersServices.getBarchart(id);
//	}

	@GetMapping("/api/v1/chart/line/{id}")
	public List<LineData> getLinechart(@PathVariable int id) {
		return this.usersServices.getLinechart(id);
	}

	@GetMapping("/api/v1/chart/pie/{id}")
	public List<PieItem> getPiechart(@PathVariable int id) {
		return this.usersServices.getPiechart(id);
	}



//	@GetMapping("/api/v1/admin/analytics")
//	public ResponseEntity<AnalyticsData> getAnalyticsData() {
//		long numberOfUsers = usersServices.getTotalNumberOfUsers();
//		long numberOfExercises = exerciseServices.getTotalNumberOfExercises();
//		long numberOfWorkouts = workoutServices.getTotalNumberOfWorkouts();
//		long numberOfSets = setsServices.getTotalNumberOfSets();
//		long numberOfGoals = goalsServices.getTotalNumberOfGoals();
//
//		AnalyticsData analyticsData = new AnalyticsData(numberOfUsers, numberOfExercises, numberOfWorkouts,
//				numberOfSets, numberOfGoals);
//
//		return new ResponseEntity<>(analyticsData, HttpStatus.OK);
//	}

	@GetMapping("/api/v1/chart/transactions/{id}")
	public List<Dashboardata> getDash(@PathVariable int id) {
		return this.workoutServices.getDashBoard(id);
	}


	@GetMapping("/api/v1/workouts/{id}/completed")
	public List<CompletedWorkout> getdata(@PathVariable int id) {
		return this.workoutServices.getCompleted(id);
	}


	@GetMapping("/api/v1/count/totalworkouts/{id}")
	public long totalworkouts(@PathVariable int id) {
		return this.workoutServices.gettotalworkouts(id);
	}

//
	@GetMapping("/api/v1/count/totalexercises/{id}")
	public long totalexercises(@PathVariable int id) {
		return this.usersServices.gettotalworkouts(id);
	}

	@GetMapping("/api/v1/count/totalsets/{id}")
	public long totalsets(@PathVariable int id) {
		return this.usersServices.gettotalsets(id);
	}

//
	@GetMapping("/api/v1/count/totalgoals/{id}")
	public long totalgoals(@PathVariable int id) {
		return this.usersServices.getgoals(id);
	}

	@GetMapping("/api/v1/getwidonuid/{id}")
	public List<Integer> getwidonuid(@PathVariable int id) {
		return this.workoutServices.findWorkoutIdsByUserId(id);
	}

	@GetMapping("/api/v1/count/notcompletedworkouts/{id}")
	public long getnotcompletedworkouts(@PathVariable int id) {
		return this.usersServices.getnotcompletedworkouts(id);
	}

	@GetMapping("/api/v1/count/notcompletedexercises/{id}")
	public long getnotcompletedexer(@PathVariable int id) {
		return this.usersServices.getnotcompletedexercises(id);
	}

	@GetMapping("/api/v1/count/notcompletedsets/{id}")
	public long notcompletedsets(@PathVariable int id) {
		return this.usersServices.getnotcompletedsets(id);
	}

	@GetMapping("/api/v1/count/notcompletedgoals/{id}")
	public long notcompletedgoals(@PathVariable int id) {
		return this.usersServices.getnotcompletedgoals(id);
	}

	// get Eid on Wid
	@GetMapping("/api/v1/geteidonwid/{id}")
	public List<Integer> geteidonwid(@PathVariable int id) {
		return this.exerciseServices.findEIdsByWId(id);
	}

	// get sid on eid
	@GetMapping("/api/v1/getsidoneid/{id}")
	public List<Integer> getsidoneid(@PathVariable int id) {
		return this.setsServices.findSetIdsByExerciseId(id);
	}

	@GetMapping("/api/v1/getworkoutnames/{id}")
	public List<String> getwnamesonuid(@PathVariable int id) {
		return this.usersServices.getwnamesonuid(id);
	}

	@GetMapping("/api/v1/getexercisenames/{id}")
	public List<String> getenamesonwid(@PathVariable int id) {
		return this.usersServices.getenamesonwid(id);
	}

	@GetMapping("api/v1/getcompletedarray/{id}")
	public List<Long>  getcompltedarray(@PathVariable int id){
		return this.usersServices.getcompltedarray(id);
	}

	@GetMapping("api/v1/getnotcompletedarray/{id}")
	public List<Long>  getnotcompltedarray(@PathVariable int id){
		return this.usersServices.getnotcompltedarray(id);
	}

	@GetMapping("api/v1/getotalarray/{id}")
	public List<Long>  getotalarray(@PathVariable int id){
		return this.usersServices.getotalarray(id);
	}
	@GetMapping("/api/v1/admin/status")
	public Map<String, Integer> getTotalUsersAvgWorkoutDuration(){
		return this.usersServices.getTotalUsersAvgWorkoutDuration();
	}
	@GetMapping("api/v1/status/{id}/exercises")
	public Map<String,Integer> getTotalExercisesByWorkoutId(@PathVariable int id){
		return this.exerciseServices.getTotalExercisesByWorkoutId(id);
	}
	@GetMapping("api/v1/users/{uid}/workouts/{id}/exercises")
	public List<Exercise> getAllExercisesByWorkoutId(@PathVariable("uid") int uid,@PathVariable("id") int id){
		return this.exerciseServices.getAllExercisesByWorkoutId(uid,id);
	}

	@GetMapping("api/v1/workout/{id}/isCompleted")
	public String getWorkoutsExerciseStatus(@PathVariable int id){
		return this.exerciseServices.getExerciseStatus(id);
	}


}
