package com.example.Fitnesstracking.entities;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;

@Entity
public class Sets {
    @Id
    @GeneratedValue(generator = "sets_sequence", strategy = GenerationType.IDENTITY)
    @SequenceGenerator(name = "sets_seq", sequenceName = "sets_sequence", initialValue = 1, allocationSize = 1)
    private int setId;  //primary key
    private int reps;
    private int weight;
    private int duration;
    private boolean is_completed;

    @ManyToOne
    @JoinColumn(name = "exercise_id")
    @JsonBackReference
    private Exercise exercises;

    public Exercise getExercises() {
        return exercises;
    }

    public void setExercises(Exercise exercises) {
        this.exercises = exercises;
    }

    //constructors
    public Sets() {
        super();
    }

    public Sets(int setId, int reps, int weight, int duration, boolean is_completed) {
        super();
        this.setId = setId;
        this.reps = reps;
        this.weight = weight;
        this.duration = duration;
        this.is_completed=is_completed;
    }


//    Setters and getters for instance variables
    public int getSetId() {
        return setId;
    }

    public void setSetId(int setId) {
        this.setId = setId;
    }

    public int getReps() {
        return reps;
    }

    public void setReps(int reps) {
        this.reps = reps;
    }

    public int getWeight() {
        return weight;
    }

    public void setWeight(int weight) {
        this.weight = weight;
    }

    public int getDuration() {
        return duration;
    }

    public void setDuration(int duration) {
        this.duration = duration;
    }

    public boolean getIs_completed() {
        return is_completed;
    }

    public void setIs_completed(boolean is_completed) {
        this.is_completed = is_completed;
    }
}