package com.app.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.UserRegistryRepository;
import com.app.dao.UserRepository;
import com.app.dto.UserDto;
import com.app.entity.User;
import com.app.entity.UserRegistry;
import com.app.methods.StaticMethods;

import java.util.List;

@Service
@Transactional
public class UserService {

    @Autowired
    private UserRepository userRepository;
    
    @Autowired
    private UserRegistryRepository userRegistryRepository;
    
    

    public int saveUser(UserRegistry userRegistry) {		//returns 1 if successfully registered,
    	
    	User user = StaticMethods.convertToUser(userRegistry);
    	User u = userRepository.findByEmail(user.getEmail());
    	
    	if(u==null) {
    		userRegistry = userRegistryRepository.save(userRegistry);
    		userRepository.save(user);
    		return 1;
    	}
    	else
    		return 0;
    }
    public User updateUser(UserRegistry userRegistry) {
    	userRegistryRepository.save(userRegistry);
    	User user = StaticMethods.convertToUser(userRegistry);
    	return userRepository.save(user);
    }

    public List<User> getAllUsers() {
        return (List<User>) userRepository.findAll();
    }

    public User getUserById(Integer id) {
        User u = userRepository.findById(id).orElse(null);
        System.out.println(u.getInvestments());
    	return u;
    }

    public void deleteUser(Integer id) {
        userRepository.deleteById(id);
    }
    
    public User loginUser(UserRegistry userRegistry) {
    	UserRegistry u = userRegistryRepository.findByEmailAndPassword(userRegistry.getEmail(), userRegistry.getPassword());
    	if(u != null)
    	return userRepository.findByEmail(u.getEmail());
    	else return null;
    	
    }
    public UserDto findUser(User u) {
    	User user =null;
    	user = userRepository.findByEmail(u.getEmail());
    	if(user != null)
    		return UserDto.convertToUserDto(user);
    	else
    		user = userRepository.findByMobile(u.getMobile());
    	if(user != null)
    		return UserDto.convertToUserDto(user);
    	else return null;
    	
    }
    
    public int addContact(User contact, int userId) {
    	User user = getUserById(userId);
    	User newContact = null; 
    	newContact = userRepository.findByEmail(contact.getEmail());
    	if(newContact == null)
    		newContact = userRepository.findByMobile(contact.getMobile());
    	user.addContact(newContact);
    	User returnUser= null;
    	returnUser = userRepository.save(user);
    	if(returnUser != null)
    		return 1;
    	else
    		return 0;
    }
}

