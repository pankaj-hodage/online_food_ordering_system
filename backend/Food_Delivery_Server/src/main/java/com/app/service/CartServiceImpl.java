package com.app.service;

import java.util.List;
import java.util.Optional;

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

	@Override
	public List<Cart> getAllCartContents(Integer userId) {
		System.out.println(userId);
		List<Cart> cart=cartRepo.findAllItemsByUser(userId);
		 System.out.println(cart);
		 return cart;
	}

	@Override
	public Optional<Cart> findById(Integer cartId) {
		return cartRepo.findById(cartId);
	}
	
	@Override
	public void deleteFromCart(Integer cartId) {
		boolean exists=cartRepo.existsById(cartId);
		System.out.println("in remove cart item  " + cartId);
		cartRepo.deleteById(cartId);
	}
	
	@Override
	public void deleteAllFromCart(int userId) {
		cartRepo.deleteAll(cartRepo.findAllItemsByUser(userId));
	}
	
	@Override
	public String updateQuantity(Integer cartId, Integer quantity) {
		Cart cartItem = cartRepo.findById(cartId).get();
		cartItem.setQuantity(quantity);
		
		return "success";
	}
}
