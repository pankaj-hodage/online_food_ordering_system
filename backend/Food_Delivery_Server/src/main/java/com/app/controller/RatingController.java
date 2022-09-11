package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.RatingDto;
import com.app.entities.Rating;
import com.app.service.RatingServiceImpl;

@RestController
@RequestMapping("/rating")
@CrossOrigin
public class RatingController {
	
	@Autowired
	private RatingServiceImpl ratingService;
	
	public RatingController() {
		System.out.println("in Rating Controller constructor");
	}
	
	@PostMapping("/add")
	public ResponseEntity<?> AddRating(@RequestBody RatingDto rating) {
		System.out.println("in add new rating ");
		return ResponseEntity.status(HttpStatus.CREATED).body(ratingService.addRating(rating));	
    }
	
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<?> DeleteRating(@PathVariable int id) {
		
		return ResponseEntity.ok(ratingService.deleteRating(id));
		
	}
	
	@PutMapping("/edit/{ratingId}")
	public ResponseEntity<?> editRating(@RequestBody RatingDto rating , @PathVariable int ratingId){
		System.out.println(rating);
		System.out.println(ratingId);
		

		return ResponseEntity.ok().body(ratingService.editRating(rating, ratingId));
	}
		
		

}
