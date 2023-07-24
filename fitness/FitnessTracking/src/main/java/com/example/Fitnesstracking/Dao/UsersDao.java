package com.example.Fitnesstracking.Dao;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.Fitnesstracking.entities.Users;

@Repository
public interface UsersDao extends JpaRepository<Users,Integer> {

	Optional<Users> findByEmail(String email);

    @Query(value = "select * from users where email =:userEmail", nativeQuery = true)
    Users findByUserEmail(@Param("userEmail") String userEmail);

    @Query(value = "select count(*) from users where email not like '%@virtusa.com'",nativeQuery = true)
    int getTotalUsers();


    @Query(value = "select *from users where email not like '%@virtusa.com'",nativeQuery = true)
    List<Users> findAllUser();
}
