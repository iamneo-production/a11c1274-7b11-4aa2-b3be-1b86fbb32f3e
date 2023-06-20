USERS 
# Save a user (POST) : /users
{
    "id": 1,
    "name": "ok",
    "email": "some@google.com",
    "password": "ok@132",
    "height": 100,
    "weight": 100,
    "age": 10,
    "gender": "male"
}
# get all users info (GET) : /users
# get user based on Id(GET) : /users/{id}
# updating user details based on Id (PUT): /users/{id}
# Delete users based on id (DELETE) : /users/{id}

WORKOUTS
# creating a new workout for a specific userid (POST) : /users/{id}/workouts
{  
	 "date":"1717",
	 "duration":60,
	"notes":"ok i 3 this ......",
    "is_completed":1
}
# get all workouts of a specific user (GET) : /users/{id}/workouts
# retrieving specific workout by its id (GET) : /workouts/{id}
# updating specific workout by its id (PUT): /workouts/{id}
# deleting specific workout (DELETE) : /workouts/{id}

EXERCISES
# Create a new exercise for a specific workout
{  
	 "name":"2",
	 "description":"2",
     "is_completed":0
}
#  Retrieve all exercises for a specific workoutid (GET) : /workouts/{id}/exercises
#  Retrieve a specific exerciseby its id  (GET) : /exercises/{id}
#  Update a specific exercise by its id (PUT): /exercises/{id}
#  Delete a specific exercise(DELETE) : /exercises/{id}

SETS 
# Create a new set for a specific exercise
{
        "reps": 3,
        "weight": 4,
        "duration": 5,
        "is_completed":0
}

#  Retrieve all sets for a specific exercise (GET) : /exercises/{id}/sets
#  Retrieve a specific set its id  (GET) : /sets/{id}
#  Update a specific set by its id (PUT):  /sets/{id}
#  Delete a specific set (DELETE) :  /sets/{id}


GOALS 
# Create a new goal for a specific user(POST) : /users/{id}/goals
{
    "goalType":"second here",
      "goalMetric":"12",
      "targetValue":13,
      "timeFrame":"100",
      "additionalNotes": "nuls bro",
      "is_completed":1

}
#  Retrieve all goals for a specific user (GET) : users/{id}/goals
#  retrieve specific goal using goal_id (GET) : /goals/{id}
#  Update a specific goal using goal_id (PUT): /goals/{id}
#   delete goal using goal_id (DELETE) :  /goals/{id}