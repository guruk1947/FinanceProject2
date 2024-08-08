package com.app.dto;

import com.app.entity.User;

public class UserDto {

	private String email;
	private String firstName;
	private String lastName;
	private long mob;
	
	public UserDto(String email, String firstName, String lastName, long mob) {
		super();
		this.email = email;
		this.firstName = firstName;
		this.lastName = lastName;
		this.mob = mob;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	public long getMob() {
		return mob;
	}
	public void setMob(long mob) {
		this.mob = mob;
	}
	
	public static UserDto convertToUserDto(User u) {
		return new UserDto(u.getEmail(), u.getFirstName(), u.getLastName(), u.getMob());
	}
}
