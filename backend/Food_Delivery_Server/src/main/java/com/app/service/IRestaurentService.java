package com.app.service;

import java.util.List;

import com.app.entities.OrderDetails;
import com.app.entities.Rating;

public interface IRestaurentService {

	List<OrderDetails> getAllPlacedOrders(int restId);

	List<Rating> getAllRatings(int restId);

}
