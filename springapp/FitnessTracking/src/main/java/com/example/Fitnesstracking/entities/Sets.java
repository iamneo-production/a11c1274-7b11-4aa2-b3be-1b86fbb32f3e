package com.example.Fitnesstracking.entities;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;

@Entity
public class Sets {

    //instance variables
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
