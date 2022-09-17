package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.app.entities.FoodOrder;
import com.app.entities.OrderStatus;

public interface FoodOrderRepository extends JpaRepository<FoodOrder, Integer> {

	@Query("Select o from FoodOrder o where o.customer.id=?1 order by o.orderTime desc")
	List<FoodOrder> findAllOrdersByUserId(Integer Id);
	
	@Query("Select o from FoodOrder o where o.deliverboy.id=?1 order by o.orderTime desc")
	List<FoodOrder> findAllOrdersByDeliverBoyId(Integer Id);
	

	@Query("select f from FoodOrder f where f.id=?1")
	FoodOrder findByOrderId(int id);

	@Query("Select o from FoodOrder o where o.status=?1 order by o.orderTime desc")
	List<FoodOrder> findByStatus(OrderStatus status);

}
