import { myAxios } from "./helper";
import { privateAxios } from "./helper";


export const signUp = (user) => {
  return myAxios.post("/auth/register", user).then((response) => response.data);
};


export const signUpAdmin = (user) => {
  return myAxios.post("/auth/registerAdmin", user).then((response) => response.data);
};

export const loginUser = (loginDetail) => {
  return myAxios
    .post("/auth/login", loginDetail)
    .then((response) => response.data);
};


export const sendOTP = (email) => {
  return myAxios.post("/send-otp", null , { params: {email} } ).then((resp) => resp.data);
}

export const verifyOTP = (email,otp) => {
  return myAxios.put("/verify-otp", null , { params: {email,otp} } ).then((resp) => resp.data);
}

export const setPass = (email,newPassword) => {
  return myAxios.put("/set-password", newPassword, { params: {email} }  ).then((resp) => resp.data);
}

// export const setPass = (email,newPassword) => {
//   return myAxios.put("/set-password", { params: {email} },{headers : {"newPassword":newPassword}}  ).then((resp) => resp.data);
// }

export const deleteUsers = (id) => {
  console.log(`/auth/users/`+id);
  return privateAxios.delete(`/auth/users/`+id).then((resp) => resp.data);
}

export const getUsers = () => {
  return privateAxios.get(`/auth/users`).then((resp) => resp.data).catch((err) => console.log(err));
};

export const getAllusersdata = () => {
  return privateAxios.get(`/auth/usersdata`).then((resp) => resp.data).catch((err) => console.log(err));

};

export const updateUserdetails = (id,user) => {
  console.log(`/auth/users/`+id);
  return privateAxios.put(`/auth/users/`+id,user).then((resp) => resp.data);
}

export const addGoals = (id, goal) => {
  console.log(`/users/{id}/goals`+id);
  return privateAxios.post(`/users/${id}/goals`,goal).then((resp)=> resp.data);
}

export const getGoals = (id) => {
  return privateAxios.get(`/users/${id}/goals`).then((resp)=> resp.data).catch((err)=> console.log(err));
}

export const updateGoalsById = (id,goals) =>{
  return privateAxios.put(`/goals/${id}`,goals).then((resp)=> resp.data).catch((err)=> console.log(err));
}

export const getGoalsById=(id)=>{
  return privateAxios.get(`/goals/${id}`).then((resp)=> resp.data).catch((err)=> console.log(err));
}

export const deleteGoalsById=(id)=>{
  return privateAxios.delete(`/goals/${id}`).then((resp)=> resp.data).catch((err)=> console.log(err));
}

export const getUserById = (id) =>{
  return privateAxios.get(`/auth/users/${id}`).then((resp)=> resp.data).catch((err)=> console.log(err));
}




export const postWorkout = (id,workout) =>{
  return privateAxios.post(`/users/${id}/workouts`,workout).then((resp)=> resp.data).catch((err)=> console.log(err));
}

export const deleteWorkoutById=(id)=>{
  return privateAxios.delete(`/workouts/${id}`).then((resp)=>resp.data).catch((err)=>console.log(err));
}

export const getWorkoutsByWorkoutId=(id)=>{
  return privateAxios(`/workouts/${id}`).then((resp)=> resp.data).catch((err)=> console.log(err));
}

export const putWorkoutById=(id,workout)=>{
  return privateAxios.put(`/workouts/${id}`,workout).then((resp)=>resp.data).catch((err)=>console.log(err));
}

export const postExercise = (id,exercise) =>{
  return privateAxios.post(`/workouts/${id}/exercises`,exercise).then((resp)=> resp.data).catch((err)=> console.log(err));
}

export const postSet = (id,set) =>{
  return privateAxios.post(`/exercises/${id}/sets`,set).then((resp)=> resp.data).catch((err)=> console.log(err));
}

export const getWorkout = (id) =>{
  return privateAxios.get(`/users/${id}/workouts`).then((resp)=> resp.data).catch((err)=> console.log(err));
}

export const getExercise = (id) =>{
  return privateAxios.get(`/workouts/${id}/exercises`).then((resp)=> resp.data).catch((err)=> console.log(err));
}

export const getSet = (id) =>{
  return privateAxios.get(`/exercises/${id}/sets`).then((resp)=> resp.data).catch((err)=> console.log(err));
}

