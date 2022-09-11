package com.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.OrderDetailsRepository;
import com.app.dao.RatingRepository;
import com.app.entities.OrderDetails;
import com.app.entities.OrderStatus;
import com.app.entities.Rating;

@Service
@Transactional
public class RestaurentServiceImpl implements IRestaurentService 
{
	@Autowired
	OrderDetailsRepository orderDetailsRepo;
	
	@Autowired
	RatingRepository ratingRepo;
	
	
	@Override
	public List<OrderDetails> getAllPlacedOrders(int restId)
	{
		
		return orderDetailsRepo.getPlacedOrders( OrderStatus.PLACED, restId);
		
	}
	@Override
	public List<Rating> getAllRatings(int restId)
	{
		
		return ratingRepo.findAllByRestaurant(restId);
	}
	
}
