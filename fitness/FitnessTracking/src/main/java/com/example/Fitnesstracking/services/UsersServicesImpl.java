package com.example.Fitnesstracking.services;


import com.example.Fitnesstracking.payloads.DataItem;
import com.example.Fitnesstracking.payloads.LineData;
import com.example.Fitnesstracking.payloads.PieItem;
import com.example.Fitnesstracking.payloads.RadarItem;
import com.example.Fitnesstracking.payloads.TwoItem;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.Fitnesstracking.Dao.ExerciseDao;
import com.example.Fitnesstracking.Dao.GoalsDao;
import com.example.Fitnesstracking.Dao.OtpDao;
import com.example.Fitnesstracking.Dao.RoleDao;
import com.example.Fitnesstracking.Dao.SetsDao;
import com.example.Fitnesstracking.Dao.UsersDao;
import com.example.Fitnesstracking.Dao.WorkoutDao;
import com.example.Fitnesstracking.config.AppConstants;
import com.example.Fitnesstracking.emailconfiguration.EmailUtil;
import com.example.Fitnesstracking.entities.Exercise;
import com.example.Fitnesstracking.entities.Goals;
import com.example.Fitnesstracking.entities.OneTimePassword;
import com.example.Fitnesstracking.entities.Role;
import com.example.Fitnesstracking.entities.Sets;
import com.example.Fitnesstracking.entities.Users;
import com.example.Fitnesstracking.entities.Workout;
import com.example.Fitnesstracking.payloads.Allusers;
import com.example.Fitnesstracking.payloads.UserDto;
import com.example.Fitnesstracking.payloads.Userbyid;

import jakarta.mail.MessagingException;

import com.example.Fitnesstracking.entities.Workout;
@Service
public class UsersServicesImpl implements UsersServices{


//    // objects for all interfaces of services
//    @Autowired
//    private UsersServices usersServices;

    @Autowired
    private WorkoutServices workoutServices;

    @Autowired
    private ExerciseServices exerciseServices;

    @Autowired
    private SetsServices setsServices;

    @Autowired
    private GoalsServices goalsServices;

    @Autowired
    private ExerciseDao exerciseDao;



    @Autowired
    private OtpDao otpDao;

    @Autowired
    private EmailUtil emailUtil;


    @Autowired
    private UsersDao usersDao;

	@Autowired
	private ModelMapper modelMapper;


	@Autowired
	private RoleDao roleRepo;

	@Autowired
	private PasswordEncoder passwordEncoder;


    @Override
    public Users addUser(Users user){
        return this.usersDao.save(user);
    }

    @Override
    public List<Allusers> getUsers(){

        	List<Users> allusers = this.usersDao.findAll();

        	List<Allusers> allreq =  new ArrayList<>();

        	for(int i=0; i<allusers.size(); i++) {
        	allreq.add(this.modelMapper.map(allusers.get(i), Allusers.class));
        	}
        	return allreq;


        }

    @Override
    public Userbyid getUserById(int id){


        Users user = this.usersDao.findById(id)
                .orElseThrow(()->new RuntimeException("User Id is not found"));


        return this.modelMapper.map(user, Userbyid.class);

    }

    @Override
    public String updateUser(int id, Users user){
        Users userupdate = usersDao.findById(id)
                .orElseThrow(()-> new RuntimeException("User not found"));
        if (user.getName()!=null){userupdate.setName(user.getName());}
        if (user.getEmail()!=null){userupdate.setEmail(user.getEmail());}
        if (user.getPassword()!=null){userupdate.setPassword(user.getPassword());}
        if (user.getHeight()!=0){userupdate.setHeight(user.getHeight());}
        if (user.getWeight()!=0){userupdate.setWeight(user.getWeight());}
        if (user.getAge()!=0){userupdate.setAge(user.getAge());}
        if (user.getGender()!=null){userupdate.setGender(user.getGender());}

        usersDao.save(userupdate);
        return "Success";


    }

