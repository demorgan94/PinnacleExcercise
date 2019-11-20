package com.dm.back.app.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dm.back.app.config.AuthBean;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:4200")
public class BasicAuthController {

	@GetMapping("/login")
	public AuthBean basicAth() {
		return new AuthBean("You are authenticated");
	}
}
