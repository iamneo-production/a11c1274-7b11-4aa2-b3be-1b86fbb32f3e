package com.example.springapp.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="SETS")
public class Set{
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private long exerciseId;
    private long reps;
    private String weight;
    private String duration;

    public Set() {
        super();
    }

    public Set(long id, long exerciseId, long reps, String weight, String duration) {
        super();
        this.id = id;
        this.exerciseId = exerciseId;
        this.reps = reps;
        this.weight = weight;
        this.duration = duration;
    }

    public long getId() {
        return id;
    }
    public void setId(long id) {
        this.id = id;
    }
    public long getExerciseId() {
        return exerciseId;
    }
    public void setExerciseId(long exerciseId) {
        this.exerciseId = exerciseId;
    }
    public long getReps() {
        return reps;
    }
    public void setReps(long reps) {
        this.reps = reps;
    }
    public String getWeight() {
        return weight;
    }
    public void setWeight(String weight) {
        this.weight = weight;
    }
    public String getDuration() {
        return duration;
    }
    public void setDuration(String duration) {
        this.duration = duration;
    }
     
}