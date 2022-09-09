package com.app.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.CartRepository;
import com.app.dao.MenuRepository;
import com.app.dao.UserRepository;
import com.app.entities.Cart;
import com.app.entities.Menu;
import com.app.entities.User;

@Service
@Transactional
public class CartServiceImpl implements ICartService {

	@Autowired
	private UserRepository userRepo;
	@Autowired
	private MenuRepository menuRepo;
	@Autowired
	private CartRepository cartRepo;
	
	@Override
	public String addItemToCart(Integer MenuId, Integer quantity, Integer userId) {
		User customer = userRepo.findById(userId).get();
		Menu menu = menuRepo.findById(MenuId).get();
		cartRepo.save(new Cart(quantity, menu, customer));
		return quantity+" "+menu.getProductName()+" added to cart";
	}

}
