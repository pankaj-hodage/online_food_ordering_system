package com.app.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

// id , contact_no , email, name,password,role
@Getter
@Setter
@ToString(exclude = "password")
@NoArgsConstructor
@AllArgsConstructor
public class UserDto {

	private int id;
	private String contact_no;
	private String email;
	private String name;
	private String password;
	private String role;
	
	
}
