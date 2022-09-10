package com.app.dao;

import java.util.List;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.app.entities.OrderDetails;

public interface OrderDetailsRepository extends JpaRepository<OrderDetails, Integer>{

	@Query("Select o from OrderDetails o join fetch o.currentOrder where o.currentOrder.id=?1")
	List<OrderDetails> findAllByOrderId(Integer id);
}
