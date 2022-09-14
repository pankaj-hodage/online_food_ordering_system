package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.ResponseDto;
import com.app.entities.Address;
import com.app.entities.User;
import com.app.service.AddressServiceImpl;

@RestController
@RequestMapping("/address")
@CrossOrigin
public class AddressController {
	
	@Autowired
	private AddressServiceImpl addressService;
	
	

	public AddressController() {
		System.out.println("in Address Controller constructor");
	}

	@PostMapping("/add/{id}")
	public ResponseEntity<?> AddAddress(@RequestBody Address address,@PathVariable int id) {
		System.out.println("in add new address " + address.getId());// id : null
		return ResponseEntity.status(HttpStatus.CREATED).body(addressService.addAddress(address, id));
		
	}
	
	@PostMapping("/delete/{id}")
	public ResponseEntity<?> DeleteAddress(@PathVariable int id) {
		
		return ResponseEntity.ok(addressService.deleteAddress(id));
		
	}
	
	@PutMapping("/edit/{addressId}")
	public ResponseEntity<?> editAddress(@RequestBody Address address , @PathVariable int addressId){
		Address address1 = addressService.editAddress(address , addressId );
		System.out.println("Address edited :  "+ address1);
		return new ResponseEntity<>(new ResponseDto<Address>("success", address1),HttpStatus.CREATED);
	}
	
	@GetMapping("/show/{id}")
	public ResponseEntity<?> gatAllAddress(@PathVariable int id) {
		
		return ResponseEntity.ok().body(new ResponseDto<>("Success" ,addressService.getAllAddressesByUserId(id) ));
				//(addressService.getAllAddressesByUserId(id));
		
	}
}
