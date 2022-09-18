package com.app.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.custom_exception.ResourceNotFoundException;
import com.app.dao.UserRepository;
import com.app.dto.ForgotPasswordDto;
import com.app.dto.LoginRequestDto;

import com.app.dto.UserDetailsDto;
import com.app.dto.UserDto;
import com.app.entities.Role;
import com.app.entities.User;

@Service
@Transactional
public class UserServiceImpl implements IUserService {


	@Autowired
	private UserRepository userRepo;

	//Update User Details
	@Override
	public User updateUserProfile(UserDetailsDto userDto, int userId) {
		User user=userRepo.findById(userId)
				.orElseThrow(() -> new ResourceNotFoundException("Invalid User !!! Can not upadate details"));
		System.out.println(userDto);
		user.setContact(userDto.getContact_no());
		user.setEmail(userDto.getEmail());
		user.setName(userDto.getName());
		user.setPassword(userDto.getPassword());
		return user;
	}

	//Authenticate User
	@Override
	public User authenticateUser(LoginRequestDto loginRequest) {

		return userRepo.findByEmailAndPassword(loginRequest.getEmail(), loginRequest.getPassword())
				.orElseThrow(() -> new ResourceNotFoundException("Invalid Credentials !!"));
	}

	//Register User
	@Override
	public User registerUser(User user) {

		//user.setRole(Role.CUSTOMER);
		return userRepo.save(user);
	}

	//Get User Details
	@Override
	public User getUserDetails(Integer id) {
		
		return userRepo.findById(id).orElseThrow(()-> new ResourceNotFoundException("User Not Found !!!"));
	}

	

	@Override
	public User forgotPassword(ForgotPasswordDto forgetPassword) {
		User user=userRepo.findByEmail(forgetPassword.getEmail())
				.orElseThrow(() -> new ResourceNotFoundException("Invalid User !!! Can not upadate details"));
		user.setPassword(forgetPassword.getPassword());;
		
		return user;
	}

	@Override
	public List<User> getAllCustomer() {
		
		return userRepo.findAllCustomer();
	}

	@Override
	public List<User> getAllDeliveryBoy() {
		
		return userRepo.findAllDeliveryBoy();
	}

	@Override
	public List<User> getAllRestaurant() {
		
		return userRepo.findAllRestaurant();
	}

	


}
