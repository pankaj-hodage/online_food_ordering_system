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
@Table(name = "order")
@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class Order extends BaseEntity
{
	@Enumerated(EnumType.STRING)
	@Column(length=25)
	private OrderStatus status;
	
	@DateTimeFormat(pattern="yyyy-MM-dd hh:mm:ss")
	@Column(name="order_time")
	private LocalDateTime orderTime;
	
	@DateTimeFormat(pattern="yyyy-MM-dd hh:mm:ss")
	@Column(name="delivered_time")
	private LocalDateTime deliveredTime;
	
	
	
	
}
