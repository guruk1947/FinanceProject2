package com.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.InvestmentRepository;
import com.app.dto.InvestmentDto;
import com.app.entity.Investment;
import com.app.entity.User;
import com.app.methods.StaticMethods;

@Service
@Transactional
public class InvestmentService {

	@Autowired
    private InvestmentRepository investmentRepository;

    public Investment saveInvestment(Investment investment) {
        return investmentRepository.save(investment);
    }

    public List<Investment> getAllInvestments() {
        return (List<Investment>) investmentRepository.findAll();
    }
    
    public List<Investment> getUserInvestments(User user) {
        return (List<Investment>) investmentRepository.findByUserId(user);
    }

    public InvestmentDto getInvestmentById(int id) {
    	InvestmentDto i = StaticMethods.convertToInvestmentDto(investmentRepository.findById(id).orElse(null));
        return i;
    }

    public void deleteInvestment(Integer id) {
        investmentRepository.deleteById(id);
    }
}
