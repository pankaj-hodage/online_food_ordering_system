package com.app.service;

import org.springframework.web.multipart.MultipartFile;

import com.app.dto.MenuDto;
import com.app.entities.Menu;

public interface IMenuService 
{
	Menu addMenu(Menu menu, MultipartFile multipartFile);
	
	Menu editMenu(MenuDto menuDto, int id);
	
	String deleteMenu(int id);
}
