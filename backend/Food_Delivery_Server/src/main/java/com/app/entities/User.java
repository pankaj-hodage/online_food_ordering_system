package com.app.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;

import javax.persistence.Table;

import lombok.Getter;

import lombok.Setter;
import lombok.ToString;

@Entity
@Getter
@Setter
@ToString
@Table(name = "user")
public class User extends BaseEntity {

	@Column(length = 30)
	private String name;
	@Column(unique = true)
	private String email;
	private String contact;

	private String password;
	@Enumerated(EnumType.STRING)
	private Role role;
}
