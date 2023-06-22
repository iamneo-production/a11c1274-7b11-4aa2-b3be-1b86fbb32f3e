package com.example.Fitnesstracking.services;

import java.time.LocalDateTime;
import java.lang.Math;
import java.util.List;
import java.util.Random;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.Fitnesstracking.Dao.OtpDao;
import com.example.Fitnesstracking.Dao.RoleDao;
import com.example.Fitnesstracking.Dao.UsersDao;
import com.example.Fitnesstracking.config.AppConstants;
import com.example.Fitnesstracking.emailconfiguration.EmailUtil;
import com.example.Fitnesstracking.entities.OneTimePassword;
import com.example.Fitnesstracking.entities.Role;
import com.example.Fitnesstracking.entities.Users;
import com.example.Fitnesstracking.payloads.UserDto;

import jakarta.mail.MessagingException;
import jakarta.validation.constraints.Email;


@Service
public class UsersServicesImpl implements UsersServices{
	
	
	private static boolean safe = false;
	
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
    public List<Users> getUsers(){
        return this.usersDao.findAll();
    }

    @Override
    public Users getUserById(int id){
        return this.usersDao.findById(id)
                .orElseThrow(()->new RuntimeException("User Id is not found"));
    }

    @Override
    public Users updateUser(int id, Users user){
        Users userupdate = usersDao.findById(id)
                .orElseThrow(()-> new RuntimeException("User not found"));
        if (user.getName()!=null){userupdate.setName(user.getName());}
        if (user.getEmail()!=null){userupdate.setEmail(user.getEmail());}
        if (user.getPassword()!=null){userupdate.setPassword(user.getPassword());}
        if (user.getHeight()!=0){userupdate.setHeight(user.getHeight());}
        if (user.getWeight()!=0){userupdate.setWeight(user.getWeight());}
        if (user.getAge()!=0){userupdate.setAge(user.getAge());}
        if (user.getGender()!=null){userupdate.setGender(user.getGender());}

        return usersDao.save(userupdate);


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
        	UsersServicesImpl.safe = true;
            return "otp has been successfully verified.";
            
        }
        UsersServicesImpl.safe=false;
        return "Incorrect password or time has expired";
    }

 // setting the users new Password

    @Override
    public String setPassword(String email, String newPassword) {
    	
    	if(UsersServicesImpl.safe) {
            Users users = this.usersDao.findByUserEmail(email);

            users.setPassword(this.passwordEncoder.encode(newPassword));
            this.usersDao.save(users);
            return "Password has been changed successfully";
    	}
    	else {
    		return "Please verify otp";
    	}

    }


}
