package com.app.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Getter
@Setter
@ToString(exclude = { "selectedCustomer", "selectedRestaurant" })
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "rating")
public class Rating {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	@Column(name = "rating")
	private int rating;
	@Column(name = "comment")
	private String comment;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "rest_id", nullable = false)
	private User selectedRestaurant;
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "customer_id", nullable = false)
	private User selectedCustomer;

	public Rating(int rating, String comment, User selectedRestaurant, User selectedCustomer) {
		super();
		this.rating = rating;
		this.comment = comment;
		this.selectedRestaurant = selectedRestaurant;
		this.selectedCustomer = selectedCustomer;
	}

}
