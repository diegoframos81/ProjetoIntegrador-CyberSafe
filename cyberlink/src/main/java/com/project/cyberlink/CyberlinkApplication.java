package com.project.cyberlink;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;


@SpringBootApplication
public class CyberlinkApplication {

	public static void main(String[] args) {
		SpringApplication.run(CyberlinkApplication.class, args);
	}
	

	public String index() { 
		return "Olá mundo";
	}

}
