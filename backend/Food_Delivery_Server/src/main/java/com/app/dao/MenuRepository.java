package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.app.entities.Category;
import com.app.entities.Menu;

public interface MenuRepository extends JpaRepository<Menu, Integer> {

	@Query("Select m from Menu m where m.category=?1 and m.status=1")
	List<Menu> getMenuList(Category cat);
	
	@Query("Select m from Menu m where m.status=1")
	List<Menu> findAllByStatus();
	
	@Query("Select m from Menu m where m.restaurant.id=?1")
	List<Menu> findAllByResto(Integer restoId);

	
}