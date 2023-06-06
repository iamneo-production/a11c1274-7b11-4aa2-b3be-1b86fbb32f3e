package com.examly.FitnessTracking.services;

import java.util.List;
import com.examly.FitnessTracking.entities.Users;



public interface  UsersService {
	public List<Users> users();
	
	public Users addUser(Users user);
	public Users getUser(int id);
	public void deleteUser(int id);
	public Users changeUserInfo(Users user);
}