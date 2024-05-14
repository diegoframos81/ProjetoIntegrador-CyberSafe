package com.project.cyberlink.Controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.project.cyberlink.Dto.UsersDto;
import com.project.cyberlink.Models.UsersModel;
import com.project.cyberlink.Services.UserService;


@CrossOrigin(origins = "http://localhost:5173/")
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
	
	@GetMapping("/Login")
	public ResponseEntity<Boolean> LoginUser(@RequestParam String email, @RequestParam String password) {
		var listUsers = userService.GetAllUsers();
		if(listUsers.stream().anyMatch(x -> x.getEmail() != null && x.getPassword() != null &&
				x.getEmail().equals(email) && x.getPassword().equals(password))) {
			
			return ResponseEntity.status(HttpStatus.OK).body(true);
		}
		
		return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).body(false);
	}
	
	@PostMapping("/InsertNewUser")
	public ResponseEntity<String> InsertNewUser(@RequestBody UsersDto userDto) {
		try {
			var userCreate = new UsersModel();
			userCreate.setEmail(userDto.getEmail());
			userCreate.setName(userDto.getName());
			userCreate.setPassword(userDto.getPassword());
			userCreate.setTypeUser(userDto.getTypeUser());
			
			if(userService.InsertUser(userCreate) != null) {
				return ResponseEntity.status(HttpStatus.OK).body("User Created With Sucess");
			}
			
			return ResponseEntity.status(HttpStatus.GONE).body("Insert Customer Request Fail");
			  
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.GONE).body("Insert Customer Request Fail");
		}
	}
}
