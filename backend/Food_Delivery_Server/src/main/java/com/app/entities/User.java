package com.app.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Getter
@Setter
@ToString(exclude = "password")
@Table(name = "user")
@NoArgsConstructor
@AllArgsConstructor
public class User {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	
	
	@Column(length = 50,name = "name")
	private String name;
	@Column(unique = true,length = 30,name = "email")
	private String email;
	@Column(name = "contact_no",length = 13)
	private String contact;
	@Column(name = "password")
	private String password;
	
	@Enumerated(EnumType.STRING)
	@Column(length = 20,name = "role")
	private Role role;
}
