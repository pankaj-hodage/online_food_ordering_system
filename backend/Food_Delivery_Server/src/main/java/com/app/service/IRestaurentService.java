package com.app.service;

import java.util.List;

import com.app.entities.OrderDetails;

public interface IRestaurentService {

	List<OrderDetails> getAllPlacedOrders(int restId);

}
