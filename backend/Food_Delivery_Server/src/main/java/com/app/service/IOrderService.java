package com.app.service;

import java.util.List;

import com.app.entities.FoodOrder;

public interface IOrderService 
{
	public List<FoodOrder> getAllPlacedOrders(); 
}
