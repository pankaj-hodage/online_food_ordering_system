package com.app.service;

import java.io.IOException;
import java.util.List;

import org.springframework.core.io.Resource;
import org.springframework.web.multipart.MultipartFile;


public interface ImageHandlingService {

	
	String store(MultipartFile file);
	
	Resource load(int menuId);

}
