package com.example.Fitnesstracking.entities;


import com.fasterxml.jackson.annotation.JsonBackReference;
import javax.persistence.*;

import java.util.List;

@Entity
public class Exercise {
    //instance variables
    @Id
    @GeneratedValue(generator = "exercise_sequence", strategy = GenerationType.IDENTITY)
    @SequenceGenerator(name = "exercise_seq", sequenceName = "exercise_sequence", initialValue = 1, allocationSize = 1)
    private int exerciseId; //primary key
    private String name;
    private String description;
    private String is_completed;

    @ManyToOne
    @JoinColumn(name = "workout_workout_id")
    @JsonBackReference
    private Workout workouts;

    public Workout getWorkouts() {
        return workouts;
    }

    public void setWorkouts(Workout workouts) {
        this.workouts = workouts;
    }

    @OneToMany(mappedBy = "exercises", cascade = CascadeType.ALL)
    private List<Sets> sets;

    public List<Sets> getSets() {
        return sets;
    }

    public void setSets(List<Sets> sets) {
        this.sets = sets;
    }

    //    constructors
    public Exercise() {
        super();
    }

    public Exercise(int exerciseId, String name, String description, String is_completed) {
        this.exerciseId = exerciseId;
        this.name = name;
        this.description = description;
        this.is_completed = is_completed;
    }

    public int getExerciseId() {
        return exerciseId;
    }

    public void setExerciseId(int exerciseId) {
        this.exerciseId = exerciseId;
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

    public String getIs_completed() {
        return is_completed;
    }

    public void setIs_completed(String is_completed) {
        this.is_completed = is_completed;
    }
}
