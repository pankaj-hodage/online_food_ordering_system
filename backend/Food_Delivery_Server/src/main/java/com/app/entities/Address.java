package com.app.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
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
@ToString(exclude = "userid")
@NoArgsConstructor
@AllArgsConstructor
public class Address extends BaseEntity
{
	@Column(name = "add_line_1" ,length =50)
	private String line1;
	@Column(name = "add_line_2",length =50)
	private String line2;
	@Column(name = "contact_no",length =15)
	private String contactNo;
	private int pincode;
	private String city;
	private String State;
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "user_id",nullable = false)
	private User userid;
	
	
}
