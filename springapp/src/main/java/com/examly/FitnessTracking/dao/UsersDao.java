package com.examly.FitnessTracking.dao;


import org.springframework.data.jpa.repository.JpaRepository;

import com.examly.FitnessTracking.entities.Users;

public interface UsersDao extends JpaRepository<Users,Integer>{

}
