package com.app.service;

import com.app.dto.LoginRequestDto;
import com.app.dto.UserDto;
import com.app.entities.User;

public interface IUserService {

	User registerUser(User user);
	User authenticateUser(LoginRequestDto loginRequest);
	User updateUserProfile(int userId, UserDto userDto);
}
