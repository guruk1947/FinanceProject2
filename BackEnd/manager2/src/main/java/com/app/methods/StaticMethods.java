package com.app.methods;

import java.security.SecureRandom;

import com.app.entity.User;
import com.app.entity.UserRegistry;

public class StaticMethods {

	//Method to convert UserRegistry object to User object
	public static User convertToUser(UserRegistry uR) {
		// TODO Auto-generated method stub
		return new User(uR.getEmail(), uR.getFirstName(), uR.getLastName(), true, uR.getMob());
	}
	
	// Method to generate a 6-digit OTP
    public static String generateOTP(int length) {
        SecureRandom random = new SecureRandom();
        StringBuilder otp = new StringBuilder();

        // Generate OTP
        for (int i = 0; i < length; i++) {
            int digit = random.nextInt(10); // Random digit between 0 and 9
            otp.append(digit);
        }

        // Ensure the OTP length is correct, pad with leading zeros if necessary
        while (otp.length() < length) {
            otp.insert(0, '0');
        }

        return otp.toString();
    }
	
}
