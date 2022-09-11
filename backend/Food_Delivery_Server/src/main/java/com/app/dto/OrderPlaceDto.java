package com.app.dto;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter

public class OrderPlaceDto {

	private int userId;
	private int addressId;
	private String paymentMode;

	public OrderPlaceDto(int userId, int addressId, String paymentMode) {
		super();
		this.userId = userId;
		this.addressId = addressId;
		this.paymentMode = paymentMode;
	}

}
