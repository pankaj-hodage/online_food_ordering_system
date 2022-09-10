package com.app.service;

import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.custom_exception.ResourceNotFoundException;
import com.app.dao.RatingRepository;
import com.app.dao.UserRepository;
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
	public Rating addRating(Rating rating, int userId) {
		User user = userDao.findById(userId).orElseThrow(()-> new ResourceNotFoundException("Invalid Credentials !!"));
		rating.setSelectedCustomer(user);
		return ratingDao.save(rating);

	}
	
	
	@Override
	public Rating editRating(Rating rating, int userId) {
		Optional<Rating> rating1 = ratingDao.findById(userId);
		Rating rating2 = rating1.orElse(null);
		rating2.setRating(rating.getRating());
		
		System.out.println("------------------------"+rating2);
		return rating2;
	}
	
	
	@Override
	public String deleteRating(int userId) {
		System.out.println("userId : "+ userId);
		ratingDao.deleteById(userId);
		return "success";
	}
	
	

}
