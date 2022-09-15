package com.app.service;

import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import com.app.dto.MenuDto;
import com.app.entities.Menu;

public interface IMenuService 
{
	Menu addMenu(Menu menu, MultipartFile multipartFile);
	
	Menu editMenu(MenuDto menuDto, int id);
	
	String deleteMenu(int id);
	
	public List<Menu> findAll();

	List<Menu> findByCategory(int id);

	List<Menu> findByResto(int id);
}
