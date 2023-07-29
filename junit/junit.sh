#!/bin/bash
if [ -d "/home/coder/project/workspace/springapp/" ]
then
    echo "project folder present"
    # checking for src folder
    if [ -d "/home/coder/project/workspace/springapp/src/" ]
    then
        cp -r /home/coder/project/workspace/junit/test /home/coder/project/workspace/springapp/src/;
    cd /home/coder/project/workspace/springapp/ || exit;
    mvn clean test;
    else
        echo "testGetAllWorkout1 FAILED";
        echo "testGetWorkoutById FAILED";
        echo "testGetWorkoutUserById FAILED";
        echo "testGetAllexercise1 FAILED";
        echo "testGetById FAILED";
        echo "testGetExerciseByWorkoutId FAILED";
        echo "testGetSetById FAILED";
        echo "testGetSetAll1 FAILED";
        echo "testGetSetByExerciseId FAILED";
        echo "testDeleteSetById FAILED";
    fi
else   
    echo "testGetAllWorkout1 FAILED";
    echo "testGetWorkoutById FAILED";
    echo "testGetWorkoutUserById FAILED";
    echo "testGetAllexercise1 FAILED";
    echo "testGetById FAILED";
    echo "testGetExerciseByWorkoutId FAILED";
    echo "testGetSetById FAILED";
    echo "testGetSetAll1 FAILED";
    echo "testGetSetByExerciseId FAILED";
    echo "testDeleteSetById FAILED";
fi