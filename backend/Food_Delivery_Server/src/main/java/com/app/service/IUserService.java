package com.app.service;

import java.util.List;


import com.app.dto.ForgotPasswordDto;
import com.app.dto.LoginRequestDto;

import com.app.dto.UserDetailsDto;

import com.app.entities.User;

public interface IUserService {

	User registerUser(User user);
	User authenticateUser(LoginRequestDto loginRequest);
	User updateUserProfile(UserDetailsDto userDto, int userId);
	User getUserDetails(Integer id);
	User forgotPassword(ForgotPasswordDto forgetPassword);
	List<User> getAllCustomer();
	List<User> getAllDeliveryBoy();
	List<User> getAllRestaurant();
}
