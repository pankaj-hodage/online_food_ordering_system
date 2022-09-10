package com.app.service;

import java.util.List;
import java.util.Optional;

import com.app.dto.LoginRequestDto;
import com.app.dto.UserDto;
import com.app.entities.User;

public interface IUserService {

	User registerUser(User user);
	User authenticateUser(LoginRequestDto loginRequest);
	User updateUserProfile(User user);
	User getUserDetails(Integer id);
	String deleteUser(Integer id);
	List<User> getAllUser();


}
