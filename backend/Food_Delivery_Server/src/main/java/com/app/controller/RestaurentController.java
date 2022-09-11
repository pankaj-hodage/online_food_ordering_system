package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.service.RestaurentServiceImpl;

@RestController
@RequestMapping("/resto")
@CrossOrigin
public class RestaurentController 
{	
	@Autowired
	RestaurentServiceImpl restoService;
	
	@GetMapping("/allOrders/{restId}")
	public ResponseEntity<?> getAllOrders(@PathVariable int restId)
	{
		return ResponseEntity.ok(restoService.getAllPlacedOrders(restId));
	}
}
