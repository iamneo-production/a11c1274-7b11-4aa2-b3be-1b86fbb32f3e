package com.example.springapp.service;

import java.util.List;

import com.example.springapp.model.User;

public interface UserServiceInterface {

    String createUser(User user);

    List<User> getAllUsers();

    User getUserByUserId(long id);

    String updateUser(User user);

    String deleteSpecificUser(long id);

    
}
