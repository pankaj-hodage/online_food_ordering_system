package com.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.OrderRepository;
import com.app.entities.FoodOrder;
import com.app.entities.OrderStatus;

@Service
@Transactional
public class OrderServiceImpl implements IOrderService 
{
	@Autowired
	OrderRepository orderRepo;
	
	@Override
	public List<FoodOrder> getAllPlacedOrders() {
		
		//return orderRepo.findByStatus(OrderStatus.valueOf("PLACED"));
		List<FoodOrder> order=  orderRepo.findByStatus(OrderStatus.valueOf("PLACED"));   //orderRepo.findAll();
		for(FoodOrder f :order)
			System.out.println(f);
		return order;
	}

}
