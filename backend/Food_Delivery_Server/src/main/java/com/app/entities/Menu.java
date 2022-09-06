package com.app.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "menu")
@Getter
@Setter
@ToString(exclude = {"restaurantId","categoryId"})
@NoArgsConstructor
@AllArgsConstructor
public class Menu
{	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	@Column(name = "product_name" ,length =20,unique = true)
	private String productName;
	@Column(length =100)
	private String description;
	double price;
	@Column(length =100)
	private String image;
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "rest_id",nullable = false)
	private User restaurantId;
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "cat_id",nullable = false)
	private Category categoryId;
}
