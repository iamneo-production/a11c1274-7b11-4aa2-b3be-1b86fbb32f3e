package com.example.Fitnesstracking.services;


import java.util.List;
import java.util.Map;

import com.example.Fitnesstracking.entities.Users;
import com.example.Fitnesstracking.payloads.Allusers;
import com.example.Fitnesstracking.payloads.DataItem;
import com.example.Fitnesstracking.payloads.LineData;
import com.example.Fitnesstracking.payloads.PieItem;
import com.example.Fitnesstracking.payloads.RadarItem;
import com.example.Fitnesstracking.payloads.UserDto;
import com.example.Fitnesstracking.payloads.Userbyid;

import javax.mail.MessagingException;

public interface UsersServices {

    Users addUser(Users user);

    List<Allusers> getUsers();

    Userbyid getUserById(int id);

    String updateUser(int id, Users user);

    void deleteUsers(int id);
    
    UserDto registerNewAdmin(UserDto userDto);
    
    UserDto registerNewUser(UserDto userDto);
    
    String forgotPassword(String email) throws MessagingException;

    String setPassword(String email, String newPassword);

    //String resendOtp(String email) throws MessagingException;

    String verifyOtp(String email, String otp);

//    List<DataItem> getBarchart(int id);
    
    List<LineData> getLinechart(int id);
    List<PieItem> getPiechart(int id);

	long getTotalNumberOfUsers();


	long gettotalworkouts(int id);

	long gettotalsets(int id);

	long getgoals(int id);

	long getnotcompletedworkouts(int id);

	long getnotcompletedexercises(int id);

	long getnotcompletedsets(int id);

	long getnotcompletedgoals(int id);
	

	List<String> getwnamesonuid(int id);

	List<String> getenamesonwid(int id);
	List<Long> getcompltedarray(int id);

	List<Long> getnotcompltedarray(int id);

	List<Long> gettotalarray(int id);
	
    Map<String, Integer> getTotalUsersAvgWorkoutDuration();
}
