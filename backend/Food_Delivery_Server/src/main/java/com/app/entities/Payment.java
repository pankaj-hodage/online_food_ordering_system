package com.app.entities;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
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
@ToString
@Table(name = "payment")
@NoArgsConstructor
@AllArgsConstructor
public class Payment extends BaseEntity {

	private double ammount;
	@Enumerated(EnumType.STRING)
	private Status status;
	@DateTimeFormat(pattern="yyyy-MM-dd hh:mm:ss")
	@Column(name="order_dateTime")
	private LocalDateTime orderDate;
	@Enumerated(EnumType.STRING)
	@Column(name = "payment_mode")
	private PaymentModes payment_mode;
	
	
	
}
