package com.example.springapp.service;

import java.util.List;

import com.example.springapp.model.Set;

public interface SetServiceInterface {

    String addNewSet(Set sets);

    List<Set> getAllSet();

    Set getSetById(long id);

    List<Set> getSetByExerciseId(long exerciseId);

    String updateSet(Set sets);

    String deleteSetById(long id);
    
}
