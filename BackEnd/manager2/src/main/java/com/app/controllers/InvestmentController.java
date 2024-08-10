package com.app.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.InvestmentDto;
import com.app.entity.Investment;
import com.app.entity.User;
import com.app.service.InvestmentService;
import com.app.service.UserService;

import jakarta.servlet.http.HttpSession;

@RestController
@RequestMapping("/api/investments")
public class InvestmentController {

    @Autowired
    private InvestmentService investmentService;
    
    @Autowired
    private UserService userService;

    @PostMapping
    public Investment createInvestment(@RequestBody Investment investment) {
        return investmentService.saveInvestment(investment);
    }


    @GetMapping("/{id}")
    public InvestmentDto getInvestmentById(@PathVariable int id) {
    	InvestmentDto i =investmentService.getInvestmentById(id);
        return i;
    }

    @PutMapping("/{id}")
    public Investment updateInvestment(@PathVariable int id, @RequestBody Investment investment) {
        investment.setInvestmentId(id);
        return investmentService.saveInvestment(investment);
    }

    @DeleteMapping("/{id}")
    public void deleteInvestment(@PathVariable int id) {
        investmentService.deleteInvestment(id);
    }
    
    @GetMapping
    public List<Investment> getAllInvestments(HttpSession session) {
    	System.out.println("Session ID in /investments: " + session.getId()+" "+session.isNew());
    	Integer userId  = (Integer) session.getAttribute("userId");
    	if (userId == null) {
            throw new IllegalStateException("User not authenticated");
        }
    	User user = userService.getUserById(userId);
        return investmentService.getUserInvestments(user);
    }
}

