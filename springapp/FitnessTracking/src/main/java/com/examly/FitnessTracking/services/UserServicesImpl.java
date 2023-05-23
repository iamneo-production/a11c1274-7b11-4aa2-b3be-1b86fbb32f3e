package com.example.Fitnesstracking.services;

import com.example.Fitnesstracking.Dao.UsersDao;
import com.example.Fitnesstracking.entities.Users;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UsersServicesImpl implements UsersServices{
    @Autowired
    private UsersDao usersDao;
    

 

    @Override
    public void deleteUsers(int id){
        Users user = usersDao.findById(id)
                .orElseThrow(()->new RuntimeException("user not found"));
        usersDao.delete(user);
    }
}
