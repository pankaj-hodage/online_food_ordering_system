package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.CartDto;
import com.app.dto.ResponseDto;
import com.app.service.CartServiceImpl;

@RestController
@RequestMapping("/cart")
@CrossOrigin
public class CartController 
{
	@Autowired
	private CartServiceImpl cartService;
	

	@PostMapping("/add")
	public ResponseEntity<?> addToCart(@RequestBody CartDto cartDto) {
		Integer menuId = cartDto.getMenuId();
		Integer quantity = cartDto.getQuantity();
		Integer userId = cartDto.getUserId();
		System.out.println("ProductId: " + menuId + " quantity: " + quantity+" user id"+userId);
		
		return new ResponseEntity<>(new ResponseDto<>("success", cartService.addItemToCart(menuId, quantity, userId)),
				HttpStatus.CREATED);
	}
}
