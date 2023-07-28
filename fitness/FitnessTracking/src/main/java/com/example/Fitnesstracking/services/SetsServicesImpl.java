package com.example.Fitnesstracking.services;

import com.example.Fitnesstracking.Dao.ExerciseDao;
import com.example.Fitnesstracking.Dao.SetsDao;
import com.example.Fitnesstracking.entities.Exercise;
import com.example.Fitnesstracking.entities.Sets;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class SetsServicesImpl implements SetsServices{

    @Autowired
    private SetsDao setsDao;

    @Autowired
    private ExerciseDao exerciseDao;

    @Override
    public Sets addSetsByExerciseId(int id, Sets sets){
        Exercise exercise = exerciseDao.findById(id)
                .orElseThrow(()-> new RuntimeException("Exercise Id not Found"));
        sets.setExercises(exercise);
        return this.setsDao.save(sets);
    }

    @Override
    public List<Sets> getSetsByExerciseId(int id){
        return setsDao.getSetsByExerciseId(id);
    }

    @Override
    public Sets getSetsById(int id){
        return setsDao.findById(id)
                .orElseThrow(()->new RuntimeException("Sets Id is not found"));
    }

    @Override
    public Sets updateSetsById(int id, Sets sets){
        Sets set = setsDao.findById(id)
                .orElseThrow(()->new RuntimeException("can not Updating. Sets Id not found"));
        if (sets.getReps()!=0){set.setReps(sets.getReps());}
        if (sets.getWeight()!=0){set.setWeight(sets.getWeight());}
        if (sets.getDuration()!=0){set.setDuration(sets.getDuration());}
        return setsDao.save(set);
    }

    @Override
    public void deleteSetsById(int id){
        Sets sets = setsDao.findById(id)
                .orElseThrow(()-> new RuntimeException(("Sets Id is not found to delete Sets")));
        setsDao.delete(sets);
    }

	@Override
	public long getTotalNumberOfSets() {
		// TODO Auto-generated method stub
		return setsDao.count();
	}

	@Override
	public List<Integer> findSetIdsByExerciseId(int id) {
		return setsDao.findSetIdsByExerciseId(id);
	}

}
