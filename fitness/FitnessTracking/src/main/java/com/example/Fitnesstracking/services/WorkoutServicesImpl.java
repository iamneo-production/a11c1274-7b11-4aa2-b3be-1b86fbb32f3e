package com.example.Fitnesstracking.services;

import com.example.Fitnesstracking.Dao.ExerciseDao;
import com.example.Fitnesstracking.Dao.UsersDao;
import com.example.Fitnesstracking.Dao.WorkoutDao;
import com.example.Fitnesstracking.entities.Users;
import com.example.Fitnesstracking.entities.Workout;
import com.example.Fitnesstracking.payloads.CompletedWorkout;
import com.example.Fitnesstracking.payloads.Dashboardata;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class WorkoutServicesImpl implements WorkoutServices{

    @Autowired
    private UsersDao usersDao;

    @Autowired
    private WorkoutDao workoutDao;
    
    @Autowired
    private ExerciseDao exerciseDao;
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
        if (workouts.getIs_completed()!=null){workout.setIs_completed(workouts.getIs_completed());}

        return this.workoutDao.save(workout);
    }

    @Override
    public void deleteWorkoutById(int id){
        Workout workouts = workoutDao.findById(id)
                .orElseThrow(()->new RuntimeException("workout id not found"));
        workoutDao.delete(workouts);
    }

	@Override
	public long getTotalNumberOfWorkouts() {
		// TODO Auto-generated method stub
		return workoutDao.count();
	}

	@Override
	public List<Integer> findWorkoutIdsByUserId(int userId) {
		return workoutDao.findWorkoutIdsByUserId(userId);
	}

	@Override
	public List<Dashboardata> getDashBoard(int userid) {
		 List<Dashboardata> mockTransactions = new ArrayList<>();
		 
		 // get workouts (date and name by userid)
		 long totals = workoutDao.findWorkoutIdsByUserId(userid).size();
		 List<String> workoutnamesbyuserid = workoutDao.findWorkoutnamesbyuserid(userid);
		 
		 List<String> workoutdatesbyuserid = workoutDao.findWorkoutdatessbyuserid(userid) ;
		 
		 for (int i = 0; i < totals; i++) {
		 Dashboardata dash = new Dashboardata(workoutnamesbyuserid.get(i), workoutdatesbyuserid.get(i));
         mockTransactions.add(dash);
		 }
		 
		 
		 return mockTransactions;
	}

	@Override
	public long gettotalworkouts(int id) {
		// TODO Auto-generated method stub
		return workoutDao.findWorkoutIdsByUserId(id).size();
	}

	@Override
	public List<CompletedWorkout> getCompleted(int id) {
		// TODO Auto-generated method stub
//		
//        List<CompletedWorkout> completedData = new ArrayList<>();
//        
//        List<Workout> workouts = workoutDao.getWorkoutsByUserId(id);
//        
//        List<Long> exercomplted = 
//        List<Long> totalcountexr =
//        
//        
//        for(int i = 0; i< workouts.size(); i++) {
//        CompletedWorkout data1 = new CompletedWorkout(workouts.get(i).getWorkoutId(), exercomplted[workouts.get(i).getWorkoutId()], totalcountexr[i]);
//        completedData.add(data1);
//        }
        
		return null;
	}


    @Override
    public List<Workout> getCompletedWorkoutsByUserId(int id) {
        return this.workoutDao.getCompletedWorkoutsByUserId(id);
    }

}
