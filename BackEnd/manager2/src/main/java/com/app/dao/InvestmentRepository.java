package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.app.entity.Investment;
import com.app.entity.User;

public interface InvestmentRepository extends CrudRepository<Investment, Integer> {

	@Query("SELECT i FROM Investment i WHERE i.user = :user ")
    List<Investment> findByUserId(User user);
}
