package com.project.cyberlink.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.cyberlink.Models.UsersModel;
import com.project.cyberlink.Repository.UserRepository;
import java.util.List;


@Service
public class UserService {

	final UserRepository userRepository;
	
	@Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }
	
	public UsersModel InsertUser(UsersModel userModel) {
		return userRepository.save(userModel);
	}
	
	public List<UsersModel> GetAllUsers(){
		return userRepository.findAll();
	}
}
	
