package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.LoginRequestDto;
import com.app.entities.User;
import com.app.service.IUserService;

@RestController
@RequestMapping("/user")
@CrossOrigin
public class UserController {

	@Autowired
	private IUserService userService;

	public UserController() {
		System.out.println("in user constructor");
	}

	@PostMapping("/signup")
	public ResponseEntity<?> SignUp(@RequestBody User user) {

		System.out.println("in add new emp " + user.getId());// id : null
		return ResponseEntity.status(HttpStatus.CREATED).body(userService.registerUser(user));

	}
	
	@GetMapping("/signin")
	public ResponseEntity<?> SignIn (@RequestBody LoginRequestDto request){
		
		System.out.println("in auth emp "+request);
		return ResponseEntity.ok().body(userService.authenticateUser(request));
		
	}
	
	

}
