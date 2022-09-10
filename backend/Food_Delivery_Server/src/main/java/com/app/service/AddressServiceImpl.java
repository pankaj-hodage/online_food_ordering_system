package com.app.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.custom_exception.ResourceNotFoundException;
import com.app.dao.AddressRepository;

import com.app.entities.Address;
import com.app.entities.User;

@Service
@Transactional
public class AddressServiceImpl implements IAddressService {

	@Autowired
	private AddressRepository addressRepo;

	@Autowired
	private UserServiceImpl userService;

	@Override
	public Address addAddress(Address address, int userId) {

		User user = userService.getUserDetails(userId);
		address.setSelectedUser(user);
		return addressRepo.save(address);
	}

	

	@Override
	public String deleteAddress(int addressId) {
		String mesg = "Deleting address details failed !!!!!";
		// if you want to confirm the id :
		if (addressRepo.existsById(addressId)) {
			addressRepo.deleteById(addressId);
			mesg = "Deleted address details of emp of " + addressId;
		}
		return mesg;
	}

	@Override
	public List<Address> getAllAddressesByUserId(int userId) {

		return addressRepo.getAllAddressesByUserId(userId);
	}

}
