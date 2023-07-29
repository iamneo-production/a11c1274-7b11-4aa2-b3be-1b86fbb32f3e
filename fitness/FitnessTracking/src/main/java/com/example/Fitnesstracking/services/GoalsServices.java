package com.example.Fitnesstracking.services;

import java.util.List;

import com.example.Fitnesstracking.entities.Goals;

public interface GoalsServices {

    Goals goalsCreation(int id, Goals goals);

    Goals getGoalsById(int id);

    Goals updateGoalsById(int id, Goals goals);

	void deleteGoalsById(int id);

	List<Goals> getGoalsUserById(int id);

	long getTotalNumberOfGoals();


}
