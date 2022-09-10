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
import javax.persistence.OneToOne;
import javax.persistence.Table;

import org.springframework.format.annotation.DateTimeFormat;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Getter
@Setter
@ToString(exclude = "currentOrder")
@Table(name = "payment")
@NoArgsConstructor

public class Payment  {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	
	@Column(name = "ammount")
	private double ammount;
	
	@Enumerated(EnumType.STRING)
	
	@Column(name = "status", length=25)
	private PaymentStatus paymentStatus;
	
	@DateTimeFormat(pattern="yyyy-MM-dd hh:mm:ss")
	@Column(name="order_dateTime")
	private LocalDateTime orderDate;
	
	@Enumerated(EnumType.STRING)
	@Column(name = "payment_mode", length=20)
	private PaymentModes payment_mode;
	
	@OneToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "order_id",nullable = false)
	private FoodOrder currentOrder;

	public Payment(double ammount, PaymentStatus paymentStatus, LocalDateTime orderDate, PaymentModes payment_mode,
			FoodOrder currentOrder) {
		super();
		this.ammount = ammount;
		this.paymentStatus = paymentStatus;
		this.orderDate = orderDate;
		this.payment_mode = payment_mode;
		this.currentOrder = currentOrder;
	}
	
	
	
}
