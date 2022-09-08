package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.Menu;

public interface MenuRepository extends JpaRepository<Menu, Integer> {

}