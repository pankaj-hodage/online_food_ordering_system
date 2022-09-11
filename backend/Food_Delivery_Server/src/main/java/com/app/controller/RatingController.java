package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import com.app.entities.Rating;
import com.app.service.RatingServiceImpl;

public class RatingController {
	
	@Autowired
	private RatingServiceImpl ratingService;
	
	public RatingController() {
		System.out.println("in Rating Controller constructor");
	}
	
	@PostMapping("/add/{id}")
	public ResponseEntity<?> AddRating(@RequestBody Rating rating,@PathVariable int id) {
		System.out.println("in add new rating " + rating.getId());
		return ResponseEntity.status(HttpStatus.CREATED).body(ratingService.addRating(rating, id));	
    }
	
	@PostMapping("/delete/{id}")
	public ResponseEntity<?> DeleteRating(@PathVariable int id) {
		
		return ResponseEntity.ok(ratingService.deleteRating(id));
		
	}
	
	@PutMapping("/edit/{id}")
	public ResponseEntity<?> editRating(@RequestBody Rating rating , @PathVariable int id){
		System.out.println(rating);
		System.out.println(id);
		Rating Rating = ratingService.editRating(rating , id);

		return ResponseEntity.ok().body(ratingService.editRating(Rating, id));
	}
		
		

}
