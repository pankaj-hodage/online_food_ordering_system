package com.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.app.dao.CategoryRepository;
import com.app.entities.Category;

public class CategoryServiceImpl implements ICategoryService {
@Autowired
	CategoryRepository catRepo;
	
	public Category addCategory(Category cat) {
		
		return catRepo.save(cat);
	}
	
public String deleteCategory(int id) {
		
		 catRepo.deleteById(id);
		 return "category is deleted successfully";
	}

public List<Category> getAllMenuTypes() {
	return catRepo.findAll();			
}
	

}