    @Override
    public void deleteUsers(int id){
        Users user = usersDao.findById(id)
                .orElseThrow(()->new RuntimeException("user not found"));
        usersDao.delete(user);
    }



    public Users dtoToUser(UserDto userDto) {
		Users user = this.modelMapper.map(userDto, Users.class);

		// user.setId(userDto.getId());
		// user.setName(userDto.getName());
		// user.setEmail(userDto.getEmail());
		// user.setAbout(userDto.getAbout());
		// user.setPassword(userDto.getPassword());
		return user;
	}

	public UserDto userToDto(Users user) {
		UserDto userDto = this.modelMapper.map(user, UserDto.class);
		return userDto;
	}

	@Override
	public UserDto registerNewUser(UserDto userDto) {

		Users user = this.modelMapper.map(userDto, Users.class);

		// encoded the password
		user.setPassword(this.passwordEncoder.encode(user.getPassword()));

		// roles
		Role role = this.roleRepo.findById(AppConstants.NORMAL_USER).get();

		user.getRoles().add(role);

		Users newUser = this.usersDao.save(user);

		return this.modelMapper.map(newUser, UserDto.class);
	}

	@Override
	public UserDto registerNewAdmin(UserDto userDto) {

		Users user = this.modelMapper.map(userDto, Users.class);

		// encoded the password
		user.setPassword(this.passwordEncoder.encode(user.getPassword()));

		// roles
		Role role = this.roleRepo.findById(AppConstants.ADMIN_USER).get();

		user.getRoles().add(role);

		Users newUser = this.usersDao.save(user);

		return this.modelMapper.map(newUser, UserDto.class);
	}



	@Override
    public String forgotPassword(String email) throws MessagingException {
        Users users = this.usersDao.findByUserEmail(email);
        if (users == null) {
            throw new RuntimeException("Invalid email");
        }

        OneTimePassword otp = this.otpDao.findByUserId(users.getId());
        boolean isNewOTP = false;

        if (otp == null) {
            otp = new OneTimePassword();
            otp.setUser(users);
            isNewOTP = true;
        }

        otp.setOtpValue(generateOtp());
        otp.setExpirationTime(LocalDateTime.now().plusMinutes(10));

        this.otpDao.save(otp);

        emailUtil.sendSetPasswordViaEmail(email, otp.getOtpValue());

        if (isNewOTP) {
            return "OTP has been sent to your email address.";
        } else {
            return "OTP has been resent to your email address.";
        }
    }


    private String generateOtp() {

        int otpValue = (int) (Math.random() * (999999-100000+1) +100000); // Generate a random 6-digit OTP
        return String.valueOf(otpValue);
        }



    @Override
    public String verifyOtp(String email, String otp) {

        Users users = this.usersDao.findByUserEmail(email);
        OneTimePassword oTp = this.otpDao.getOtpByUserId(users.getId());

        LocalDateTime currentDate = LocalDateTime.now();

        if(otp.equals(oTp.getOtpValue()) && oTp.getExpirationTime().isAfter(currentDate)){

            return "otp has been successfully verified.";

        }
        return "Incorrect password or time has expired";
    }

 // setting the users new Password

