package com.app.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.app.entities.FoodOrder;
import com.app.entities.OrderStatus;

public interface OrderRepository extends JpaRepository<FoodOrder, Integer> 
{
//	@Query("Select o from FoodOrder o where o.status=?1")
//	List<FoodOrder> findAll(OrderStatus status);
	
	List<FoodOrder> findByStatus (OrderStatus status);
}
