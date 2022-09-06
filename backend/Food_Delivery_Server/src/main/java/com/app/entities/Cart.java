package com.app.entities;

import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "cart")
@Getter
@Setter
@ToString(exclude = {"selectedMenu","currentUser"})
@NoArgsConstructor
@AllArgsConstructor
public class Cart extends BaseEntity {

	private int quantity;

	@ManyToOne
	@JoinColumn(name = "menu_id",nullable = false)
	private Menu selectedMenu;

	@OneToOne
	@JoinColumn(name = "user_id",nullable = false)
	private User currentUser;
}
