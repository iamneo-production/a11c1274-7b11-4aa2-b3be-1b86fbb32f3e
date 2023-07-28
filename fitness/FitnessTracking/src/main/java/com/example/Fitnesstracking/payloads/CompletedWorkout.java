package com.example.Fitnesstracking.payloads;

public class CompletedWorkout {
	
    private long workoutId;
    private long completedCount;
    private long totalCount;
    
    
    
    
 
    
	public CompletedWorkout(long workoutId, long completedCount, long totalCount) {
		super();
		this.workoutId = workoutId;
		this.completedCount = completedCount;
		this.totalCount = totalCount;
	}
	public long getWorkoutId() {
		return workoutId;
	}
	public void setWorkoutId(long workoutId) {
		this.workoutId = workoutId;
	}
	public long getCompletedCount() {
		return completedCount;
	}
	public void setCompletedCount(long completedCount) {
		this.completedCount = completedCount;
	}
	public long getTotalCount() {
		return totalCount;
	}
	public void setTotalCount(long totalCount) {
		this.totalCount = totalCount;
	}
    
    

}
