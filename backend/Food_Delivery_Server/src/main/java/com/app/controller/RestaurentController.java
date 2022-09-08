package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.app.dao.CategoryRepository;
import com.app.dto.AddMenuDto;
import com.app.entities.Menu;
import com.app.service.IUserService;
import com.app.service.ImageServiceImpl;
import com.app.service.MenuServiceImpl;

@RestController
@RequestMapping("/resto")
@CrossOrigin
public class RestaurentController 
{
	@Autowired
	MenuServiceImpl menuService;
	
	@Autowired
	ImageServiceImpl imageService;
	@Autowired
	private IUserService userService;
	@Autowired
	CategoryRepository catRepo;
	
	@PostMapping("/addMenu")
	public ResponseEntity<?> save( AddMenuDto dto)
	{
		
		System.out.println( " orig file name " + dto.getImageName().getOriginalFilename());
		Menu menu=AddMenuDto.toEntity(dto);
		menu.setRestaurant(userService.getUserDetails(dto.getRestaurent()));
		menu.setCategory(catRepo.getById(dto.getCatagory()));
		
		menu = menuService.addMenu(menu,dto.getImageName());
		
		return ResponseEntity.status(HttpStatus.CREATED).body("menu created");
		
	}
	
	@PostMapping("/test")
	public void test( @RequestParam MultipartFile imageFile)
	{
		System.out.println("in test method");
		imageService.store(imageFile);
	}
	
}
