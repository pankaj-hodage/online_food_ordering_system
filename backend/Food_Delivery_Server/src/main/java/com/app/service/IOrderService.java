package com.app.service;

import java.util.List;

import com.app.dto.FoodOrderDto;
import com.app.entities.FoodOrder;

public interface IOrderService {
	String placeOrderForUser(int userId, int addrId, String paymentMode);

	List<FoodOrderDto> getAllOrders();

	List<FoodOrderDto> getAllPendingOrders();

	List<FoodOrderDto> getAllAssignedOrders(int deliveryBoyId);

	//void assignDeliveryBoy(int userId, int orderId);

	void updateOrderStatus(int orderId, String status, int deliveryId);

	List<FoodOrderDto> getMyOrders(int userId);
}
