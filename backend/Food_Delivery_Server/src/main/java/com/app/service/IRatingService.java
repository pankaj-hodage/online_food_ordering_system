package com.app.service;

import com.app.entities.Rating;

public interface IRatingService {

	Rating addRating(Rating rating, int userId);

	Rating editRating(Rating rating, int userId);

	String deleteRating(int userId);

}
