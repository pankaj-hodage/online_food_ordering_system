package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.ForgotPasswordDto;
import com.app.dto.LoginRequestDto;
import com.app.dto.ResponseDto;
import com.app.dto.UserDetailsDto;
import com.app.entities.User;
import com.app.service.IUserService;
import com.app.service.UserServiceImpl;

@RestController
@RequestMapping("/user")
@CrossOrigin
public class UserController {

	@Autowired
	private UserServiceImpl userService;

	public UserController() {
		System.out.println("in user constructor");
	}

	@PostMapping("/signup")
	public ResponseEntity<?> SignUp(@RequestBody User user) {

		System.out.println("in add new user " + user.getId());// id : null
		return ResponseEntity.status(HttpStatus.CREATED).body(userService.registerUser(user));

	}
	
	@GetMapping("/signin")
	public ResponseEntity<?> SignIn (@RequestBody LoginRequestDto request){
		
		System.out.println("in auth user "+request);
		return ResponseEntity.ok().body(userService.authenticateUser(request));
		
	}
	
	@PutMapping("/update/{userId}")
	public ResponseEntity<?> updateProfile(@RequestBody UserDetailsDto user, @PathVariable int userId) {

		System.out.println("in updateProfile ");// id : null
		return ResponseEntity.ok().body(userService.updateUserProfile(user, userId));

	}

	@GetMapping("/getDetails/{userId}")
	public ResponseEntity<?> getDetails (@PathVariable int userId){
		
		System.out.println("in  user details ");
		return ResponseEntity.ok().body(userService.getUserDetails(userId));
		
	}
	
	@PutMapping("/forgotPassword")
	public ResponseEntity<?> forgotPassword(@RequestBody ForgotPasswordDto forgetPassword) {

		System.out.println("in forgotPassword ");// id : null
		return ResponseEntity.ok().body(userService.forgotPassword(forgetPassword));

	}
	
}
