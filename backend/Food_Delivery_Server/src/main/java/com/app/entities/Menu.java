package com.app.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "menu")
@Getter
@Setter
@ToString
public class Menu extends BaseEntity 
{	
	@Column(name = "product_name" ,length =20)
	String productName;
	@Column(length =100)
	String description;
	double price;
	@Column(length =100)
	String image;
}
