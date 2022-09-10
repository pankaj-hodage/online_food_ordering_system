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

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "food_order")
@Getter
@Setter
@NoArgsConstructor

@ToString(exclude = { "customer", "deliverboy", "address" })

public class FoodOrder {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;

	@Column(name = "total_price")
	private double totalPrice;

	@Enumerated(EnumType.STRING)
	@Column(length = 25, name = "status")
	private OrderStatus status;

	@DateTimeFormat(pattern = "yyyy-MM-dd hh:mm:ss")
	@Column(name = "order_time")
	private LocalDateTime orderTime;

	@DateTimeFormat(pattern = "yyyy-MM-dd hh:mm:ss")
	@Column(name = "delivered_time")
	private LocalDateTime deliveredTime;

	@DateTimeFormat(pattern = "yyyy-MM-dd hh:mm:ss")
	@Column(name = "status_update_date")
	private LocalDateTime statusUpdateDate;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "customer_id", nullable = false)
	private User customer;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "deliveryboy_id", nullable = true)
	private User deliverboy;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "address_id", nullable = false)
	private Address address;

	public FoodOrder(double totalPrice, OrderStatus status, LocalDateTime orderTime, LocalDateTime deliveredTime,
			User customer, User deliverboy, Address address) {
		super();
		this.totalPrice = totalPrice;
		this.status = status;
		this.orderTime = orderTime;
		this.deliveredTime = deliveredTime;
		this.customer = customer;
		this.deliverboy = deliverboy;
		this.address = address;
	}

}
