package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.app.entities.FoodOrder;

public interface FoodOrderRepository extends JpaRepository<FoodOrder, Integer> {

	@Query("Select o from FoodOrder o where o.customer.id=?1 order by o.deliveredTime desc")
	List<FoodOrder> findAllOrdersByUserId(Integer Id);
	
	@Query("Select o from FoodOrder o where o.deliverboy.id=?1")
	List<FoodOrder> findAllOrdersByDeliverBoyId(Integer Id);
}
