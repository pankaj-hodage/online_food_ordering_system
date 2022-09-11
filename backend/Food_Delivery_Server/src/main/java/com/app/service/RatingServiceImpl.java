package com.app.service;

import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.custom_exception.ResourceNotFoundException;
import com.app.dao.RatingRepository;
import com.app.dao.UserRepository;
import com.app.dto.RatingDto;
import com.app.entities.Rating;
import com.app.entities.User;

@Service
@Transactional

public class RatingServiceImpl implements IRatingService{
	
	@Autowired
	private RatingRepository ratingDao;
	@Autowired
	private UserRepository userDao;
	
	
	@Override
	public Rating addRating(RatingDto rating) {
		User customer = userDao.findById(rating.getUserId()).orElseThrow(()-> new ResourceNotFoundException("Invalid Credentials !!"));
		User restaurant = userDao.findById(rating.getRestId()).orElseThrow(()-> new ResourceNotFoundException("Invalid Credentials !!"));

		//int rating, String comment, User selectedRestaurant, User selectedCustomer
		Rating rating1 = new Rating(rating.getRating(),rating.getComment(),restaurant,customer);
		return ratingDao.save(rating1);

	}
	
	
	@Override
	public Rating editRating(RatingDto rating, int ratingId) {
		Rating rating1 = ratingDao.findById(ratingId).orElseThrow(()-> new ResourceNotFoundException("rating not found"));
		
		rating1.setRating(rating.getRating());
		rating1.setComment(rating.getComment());
		
		System.out.println("------------------------"+rating1);
		return rating1;
	}
	
	
	@Override
	public String deleteRating(int ratingId) {
		System.out.println("userId : "+ ratingId);
		
		ratingDao.deleteById(ratingId);
		return "success";
	}
	
	

}
