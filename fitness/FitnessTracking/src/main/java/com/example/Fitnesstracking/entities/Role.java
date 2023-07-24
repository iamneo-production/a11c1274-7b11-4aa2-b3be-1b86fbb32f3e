package com.example.Fitnesstracking.entities;

import java.util.HashSet;

import java.util.List;
import java.util.Set;

import com.fasterxml.jackson.annotation.JsonBackReference;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;




@Entity

public class Role {
	
	
	
	
	@ManyToMany(mappedBy = "roles",cascade={CascadeType.PERSIST, CascadeType.MERGE})
	private Set<Users> users = new HashSet<>();
	 

	@Id	
	private int id;
	
	private String name;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Set<Users> getUsers() {
		return users;
	}

	public void setUsers(Set<Users> users) {
		this.users = users;
	}


	
	
}