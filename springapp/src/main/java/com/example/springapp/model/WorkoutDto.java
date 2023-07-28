package com.example.springapp.model;

import java.time.LocalDate;

public class WorkoutDto {
    private long id;
    private User user;
    private LocalDate date;
    private String duration;
    private String notes;
    
    

    public long getId() {
        return id;
    }



    public void setId(long id) {
        this.id = id;
    }



    public User getUser() {
        return user;
    }



    public void setUser(User user) {
        this.user = user;
    }



    public LocalDate getDate() {
        return date;
    }



    public void setDate(LocalDate date) {
        this.date = date;
    }



    public String getDuration() {
        return duration;
    }



    public void setDuration(String duration) {
        this.duration = duration;
    }



    public String getNotes() {
        return notes;
    }



    public void setNotes(String notes) {
        this.notes = notes;
    }



    public static class User{
        private long id;

        public long getId() {
            return id;
        }

        public void setId(long id) {
            this.id = id;
        }
        
    }
}
