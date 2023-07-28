package com.example.springapp.model;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;


@Entity
public class Exercise {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private long workoutId;
    private String name;
    private String description;
    public Exercise(long id, long workoutId, String name, String description) {
        super();
        this.id = id;
        this.workoutId = workoutId;
        this.name = name;
        this.description = description;
    }
    public Exercise() {
        super();
    }
    public long getId() {
        return id;
    }
    public void setId(long id) {
        this.id = id;
    }
    public long getWorkoutId() {
        return workoutId;
    }
    public void setWorkoutId(long workoutId) {
        this.workoutId = workoutId;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public String getDescription() {
        return description;
    }
    public void setDescription(String description) {
        this.description = description;
    }
    
    
}
