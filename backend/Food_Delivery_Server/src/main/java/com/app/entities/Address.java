package com.app.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
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
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class Address extends BaseEntity
{
	@Column(name = "add_line_1" ,length =50)
	String line1;
	@Column(name = "add_line_2",length =50)
	String line2;
	@Column(name = "contact_no",length =15)
	String contactNo;
	int pincode;
	String city;
	String State;
	
	
}
