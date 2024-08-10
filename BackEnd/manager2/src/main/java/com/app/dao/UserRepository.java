package com.app.dao;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;


import com.app.entity.User;

public interface UserRepository extends CrudRepository<User, Integer> {

	@Query("SELECT u FROM User u WHERE u.email = :email ")
    User findByEmail(String email);
	
	@Query("SELECT u FROM User u WHERE u.mobile = :mobile ")
    User findByMobile(long mobile);
}