    @Override
    public String setPassword(String email, String newPassword) {


            Users users = this.usersDao.findByUserEmail(email);

            users.setPassword(this.passwordEncoder.encode(newPassword));
            this.usersDao.save(users);
            return "Password has been changed successfully";


    }

//	@Override
//	public List<DataItem> getBarchart(int id) {
//
//		// get workouts for user id
//		long workouts = this.workoutServices.getWorkoutsByUserId(id).size();
//
//
//		// get exercises for user id
//		List<Exercise> exerciseforuserid = new ArrayList<>();
//		List<Workout> workoutforuserid =  this.workoutServices.getWorkoutsByUserId(id);
//		long exercises = 0;
//		 for (Workout workout : workoutforuserid) {
//	            int w_id =  workout.getWorkoutId();
//	            exerciseforuserid.addAll(exerciseServices.getExerciseByWorkoutId(w_id));
//	            //exercises += exerciseServices.getExerciseByWorkoutId(w_id).size();
//	        }
//		exercises = exerciseforuserid.size();
//
//
//		// get sets for user id
//		List<Sets> setsforuserid = new ArrayList<>();
//		long sets = 0;
//	            for(Exercise exc : exerciseforuserid) {
//	            	int e_id = exc.getExerciseId();
//	            	setsforuserid.addAll(setsServices.getSetsByExerciseId(e_id));
//	            }
//		 sets = setsforuserid.size();
//
//
//		// get goals for user id
//		List<Goals> goalsbyuserid = this.goalsServices.getGoalsUserById(id);
//		long goals = goalsbyuserid.size();
//
//		List<Long> ans = new ArrayList<>();
//		ans.add(workouts);
//		ans.add(exercises);
//		ans.add(sets);
//		ans.add(goals);
//
//        // bar chart
//        List<DataItem> datas = new ArrayList<>();
//        datas.add(new DataItem("Workouts", workouts));
//        datas.add(new DataItem("Exercises", exercises));
//        datas.add(new DataItem("Sets", sets));
//        datas.add(new DataItem("Goals", goals));
//		return datas;
//	}

	@Override
	public List<LineData> getLinechart(int id) {


		// get workouts for user id
		long workouts = this.workoutServices.getWorkoutsByUserId(id).size();


		// get exercises for user id
		List<Exercise> exerciseforuserid = new ArrayList<>();
		List<Workout> workoutforuserid =  this.workoutServices.getWorkoutsByUserId(id);
		long exercises = 0;
		 for (Workout workout : workoutforuserid) {
	            int w_id =  workout.getWorkoutId();
	            exerciseforuserid.addAll(exerciseServices.getExerciseByWorkoutId(w_id));
	            //exercises += exerciseServices.getExerciseByWorkoutId(w_id).size();
	        }
		exercises = exerciseforuserid.size();


		// get sets for user id
//		List<Sets> setsforuserid = new ArrayList<>();
//		long sets = 0;
//	            for(Exercise exc : exerciseforuserid) {
//	            	int e_id = exc.getExerciseId();
//	            	setsforuserid.addAll(setsServices.getSetsByExerciseId(e_id));
//	            }
//		 sets = setsforuserid.size();


		List<Goals> goalsbyuserid = this.goalsServices.getGoalsUserById(id);
		long goals = goalsbyuserid.size();

		// For line Graph logic
		long is_completed_goals = 0;
		long is_completed_exr = 0;
		long is_completed_work = 0;
//		long is_completed_sets = 0;
		long is_not_completed_goals = 0;
		long is_not_completed_exr = 0;
		long is_not_completed_work = 0;
//		long is_not_completed_sets = 0;
		long total_workouts = 0;
		long total_sets = 0;
		long total_exr = 0;
		long total_goals = 0;

		total_workouts = workouts;
		total_exr = exercises;
//		total_sets = sets;
		total_goals = goals;






		for(Workout w : workoutforuserid) {
			// confirm with frontend about string
			if(w.getIs_completed() != null && w.getIs_completed().equals("completed")) {
				is_completed_work+=1;
			}
			else {
				is_not_completed_work+=1;
			}
		}



		for(Exercise e : exerciseforuserid) {
			if(e.getIs_completed() != null && e.getIs_completed().equals("completed")) {
				is_completed_exr+=1;
			}
			else {
				is_not_completed_exr+=1;
			}
		}

		for(Goals g : goalsbyuserid) {
			if(g.getIs_completed() != null && g.getIs_completed().equals("completed")) {
				is_completed_goals+=1;
			}
			else {
				is_not_completed_goals+=1;
			}

		}


        List<LineData> data = new ArrayList<>();
        List<TwoItem> completedData = new ArrayList<>();
        completedData.add(new TwoItem("Workouts", is_completed_work));
        completedData.add(new TwoItem("Exercises", is_completed_exr));
        completedData.add(new TwoItem("Goals", is_completed_goals));

        List<TwoItem> notCompletedData = new ArrayList<>();
        notCompletedData.add(new TwoItem("Workouts", is_not_completed_work));
        notCompletedData.add(new TwoItem("Exercises", is_not_completed_exr));
        notCompletedData.add(new TwoItem("Goals", is_not_completed_goals));

        List<TwoItem> totalData = new ArrayList<>();
        totalData.add(new TwoItem("Workouts", total_workouts));
        totalData.add(new TwoItem("Exercises", total_exr));
        totalData.add(new TwoItem("Goals", total_goals));
        data.add(new LineData("Completed", "tokens(\"dark\").greenAccent[500]", completedData));
        data.add(new LineData("Not Completed", "tokens(\"dark\").blueAccent[300]", notCompletedData));
        data.add(new LineData("total", "tokens(\"dark\").redAccent[300]", totalData));
        return data;

	}

