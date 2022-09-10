package com.app.service;

import java.io.File;
import java.io.FileOutputStream;
import java.util.List;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.FileSystemResource;
import org.springframework.core.io.Resource;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.multipart.MultipartFile;

@Service
@Transactional
public class ImageServiceImpl implements ImageHandlingService {

	@Value("${file.upload.folder}")
	private String BASEPATH;
	
	@Override
	public List<String> loadAll() {
		// TODO Auto-generated method stub
		return null;
	}

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
	public Resource load(String fileName) {
		File filePath = new File(BASEPATH, fileName);
		System.out.println("Loading file: " + filePath.getAbsolutePath());
		if(filePath.exists())
			return new FileSystemResource(filePath);
		return null;
	}

	@Override
	public void delete(String fileName) {
		// TODO Auto-generated method stub

	}

}
