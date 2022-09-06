package com.app.entities;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "rating")
public class Rating extends BaseEntity{
	
	private int rating;
	private String comment;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "product_id")
	private User productId;
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "rest_id",nullable = false)
	private User restaurantId;
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "customer_id",nullable = false)
	private User customerId;
	
	
}