	@Override
	public List<PieItem> getPiechart(int id) {


		// get workouts for user id
		long workouts = this.workoutServices.getWorkoutsByUserId(id).size();


		// get exercises for user id
		List<Exercise> exerciseforuserid = new ArrayList<>();
		List<Workout> workoutforuserid =  this.workoutServices.getWorkoutsByUserId(id);
		long exercises = 0;
		 for (Workout workout : workoutforuserid) {
	            int w_id =  workout.getWorkoutId();
	            exerciseforuserid.addAll(exerciseServices.getExerciseByWorkoutId(w_id));
	            //exercises += exerciseServices.getExerciseByWorkoutId(w_id).size();
	        }
		exercises = exerciseforuserid.size();


		// get sets for user id
		List<Sets> setsforuserid = new ArrayList<>();
		long sets = 0;
	            for(Exercise exc : exerciseforuserid) {
	            	int e_id = exc.getExerciseId();
	            	setsforuserid.addAll(setsServices.getSetsByExerciseId(e_id));
	            }
		 sets = setsforuserid.size();


		// get goals for user id
		List<Goals> goalsbyuserid = this.goalsServices.getGoalsUserById(id);
		long goals = goalsbyuserid.size();
		// pie chart
        List<PieItem> pie = new ArrayList<>();
        pie.add(new PieItem("Workouts", "workouts", workouts, "hsl(104, 70%, 50%)"));
        pie.add(new PieItem("Exercises", "Exercises", exercises, "hsl(162, 70%, 50%)"));
        pie.add(new PieItem("Sets", "Sets", sets, "hsl(291, 70%, 50%)"));
        pie.add(new PieItem("Goals", "Goals", goals, "hsl(229, 70%, 50%)"));

        return pie;
	}
    public long getTotalNumberOfUsers() {
        return usersDao.count();
    }


	@Override
	public long gettotalworkouts(int id) {
		// get exercises for user id
		List<Exercise> exerciseforuserid = new ArrayList<>();
		List<Workout> workoutforuserid =  this.workoutServices.getWorkoutsByUserId(id);
		long exercises = 0;
		 for (Workout workout : workoutforuserid) {
	            int w_id =  workout.getWorkoutId();
	            exerciseforuserid.addAll(exerciseServices.getExerciseByWorkoutId(w_id));
	            //exercises += exerciseServices.getExerciseByWorkoutId(w_id).size();
	        }
		return exerciseforuserid.size();
	}

