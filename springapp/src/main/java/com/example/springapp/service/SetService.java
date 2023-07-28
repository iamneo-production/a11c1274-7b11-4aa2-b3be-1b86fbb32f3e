package com.example.springapp.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.springapp.model.Set;
import com.example.springapp.repository.SetRepository;

@Service
public class SetService implements SetServiceInterface{

    @Autowired
    private SetRepository setRepository;

    @Override
    public String addNewSet(Set sets) {
        this.setRepository.save(sets);
        return "Set Created";
    }

    @Override
    public List<Set> getAllSet() {
        return this.setRepository.findAll();
    }

    @Override
    public Set getSetById(long id) {
        return this.setRepository.findById(id)
        .orElseThrow(()-> new RuntimeException("set id does't exist"));
    }

    @Override
    public List<Set> getSetByExerciseId(long exerciseId) {
        return List.of(this.setRepository.getSetByExerciseId(exerciseId));
    }

    @Override
    public String updateSet(Set sets) {
        Set setsSets = this.setRepository.findById(sets.getId())
        .orElseThrow(()-> new RuntimeException("set id not exist"));
        if(sets.getReps()!=0) setsSets.setReps(sets.getReps());
        if(sets.getDuration()!=null) setsSets.setDuration(sets.getDuration());
        if(sets.getWeight()!=null) setsSets.setWeight(sets.getWeight());
        if(sets.getExerciseId()!=0) setsSets.setExerciseId(sets.getExerciseId());
        this.setRepository.save(setsSets);
        return "Set Updated";
    }

    @Override
    public String deleteSetById(long id) {
        try {

            this.setRepository.deleteById(id);
            return "Solved";
        }
        catch(Exception e){
        return "Exception occured";
        }
    }

   
    
}
