package com.app.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import com.app.dao.MenuRepository;
import com.app.entities.Menu;


@Service
@Transactional
public class MenuServiceImpl implements IMenuService
{
	
	@Autowired
	MenuRepository menuRepo;
	
	@Autowired
	ImageServiceImpl imageService;

	@Override
	public Menu addMenu(Menu menu, MultipartFile imageName) {
		String image = imageService.store(imageName);
		menu.setImage(image);
		
		return menuRepo.save(menu);
	}
	
	
}