	@Override
	public long gettotalsets(int id) {
		// get workouts for user id
		long workouts = this.workoutServices.getWorkoutsByUserId(id).size();


		// get exercises for user id
		List<Exercise> exerciseforuserid = new ArrayList<>();
		List<Workout> workoutforuserid =  this.workoutServices.getWorkoutsByUserId(id);
		long exercises = 0;
		 for (Workout workout : workoutforuserid) {
	            int w_id =  workout.getWorkoutId();
	            exerciseforuserid.addAll(exerciseServices.getExerciseByWorkoutId(w_id));
	            //exercises += exerciseServices.getExerciseByWorkoutId(w_id).size();
	        }
		exercises = exerciseforuserid.size();


		// get sets for user id
		List<Sets> setsforuserid = new ArrayList<>();
		long sets = 0;
	            for(Exercise exc : exerciseforuserid) {
	            	int e_id = exc.getExerciseId();
	            	setsforuserid.addAll(setsServices.getSetsByExerciseId(e_id));
	            }
		 return setsforuserid.size();
	}

	@Override
	public long getgoals(int id) {
		List<Goals> goalsbyuserid = this.goalsServices.getGoalsUserById(id);
		long goals = goalsbyuserid.size();
		return goals;
	}

	@Override
	public long getnotcompletedworkouts(int id) {

		long is_not_completed_goals = 0;

		long is_not_completed_work = 0;
		long is_not_completed_sets = 0;
		List<Workout> workoutforuserid =  this.workoutServices.getWorkoutsByUserId(id);
		long is_completed_work = 0;

		for(Workout w : workoutforuserid) {
			// confirm with frontend about string
			if(w.getIs_completed() != null && w.getIs_completed().equals("completed")) {
				is_completed_work+=1;
			}
			else {
				is_not_completed_work+=1;
			}
		}

		return is_not_completed_work;

	}

	@Override
	public long getnotcompletedexercises(int id) {


		// get workouts for user id
		long workouts = this.workoutServices.getWorkoutsByUserId(id).size();


		// get exercises for user id
		List<Exercise> exerciseforuserid = new ArrayList<>();
		List<Workout> workoutforuserid =  this.workoutServices.getWorkoutsByUserId(id);
		long exercises = 0;
		 for (Workout workout : workoutforuserid) {
	            int w_id =  workout.getWorkoutId();
	            exerciseforuserid.addAll(exerciseServices.getExerciseByWorkoutId(w_id));
	            //exercises += exerciseServices.getExerciseByWorkoutId(w_id).size();
	        }
		exercises = exerciseforuserid.size();



		// For line Graph logic
		long is_completed_exr = 0;
		long is_not_completed_exr = 0;



		for(Exercise e : exerciseforuserid) {
			if(e.getIs_completed() != null && e.getIs_completed().equals("completed")) {
				is_completed_exr+=1;
			}
			else {
				is_not_completed_exr+=1;
			}

		}
		return is_not_completed_exr;



	}

//	@Override
//	public long getnotcompletedsets(int id) {
//
//		// get workouts for user id
//		long workouts = this.workoutServices.getWorkoutsByUserId(id).size();
//
//
//		// get exercises for user id
//		List<Exercise> exerciseforuserid = new ArrayList<>();
//		List<Workout> workoutforuserid =  this.workoutServices.getWorkoutsByUserId(id);
//		long exercises = 0;
//		 for (Workout workout : workoutforuserid) {
//	            int w_id =  workout.getWorkoutId();
//	            exerciseforuserid.addAll(exerciseServices.getExerciseByWorkoutId(w_id));
//	            //exercises += exerciseServices.getExerciseByWorkoutId(w_id).size();
//	        }
//		exercises = exerciseforuserid.size();
//
//
//		// get sets for user id
//		List<Sets> setsforuserid = new ArrayList<>();
//		long sets = 0;
//	            for(Exercise exc : exerciseforuserid) {
//	            	int e_id = exc.getExerciseId();
//	            	setsforuserid.addAll(setsServices.getSetsByExerciseId(e_id));
//	            }
//		 sets = setsforuserid.size();
//
//
//		long is_completed_sets = 0;
//		long is_not_completed_sets = 0;
//
//
//
//		for(Sets s : setsforuserid) {
//			if(s.getIs_completed() != null && s.getIs_completed().equals("completed")) {
//				is_completed_sets+=1;
//			}
//			else {
//				is_not_completed_sets+=1;
//			}
//		}
//
//		return is_not_completed_sets;
//	}

