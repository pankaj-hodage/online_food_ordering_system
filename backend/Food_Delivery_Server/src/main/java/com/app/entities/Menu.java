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

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "menu")
@Getter
@Setter
@ToString(exclude = {"restaurant","category"})
@NoArgsConstructor
@AllArgsConstructor
public class Menu
{	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	
	@Column(name = "product_name" ,length =20)
	private String productName;
	
	@Column(length =100,name = "description")
	private String description;
	
	@Column(name = "price")
	double price;
	
	@Column(length =100,name = "image")
	private String image;
	
	@Column(name="status")
	private byte status;
	//@JsonIgnore
	@ManyToOne (fetch = FetchType.LAZY)
	@JoinColumn(name = "rest_id",nullable = false)
	private User restaurant;
	//@JsonIgnore

	@ManyToOne//(fetch = FetchType.LAZY)
	@JoinColumn(name = "cat_id",nullable = false)
	private Category category;
}
