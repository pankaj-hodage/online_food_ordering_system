package com.app.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.custom_exception.ResourceNotFoundException;
import com.app.dao.UserRepository;
import com.app.dto.LoginRequestDto;
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
	public User updateUserProfile(User user) {
		userRepo.findById(user.getId())
				.orElseThrow(() -> new ResourceNotFoundException("Invalid User !!! Can not upadate details"));
		return userRepo.save(user);
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

	//Delete User 
	@Override
	public String deleteUser(Integer id) {
		
		String mesg = "Deleting user details failed !!!!!";
		// if you want to confirm the id :
		if (userRepo.existsById(id)) {
			userRepo.deleteById(id);
			mesg = "Deleted user details of emp of " + id;
		}
		return mesg;
	}

	//Get All User List
	@Override
	public List<User> getAllUser() {
		
		return userRepo.findAll();
	}


}
