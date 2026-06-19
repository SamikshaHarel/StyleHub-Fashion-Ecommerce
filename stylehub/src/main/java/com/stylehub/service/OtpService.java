package com.stylehub.service;

import java.util.HashMap;
import java.util.Random;

import org.springframework.stereotype.Service;

@Service
public class OtpService {

    private HashMap<String, String> otpStore = new HashMap<>();

    // generate OTP
    public String generateOtp(String email) {
        String otp = String.valueOf(1000 + new Random().nextInt(9000));
        otpStore.put(email, otp);
        return otp;
    }

    // verify OTP
    public boolean verifyOtp(String email, String otp) {
        return otp.equals(otpStore.get(email));
    }
}