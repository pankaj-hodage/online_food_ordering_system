package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.service.UserServiceImpl;

@RestController
@RequestMapping("/admin")
@CrossOrigin
public class AdminController {

	@Autowired
	private UserServiceImpl userService;
	
	@GetMapping("/getAllCustomer")
	public ResponseEntity<?> gatAllCustomer() {
		
		return ResponseEntity.ok(userService.getAllCustomer());
		
	}
	
	@GetMapping("/getAllDeliveryBoy")
	public ResponseEntity<?> gatAllDeliveryBoy() {
		
		return ResponseEntity.ok(userService.getAllDeliveryBoy());
		
	}
}
