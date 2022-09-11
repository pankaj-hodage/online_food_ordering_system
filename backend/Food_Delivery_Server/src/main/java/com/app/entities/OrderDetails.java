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
@Table(name = "order_details")
@Getter
@Setter
@ToString(exclude = {"currentOrder","selectedProduct"})
@NoArgsConstructor

public class OrderDetails {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	@Column(name = "quantity")
	private int quantity;
	@Column(name = "total_ammount")
	private double total;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "order_id", nullable = false)
	private FoodOrder currentOrder;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "product_id", nullable = false)
	private Menu selectedProduct;

	public OrderDetails(int quantity, double total, FoodOrder currentOrder, Menu selectedProduct) {
		super();
		this.quantity = quantity;
		this.total = total;
		this.currentOrder = currentOrder;
		this.selectedProduct = selectedProduct;
	}
	
	

}
