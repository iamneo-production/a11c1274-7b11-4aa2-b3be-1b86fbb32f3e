package com.example.springapp.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.springapp.model.User;
import com.example.springapp.repository.UserRepository;

@Service
public class UserService implements UserServiceInterface {

    @Autowired
    private UserRepository userRepository;

    @Override
    public String createUser(User user) {
        userRepository.save(user);
        return "User Created";
    }

    @Override
    public List<User> getAllUsers() {
        return userRepository.findAll();
        
    }

    @Override
    public User getUserByUserId(long id) {
        return userRepository.findById(id)
        .orElseThrow(()-> new RuntimeException("User Id not found"));
    }

    @Override
    public String updateUser(User user) {
     User userDto = this.userRepository.findById(user.getId())
                        .orElseThrow(()-> new RuntimeException("user not found"));
        if(user.getName()!=null) userDto.setName(user.getName());
        if(user.getAge()!= 0) userDto.setAge(user.getAge());
        if(user.getEmail()!=null) userDto.setEmail(user.getEmail());
        if(user.getGender()!=null) userDto.setGender(user.getGender());
        if(user.getGoals()!=null) userDto.setGoals(user.getGoals());
        if(user.getHeight()!=null) userDto.setHeight(user.getHeight());
        if(user.getWeight()!=null) userDto.setWeight(user.getWeight());
        if(user.getPassword()!=null) userDto.setPassword(user.getPassword());
        if(user.getRole()!=null) userDto.setRole(user.getRole());
        this.userRepository.save(userDto);
        return "User Updated"; 
    }

    @Override
    public String deleteSpecificUser(long id) {
        this.userRepository.deleteById(id);
        return "User deleted";
    }
    
}
