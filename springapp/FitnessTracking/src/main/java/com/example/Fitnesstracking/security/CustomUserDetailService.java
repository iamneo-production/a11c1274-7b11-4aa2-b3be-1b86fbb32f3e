package com.example.Fitnesstracking.security;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.example.Fitnesstracking.Dao.UsersDao;
import com.example.Fitnesstracking.Exception.ResourceNotFoundException;
import com.example.Fitnesstracking.entities.Users;



@Service
public class CustomUserDetailService implements UserDetailsService {

	@Autowired
	private UsersDao userRepo;

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

		// loading user from database by username
		Users user = this.userRepo.findByEmail(username).orElseThrow(() -> new ResourceNotFoundException("User ", " email : " + username, 0));

		return user;
	}

}