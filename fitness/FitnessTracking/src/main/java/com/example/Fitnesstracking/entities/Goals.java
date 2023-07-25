package com.example.Fitnesstracking.entities;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;


@Entity
public class Goals {

    @Id
    @GeneratedValue(generator = "goal_sequence", strategy = GenerationType.IDENTITY)
    @SequenceGenerator(name = "goal_seq", sequenceName = "goal_sequence", initialValue = 1, allocationSize = 1)
    private int goal_id;
    private String goalType;
    private String goalMetric;
    private int targetValue;
    private String timeFrame;
    private String additionalNotes;
    private String is_completed;


    @ManyToOne
    @JoinColumn(name = "user_id")
    @JsonBackReference
    private Users user;

    public Users getUser() {
        return user;
    }

    public void setUser(Users user) {
        this.user = user;
    }


    public Goals() {
        super();
    }

    public Goals(int goal_id, String goalType, String goalMetric, int targetValue, String timeFrame, String additionalNotes, String is_completed) {
        this.goal_id = goal_id;
        this.goalType = goalType;
        this.goalMetric = goalMetric;
        this.targetValue = targetValue;
        this.timeFrame = timeFrame;
        this.additionalNotes = additionalNotes;
        this.is_completed = is_completed;
    }

    public int getGoal_id() {
        return goal_id;
    }

    public void setGoal_id(int goal_id) {
        this.goal_id = goal_id;
    }

    public String getGoalType() {
        return goalType;
    }

    public void setGoalType(String goalType) {
        this.goalType = goalType;
    }

    public String getGoalMetric() {
        return goalMetric;
    }

    public void setGoalMetric(String goalMetric) {
        this.goalMetric = goalMetric;
    }

    public int getTargetValue() {
        return targetValue;
    }

    public void setTargetValue(int targetValue) {
        this.targetValue = targetValue;
    }

    public String getTimeFrame() {
        return timeFrame;
    }

    public void setTimeFrame(String timeFrame) {
        this.timeFrame = timeFrame;
    }

    public String getAdditionalNotes() {
        return additionalNotes;
    }

    public void setAdditionalNotes(String additionalNotes) {
        this.additionalNotes = additionalNotes;
    }

    public String getIs_completed() {
        return is_completed;
    }

    public void setIs_completed(String is_completed) {
        this.is_completed = is_completed;
    }
}
