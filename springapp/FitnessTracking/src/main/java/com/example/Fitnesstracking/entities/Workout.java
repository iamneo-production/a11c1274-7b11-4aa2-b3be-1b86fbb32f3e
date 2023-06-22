package com.example.Fitnesstracking.entities;


import com.fasterxml.jackson.annotation.JsonBackReference;

import jakarta.persistence.*;
import org.hibernate.annotations.ColumnDefault;

import java.util.List;

@Entity
public class Workout {

//    instance variables
    @Id
    @GeneratedValue(generator = "workout_sequence", strategy = GenerationType.IDENTITY)
    @SequenceGenerator(name = "workout_seq", sequenceName = "workout_sequence", initialValue = 1, allocationSize = 1)
    private int workoutId; //primary key
    private String date;
    private int duration;
    private String notes;
    private boolean is_completed;

    @ManyToOne
    @JoinColumn(name = "user_id") //foreign key
    @JsonBackReference
    private Users user;

    @OneToMany(mappedBy = "workouts", cascade = CascadeType.ALL)
    private List<Exercise> exercises;

    public List<Exercise> getExercises() {
        return exercises;
    }

    public void setExercises(List<Exercise> exercises) {
        this.exercises = exercises;
    }

    public Users getUser() {
        return user;
    }

    public void setUser(Users user) {
        this.user = user;
    }

    //constructors
    public Workout() {
        super();
    }

    public Workout(int workoutId, String date, int duration, String notes, boolean is_completed) {
        super();
        this.workoutId = workoutId;
        this.date = date;
        this.duration = duration;
        this.notes = notes;
        this.is_completed=is_completed;
    }

//    Setters and getters for instance variables
    public int getWorkoutId() {
        return workoutId;
    }

    public void setWorkoutId(int workoutId) {
        this.workoutId = workoutId;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public int getDuration() {
        return duration;
    }

    public void setDuration(int duration) {
        this.duration = duration;
    }

    public String getNotes() {
        return notes;
    }

    public void setNotes(String notes) {
        this.notes = notes;
    }

    public boolean getIs_completed() {
        return is_completed;
    }

    public void setIs_completed(boolean is_completed) {
        this.is_completed = is_completed;
    }
}
