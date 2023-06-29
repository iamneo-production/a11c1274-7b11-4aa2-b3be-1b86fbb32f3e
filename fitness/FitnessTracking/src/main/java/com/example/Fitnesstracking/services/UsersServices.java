package com.example.Fitnesstracking.services;


import com.example.Fitnesstracking.entities.Users;
import com.example.Fitnesstracking.payloads.UserDto;

import javax.mail.MessagingException;

import java.util.List;

public interface UsersServices {

    Users addUser(Users user);

    List<Users> getUsers();

    Users getUserById(int id);

    Users updateUser(int id, Users user);

    void deleteUsers(int id);
    
    UserDto registerNewAdmin(UserDto userDto);
    
    UserDto registerNewUser(UserDto userDto);
    
    String forgotPassword(String email) throws MessagingException;

    String setPassword(String email, String newPassword);

    String verifyOtp(String email, String otp);
}