	@Override
	public long getnotcompletedgoals(int id) {

		List<Goals> goalsbyuserid = this.goalsServices.getGoalsUserById(id);
		long goals = goalsbyuserid.size();

		// For line Graph logic
		long is_completed_goals = 0;
		long is_not_completed_goals = 0;




		for(Goals g : goalsbyuserid) {
			if(g.getIs_completed() != null && g.getIs_completed().equals("completed")) {
				is_completed_goals+=1;
			}
			else {
				is_not_completed_goals+=1;
			}

		}

		return is_not_completed_goals;

	}

	@Override
	public List<String> getwnamesonuid(int id) {


		List<String> wnamesonuid = new ArrayList<>();

		List<Workout> workoutforuserid =  this.workoutServices.getWorkoutsByUserId(id);

		for(Workout w : workoutforuserid) {
			wnamesonuid.add(w.getDate());
		}

		return wnamesonuid;
	}

	@Override
	public List<String> getenamesonwid(int id) {
		// get enames on wid

		List<String> res = new ArrayList<>();
		List<Exercise> exronwid  = exerciseDao.getExerciseByWorkoutId(id);

		for(Exercise e : exronwid) {
			res.add(e.getName());
		}

		return res;
	}

	@Override
	public List<Long> getcompltedarray(int id) {

		// get workouts for user id
		long workouts = this.workoutServices.getWorkoutsByUserId(id).size();


		// get exercises for user id
		List<Exercise> exerciseforuserid = new ArrayList<>();
		List<Workout> workoutforuserid =  this.workoutServices.getWorkoutsByUserId(id);
		long exercises = 0;
		 for (Workout workout : workoutforuserid) {
	            int w_id =  workout.getWorkoutId();
	            exerciseforuserid.addAll(exerciseServices.getExerciseByWorkoutId(w_id));
	            //exercises += exerciseServices.getExerciseByWorkoutId(w_id).size();
	        }
		exercises = exerciseforuserid.size();


		// get sets for user id
		List<Sets> setsforuserid = new ArrayList<>();
		long sets = 0;
	            for(Exercise exc : exerciseforuserid) {
	            	int e_id = exc.getExerciseId();
	            	setsforuserid.addAll(setsServices.getSetsByExerciseId(e_id));
	            }
		 sets = setsforuserid.size();


		List<Goals> goalsbyuserid = this.goalsServices.getGoalsUserById(id);
		long goals = goalsbyuserid.size();

		// For line Graph logic
		long is_completed_goals = 0;
		long is_completed_exr = 0;
		long is_completed_work = 0;
		long is_completed_sets = 0;
		long is_not_completed_goals = 0;
		long is_not_completed_exr = 0;
		long is_not_completed_work = 0;
		long is_not_completed_sets = 0;
		long total_workouts = 0;
		long total_sets = 0;
		long total_exr = 0;
		long total_goals = 0;

		total_workouts = workouts;
		total_exr = exercises;
		total_sets = sets;
		total_goals = goals;



		List<Long> compltedarray = new ArrayList<>();


		for(Workout w : workoutforuserid) {
			// confirm with frontend about string
			if(w.getIs_completed() != null && w.getIs_completed().equals("completed")) {
				is_completed_work+=1;
			}
			else {
				is_not_completed_work+=1;
			}
		}

//		for(Sets s : setsforuserid) {
//			if(s.getIs_completed() != null && s.getIs_completed().equals("completed")) {
//				is_completed_sets+=1;
//			}
//			else {
//				is_not_completed_sets+=1;
//			}
//		}
//
		for(Exercise e : exerciseforuserid) {
			if(e.getIs_completed() != null && e.getIs_completed().equals("completed")) {
				is_completed_exr+=1;
			}
			else {
				is_not_completed_exr+=1;
			}
		}

		for(Goals g : goalsbyuserid) {
			if(g.getIs_completed() != null && g.getIs_completed().equals("completed")) {
				is_completed_goals+=1;
			}
			else {
				is_not_completed_goals+=1;
			}

		}

		compltedarray.add(is_completed_work);
		compltedarray.add(is_completed_exr);
		compltedarray.add(is_completed_goals);

		return compltedarray;


	}

