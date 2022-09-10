package com.app.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import com.app.entities.Rating;

public interface RatingRepository extends JpaRepository<Rating, Integer>{
	
	Optional<Rating> findById(Integer userid);

}
