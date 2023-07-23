package com.example.Fitnesstracking.services;

import com.example.Fitnesstracking.entities.Sets;

import java.util.List;

public interface SetsServices {

    Sets addSetsByExerciseId(int id, Sets sets);

    List<Sets> getSetsByExerciseId(int id);

    Sets getSetsById(int id);

    Sets updateSetsById(int id, Sets sets);

    void deleteSetsById(int id);
    
    long getTotalNumberOfSets();


	List<Integer> findSetIdsByExerciseId(int id);
}
