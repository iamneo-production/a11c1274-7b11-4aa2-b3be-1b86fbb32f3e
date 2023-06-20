package com.example.Fitnesstracking.services;

import com.example.Fitnesstracking.Dao.GoalsDao;
import com.example.Fitnesstracking.Dao.UsersDao;
import com.example.Fitnesstracking.entities.Exercise;
import com.example.Fitnesstracking.entities.Goals;
import com.example.Fitnesstracking.entities.Users;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class GoalsServicesImpl implements GoalsServices{

    @Autowired
    private GoalsDao goalsDao;
    @Autowired
    private UsersDao usersDao;


    @Override
    public Goals goalsCreation(int id, Goals goals){
        Users user = usersDao.findById(id)
                .orElseThrow(()-> new RuntimeException("user id not found"));
        goals.setUser(user);
        return this.goalsDao.save(goals);
    }

    @Override
    public Goals getGoalsById(int id){
        return goalsDao.findById(id)
                .orElseThrow(()-> new RuntimeException("goal id not found"));
    }

    @Override
    public Goals updateGoalsById(int id, Goals goals){
        Goals goal = goalsDao.findById(id)
                .orElseThrow(()-> new RuntimeException("goal id not found"));
        if (goals.getGoalMetric()!= null) {goal.setGoalMetric(goals.getGoalMetric());}
        if (goals.getGoalType()!= null){goal.setGoalType(goals.getGoalType());}
        if (goals.getTimeFrame()!= null){goal.setTimeFrame(goals.getTimeFrame());}
        if (goals.getTargetValue()!=0){goal.setTargetValue(goals.getTargetValue());}
        if (goals.getAdditionalNotes()!= null){goal.setAdditionalNotes(goals.getAdditionalNotes());}
        return this.goalsDao.save(goal);
    }

	@Override
	public void deleteGoalsById(int id) {
		Goals goal = goalsDao.findById(id)
                .orElseThrow(()->new RuntimeException("id not found"));
		goalsDao.delete(goal);
		
	}

	@Override
	public List<Goals> getGoalsUserById(int id) {
		return goalsDao.getGoalsByUserId(id);
	}

}
