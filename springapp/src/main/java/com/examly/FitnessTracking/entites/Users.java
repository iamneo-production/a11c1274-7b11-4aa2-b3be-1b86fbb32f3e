package com.examly.FitnessTracking.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Users{
	@Id
//	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int UserId;
	private String UserName;
	private String UserEmail;
	private String UserPassword;
	private int UserHeight;
	private int  UserWeight;
	private int UserAge;
	private String UserGender;
	
	
	public Users(int userId, String userName, String userEmail, String userPassword, int userHeight, int userWeight,
			int userAge, String userGender) {
		super();
		UserId = userId;
		UserName = userName;
		UserEmail = userEmail;
		UserPassword = userPassword;
		UserHeight = userHeight;
		UserWeight = userWeight;
		UserAge = userAge;
		UserGender = userGender;
	}
	
	
	public Users() {
		super();
	}
	
	
	
	public int getUserId() {
		return UserId;
	}
	public void setUserId(int userId) {
		UserId = userId;
	}
	public String getUserName() {
		return UserName;
	}
	public void setUserName(String userName) {
		UserName = userName;
	}
	public String getUserEmail() {
		return UserEmail;
	}
	public void setUserEmail(String userEmail) {
		UserEmail = userEmail;
	}
	public String getUserPassword() {
		return UserPassword;
	}
	public void setUserPassword(String userPassword) {
		UserPassword = userPassword;
	}
	public int getUserHeight() {
		return UserHeight;
	}
	public void setUserHeight(int userHeight) {
		UserHeight = userHeight;
	}
	public int getUserWeight() {
		return UserWeight;
	}
	public void setUserWeight(int userWeight) {
		UserWeight = userWeight;
	}
	public int getUserAge() {
		return UserAge;
	}
	public void setUserAge(int userAge) {
		UserAge = userAge;
	}
	public String getUserGender() {
		return UserGender;
	}
	public void setUserGender(String userGender) {
		UserGender = userGender;
	}
	
}
