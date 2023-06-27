package com.example.Fitnesstracking.security;

import com.example.Fitnesstracking.payloads.UserDto;

public class JwtAuthResponse {

	
	private String token;
	
	private UserDto user;
	

	public UserDto getUserdto() {
		return user;
	}

	public void setUserdto(UserDto user) {
		this.user = user;
	}

	public String getToken() {
		return token;
	}

	public void setToken(String token) {
		this.token = token;
	}
	
	
}