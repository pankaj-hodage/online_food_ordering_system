package com.app.service;

import com.app.dto.RatingDto;
import com.app.entities.Rating;

public interface IRatingService {

	Rating addRating(RatingDto rating);

	Rating editRating(RatingDto rating, int ratingId);

	String deleteRating(int userId);

}