export const deleteExercise = (id) =>{
  return privateAxios.delete(`/exercises/${id}`).then((resp)=> resp.data).catch((err)=> console.log(err));
}

export const UpdateWorkout = (id,workout) =>{
  return privateAxios.put(`/workouts/${id}`,workout).then((resp)=> resp.data).catch((err)=> console.log(err));
}

export const UpdateExercise = (id,exercise) =>{
  return privateAxios.put(`/exercises/${id}`,exercise).then((resp)=>resp.data).catch((err)=> console.log(err));
}

export const getExerciseByUserId = (id)=>{
  return privateAxios.get(`/users/${id}/exercises`).then((resp)=>resp.data).catch((err)=>console.log(err));
}

export const getExerciseById=(id)=>{
  return privateAxios.get(`/exercises/${id}`).then((resp)=> resp.data).catch((err)=> console.log(err));
}

export const NotCompletedExercises = (id) =>{
  return privateAxios.get(`/count/notcompletedworkouts/${id}`).then((resp)=> resp.data).catch((err)=> console.log(err));
}
// Fetch exercise details based on the workout ID
export const getExerciseByWorkoutId = (uid,id) =>{
  return privateAxios.get(`/users/${uid}/workouts/${id}/exercises`).then((resp)=> resp.data).catch((err)=> console.log(err));
}

export const getWorkoutNamesbasedonUserId = (id) =>{
  return privateAxios.get(`/getworkoutnames/${id}`).then((resp)=> resp.data).catch((err)=> console.log(err));
}

export const getExercisenamebasedonWid = (id) =>{
  return privateAxios.get(`/getexercisenames/${id}`).then((resp)=> resp.data).catch((err)=> console.log(err));
}

// Fetch completed exercise data from the backend for userid
// export const getExerciseByuserId = (id) =>{
//   return privateAxios.get(`/users/${id}/completed`).then((resp)=> resp.data).catch((err)=> console.log(err));
// }


export const getWorkoutIdbasedOnUserId = (id) => {
  return privateAxios.get(`/getwidonuid/${id}`).then((resp)=> resp.data).catch((err)=> console.log(err));
}

export const getEidonWid = (id) => {
  return privateAxios.get(`/geteidonwid/${id}`).then((resp)=> resp.data).catch((err)=> console.log(err));
}


// do backend
export const Completedworkoutlist = (id) =>{
  return privateAxios.get(`/workouts/${id}/completed`).then((resp)=> resp.data).catch((err)=> console.log(err));
}

export const getcompletedarray = (id) =>{
  return privateAxios.get(`/getcompletedarray/${id}`).then((resp)=> resp.data).catch((err)=> console.log(err));
}

export const getnotcompletedarray = (id) =>{
  return privateAxios.get(`/getnotcompletedarray/${id}`).then((resp)=> resp.data).catch((err)=> console.log(err));
}

export const getotalarray = (id) =>{
  return privateAxios.get(`/getotalarray/${id}`).then((resp)=> resp.data).catch((err)=> console.log(err));
}
//getCompletedWorkouts
export const getCompletedWorkouts = (id) => {
  return privateAxios
    .get(`/users/${id}/completedworkouts`)
    .then((resp) => resp.data)
    .catch((err) => {
      console.log('Error fetching completed workouts:', err);
      throw err; 
    });
};

export const getCompletionByTotalExercises =(id)=>{
  return privateAxios.get(`/status/${id}/exercises`).then((resp)=>resp.data).catch((err)=>console.log(err));
}

export const getStatusDetails = () =>{
  return privateAxios.get(`/admin/status`).then((resp)=>resp.data).catch((err)=>console.log(err));
}

export const getTopThreeUsers=()=>{
  return privateAxios.get(`/admin/topUsers`).then((resp)=>resp.data).catch((err)=>console.log(err));
}


export const getExercisesByWorkoutId = (uid,id) =>{
  return privateAxios.get(`/users/${uid}/workouts/${id}/exercises`).then((resp)=> resp.data).catch((err)=> console.log(err));
}

export const getValidationWorkoutCompletion=(id)=>{
  return privateAxios.get(`/workout/${id}/isCompleted`).then((response)=>response.data).catch((err)=>console.log(err));
}
