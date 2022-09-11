package com.app.entities;



import java.util.Optional;

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
@Table(name = "address")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString(exclude = "selectedUser")
public class Address 
{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	@Column(name = "add_line_1" ,length =50)
	private String line1;
	@Column(name = "add_line_2",length =50)
	private String line2;
	@Column(name = "contact_no",length =15)
	private String contactNo;
	@Column(name = "pincode")
	private int pincode;
	@Column(length =20,name = "city")
	private String city;
	@Column(length =20,name = "state")
	private String state;
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "user_id",nullable = false)
	private User selectedUser;
	
	
}