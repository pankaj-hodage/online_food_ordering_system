package com.app.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.custom_exception.ResourceNotFoundException;
import com.app.dao.UserRepository;
import com.app.dto.LoginRequestDto;
import com.app.dto.UserDto;
import com.app.entities.User;

@Service
@Transactional
public class UserServiceImpl implements IUserService {
	
	@Autowired
	private UserRepository userRepo;

	
	

	@Override
	public User updateUserProfile(int userId, UserDto userDto) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public User authenticateUser(LoginRequestDto loginRequest) {
		
		return userRepo.findByEmailAndPassword(loginRequest.getEmail(),loginRequest.getPassword() )
				.orElseThrow(()-> new ResourceNotFoundException("Invalid Credentials !!"));
	}

	@Override
	public User registerUser(User user) {
		
		return userRepo.save(user);
	}

}
