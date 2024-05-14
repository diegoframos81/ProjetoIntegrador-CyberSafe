package com.project.cyberlink.Controllers;

import java.util.List;
import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.project.cyberlink.Dto.UsersDto;
import com.project.cyberlink.Models.UsersModel;
import com.project.cyberlink.Services.UserService;


@RestController
public class UserController {
	
	@Autowired
	final UserService userService;
	
    public UserController(UserService userService){
        this.userService = userService;
    }
	
	@GetMapping("/GetUsers")
	public ResponseEntity<List<UsersModel>> GetUsers() {
		var listUsers = userService.GetAllUsers();
		return ResponseEntity.status(HttpStatus.OK).body(listUsers);
	}
	
	@PostMapping("/InsertNewUser")
	public ResponseEntity<String> InsertNewUser(@RequestBody UsersDto user) {
		try {
			if(user.getName() == null) 
				return ResponseEntity.status(HttpStatus.GONE).body("Request Fail / User is Null");
			
			var userCreate = new UsersModel();
			
			userCreate.setName(user.getName());
			userCreate.setEmail(user.getEmail());
			userCreate.setPassword(user.getPassword());
			
			if(userService.InsertUser(userCreate) != null) {
				return ResponseEntity.status(HttpStatus.OK).body("User Created With Sucess");
			}
			
			return ResponseEntity.status(HttpStatus.GONE).body("Insert Customer Request Fail");
			  
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.GONE).body("Insert Customer Request Fail" + e);
		}
	}
}
