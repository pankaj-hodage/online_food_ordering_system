package com.app.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class AssignDeliveryBoyDto {

	private int orderId;
	private int userId;

	public AssignDeliveryBoyDto(int orderId, int userId) {
		super();
		this.orderId = orderId;
		this.userId = userId;
	}

}
