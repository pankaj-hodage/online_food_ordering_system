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
@Table(name = "catagory")
@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class Category extends BaseEntity 
{
	@Column(length =20,unique = true)
	String name;
}
