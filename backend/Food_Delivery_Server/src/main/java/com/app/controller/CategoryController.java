package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.ResponseDto;
import com.app.entities.Category;
import com.app.service.CategoryServiceImpl;

@RestController
@RequestMapping("/category")
@CrossOrigin
public class CategoryController {
	@Autowired
	CategoryServiceImpl categoryservice;
	
	@PostMapping("/add")
	public ResponseEntity<?> addNewCategory(@RequestBody Category cat){
	
		Category newcategory=categoryservice.addCategory(cat);
		return new ResponseEntity<>(new ResponseDto<Category>("success",newcategory),HttpStatus.CREATED);
	}
	
	@GetMapping("/all")
	public ResponseEntity<?> findAllMenuType() {
		List<Category> list = categoryservice.getAllMenuTypes();
//		List<MenuType> result = new ArrayList<MenuType>();
		return ResponseDto.success(list);
	}
	
}