	@Override
	public List<Long> getnotcompltedarray(int id) {
		// get workouts for user id
		long workouts = this.workoutServices.getWorkoutsByUserId(id).size();


		// get exercises for user id
		List<Exercise> exerciseforuserid = new ArrayList<>();
		List<Workout> workoutforuserid =  this.workoutServices.getWorkoutsByUserId(id);
		long exercises = 0;
		 for (Workout workout : workoutforuserid) {
	            int w_id =  workout.getWorkoutId();
	            exerciseforuserid.addAll(exerciseServices.getExerciseByWorkoutId(w_id));
	            //exercises += exerciseServices.getExerciseByWorkoutId(w_id).size();
	        }
		exercises = exerciseforuserid.size();


		// get sets for user id
		List<Sets> setsforuserid = new ArrayList<>();
		long sets = 0;
	            for(Exercise exc : exerciseforuserid) {
	            	int e_id = exc.getExerciseId();
	            	setsforuserid.addAll(setsServices.getSetsByExerciseId(e_id));
	            }
		 sets = setsforuserid.size();


		List<Goals> goalsbyuserid = this.goalsServices.getGoalsUserById(id);
		long goals = goalsbyuserid.size();

		// For line Graph logic
		long is_completed_goals = 0;
		long is_completed_exr = 0;
		long is_completed_work = 0;
		long is_completed_sets = 0;
		long is_not_completed_goals = 0;
		long is_not_completed_exr = 0;
		long is_not_completed_work = 0;
		long is_not_completed_sets = 0;





		List<Long> notcompltedarray = new ArrayList<>();


		for(Workout w : workoutforuserid) {
			// confirm with frontend about string
			if(w.getIs_completed() != null && w.getIs_completed().equals("completed")) {
				is_completed_work+=1;
			}
			else {
				is_not_completed_work+=1;
			}
		}

//		for(Sets s : setsforuserid) {
//			if(s.getIs_completed() != null && s.getIs_completed().equals("completed")) {
//				is_completed_sets+=1;
//			}
//			else {
//				is_not_completed_sets+=1;
//			}
//		}

		for(Exercise e : exerciseforuserid) {
			if(e.getIs_completed() != null && e.getIs_completed().equals("completed")) {
				is_completed_exr+=1;
			}
			else {
				is_not_completed_exr+=1;
			}
		}

		for(Goals g : goalsbyuserid) {
			if(g.getIs_completed() != null && g.getIs_completed().equals("completed")) {
				is_completed_goals+=1;
			}
			else {
				is_not_completed_goals+=1;
			}

		}

		notcompltedarray.add(is_not_completed_work);
		notcompltedarray.add(is_not_completed_exr);
//		notcompltedarray.add(is_not_completed_sets);
		notcompltedarray.add(is_not_completed_goals);

		return notcompltedarray;


	}

