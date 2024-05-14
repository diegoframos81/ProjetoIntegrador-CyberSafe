package com.project.cyberlink.Dto;

import java.util.Date;
import java.util.UUID;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UsersDto {
	
	@JsonProperty(value = "Email") 
    private String Email;

	@JsonProperty(value = "Password") 
    private String Password;

	@JsonProperty(value = "Name") 
    private String Name;

	@JsonProperty(value = "Phone") 
    private String Phone;

    private Date DtCreated;
  
    private Date DtUpdated;


	public String getEmail() {
		return Email;
	}

	public void setEmail(String email) {
		Email = email;
	}

	public String getPassword() {
		return Password;
	}

	public void setPassword(String password) {
		Password = password;
	}

	public String getName() {
		return Name;
	}

	public void setName(String name) {
		Name = name;
	}

	public String getPhone() {
		return Phone;
	}

	public void setPhone(String phone) {
		Phone = phone;
	}

	public Date getDtCreated() {
		return DtCreated;
	}

	public void setDtCreated(Date dtCreated) {
		DtCreated = dtCreated;
	}

	public Date getDtUpdated() {
		return DtUpdated;
	}

	public void setDtUpdated(Date dtUpdated) {
		DtUpdated = dtUpdated;
	}
    
}
