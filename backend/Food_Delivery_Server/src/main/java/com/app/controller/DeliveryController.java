package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.service.OrderServiceImpl;

@RestController
@RequestMapping("/delivery")
@CrossOrigin
public class DeliveryController 
{
	@Autowired
	OrderServiceImpl OrderService;
	
	@GetMapping("/allOrders")
	public ResponseEntity<?> getAllOrders()
	{
		return ResponseEntity.ok().body(OrderService.getAllPlacedOrders());
	}
}
