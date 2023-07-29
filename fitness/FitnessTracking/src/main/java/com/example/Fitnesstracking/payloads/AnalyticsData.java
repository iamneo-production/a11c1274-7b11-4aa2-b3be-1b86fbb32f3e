package com.example.Fitnesstracking.payloads;

public class AnalyticsData {
	
    private long numberOfUsers;
    private long numberOfExercises;
    private long numberOfWorkouts;
    private long numberOfSets;
    private long numberOfGoals;
    
    
    
    
	public AnalyticsData(long numberOfUsers, long numberOfExercises, long numberOfWorkouts, long numberOfSets,
			long numberOfGoals) {
		super();
		this.numberOfUsers = numberOfUsers;
		this.numberOfExercises = numberOfExercises;
		this.numberOfWorkouts = numberOfWorkouts;
		this.numberOfSets = numberOfSets;
		this.numberOfGoals = numberOfGoals;
	}
	
	
	public long getNumberOfUsers() {
		return numberOfUsers;
	}
	public void setNumberOfUsers(long numberOfUsers) {
		this.numberOfUsers = numberOfUsers;
	}
	public long getNumberOfExercises() {
		return numberOfExercises;
	}
	public void setNumberOfExercises(long numberOfExercises) {
		this.numberOfExercises = numberOfExercises;
	}
	public long getNumberOfWorkouts() {
		return numberOfWorkouts;
	}
	public void setNumberOfWorkouts(long numberOfWorkouts) {
		this.numberOfWorkouts = numberOfWorkouts;
	}
	public long getNumberOfSets() {
		return numberOfSets;
	}
	public void setNumberOfSets(long numberOfSets) {
		this.numberOfSets = numberOfSets;
	}
	public long getNumberOfGoals() {
		return numberOfGoals;
	}
	public void setNumberOfGoals(long numberOfGoals) {
		this.numberOfGoals = numberOfGoals;
	}


    
}


