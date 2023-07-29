package com.example.Fitnesstracking.controller;



import java.security.Principal;




import javax.validation.Valid;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.Fitnesstracking.Dao.UsersDao;
import com.example.Fitnesstracking.Exception.ApiException;
import com.example.Fitnesstracking.entities.Users;
import com.example.Fitnesstracking.payloads.UserDto;
import com.example.Fitnesstracking.security.JwtAuthRequest;
import com.example.Fitnesstracking.security.JwtAuthResponse;
import com.example.Fitnesstracking.security.JwtTokenHelper;
import com.example.Fitnesstracking.services.UsersServices;



@RestController
@RequestMapping("/api/v1/auth/")
public class AuthController {

	@Autowired
	private ModelMapper mapper;

	@Autowired
	private JwtTokenHelper jwtTokenHelper;

	@Autowired
	private UserDetailsService userDetailsService;

	@Autowired
	private AuthenticationManager authenticationManager;

	@Autowired
	private UsersServices userService;

	@PostMapping("/login")
	public ResponseEntity<JwtAuthResponse> createToken(@RequestBody JwtAuthRequest request) throws Exception {
		this.authenticate(request.getUsername(), request.getPassword());
		UserDetails userDetails = this.userDetailsService.loadUserByUsername(request.getUsername());
		String token = this.jwtTokenHelper.generateToken(userDetails);

		JwtAuthResponse response = new JwtAuthResponse();
		response.setToken(token);
		response.setUserdto(this.mapper.map((Users) userDetails, UserDto.class));
		return new ResponseEntity<JwtAuthResponse>(response, HttpStatus.OK);
	}

	private void authenticate(String username, String password) throws Exception {

		UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(username,
				password);

		try {

			this.authenticationManager.authenticate(authenticationToken);

		} catch (BadCredentialsException e) {
			System.out.println("Invalid Detials !!");
			throw new ApiException("Invalid username or password !!");
		}

	}

	// register new user api

	@PostMapping("/register")
	public ResponseEntity<UserDto> registerUser(@Valid @RequestBody UserDto userDto) {


		String email = userDto.getEmail();
		System.out.print(email);
		if(email.endsWith("@virtusa.com")) {
			UserDto registeredUser = this.userService.registerNewAdmin(userDto);
			System.out.println("@Virtusa email here");
			return new ResponseEntity<UserDto>(registeredUser, HttpStatus.CREATED);
		}
		else {
			UserDto registeredUser = this.userService.registerNewUser(userDto);
			return new ResponseEntity<UserDto>(registeredUser, HttpStatus.CREATED);
		}
		}




}
