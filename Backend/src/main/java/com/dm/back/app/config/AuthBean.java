package com.dm.back.app.config;

public class AuthBean {

	private String message;
	
	public AuthBean(String message) {
		this.message = message;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	@Override
	public String toString() {
		return String.format("Authenticated [message=%s]", message);
	}
}
