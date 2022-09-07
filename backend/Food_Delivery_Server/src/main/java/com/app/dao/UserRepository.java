package com.app.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.app.entities.Role;
import com.app.entities.User;

public interface UserRepository extends JpaRepository<User, Integer> {

	// user login
	Optional<User> findByEmailAndPassword(String email, String password);

	// find user by id

	Optional<User> findById(Integer userid);

	Optional<User> findByEmail(String email);

	List<User> findByRole(Role role);
}
