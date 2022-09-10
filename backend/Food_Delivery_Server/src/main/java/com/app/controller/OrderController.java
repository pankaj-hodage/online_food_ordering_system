package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.OrderPlaceDto;
import com.app.service.OrderServiceImpl;

@RestController
@RequestMapping("/order")
@CrossOrigin
public class OrderController {

	@Autowired
	private OrderServiceImpl  orderService;
	
	@PostMapping("/place")
	public ResponseEntity<?> placeOrderFromCart(@RequestBody OrderPlaceDto orderInput){
		
		int userId = orderInput.getUserId();
		int addrId = orderInput.getAddressId();
		String paymentMode = orderInput.getPaymentMode();
		return  ResponseEntity.ok().body(orderService.placeOrderForUser(userId, addrId, paymentMode));
		
	}
	
	@GetMapping("/all")
	public ResponseEntity<?> getAllOrders(){
		return  ResponseEntity.ok().body(orderService.getAllOrders());
	}
	
	//current orders for delivery boy
		@GetMapping("/pending")
		public ResponseEntity<?> getAllPendingOrders(){
			return  ResponseEntity.ok().body(orderService.getAllPendingOrders());
		}
}
