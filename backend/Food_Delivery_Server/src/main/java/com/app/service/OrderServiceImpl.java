package com.app.service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.criteria.Order;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.AddressRepository;
import com.app.dao.CartRepository;
import com.app.dao.FoodOrderRepository;
import com.app.dao.OrderDetailsRepository;

import com.app.dao.PaymentRepository;
import com.app.dao.UserRepository;
import com.app.dto.FoodOrderDto;
import com.app.entities.Address;
import com.app.entities.Cart;
import com.app.entities.FoodOrder;
import com.app.entities.Menu;
import com.app.entities.OrderDetails;
import com.app.entities.OrderStatus;
import com.app.entities.Payment;
import com.app.entities.PaymentModes;
import com.app.entities.PaymentStatus;

import com.app.entities.User;

@Service
@Transactional
public class OrderServiceImpl implements IOrderService {
	@Autowired
	private FoodOrderRepository foodOrderRepo;

	@Autowired
	private CartRepository cartRepo;

	@Autowired
	private AddressRepository addressRepo;

	@Autowired
	private UserRepository userRepo;

	@Autowired
	private PaymentRepository paymentRepo;

	@Autowired
	private OrderDetailsRepository orderDetailsRepo;

	@Override
	public String placeOrderForUser(int userId, int addrId, String paymentMode) {
		// get all cart items for given user
		List<Cart> cartItems = cartRepo.findAllItemsByUser(userId);
		
		double total = 0.0;
		int deliveryCharges = 50;
		for (Cart item : cartItems) {
			total += item.getQuantity() * item.getSelectedMenu().getPrice();
		}

		Address address = addressRepo.findbyId(addrId);
		User customer = userRepo.findByUserId(userId);

		System.out.println("-------------------------------------");
		FoodOrder newOrder = new FoodOrder(total, OrderStatus.PLACED, LocalDateTime.now(), LocalDateTime.now(),
				customer, null, address);
		foodOrderRepo.save(newOrder);

		// double ammount, Status status, LocalDateTime orderDate, PaymentModes
		// payment_mode,

		Payment payment = new Payment(total + deliveryCharges,
				paymentMode.equals("COD") ? PaymentStatus.PENDING : PaymentStatus.COMPLETED, LocalDateTime.now(),
				PaymentModes.valueOf(paymentMode), newOrder);
		paymentRepo.save(payment);
		cartItems.forEach(item -> {
			// (int quantity, double total, FoodOrder currentOrder, Menu selectedProduct)
			orderDetailsRepo.save(new OrderDetails(item.getQuantity(), item.getSelectedMenu().getPrice(), newOrder,
					item.getSelectedMenu()));
		});
		cartRepo.deleteAll(cartItems);
		return "Order Placed Successfully!";
		
	}

	@Override
	public List<FoodOrderDto> getAllOrders() {
		List<FoodOrder> orders = foodOrderRepo.findAll();
		List<FoodOrderDto> response = new ArrayList<>();

		for (FoodOrder order : orders) {
			List<OrderDetails> orderDetails = orderDetailsRepo.findAllByOrderId(order.getId());
			Payment payment = paymentRepo.findPaymentByOrderId(order.getId());
			response.add(new FoodOrderDto(order, orderDetails, payment));
		}
		return response;
	}

	
	@Override
	public List<FoodOrderDto> getAllPendingOrders() {
		List<FoodOrder> orders = foodOrderRepo.findAll();
		List<FoodOrderDto> response = new ArrayList<>();

		for (FoodOrder order : orders) {
			List<OrderDetails> orderDetails = orderDetailsRepo.findAllByOrderId(order.getId());

			String s = order.getStatus().toString();

			if (s.equals("OUT_FOR_DELIVERY") || s.equals("PLACED")) {
				Payment payment = paymentRepo.findPaymentByOrderId(order.getId());
				response.add(new FoodOrderDto(order, orderDetails, payment));
			}
			System.out.println(response);
		}
		return response;
	}






	@Override
	public void updateOrderStatus(int orderId, String status, int deliveryId) {
		FoodOrder order = foodOrderRepo.findById(orderId).get();
		order.setStatus(OrderStatus.valueOf(status));
		order.setStatusUpdateDate(LocalDateTime.now());
		User deliverBoy = userRepo.findById(deliveryId).get();
		order.setDeliverboy(deliverBoy);
		if (status.equals("DELIVERED")) {
			Payment payment = paymentRepo.findPaymentByOrderId(orderId);
			payment.setPaymentStatus(PaymentStatus.COMPLETED);
		}

	}

	@Override
	public List<FoodOrderDto> getMyOrders(int userId) {
		List<FoodOrder> orders = foodOrderRepo.findAllOrdersByUserId(userId);

		List<FoodOrderDto> response = new ArrayList<>();

		for (FoodOrder order : orders) {
			List<OrderDetails> orderDetails = orderDetailsRepo.findAllByOrderId(order.getId());
			Payment payment = paymentRepo.findPaymentByOrderId(order.getId());
			response.add(new FoodOrderDto(order, orderDetails, payment));
		}
		return response;
	}

	@Override
	public List<FoodOrderDto> getAllAssignedOrders(int deliveryBoyId) {
		List<FoodOrder> orders = foodOrderRepo.findAllOrdersByDeliverBoyId(deliveryBoyId);

		List<FoodOrderDto> response = new ArrayList<>();

		for (FoodOrder order : orders) {
			List<OrderDetails> orderDetails = orderDetailsRepo.findAllByOrderId(order.getId());
			Payment payment = paymentRepo.findPaymentByOrderId(order.getId());
			response.add(new FoodOrderDto(order, orderDetails, payment));
		}
		return response;
	}
	
	

}
