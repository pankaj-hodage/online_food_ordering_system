package com.app.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class AddressDto {

	private int id;
	private String state;
	private String city;
	private String contact_no;
	private String add_line_1;
	private String add_line_2;
	private int pincode;
	private int user_id;
}