	@Override
	public List<Long> getotalarray(int id) {
		// get workouts for user id
		long workouts = this.workoutServices.getWorkoutsByUserId(id).size();


		// get exercises for user id
		List<Exercise> exerciseforuserid = new ArrayList<>();
		List<Workout> workoutforuserid =  this.workoutServices.getWorkoutsByUserId(id);
		long exercises = 0;
		 for (Workout workout : workoutforuserid) {
	            int w_id =  workout.getWorkoutId();
	            exerciseforuserid.addAll(exerciseServices.getExerciseByWorkoutId(w_id));
	            //exercises += exerciseServices.getExerciseByWorkoutId(w_id).size();
	        }
		exercises = exerciseforuserid.size();


		// get sets for user id
		List<Sets> setsforuserid = new ArrayList<>();
		long sets = 0;
	            for(Exercise exc : exerciseforuserid) {
	            	int e_id = exc.getExerciseId();
	            	setsforuserid.addAll(setsServices.getSetsByExerciseId(e_id));
	            }
		 sets = setsforuserid.size();


		List<Goals> goalsbyuserid = this.goalsServices.getGoalsUserById(id);
		long goals = goalsbyuserid.size();

		long total_workouts = 0;
		long total_sets = 0;
		long total_exr = 0;
		long total_goals = 0;

		total_workouts = workouts;
		total_exr = exercises;
		total_sets = sets;
		total_goals = goals;

		List<Long> totals = new ArrayList<>();
		totals.add(total_workouts);
		totals.add(total_exr);
		totals.add(total_sets);
		totals.add(total_goals);


		return totals;

	}


	@Autowired
	private WorkoutDao workoutDao;

	@Autowired
	private SetsDao setsDao;

	@Autowired
	private GoalsDao goalsDao;

	@Override
	public Map<String, Integer> getTotalUsersAvgWorkoutDuration() {
		Map<String,Integer> mapList = new HashMap<>();
		int totalUsers = this.usersDao.getTotalUsers();
		mapList.put("totalUsers",totalUsers);
		int avgWorkoutDuration = this.workoutDao.getAvgWorkoutDuration();
		mapList.put("avgWorkoutDuration",avgWorkoutDuration);
		int totalWorkouts = this.workoutDao.getTotalWorkouts();
		mapList.put("totalWorkouts",totalWorkouts);
		int totalExercises = this.exerciseDao.getTotalExercises();
		mapList.put("totalExercises",totalExercises);
		int totalSets = this.setsDao.getTotalSets();
		mapList.put("totalSets",totalSets);
		int totalGoals = this.goalsDao.getTotalGoals();
		mapList.put("totalGoals",totalGoals);

		return mapList;



	}

	@Override
	public long getnotcompletedsets(int id) {
		// TODO Auto-generated method stub
		return 0;
	}
	@Override
	public List<Long> getotalarray(int id) {
		// get workouts for user id
		long workouts = this.workoutServices.getWorkoutsByUserId(id).size();


		// get exercises for user id
		List<Exercise> exerciseforuserid = new ArrayList<>();
		List<Workout> workoutforuserid =  this.workoutServices.getWorkoutsByUserId(id);
		long exercises = 0;
		 for (Workout workout : workoutforuserid) {
	            int w_id =  workout.getWorkoutId();
	            exerciseforuserid.addAll(exerciseServices.getExerciseByWorkoutId(w_id));
	            //exercises += exerciseServices.getExerciseByWorkoutId(w_id).size();
	        }
		exercises = exerciseforuserid.size();


		// get sets for user id
		List<Sets> setsforuserid = new ArrayList<>();
		long sets = 0;
	            for(Exercise exc : exerciseforuserid) {
	            	int e_id = exc.getExerciseId();
	            	setsforuserid.addAll(setsServices.getSetsByExerciseId(e_id));
	            }
		 sets = setsforuserid.size();


		List<Goals> goalsbyuserid = this.goalsServices.getGoalsUserById(id);
		long goals = goalsbyuserid.size();

		long total_workouts = 0;
		long total_sets = 0;
		long total_exr = 0;
		long total_goals = 0;

		total_workouts = workouts;
		total_exr = exercises;
		total_sets = sets;
		total_goals = goals;

		List<Long> totals = new ArrayList<>();
		totals.add(total_workouts);
		totals.add(total_exr);
		totals.add(total_sets);
		totals.add(total_goals);


		return totals;

	}
}
