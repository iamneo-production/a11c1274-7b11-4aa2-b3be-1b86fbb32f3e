package com.examly.FitnessTracking.services;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.examly.FitnessTracking.dao.UsersDao;
import com.examly.FitnessTracking.entities.Users;


@Service
public class UsersServiceImpl implements UsersService {
	List<Users> list;
	
	@Autowired
	private UsersDao userDao;
	
	
	public UsersServiceImpl() {
		super();
	}


	@Override
	public List<Users> users() {
			return userDao.findAll();
	}


	@Override
	public Users addUser(Users user) {
		return userDao.save(user);

	}


	@Override
	public Users getUser(int id) {
		return userDao.findById(id).get();
	}


	@Override
	public void deleteUser(int id) {
		Users entity = userDao.findById(id).get(); 
		userDao.delete(entity);
		
	}


	@Override
	public Users changeUserInfo(Users user) {
		return userDao.save(user);
	}
	

}