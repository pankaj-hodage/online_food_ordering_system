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
@Table(name = "menu")
@Getter
@Setter
@ToString(exclude = { "restaurant", "category" })
@NoArgsConstructor
@AllArgsConstructor
public class Menu {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;

	@Column(name = "product_name", length = 20)
	private String productName;

	@Column(length = 100, name = "description")
	private String description;

	@Column(name = "price")
	double price;

	@Column(length = 100, name = "image")
	private String image;

	@Column(name = "status")
	private byte status;
	// @JsonIgnore
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "rest_id", nullable = false)
	private User restaurant;
	// @JsonIgnore

	@ManyToOne // (fetch = FetchType.LAZY)
	@JoinColumn(name = "cat_id", nullable = false)
	private Category category;
}
