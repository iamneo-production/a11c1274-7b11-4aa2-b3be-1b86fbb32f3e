package com.example.Fitnesstracking.services;
import com.example.Fitnesstracking.entities.Users;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface UsersServices {

    Users addUser(Users user);

    List<Users> getUsers();


    void deleteUsers(int id);
}

