package com.example.springapp.model;

import java.time.LocalDate;

public class WorkoutDetails {
    private long id;
    private User user;
    private LocalDate date;
    private String duration;
    private String notes; 

    
    
    public WorkoutDetails() {
        super();
    }



    public long getId() {
        return id;
    }



    public void setId(long id) {
        this.id = id;
    }



    public User getUser() {
        return user;
    }



    public void setUser(User userDetails) {
        user = userDetails;
    }



    public LocalDate getDate() {
        return date;
    }



    public void setDate(LocalDate localDate) {
        this.date = localDate;
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
        private String name;
        private String email;
        private String password;
        private String height;
        private String weight;
        private Long age;
        private String gender;
        private String goals;
        private String role;
        public long getId() {
            return id;
        }
        public void setId(long id) {
            this.id = id;
        }
        public String getName() {
            return name;
        }
        public void setName(String name) {
            this.name = name;
        }
        public String getEmail() {
            return email;
        }
        public void setEmail(String email) {
            this.email = email;
        }
        public String getPassword() {
            return password;
        }
        public void setPassword(String password) {
            this.password = password;
        }
        public String getHeight() {
            return height;
        }
        public void setHeight(String height) {
            this.height = height;
        }
        public String getWeight() {
            return weight;
        }
        public void setWeight(String weight) {
            this.weight = weight;
        }
        public Long getAge() {
            return age;
        }
        public void setAge(Long age) {
            this.age = age;
        }
        public String getGender() {
            return gender;
        }
        public void setGender(String gender) {
            this.gender = gender;
        }
        public String getGoals() {
            return goals;
        }
        public void setGoals(String goals) {
            this.goals = goals;
        }
        public String getRole() {
            return role;
        }
        public void setRole(String role) {
            this.role = role;
        }
        

    }
}
