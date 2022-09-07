package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.OrderDetails;

public interface OrderDetailsRepository extends JpaRepository<OrderDetails, Integer>{

	
}
