package com.app.service;

import java.io.File;
import java.io.FileOutputStream;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.FileSystemResource;
import org.springframework.core.io.Resource;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.multipart.MultipartFile;

import com.app.custom_exception.ResourceNotFoundException;
import com.app.dao.MenuRepository;
import com.app.entities.Menu;

@Service
@Transactional
public class ImageServiceImpl implements ImageHandlingService {

	@Value("${file.upload.basepath}")
	private String BASEPATH;
	
	@Autowired
	MenuRepository menuRepo;
	
	@Override
	public String store(MultipartFile file) {
		String fileName = file.getOriginalFilename();
		File filePath = new File(BASEPATH, fileName);
		try(FileOutputStream out = new FileOutputStream(filePath)) {
			FileCopyUtils.copy(file.getInputStream(), out);
			return fileName;
		} catch (Exception e) {
			e.printStackTrace();
			throw new RuntimeException(e);
		}
		
	}

	@Override
	public Resource load(int menuId) 
	{
		Menu menu = menuRepo.findById(menuId).orElseThrow(() -> new ResourceNotFoundException("Invalid menu Id"));
		if(menu.getImage() == null)
			throw new ResourceNotFoundException("Image doesn't exist");
		
		
		File filePath = new File(BASEPATH, menu.getImage());
		System.out.println("Loading file: " + filePath.getAbsolutePath());
		if(filePath.exists())
			return new FileSystemResource(filePath);
		
		return null;
	}


}
