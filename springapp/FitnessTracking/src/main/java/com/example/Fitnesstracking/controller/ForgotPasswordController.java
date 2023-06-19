package com.example.Fitnesstracking.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.Fitnesstracking.Dao.UsersDao;
import com.example.Fitnesstracking.services.UsersServices;

import jakarta.mail.MessagingException;

@RestController
public class ForgotPasswordController {

    @Autowired
    private UsersDao usersDao;

    @Autowired
    private UsersServices usersServices;

    @PostMapping("/send-otp")
    public String forgotPassword(@RequestParam String email) throws MessagingException {
        return this.usersServices.forgotPassword(email);
    }


    @PutMapping("/verify-otp")
    public String verifyOtp(@RequestParam String email, @RequestParam String otp){
        return this.usersServices.verifyOtp(email,otp);
    }

    @PutMapping("/set-password")
    public String setPassword(@RequestParam String email , @RequestHeader String newPassword){
        return this.usersServices.setPassword(email,newPassword);
    }

}
