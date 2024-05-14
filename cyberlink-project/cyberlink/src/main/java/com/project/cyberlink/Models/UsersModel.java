package com.project.cyberlink.Models;

import java.util.Date;
import java.util.UUID;

import com.fasterxml.jackson.annotation.JsonFormat;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "Users")
public class UsersModel {
	
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long Id;

    @Column(nullable = true, unique = true)
    private String Email;


    @Column(nullable = true, unique = true)
    private String Password;

    @Column(nullable = true)
    private String Name;

    @Column(nullable = true, unique = true)
    private String Phone;
    
    @Column
    @JsonFormat(shape=JsonFormat.Shape.STRING, pattern="dd/MM/yyyy")
    private Date DtCreated = new Date();
    
    @Column(nullable = true)
    @JsonFormat(shape=JsonFormat.Shape.STRING, pattern="dd/MM/yyyy")
    private Date DtUpdated;

	public Long getId() {
		return Id;
	}

	public void setId(Long id) {
		Id = id;
	}

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

	public static long getSerialversionuid() {
		return serialVersionUID;
	}
    
}
