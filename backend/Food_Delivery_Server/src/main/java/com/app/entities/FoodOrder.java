package com.app.entities;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.springframework.format.annotation.DateTimeFormat;

@Entity
@Table(name = "food_order")
public class FoodOrder {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	
	@Enumerated(EnumType.STRING)
	@Column(length=25)
	private OrderStatus status;
	
	@DateTimeFormat(pattern="yyyy-MM-dd hh:mm:ss")
	@Column(name="order_time")
	private LocalDateTime orderTime;
	
	@DateTimeFormat(pattern="yyyy-MM-dd hh:mm:ss")
	@Column(name="delivered_time")
	private LocalDateTime deliveredTime;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "customer_id",nullable = false)
	private User customerId;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "deliveryboy_id",nullable = false)
	private User deliverboyId;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "address_id",nullable = false)
	private Address addressId;
	
}
