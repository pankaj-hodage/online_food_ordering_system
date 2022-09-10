package com.app.service;

import java.util.List;

import com.app.entities.FoodOrder;

public interface IDeliveryService
{
	public List<FoodOrder> allPlacedOrders();

	void assignDeliveryBoy(int userId, int orderId);
}