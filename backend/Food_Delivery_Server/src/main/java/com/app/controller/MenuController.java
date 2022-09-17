package com.app.controller;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.app.dao.CategoryRepository;
import com.app.dto.AddMenuDto;
import com.app.dto.MenuDto;
import com.app.dto.ResponseDto;
import com.app.entities.Menu;
import com.app.service.IUserService;
import com.app.service.ImageServiceImpl;
import com.app.service.MenuServiceImpl;

@RestController
@RequestMapping("/menu")
@CrossOrigin
public class MenuController 
{
	@Autowired
	MenuServiceImpl menuService;
	
	@Autowired
	ImageServiceImpl imageService;
	@Autowired
	private IUserService userService;
	@Autowired
	CategoryRepository catRepo;
	
	@PostMapping("/add")
	public ResponseEntity<?> save( AddMenuDto dto)
	{
		
		//System.out.println( " orig file name " + dto.getImageName().getOriginalFilename());
		System.out.println(dto.getRestaurent());
		Menu menu=AddMenuDto.toEntity(dto);
		menu.setRestaurant(userService.getUserDetails(dto.getRestaurent()));
		menu.setCategory(catRepo.findById(dto.getCatagory()).get());
		
		menu = menuService.addMenu(menu,dto.getImageName());
		
		return ResponseEntity.status(HttpStatus.CREATED).body(new ResponseDto<>("Success" ,menu ));
		
	}
	
	@PutMapping("/edit/{id}")
	public ResponseEntity<?> editMenu(@RequestBody MenuDto menuDto , @PathVariable int id){
		System.out.println(menuDto);
		System.out.println(id);
		Menu menu = menuService.editMenu(menuDto , id);

		//return new ResponseEntity<>(new ResponseDto<>("Success" ,menu ),HttpStatus.OK);
		
		return ResponseEntity.ok().body(new ResponseDto<>("Success" ,menu ));
	}
	
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<?> deleteMenu(@PathVariable int id){
		String message = menuService.deleteMenu(id);
		return new ResponseEntity<>(new ResponseDto<>("success", message),HttpStatus.CREATED);
	}
	@GetMapping("/allMenus")
	public ResponseEntity<?> findAllMenu() 
	{
		List<Menu> list = menuService.findAll();
		return ResponseDto.success(list);
	}
	
	//get image
	@PostMapping(value="/image/{menuId}",produces ="image/*")
	public void downloadImage( @PathVariable int menuId ,HttpServletResponse resp) throws IOException
	{
		System.out.println("in downlaod img "+menuId);
		Resource resource = imageService.load(menuId);
		FileCopyUtils.copy(resource.getInputStream(), resp.getOutputStream());
	}
	@GetMapping("/allMenuByType/{id}")
	public ResponseEntity<?> menuByType(@PathVariable int id){
		List<Menu> menu = menuService.findByCategory(id);
		return ResponseEntity.ok().body(new ResponseDto<List<Menu>>("success", menu));
				
	}
	@GetMapping("/allMenuOfResto/{restoId}")
	public ResponseEntity<?> menuByResto(@PathVariable int restoId){
		List<Menu> menu = menuService.findByResto(restoId);
		return ResponseEntity.ok().body(new ResponseDto<List<Menu>>("success", menu));
				
	}
	@GetMapping("/getById/{menuId}")
	public ResponseEntity<?> getMenuById(@PathVariable int menuId){
		Menu menu = menuService.getMenuDetails(menuId);
		return ResponseEntity.ok().body(new ResponseDto<Menu>("success", menu));
				
	}

	
}
